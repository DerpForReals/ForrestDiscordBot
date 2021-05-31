module.exports = {
    name: "whatisthis",
    description: "Tells you what this bot is about.",
    execute(message, args){
    message.channel.send("This bot is a random project started by DerpForReals and it's just for fun.");
    }
}