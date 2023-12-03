async function sticker(msg) {
    if (msg.hasQuotedMsg) {
        msg.react(`💟`)
        const quotedMsg = await msg.getQuotedMessage();
        const sticker = await quotedMsg.downloadMedia();
        msg.reply(sticker, null, { sendMediaAsSticker: true, stickerAuthor: "HaloWS", stickerName: "HaloWS", stickerCategories: ["momazos :v"] })
        msg.react('✅')
    }
    else if (msg.hasMedia) {
        msg.react(`💟`)
        const sticker = await msg.downloadMedia();
        msg.reply(sticker, null, { sendMediaAsSticker: true, stickerAuthor: "HaloWS", stickerName: "HaloWS", stickerCategories: ["momazos :v"] })
        msg.react('✅')
    }
}

module.exports = sticker;