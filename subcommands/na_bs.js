const Discord = require("discord.js");
const db = require("quick.db")
const filter = (i) => i.user.id === message.author.id
const { Message, Client, MessageActionRow, MessageButton, MessageEmbed, MessageAttachment } = require("discord.js");
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
const row = new MessageActionRow()
const valaan = new MessageButton()
    .setCustomId('valaan')
    .setStyle('PRIMARY')

    .setLabel("Val aan")
row.addComponents(valaan)
const msg = await message.reply({embeds: [embed], components: [row]})
const filterr = (i) => i.user.id === message.author.id
const collector_wapens = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 60000, filter: filterr})
collector_wapens.on('collect', async (m) => {
    if(m.customId === 'valaan') {
    if(have_weapon_check) {
    setTimeout(async () => {
        m.deferReply()
        
        const row = new MessageActionRow()
        const embed_killed = new Discord.MessageEmbed()
        .setColor("#303434")
        .setDescription("Je hebt Kerberos **gedood**!\nJe bent erg moe.")
        if(have_weapon_check === 'zwaard') embed_killed.setImage("https://media.discordapp.net/attachments/938896295366651944/939495771575840829/dode_kerberos_met_zwaard.png")
        if(have_weapon_check === 'knots') embed_killed.setImage("https://media.discordapp.net/attachments/938896295366651944/939497110599004260/kerberos_met_knots.png")
        if(have_weapon_check === 'bijl') embed_killed.setImage("https://media.discordapp.net/attachments/938896295366651944/939496659593879582/kerberos_met_axe.png")
        const negeer = new MessageButton()
        .setCustomId('negeer_na_bs')
        .setStyle('PRIMARY')
    
        .setLabel("Negeer")
        const rust = new MessageButton()
        .setCustomId('rust_na_bs')
        .setStyle('PRIMARY')
    
        .setLabel("Ga rusten")
        const stop = new MessageButton()
        .setCustomId('stop_na_bs')
        .setStyle('DANGER')
        .setLabel("Stop")
        row.addComponents(negeer,rust,stop)
    
    
    
        
        await db.set(`player_${message.author.id}.last_saved_location`, "beest_dood")
        msg.edit({embeds: [embed_killed], components: [row] })
    
        const filter = (i) => i.user.id === message.author.id
        const collector = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 60000, filter: filter})
        collector.on("collect", async (m) => {
            if(m.customId === 'negeer_na_bs') {
                
        hbtl_negeer()
            }
            if(m.customId === 'rust_na_bs') {
                m.deferReply()
                hbtl_rust()
            } 
    
    
    
        })
    
    
    
    }, 5000);}
}
})






 if(!have_weapon_check) {
    setTimeout(async () => {

await db.delete(`player_${message.author.id}`)
    const embed_dead = new Discord.MessageEmbed()
    .setColor("#303434")
    .setDescription("Kerberos heeft jou **gedood**!\nJe profiel is gewist type `?begin` om opnieuw te beginnen")

    msg.edit({embeds: [embed_dead]})
}, 5000);
}
async function hbtl_rust() {
    const command = client.subcommands.get('hbtl_rust')
    await command.run(client, message, args);
   
}
async function hbtl_negeer() {
    const command = client.subcommands.get('hbtl_negeer')
    await command.run(client, message, args);
   
}


   },
};
