const Discord = require("discord.js");
const db = require('quick.db')
module.exports = {
   name: "chooseplayer",

 
   description: "",
   usage: "",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor("#303434")
.setDescription(`Jij hebt nog geen profiel!\n Ik maak er wel een voor jou!`)

const send_msg_embed = await message.reply({embeds: [ embed ]})
const embed1 = new Discord.MessageEmbed()
.setColor("#303434")
.setDescription(`Klaar!\nIk heb een profiel voor je gemaakt! (en je hebt 1 gratis goude munt!)`)
db.set(`player_${message.author.id}`, {
    player: 'kanker',
    gold: 1,
    last_saved_location: 'styx',

})
setTimeout(() => {
    send_msg_embed.edit({embeds: [ embed1 ]})

    profile_done()
    async function profile_done() {
        const command = client.commands.get('start')
        await command.run(client, message, args);
    }
}, 5000);




   },
};
