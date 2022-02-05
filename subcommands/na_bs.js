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


    const have_weapon=  await db.get(`player_${message.author.id}.weapon`) ? "!": ". Oh sorry die heb je niet... je speelt te veilig"
    const have_weapon_check=  await db.get(`player_${message.author.id}.weapon`)
    const embed = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription(`Je komt **Kerberos** tegen!\nVal hem aan met je ${await db.get(`player_${message.author.id}.weapon`) ? await db.get(`player_${message.author.id}.weapon`) : "zwaard"}${have_weapon}`) 

const msg = await message.reply({embeds: [embed]})
if(have_weapon_check) {
setTimeout(async () => {

    const embed_killed = new Discord.MessageEmbed()
    .setColor(0x5865F2)
    .setDescription("Je hebt Kerberos **gedood**!\nJe bent erg moe.")
    await db.set(`player_${message.author.id}.last_saved_location`, "beest_dood")
    msg.edit({embeds: [embed_killed]})
}, 5000);
} if(!have_weapon_check) {+
    setTimeout(async () => {

await db.delete(`player_${message.author.id}`)
    const embed_dead = new Discord.MessageEmbed()
    .setColor(0x5865F2)
    .setDescription("Kerberos heeft jou **gedood**!\nJe profiel is gewist type `?begin` om opnieuw te beginnen")

    msg.edit({embeds: [embed_dead]})
}, 5000);
}



   },
};
