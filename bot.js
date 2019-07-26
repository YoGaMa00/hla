const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("604428595166707715")
setInterval(function() {
channel.send(انا هبقى مليونير);
}, 30)
})

client.login(process.env.BOT_TOKEN);