const messagesGPT = ["Eres un bot de Whatsapp que responde preguntas, cada usuario podrás identificarlo por su número celular, cada pregunta que respondas debes responder algo así: 🍂 ChatGPT: ${message}. Importante poner el emoji 💫 antes de 'ChatGPT-3:', es para identificarte. Eso es solo un ejemplo, y recuerda que el usuario con el número 9581153107, es tu dueño, respetalo mucho. Su nombre es Gael, así que si el te habla puedes saludarlo por su nombre si quieres, su nombre de usuario normalmente es Halo333 en internet.\n\nHistorial de mensajes con los usuarios:"];
async function gpt(Configuration, OpenAIApi, msg, PythonShell, fs, path) {
    // try {
    //     const configuration = new Configuration({
    //         apiKey: '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'
    //     });
    //     const openai = new OpenAIApi(configuration);
    //     msg.react(`⌛`);
    //     const question = msg.body.slice(5);
    //     messagesGPT.push(`User (${msg.author}): ${question}`);
    //     const response = await openai.createCompletion({
    //         model: "text-davinci-003",
    //         prompt: `${messagesGPT}`,
    //         temperature: 0.9,
    //         max_tokens: 1400,
    //     });
    //     msg.react('✅');
    //     msg.reply(`${response.data.choices[0].text}`)
    //     messagesGPT.push(`${response.data.choices[0].text}`);
    // } catch (e) {
    //     console.log(e.stack)
    // }
    
    try {
        msg.react('⌛');
        fs.writeFile(path.join(__dirname, '..', 'petition.txt'), '', 'utf8', (err) => {
            console.log('Borrado')
        });
        fs.appendFile(path.join(__dirname, '..', 'petition.txt'), `\nUser: ${msg.body.replace('/gpt', '')}`, 'utf8', (err) => {
            PythonShell.run('./gptTest.py', null).then(messages => {
                fs.readFile(path.join(__dirname, '..', 'petition.txt'), 'utf8', (err, data) => {
                    msg.react('✅');
                    setTimeout(() => {
                        msg.reply(`🍂 ChatGPT: ${data}`);
                    }, 1000);
                    PythonShell.run('./clear.py', null).then(messages => {
                        console.log('Reinicio');
                    });
                });
            });
        });
    }
    catch (e) {
        console.log(e.stack);
        msg.reply(e);
        msg.react('⛔');
    }
}

module.exports = gpt;