import asyncio
from aiohttp import web
import aiohttp_cors
from aiogram import Bot, Dispatcher
from aiogram.webhook.aiohttp_server import SimpleRequestHandler, setup_application

import config
from handlers import router as handlers_router
from routes import handle_form


async def main():
    print("Starting bot...")
    bot = Bot(token=config.BOT_TOKEN)
    dp = Dispatcher()
    dp.include_router(handlers_router)

    app = web.Application()
    app.router.add_post("/send-form", handle_form)

    cors = aiohttp_cors.setup(app, defaults={
        "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
            allow_methods=["GET", "POST", "OPTIONS"]
        )
    })
    for route in list(app.router.routes()):
        cors.add(route)

    SimpleRequestHandler(dispatcher=dp, bot=bot).register(app, path=config.WEBHOOK_PATH)
    setup_application(app, dp, bot=bot)

    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, "0.0.0.0", config.WEBHOOK_PORT)
    await site.start()

    print(f"Server start: http://localhost:{config.WEBHOOK_PORT}")
    print(f"Webhook: {config.WEBHOOK_URL}{config.WEBHOOK_PATH}")
    print("Bot started successfully!")

    await asyncio.Event().wait()

    await bot.session.close()


if __name__ == "__main__":
    import sys
    import logging

    logging.basicConfig(level=logging.INFO, stream=sys.stdout)
    asyncio.run(main())
