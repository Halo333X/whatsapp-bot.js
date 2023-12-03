function _8ball(msg) {
    const the8ball = [
        "🎱 Probablemente no",
        "🎱 No...",
        "🎱 ¡Claro! :D",
        "🎱 Estoy teniendo un poco de lag, pregunta de nuevo",
        "🎱 Si <3",
        "🎱 Teóricamente, sí",
        "🎱 Teóricamente, no",
        "🎱 Tal vez o.o",
        "🎱 idk",
        "🎱 Pregúntame otra cosa, ¿sí?",
        "🎱 Sí n.n",
        "🎱 No n.n",
        "🎱 Obvio que no",
        "🎱 Opino lo mismo",
        "🎱 No lo sé :>",
        "🎱 CLARO QUE NO!",
        "🎱 ..."
    ];
    msg.react('🎱');
    const randomize8ball = the8ball[Math.floor(Math.random() * the8ball.length)];
    msg.reply(randomize8ball);
}

module.exports = _8ball;