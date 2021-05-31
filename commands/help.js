module.exports = {
    name:"commands",
    description: "List of commands.",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#228b22")
        .setTitle("Commands")
        .setDescription("All the commands are in this list. The prefix is '*'. Brackets '()' mean that it is optional.")
        .addFields(
            {name: "*commands", value: "Shows the commands"},
            {name: "*hello (there)", value: "Say hello to the bot!"},
            {name: "*whatisthis", value: "Explains what this bot is about"},
            {name: "*taart", value: "Wanneer je zin hebt in taart. (Dutch)"}
        )

        message.channel.send(newEmbed);
    }
}