async function edited(before, after, client) {
    const beforeJSON = JSON.stringify(before);
    const deletedMessage = JSON.parse(beforeJSON).body;
    const deletedMessageAuthor = JSON.parse(beforeJSON)._data.notifyName;
    const sizeX = JSON.parse(beforeJSON)._data.width;
    const sizeY = JSON.parse(beforeJSON)._data.height;
    const authorNum = JSON.parse(beforeJSON)._data.author;
    const mention = await client.getChatById(authorNum);
    if (before) {
        after.reply(`〔 💮 *_Old Message: ${deletedMessage}_* 〕\n〔 🏵️ *_New Message: ${deletedMessage}_* 〕\n〔 🌒 *_Author: ${deletedMessageAuthor} - ${mention.name}_* 〕`);
    }
}

module.exports = edited;