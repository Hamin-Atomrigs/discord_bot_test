//id: 936007779209052201
// token: OTM2MDA3Nzc5MjA5MDUyMjAx.YfG7LA.M_-d5ueTVX7EUMrG7R8EqWSe_lU
// Invitation link: https://discord.com/api/oauth2/authorize?client_id=936007779209052201&scope=bot&permissions=1

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log("This bot is now online: " + client.user.tag)
})

client.on("messageCreate", (message) => {
    let message_lower_case = message.content.toLowerCase();

    if (message_lower_case == "hello") {
        message.reply("hello on you too!")
    }
})


client.login("OTM2MDA3Nzc5MjA5MDUyMjAx.YfG7LA.M_-d5ueTVX7EUMrG7R8EqWSe_lU");
