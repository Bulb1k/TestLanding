from aiohttp import web
from config import CHAT_IDS, BOT_TOKEN
from aiogram import Bot

bot = Bot(token=BOT_TOKEN)

async def handle_form(request: web.Request):
    data = await request.json()
    msg = (
        f"*📩 Нова заявка*\n\n"
        f"👤 {data.get('first_name')} {data.get('last_name')}\n"
        f"📧 {data.get('email')}\n"
        f"📞 {data.get('phone')}"
    )

    for chat_id in CHAT_IDS:
        await bot.send_message(chat_id, msg)

    return web.json_response({"success": True})


