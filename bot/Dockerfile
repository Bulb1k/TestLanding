FROM python:3.11.7-slim-bullseye

WORKDIR /bot

COPY requirements.txt .

RUN python -m pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "main.py"]
