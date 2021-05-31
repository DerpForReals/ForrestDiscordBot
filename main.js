const Discord = require("discord.js");

const client = new Discord.Client();
// https://discord.com/oauth2/authorize?client_id=848959650481307719&scope=bot&permissions=8589934591
//node main.js

const prefix = "*";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once("ready", () => {
    console.log("Forrest is online.");
    client.user.setActivity("*commands")
});

client.on("message", message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "hello"){
        client.commands.get("hello").execute(message, args);
    } else if (command == "whatisthis"){
        client.commands.get("whatisthis").execute(message, args);
    } else if (command == "commands"){
        client.commands.get("commands").execute(message, args, Discord);
    } else if (command == "taart"){
        client.commands.get("taart").execute(message, args);
    }
});










client.login("ODQ4OTU5NjUwNDgxMzA3NzE5.YLUNSQ.wwoPDmHg1-nO-CslaZ-TlJYjv5g");