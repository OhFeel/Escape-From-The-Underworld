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
.setDescription("Dus... Je bent erg moe maar je blijft doorgaan. oké oké respect.")

const msg = await message.reply({embeds: [ embed ]})

const embed_edit_4 = new Discord.MessageEmbed()
.setColor('#303434')
.setDescription("Ligt het aan mij of is daar iemand...")
const embed_edit_5 = new Discord.MessageEmbed()
.setColor('#303434')
.setDescription("En volgens mij is hij niet blij...")




setTimeout(() => {
    msg.edit({embeds: [ embed_edit_4 ]})
 
}, 3000);
setTimeout(() => {
    msg.edit({embeds: [ embed_edit_5 ]})
    rust()
}, 8000);





async function rust() {
    const command = client.subcommands.get('na_rusten')
    setTimeout(async () => {
        await command.run(client, message, args);
    }, 5000);
}









   },
};
