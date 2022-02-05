const Discord = require("discord.js");
const db = require("quick.db")
module.exports = {

   name: "na_bs",
 
   description: "",
   usage: "",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {


    const have_weapon=  await db.get(`player_${message.author.id}.weapon`) ? "!": ". Oh sorry die heb je niet... je speelt te voorzichtig"
    const have_weapon_check=  await db.get(`player_${message.author.id}.weapon`)
    const embed = new Discord.MessageEmbed()
.setColor("#303434")
.setImage("https://cdn.discordapp.com/attachments/938896295366651944/939464855759499274/Kerberos.gif")
.setDescription(`Je komt **Kerberos** tegen!\nVal hem aan met je ${await db.get(`player_${message.author.id}.weapon`) ? await db.get(`player_${message.author.id}.weapon`) : "zwaard"}${have_weapon}`) 

const msg = await message.reply({embeds: [embed]})
if(have_weapon_check) {
setTimeout(async () => {

    const embed_killed = new Discord.MessageEmbed()
    .setColor("#303434")
    .setDescription("Je hebt Kerberos **gedood**!\nJe bent erg moe.")
    if(have_weapon_check === 'zwaard') embed_killed.setImage("https://media.discordapp.net/attachments/938896295366651944/939495771575840829/dode_kerberos_met_zwaard.png")
    if(have_weapon_check === 'knots') embed_killed.setImage("https://media.discordapp.net/attachments/938896295366651944/939496659593879582/kerberos_met_axe.png")
    if(have_weapon_check === 'bijl') embed_killed.setImage("https://media.discordapp.net/attachments/938896295366651944/939497110599004260/kerberos_met_knots.png")

    
    await db.set(`player_${message.author.id}.last_saved_location`, "beest_dood")
    msg.edit({embeds: [embed_killed]})
}, 5000);
} if(!have_weapon_check) {+
    setTimeout(async () => {

await db.delete(`player_${message.author.id}`)
    const embed_dead = new Discord.MessageEmbed()
    .setColor("#303434")
    .setDescription("Kerberos heeft jou **gedood**!\nJe profiel is gewist type `?begin` om opnieuw te beginnen")

    msg.edit({embeds: [embed_dead]})
}, 5000);
}



   },
};
