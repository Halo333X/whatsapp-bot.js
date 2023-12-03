//libs

const gTTS = require('gtts');
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');
const { PythonShell } = require('python-shell');
const { OpenAIApi, Configuration } = require('openai');
const ytdl = require('ytdl-core');
const path = require('path');
const { spawn } = require('child_process');
const axios = require("axios");
const { createCanvas, loadImage } = require('canvas');

//importacion de commands
const help = require('./commands/help');
const gtts = require('./commands/gtts');
const whisper = require('./commands/whisper');
const gpt = require('./commands/gpt');
const _8ball = require('./commands/8ball');
const randomize = require('./commands/randomize');
const sticker = require('./commands/sticker');
const music = require('./commands/music');
const everyone = require('./commands/everyone');
const gi = require('./commands/gi');
const deleted = require('./deleted/msg_deleted');
const prefix = require('./commands/prefix');
const we = require('./commands/we');
const moonbase = require('./commands/moonbase');
const meme = require('./commands/memes');
const download = require('./commands/download');
const maths = require('./commands/maths');

//cliente 1

const client = new Client({
    authStrategy: new LocalAuth()
});

//generacion de QR

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

//mensajes borrados

client.on('message_revoke_everyone', async (after, before) => {
    try {
        await deleted(before, after, client);
    } catch (err) {
        console.log(err)
    }
});

//comandos
client.on('message_create', async msg => {
    const contact = await msg.getContact();
    const chat = await msg.getChat();
    const weBool = true;
    if (msg.body == '/help') {
        try {
            help(msg, MessageMedia)
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body.startsWith('/gtts')) {
        try {
            gtts(msg, gTTS, fs, MessageMedia);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body == '/whisper') {
        try {
            await whisper(msg, fs, PythonShell);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body.startsWith('/gpt')) {
        try {
            await gpt(Configuration, OpenAIApi, msg, PythonShell, fs, path);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body.startsWith('/8ball')) {
        try {
            _8ball(msg);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body.startsWith('/randomize')) {
        try {
            randomize(msg);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body == '/sticker') {
        try {
            await sticker(msg);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body.startsWith('/music')) {
        try {
            await music(msg, ytdl, MessageMedia, fs, path, spawn);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body == '/everyone' && chat.isGroup) {
        try {
            await everyone(msg, client);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body == '/gi') {
        try {
            await gi(msg);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body == '/we' && weBool) {
        try {
            we(msg);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body.startsWith('/moonbase')) {
        try {
            await moonbase(msg, axios, fs, path, MessageMedia, PythonShell);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body.startsWith('/meme')) {
        try {
            meme(msg, createCanvas, loadImage, MessageMedia);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body.startsWith('/download')) {
        try {
            download(msg);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
    else if (msg.body.startsWith('/math')) {
        try {
            maths(msg);
        } catch (err) {
            msg.reply(err);
            msg.react('⛔');
        }
    }
});

//aviso ON

client.on('ready', () => {
    console.log('[+] HaloBot Running!');
});

//aviso OFF

client.on('disconnected', () => {
    console.log('[-] HaloBot Stopped!');
});

//iniciar

client.initialize();