const { Client, GatewayIntentBits } = require('discord.js');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

// Discord Client
const client = new Client({
  intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// When discord bot has started up
client.once('ready', () => {
    console.log('Bot is ready!');
});

// This event will run every time a message is received
client.on('messageCreate', async message => {
    if (message.author.bot || !message.content || message.content === '') return; //Ignore bot messages

    // For text-only input, use the gemini-pro model
    //TODO: Use the startChat endpoint and pull latest ~5 messages into history for better context.
    const result = await model.generateContent(message.content);
    let response = result.response.text();
    response = response.substring(0, 1999); //Discord message cutoff is 2k; TODO: handle long responses as multiple messages

    console.log(response);
    message.reply(response);
});

// Authenticate Discord
client.login(process.env.DISCORD_TOKEN);