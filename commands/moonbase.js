async function moonbase(msg, axios, fs, path, MessageMedia, PythonShell) {
    try {
        msg.react('🌒')
        const text = msg.body.slice(9)
        const { data } = await axios.get('http://tts.cyzon.us/tts?text=' + text, {
            responseType: 'arraybuffer',
        });

        const audioPath = path.join(__dirname, "..", "audio", "audio.wav");
        fs.writeFileSync(audioPath, Buffer.from(data));
        const directoryPath = './audio';
        const pyshell = new PythonShell('./moonbase.py');
        setTimeout(() => {
            fs.readdir(directoryPath, (err, files) => {
                if (err) throw err;
                const media = MessageMedia.fromFilePath(`${directoryPath}/audio.mp3`);
                msg.react('✅');
                msg.reply(media, null, { sendAudioAsVoice: true });
            });
        }, 2000);
        return audioPath;
    } catch (error) {
        msg.reply(error.stack)
    }
}

module.exports = moonbase;