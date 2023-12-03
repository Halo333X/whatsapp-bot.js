async function deleted(before, after, client) {
    const beforeJSON = JSON.stringify(before);
    const deletedMessage = JSON.parse(beforeJSON).body;
    const deletedMessageAuthor = JSON.parse(beforeJSON)._data.notifyName;
    const authorNum = JSON.parse(beforeJSON)._data.author;
    const mention = await client.getChatById(authorNum);
    after.reply(`〔 💮 *_Message: ${deletedMessage}_* 〕\n〔 🌒 *_Author: ${deletedMessageAuthor} - ${mention.name}_* 〕`);
}

module.exports = deleted;