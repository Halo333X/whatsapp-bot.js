function gtts(msg, gTTS, fs, MessageMedia) {
    msg.react('🔊')
    const text = msg.body.slice(5)
    if (!text == '' || !text == ' ') {
        const gtts = new gTTS(`${text}`, 'es');
        gtts.save('./audio/audio.mp3', function (err, result) {
            if (err) { throw new Error(err) }
            const directoryPath = './audio';
            fs.readdir(directoryPath, (err, files) => {
                if (err) throw err;
                const media = MessageMedia.fromFilePath(`${directoryPath}/audio.mp3`);
                msg.react('✅');
                msg.reply(media, null, { sendAudioAsVoice: true });
            });
        });
    }
    else {
        msg.reply('*Debes poner mínimo un carácter!*');
        msg.react('⛔');
    }
}

module.exports = gtts;