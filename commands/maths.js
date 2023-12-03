function maths(msg) {
    const math = msg.body.slice(6);
    try {
        msg.react('🖥️');
        const result = eval(math);
        msg.reply(`${math} = *${result}*`);
        msg.react('✅');
    } catch (e) {
        msg.reply('⛔ *Esta operación no es válida!*');
        msg.react('⛔');
    }
}

module.exports = maths;