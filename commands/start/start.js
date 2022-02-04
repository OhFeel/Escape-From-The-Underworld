const Discord = require("discord.js");
const { Message, Client, MessageActionRow, MessageButton, MessageEmbed, MessageAttachment } = require("discord.js");
const db = require('quick.db')
module.exports = {
   name: "start",
   aliases: ["begin", "play", ""],

   description: "",
   usage: "",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {
       if(!db.has(`player_${message.author.id}`)) {
           choose_player()
       }
const locations = ['Elysische velden', 'Tartaros', 'Asphodelvelden', 'Styx', 'Phletegon', 'Acheron','Cocytus', 'Lethe']
const last_saved_loc = db.get(`player_${message.author.id}.last_saved_location`)



if(last_saved_loc === 'styx') {
    const embed = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription(`Je bent bij de ${last_saved_loc}, wat wil je nu doen?`)
.setImage('https://i.imgur.com/MAPMrc4.png')
message.reply({embeds: [embed],components: [new MessageActionRow().addComponents(
    new MessageButton()
    .setStyle("SUCCESS")
    .setLabel('Praten met Charon')
    .setCustomId('charon')
    , new MessageButton()
    .setStyle("SUCCESS")
    .setLabel('Zoeken naar goud')
    .setCustomId('goud')
    .setEmoji('<:emojisky:938894175817072650>')
    , new MessageButton()
    .setStyle("DANGER")
    .setLabel('stop')
    .setCustomId('stop')
    .setEmoji('🛑')

   
)]})

    handle_buttons_styx()

}
if(last_saved_loc === 'onderwereld') {
    const embed = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription(`Je bent bij de ${last_saved_loc}, heil hitler?`)
    message.reply({embeds: [embed]})
}

    














































































          async function choose_player() {
            const command = client.subcommands.get('chooseplayer')
            await command.run(client, message, args);
        }
        async function handle_buttons_styx() {
            const command = client.subcommands.get('hbtlstyx')
            await command.run(client, message, args);
        }
   },
   
};




