const Discord = require("discord.js");
module.exports = {
   name: "hbtl_negeer",

   description: "",
   usage: "",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor('#303434')
.setDescription("Dus... Je bent er moe maar je blijft doorgaan. oké oké respect.")

const msg= await message.reply({embeds: [ embed ]})
const embed_edit_1 = new Discord.MessageEmbed()
.setColor('#303434')
.setDescription("Maarr...")
const embed_edit_2 = new Discord.MessageEmbed()
.setColor('#303434')
.setDescription("Uhm...")
const embed_edit_3 = new Discord.MessageEmbed()
.setColor('#303434')
.setDescription("Hoe zeg ik dit...")
const embed_edit_4 = new Discord.MessageEmbed()
.setColor('#303434')
.setDescription("Ligt het aan mij of is daar iemand...")
const embed_edit_5 = new Discord.MessageEmbed()
.setColor('#303434')
.setDescription("En volgens mij lijkt hij niet blij...")



setTimeout(() => {
    msg.edit({embeds: [ embed_edit_1 ]})
}, 3000);

setTimeout(() => {
    msg.edit({embeds: [ embed_edit_2 ]})
}, 6000);
setTimeout(() => {
    msg.edit({embeds: [ embed_edit_3 ]})
}, 9000);
setTimeout(() => {
    msg.edit({embeds: [ embed_edit_4 ]})
 
}, 12000);
setTimeout(() => {
    msg.edit({embeds: [ embed_edit_5 ]})
}, 15000);












   },
};
