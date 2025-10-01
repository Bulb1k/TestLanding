import config

def is_authorized(user_id: int) -> bool:
    return str(user_id) in config.CHAT_IDS


def update_chat_ids(new_id: int):
    config.CHAT_IDS.add(str(new_id))

    with open(".env", "r") as f:
        lines = f.readlines()

    updated = False
    for i, line in enumerate(lines):
        if line.startswith("CHAT_IDS="):
            lines[i] = f"CHAT_IDS={','.join(config.CHAT_IDS)}\n"
            updated = True
            break

    if not updated:
        lines.append(f"CHAT_IDS={','.join(config.CHAT_IDS)}\n")

    with open(".env", "w") as f:
        f.writelines(lines)
