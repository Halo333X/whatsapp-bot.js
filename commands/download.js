async function download(msg) {
    if (msg.hasQuotedMsg) {
        msg.react(`💟`)
        const quotedMsg = await msg.getQuotedMessage();
        const media = await quotedMsg.downloadMedia();
        msg.reply(media)
        msg.react('✅');
    }
}

module.exports = download;