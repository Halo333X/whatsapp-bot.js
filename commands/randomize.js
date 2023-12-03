function randomize(msg) {
    const words = msg.body.slice(11).split(' ');
    if (words.length > 1) {
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
        msg.react('🎲');
        msg.reply(`*El resultado al azar ha sido: " ${randomWord} "*`);
    } else {
        msg.reply('🎲 Debes ingresar al menos dos palabras separadas por un espacio para usar el comando /randomize');
        msg.react('⛔');
    }
}

module.exports = randomize;