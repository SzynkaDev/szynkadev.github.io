const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'; // Command prefix

// Event: When the bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Command handling
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong!');
    }
});

// Log in to Discord with your app's token
client.login('YOUR_BOT_TOKEN'); // Replace with your bot's token