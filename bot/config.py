import os
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN")
WEBHOOK_PATH = os.getenv("WEBHOOK_PATH", "/webhook")
WEBHOOK_URL = os.getenv("WEBHOOK_URL")
WEBHOOK_PORT = os.getenv("WEBHOOK_PORT", f"8080")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "12345")

CHAT_IDS = set(
    os.getenv("CHAT_IDS", "").split(",")
) if os.getenv("CHAT_IDS") else set()
