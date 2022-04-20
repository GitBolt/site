import os
from fastapi import FastAPI
from aioredis import from_url
from routes import transactions
from dotenv import load_dotenv
from core.db import engine, Base
from fastapi.param_functions import Depends
from core.ratelimit import RateLimiter, Limit
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000",
                   "https://www.aabis.xyz", "https://aabis.xyz"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(transactions.router)

@app.on_event("startup")
async def startup() -> None:
    if not os.environ.get("REDIS_URL"):
        raise KeyError("You must setup REDIS_URL environment variable.")

    redis = await from_url(os.environ["REDIS_URL"], encoding="utf8")
    await RateLimiter.init(redis)
    Base.metadata.create_all(bind=engine)

@app.on_event("shutdown")
async def shutdown() -> None:
    await RateLimiter.close()

@app.get("/", dependencies=[Depends(Limit(times=20, seconds=1))])
async def root() -> dict:
    return {"message": "Welcome"}
