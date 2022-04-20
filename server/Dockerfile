FROM python:3

COPY /src /root

WORKDIR /root

RUN pip install aioredis fastapi psycopg2 python-dotenv solathon solana sqlalchemy uvicorn ipfs-api python-multipart

CMD uvicorn main:app --host 0.0.0.0 --port ${PORT}