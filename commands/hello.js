module.exports = {
    name: "hello",
    description: "Say hello to the bot!",
    execute(message, args){
        if(!args[0]) return message.channel.send("Hi!");
        else if(args[0] = "there") return message.channel.send("General Kenobi");
    }
}