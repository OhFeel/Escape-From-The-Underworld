const Discord = require("discord.js");
const { Message, Client, MessageActionRow, MessageButton, MessageEmbed, MessageAttachment } = require("discord.js");
module.exports = {
   name: "hbtl_rust",
   description: "",
   usage: "",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {

const row = new MessageActionRow()
const slaap = new MessageButton()
    .setCustomId('slaap')
    .setStyle('PRIMARY')
   .setEmoji("😴")
    .setLabel("Verder slapen")
    const geen_slaap = new MessageButton()
    .setCustomId('geen_slaap')
    .setStyle('PRIMARY')
   .setEmoji("⛔")
    .setLabel("niet slapen")
row.addComponents(slaap,geen_slaap)
const embed = new MessageEmbed()
.setColor("#303434")
.setDescription("Je valt in een diepe slaap... 😴")
message.reply({embeds: [embed], components: [row]})

const embed_slaap = new MessageEmbed()
.setColor("#303434")
.setDescription("Hades brengt je in je slaap naar de tartaros.")
const embed_niet_slaap = new MessageEmbed()
.setColor("#303434")
.setDescription("Je gaat verder lopen en komt Hades tegen.")

const filterr = (i) => i.user.id === message.author.id
const collector_wapens = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 60000, filter: filterr})
collector_wapens.on('collect', async (m) => {
   if(m.customId === "slaap") {
message.reply({embeds: [embed_slaap]})
rust()
   }
   if(m.customId === "geen_slaap"){
      message.reply({embeds: [embed_niet_slaap]})
      rust() 
   }
})





      async function rust() {
         const command = client.subcommands.get('na_rusten')
         setTimeout(async () => {
             await command.run(client, message, args);
         }, 5000);
     }
   },
};
