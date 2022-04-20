from fastapi import APIRouter, Depends
from core.ratelimit import Limit

router = APIRouter(prefix="/transactions")

@router.post("/get",
             dependencies=[Depends(Limit(times=20, seconds=5))],
             status_code=200
             )
async def get() -> dict:
    pass
