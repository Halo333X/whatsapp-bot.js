function we(msg) {
    msg.react('🤬');
    for (let i = 1; i <= 100; i++) {
        msg.reply(`${i}) We`);
    }
}

module.exports = we;