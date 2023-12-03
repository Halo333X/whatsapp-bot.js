function help(msg, MessageMedia) {
    const logo = MessageMedia.fromFilePath(`./img/logo.gif`);
    const commands = `*HaloBot* 🖥️

*Commands:*
        
    〔 /help 💮 _Help Command_ 〕

    〔 /gtts 🔊 _Text to speech_ 〕
     
    〔 /whisper ✍️ _Speech to text_ 〕
     
    〔 /gpt ⏳ _Artificial Intelligence_ 〕
     
    〔 /8ball 🎱 _Yes or not_ 〕
     
    〔 /randomize 🎲 _Pick by chance_ 〕
     
    〔 /sticker 💟 _Made stickers_ 〕
     
    〔 /music 🎧 _Download Spotify music_ 〕
     
    〔 /everyone 💨 _Mention everyone_ 〕
     
    〔 /gi 🪄 _Group Info_ 〕
    
    〔 /moonbase 🌒 _Like gtts_ 〕
    
    〔 /meme 🖼️ _Put text in ur media_ 〕
    
    〔 /download 👀 _Get Image_ 〕
    
    〔 /math 🤓 _Math Interpreter_ 〕`
    msg.react('💮');
    msg.reply(logo, null, { caption: commands });
}

module.exports = help;