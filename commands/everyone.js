async function everyone(msg, client) {
    msg.react('💨');
    const chat = await msg.getChat();
    const contact = await msg.getContact();
    let text = "";
    let mentions = [];

    for (let participant of chat.participants) {
        let contact = await client.getContactById(participant.id._serialized);

        mentions.push(contact);
        text += `   〔 @${participant.id.user} 〕\n`;
    }
    msg.reply(`💨 Mencionando a todos!\n\n${text}`, null, { mentions });
}

module.exports = everyone;