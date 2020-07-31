const Discord = require ("discord.js");
var fs = require ("fs");
const config = require ("./config.json");

const client = new Discord.Client();


client.on("ready",() => {
    console.log("Bot is ready!");
    client.user.setActivity("kod źródłowy",{type: 'WATCHING'});
})

client.on("message", async message =>{
    if (message.content === "twoja stara")return message.channel.send("sra do gara")
})

client.login(config.token);