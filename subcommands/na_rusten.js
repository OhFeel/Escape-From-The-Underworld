const Discord = require("discord.js");
module.exports = {
   name: "na_rusten",
   description: "",
   usage: "",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {
      const { Message, Client, MessageActionRow, MessageButton, MessageEmbed, MessageAttachment } = require("discord.js");
      const db = require("quick.db")
      db.set(`player_${message.author.id}.last_saved_location`, "tartaros")
const tar_embed = new Discord.MessageEmbed()
.setColor('#303434')
.setImage("https://media.discordapp.net/attachments/938896295366651944/943488384976953394/output-onlinegiftools.gif")
.setDescription("Je bent in de tartaros aangekomen")
const m = await message.channel.send({embeds: [tar_embed]})

setTimeout(() => {
   const tar_embed_2 = new Discord.MessageEmbed()
.setColor('#303434')
.setImage("https://media.discordapp.net/attachments/938896295366651944/943488384976953394/output-onlinegiftools.gif")
.setDescription("Je bent in de tartaros aangekomen, je hebt 2 keuzes\n1. Je gaat opzoek naar de edelsteen van poseidon.\n2. Je gaat opzoek naar het recht boek van de rechters.\n\nNog 1 tip, voor de 2 optie krijg je een beter cadeau maar hij is wel lastiger....")
m.edit({embeds: [tar_embed_2]})
}, 3000);




   },
};
