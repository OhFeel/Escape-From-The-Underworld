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
      const row = new MessageActionRow()

      const negeer = new MessageButton()
          .setCustomId('optie_1')
          .setStyle('PRIMARY')
      .setEmoji("<:edelsteen_ouleh:951772547035332658>")
          .setLabel("Optie 1")
          const rust = new MessageButton()
          .setCustomId('optie_2')
          .setStyle('PRIMARY')
      
          .setLabel("Optie 2")
          .setEmoji("<:boek_ouleh:951773124280606721>")
          row.addComponents(negeer,rust)






    
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
.setImage("https://media.discordapp.net/attachments/938896295366651944/951763377405964308/quest_kiezen.png?width=831&height=467")
.setDescription("Je bent in de tartaros aangekomen, je hebt 2 keuzes\n1. Je gaat opzoek naar het recht boek van de rechters.\n2. Je gaat opzoek naar de edelsteen van poseidon.\n\nNog 1 tip, voor de eerste optie krijg je een beter cadeau maar hij is wel lastiger....")
m.edit({embeds: [tar_embed_2], components:[row]})
}, 3000);
const filter = (i) => i.user.id === message.author.id
const collector = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 60000, filter: filter})
collector.on("collect", async (m) => {
    if(m.customId === 'optie_1') {
optie_1()
    }
    if(m.customId === 'optie_2') {
       optie_2()
   }
   })

   async function optie_1() {
      const command = client.subcommands.get('optie_1')
      await command.run(client, message, args);
     
  }
  async function optie_2() {
   const command = client.subcommands.get('optie_2')
   await command.run(client, message, args);
  
}

   },
};
