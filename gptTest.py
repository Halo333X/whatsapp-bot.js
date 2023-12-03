from hugchat import hugchat
from hugchat.login import Login
import os

# Log in to huggingface and grant authorization to huggingchat
sign = Login('EMAIL', 'PASSWORD')
cookies = sign.login()

# Save cookies to the local directory
cookie_path_dir = "./cookies_snapshot"
sign.saveCookiesToDir(cookie_path_dir)

# Create a ChatBot
chatbot = hugchat.ChatBot(cookies=cookies.get_dict())  # or cookie_path="usercookies/<email>.json"

#response
archivo = 'petition.txt'
if os.path.exists(archivo):
    with open(archivo, 'r', encoding='utf-8') as file:
        question = file.read()
    AIresponse = chatbot.query(question)
    with open(archivo, 'w', encoding='utf-8') as response:
        response.write(AIresponse["text"])
        print(AIresponse["text"])
