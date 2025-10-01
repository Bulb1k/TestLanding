from aiogram import Router, types, F
from aiogram.filters import Command
from utils import is_authorized, update_chat_ids
import config

router = Router()

@router.message(Command("start"))
async def cmd_start(message: types.Message):
    user_id = message.from_user.id
    if is_authorized(user_id):
        await message.answer("✅ Ви вже авторизовані і будете отримувати заявки.")
    else:
        await message.answer("🔒 Введіть пароль для доступу:")


@router.message(F.text)
async def check_password(message: types.Message):
    user_id = message.from_user.id
    text = message.text.strip()

    if is_authorized(user_id):
        await message.answer("✅ Ви вже авторизовані.")
    else:
        if text == config.ADMIN_PASSWORD:
            update_chat_ids(user_id)
            await message.answer("🎉 Пароль вірний! Ви додані до списку отримувачів заявок.")
        else:
            await message.answer("❌ Невірний пароль. Спробуйте ще раз.")
