async function whisper(msg, fs, PythonShell) {
    if (msg.hasQuotedMsg) {
        msg.react('✍️')
        const quotedMsg = await msg.getQuotedMessage();
        const audio = await quotedMsg.downloadMedia();
        const buffer = Buffer.from(audio.data, 'base64');
        fs.writeFile('./audio/audio.ogg', buffer, (err) => {
            if (err) throw err;
        });
        const pyshell = new PythonShell('./speechToText.py');
        process.stdout.setEncoding('utf8');
        pyshell.on('message', function (message) {
            msg.react('✅')
            msg.reply(`✍️ *Transcription*: ${message}`)
        });
        pyshell.on('error', function (error) {
            console.error(error);
        });
    }
    else {
        msg.reply('*Debes seleccionar un audio!*');
        msg.react('⛔');
    }
}

module.exports = whisper;