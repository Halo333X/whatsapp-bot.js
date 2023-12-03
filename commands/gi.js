async function gi(msg) {
    const chat = await msg.getChat();
    if (chat.isGroup) {
        msg.react('🪄');
        msg.reply(`_*${chat.name.toUpperCase()}*_\n
 〔 Description: _${chat.description}_ 〕
 〔 Created At: _${chat.createdAt.toString()}_ 〕
 〔 Created By: _${chat.owner.user}_ 〕
 〔 Participant count: _${chat.participants.length}_ 〕`);
    } else {
        msg.reply('This command can only be used in a group!');
    }
}

module.exports = gi;