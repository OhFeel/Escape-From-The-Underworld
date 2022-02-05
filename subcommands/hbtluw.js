const Discord = require("discord.js");
const db = require("quick.db");

const { Message, Client, MessageActionRow, MessageButton, MessageEmbed, MessageAttachment } = require("discord.js");
module.exports = {
   name: "hbtluw",
   description: "",
   usage: "",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {



    const filter = (i) => i.user.id === message.author.id
    
    
    
    const collector = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 60000, filter: filter})

    const row = new MessageActionRow()
     b0 =new MessageButton()
    .setStyle("SUCCESS")
    .setLabel('Ja')
    .setCustomId('ja_uw_iets')
    .setDisabled(false)

    b1 = new MessageButton()
    .setStyle("DANGER")
    .setLabel('Nee')
    .setCustomId('nee_uw_iets')
    .setDisabled(false)
   
    collector.on('collect', async (m) => {
        if(m.customId === 'stop_uw') {
            const embed_pauze = new Discord.MessageEmbed()
            .setColor(0x5865F2)
            .setDescription('Je hebt het spel gepauzeerd!')
            m.reply({embeds: [embed_pauze]})

            }
        if(m.customId === 'explore_underworld') {
           
            
            
   
  
    
   

const embed_iets = new Discord.MessageEmbed()
            .setColor(0x5865F2)
            .setDescription('Je ziet iets glimmen, wil je er naar toe?')
            b0.setDisabled(false)
            b1.setDisabled(false)
            row.addComponents(b0,b1)
            m.reply({embeds: [embed_iets], components:[row]})
const collector_ja_nee_iets = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 60000, filter: filter})
collector_ja_nee_iets.on("collect", async (m) => {
    if(m.customId === 'ja_uw_iets') {
      
          b0.setDisabled(true)
         b1.setDisabled(true)
        
        m.update({embeds: [embed_iets], components:[row]})
        const embed_dood = new Discord.MessageEmbed()
        .setColor(0x5865F2)
        .setImage("https://i.imgur.com/uLDvwuV.png")
        .setDescription('Je bent dood gegaan!\n **Kerberos** heeft je opgegeten!\n\n\nJe profiel is gewist, om opnieuw te beginnen type \`?start\`')
     
        const embed_gg = new Discord.MessageEmbed()
        .setColor(0x5865F2)
        .setImage("https://i.imgur.com/fsqaVrm.png")
        .setDescription(`Je hebt 3 ${client.emoji.goud} Gouden munten gevonden!`)
        const random_number = await Math.floor(Math.random() * 100)
        if (random_number >= 40) {
            await m.deferReply()
            await db.delete(`player_${message.author.id}`)
m.editReply({embeds: [embed_dood]})

        }
if (random_number < 40) {


    await m.deferReply()
    const gold = await db.add(`player_${message.author.id}.gold`, 3)
    await m.editReply({embeds: [embed_gg]})



    setTimeout(async () => {
        const embed_blacksmith = new Discord.MessageEmbed()
    .setColor(0x5865F2)
.setImage("https://media.discordapp.net/attachments/938896295366651944/939247261089677422/output-onlinegiftools.gif")
    .setDescription(`Je bent een smid tegengekomen!`)
 const ms= await  m.channel.send({embeds: [embed_blacksmith]})
 setTimeout(async () => {
const zwaar_bs = new MessageButton()
.setCustomId('zwaard_bs')
.setStyle('PRIMARY')
.setEmoji('<:zwaar_bs:939304930299232306>')
.setLabel("Zwaard")
const axe_bs = new MessageButton()
.setCustomId('axe_bs')
.setStyle('PRIMARY')
.setEmoji('<:axe_bs:939304990244225074>')
.setLabel("Bijl")
const knots_bs = new MessageButton()
.setCustomId('knots_bs')
.setStyle('PRIMARY')
.setEmoji('<:knots_bs:939305031360999464>')
.setLabel("Knots")
const niks = new MessageButton()
.setCustomId('niks')
.setStyle('DANGER')
.setLabel("Niks")

row1 = new MessageActionRow()
row1.addComponents(zwaar_bs,axe_bs,knots_bs, niks)





await db.set(`player_${message.author.id}.last_saved_location`, 'bs')
    const embed_blacksmith_prijzen = new Discord.MessageEmbed()
        .setColor(0x5865F2)
   .setImage("https://media.discordapp.net/attachments/938896295366651944/939247261089677422/output-onlinegiftools.gif")
        .setDescription(`Je bent een smid tegengekomen!\nHij verkoopt 3 wapens!\n\n<:zwaar_bs:939304930299232306> Zwaard: 2 ${client.emoji.goud}\n<:axe_bs:939304990244225074> Bijl: 2 ${client.emoji.goud}\n<:knots_bs:939305031360999464> Knots: 3 ${client.emoji.goud}`)
        ms.edit({embeds: [embed_blacksmith_prijzen], components: [row1]})
        }, 5000);









    }, 5000);




    const collector_wapens = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 60000, filter: filter})
    const niet_genoeg_goud = new Discord.MessageEmbed()
    .setColor(0x5865F2)
    .setDescription('Je hebt niet genoeg goud!')

    collector_wapens.on('collect', async (m) => {
if(m.customId === 'zwaard_bs') {
const zwaard_bought = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription('Je hebt succesvol een **zwaard** gekocht')
const player_info_gold = await db.get(`player_${message.author.id}.gold`)
if(player_info_gold < 2) return m.reply({embeds: [niet_genoeg_goud]}), na_bs()



await db.set(`player_${message.author.id}.weapon`, 'zwaard')
await db.subtract(`player_${message.author.id}.gold`, 2)
m.reply({embeds: [zwaard_bought]})
na_bs()
}
if(m.customId === 'bijl_bs') {
const niet_genoeg_goud = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription('Je hebt niet genoeg goud!')
const player_info_gold = await db.get(`player_${message.author.id}.gold`)
if(player_info_gold < 2) return m.reply({embeds: [niet_genoeg_goud]}), na_bs()



const zwaard_bought = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription('Je hebt succesvol een **bijl** gekocht')





    await db.set(`player_${message.author.id}.weapon`, 'bijl')
    await db.subtract(`player_${message.author.id}.gold`, 2)
    m.reply({embeds: [zwaard_bought]})
    na_bs()
}
if(m.customId === 'knots_bs') {
    const niet_genoeg_goud = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription('Je hebt niet genoeg goud!')
const player_info_gold = await db.get(`player_${message.author.id}.gold`)
if(player_info_gold < 3) return m.reply({embeds: [niet_genoeg_goud]}), na_bs()
    
    const zwaard_bought = new Discord.MessageEmbed()
    .setColor(0x5865F2)
    .setDescription('Je hebt succesvol een **knots** gekocht')
    
    
    
    
    
        await db.set(`player_${message.author.id}.weapon`, 'knots')
        await db.subtract(`player_${message.author.id}.gold`, 3)
        m.reply({embeds: [zwaard_bought]})
        na_bs()
    }
    if(m.customId === 'niks') {
        const embed_niks = new Discord.MessageEmbed()
        .setColor(0x5865F2)
        .setDescription('Je hebt niks gekocht!')
        return m.reply({embeds: [embed_niks]}), na_bs()
    }


    })










}
        }
        
        if(m.customId === 'nee_uw_iets') {
            b0.setDisabled(true)
            b1.setDisabled(true)
          
            m.update({embeds: [embed_iets], components:[row]})
           
            const embed_velig = new Discord.MessageEmbed()
        .setColor(0x5865F2)
   
        .setDescription(`Oke, je speelt het veilig, interessant!`)
        m.editReply({embeds: [embed_velig]})
        setTimeout(async () => {
            const embed_blacksmith = new Discord.MessageEmbed()
        .setColor(0x5865F2)
   .setImage("https://media.discordapp.net/attachments/938896295366651944/939247261089677422/output-onlinegiftools.gif")
        .setDescription(`Je bent een smid tegengekomen!`)
     const ms= await  m.channel.send({embeds: [embed_blacksmith]})
     setTimeout(async () => {
const zwaar_bs = new MessageButton()
.setCustomId('zwaard_bs')
.setStyle('PRIMARY')
.setEmoji('<:zwaar_bs:939304930299232306>')
.setLabel("Zwaard")
const axe_bs = new MessageButton()
.setCustomId('axe_bs')
.setStyle('PRIMARY')
.setEmoji('<:axe_bs:939304990244225074>')
.setLabel("Bijl")
const knots_bs = new MessageButton()
.setCustomId('knots_bs')
.setStyle('PRIMARY')
.setEmoji('<:knots_bs:939305031360999464>')
.setLabel("Knots")
const niks = new MessageButton()
.setCustomId('niks')
.setStyle('DANGER')
.setLabel("Niks")

 row1 = new MessageActionRow()
row1.addComponents(zwaar_bs,axe_bs,knots_bs, niks)





await db.set(`player_${message.author.id}.last_saved_location`, 'bs')
        const embed_blacksmith_prijzen = new Discord.MessageEmbed()
            .setColor(0x5865F2)
       .setImage("https://media.discordapp.net/attachments/938896295366651944/939247261089677422/output-onlinegiftools.gif")
            .setDescription(`Je bent een smid tegengekomen!\nHij verkoopt 3 wapens!\n\n<:zwaar_bs:939304930299232306> Zwaard: 2 ${client.emoji.goud}\n<:axe_bs:939304990244225074> Bijl: 2 ${client.emoji.goud}\n<:knots_bs:939305031360999464> Knots: 3 ${client.emoji.goud}`)
            ms.edit({embeds: [embed_blacksmith_prijzen], components: [row1]})
            }, 5000);









        }, 5000);




        const collector_wapens = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 60000, filter: filter})
        const niet_genoeg_goud = new Discord.MessageEmbed()
        .setColor(0x5865F2)
        .setDescription('Je hebt niet genoeg goud!')

        collector_wapens.on('collect', async (m) => {
if(m.customId === 'zwaard_bs') {
const zwaard_bought = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription('Je hebt succesvol een **zwaard** gekocht')
const player_info_gold = await db.get(`player_${message.author.id}.gold`)
if(player_info_gold < 2) return m.reply({embeds: [niet_genoeg_goud]}), na_bs()



    await db.set(`player_${message.author.id}.weapon`, 'zwaard')
    await db.subtract(`player_${message.author.id}.gold`, 2)
    m.reply({embeds: [zwaard_bought]})
    na_bs()
}
if(m.customId === 'bijl_bs') {
    const niet_genoeg_goud = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription('Je hebt niet genoeg goud!')
const player_info_gold = await db.get(`player_${message.author.id}.gold`)
if(player_info_gold < 2) return m.reply({embeds: [niet_genoeg_goud]}), na_bs()



    const zwaard_bought = new Discord.MessageEmbed()
    .setColor(0x5865F2)
    .setDescription('Je hebt succesvol een **bijl** gekocht')
    
    
    
    
    
        await db.set(`player_${message.author.id}.weapon`, 'bijl')
        await db.subtract(`player_${message.author.id}.gold`, 2)
        m.reply({embeds: [zwaard_bought]})
        na_bs()
    }
    if(m.customId === 'knots_bs') {
        const niet_genoeg_goud = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription('Je hebt niet genoeg goud!')
const player_info_gold = await db.get(`player_${message.author.id}.gold`)
if(player_info_gold < 3) return m.reply({embeds: [niet_genoeg_goud]}), na_bs()
        
        const zwaard_bought = new Discord.MessageEmbed()
        .setColor(0x5865F2)
        .setDescription('Je hebt succesvol een **knots** gekocht')
        
        
        
        
        
            await db.set(`player_${message.author.id}.weapon`, 'knots')
            await db.subtract(`player_${message.author.id}.gold`, 3)
            m.reply({embeds: [zwaard_bought]})
            na_bs()
        }
        if(m.customId === 'niks') {
            const embed_niks = new Discord.MessageEmbed()
            .setColor(0x5865F2)
            .setDescription('Je hebt niks gekocht!')
            return m.reply({embeds: [embed_niks]}), na_bs()
        }


        })







        }
    }
    

)}






})


        
    









async function na_bs() {
    const command = client.subcommands.get('na_bs')
    setTimeout(async () => {
        await command.run(client, message, args);
    }, 5000);
}





   }
}