const Discord = require("discord.js");
const db = require("quick.db");

const { Message, Client, MessageActionRow, MessageButton, MessageEmbed, MessageAttachment } = require("discord.js");
module.exports = {
   name: "hbtlstyx",
 
  
   description: "",
   usage: "",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {
    const filter = (i) => i.user.id === message.author.id
    
    
    
    const collector = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 60000, filter: filter})


    collector.on('collect', async (m) => {
        const player_info = db.get(`player_${message.author.id}`)
        if(message.author.id != m.user.id) return m.reply({content: "Deze knop is niet van jou!", ephemeral: true})

        if(m.customId === 'stop') {
        const embed_pauze = new Discord.MessageEmbed()
        .setColor(0x5865F2)
        .setDescription('Je hebt het spel gepauzeerd!')
        m.reply({embeds: [embed_pauze]})
        }

        if(m.customId === 'goud') {
            if(player_info.gold > 2) {
                const embed_geengoud = new Discord.MessageEmbed()
                .setColor(0x5865F2)
                .setDescription(`Je hebt al 2 ${client.emoji.goud} gouden munten`)
                m.reply({embeds: [embed_geengoud]})
                setTimeout(() => {
                   back_to_start()
                }, 5000);
                            }

const embed_opzoek_naar_goud = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription(`Waar wil je ${client.emoji.goud} gouden munten zoeken?`)
 m.reply({embeds: [embed_opzoek_naar_goud], components:[new MessageActionRow().addComponents(
    new MessageButton()
    .setStyle("SUCCESS")
    .setLabel('Struik')
    .setCustomId('struik')
    .setEmoji('<:struik:938903111894974506>')
    , new MessageButton()
    .setStyle("SUCCESS")
    .setLabel('steen')
    .setCustomId('steen')
    .setEmoji('<:rock:938902129274413086>')
    , new MessageButton()
    .setStyle("SUCCESS")
    .setLabel('Boom')
    .setCustomId('boom')
    .setEmoji('🌳')
    

   
)]})

const collector_goud_zoeken = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 60000, filter: filter})

collector_goud_zoeken.on('collect', async (m) => {
    if(message.author.id != m.user.id) return m.reply({content: "Deze knop is niet van jou!", ephemeral: true})
  
    if(m.customId === 'struik') {
        await m.deferReply()
        await db.add(`player_${message.author.id}.gold`, 1)
        const embed_goud_struik = new Discord.MessageEmbed()
        .setImage('https://cdn.discordapp.com/attachments/938882276765335584/939227999704858665/bush_met_coin_inshallah.png')
        .setColor(0x5865F2)
        .setDescription(`Je hebt ${client.emoji.goud} gouden munt gevonden in een struik!`)
    
       await m.editReply({embeds: [embed_goud_struik]})
        setTimeout(() => {
  return back_to_start()
}, 1000);
    }  
    if(m.customId === 'steen') {
        await m.deferReply()
        await db.add(`player_${message.author.id}.gold`, 1)
        const embed_goud_struik = new Discord.MessageEmbed()
        .setColor(0x5865F2)
        .setDescription(`Je hebt ${client.emoji.goud} gouden munt gevonden onder een steen!` )
      
        await m.editReply({embeds: [embed_goud_struik]})
setTimeout(() => {
    return back_to_start()
}, 1000);
    }  

if(m.customId === 'boom') {
    await m.deferReply()
    await db.add(`player_${message.author.id}.gold`, 1)
    const embed_goud_struik = new Discord.MessageEmbed()
    .setColor(0x5865F2)
    .setDescription(`Je hebt ${client.emoji.goud} gouden muntgevonden in een boom!`)
  
    await m.editReply({embeds: [embed_goud_struik]})
    setTimeout(() => {
        return back_to_start()
}, 1000);

}  
})








        }
        if(m.customId === 'charon') {
            const player_info = db.get(`player_${message.author.id}`)
         

            if(player_info.gold === 1) {
const embed_geengoud = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription(`Je hebt nog niet genoeg ${client.emoji.goud}!\nJe moet nog 1 ${client.emoji.goud} gouden munt hebben om verder te gaan! (klik op "zoeken naar goud" om te zoeken) `)
m.reply({embeds: [embed_geengoud]})
setTimeout(() => {
    return back_to_start()
}, 5000);
            }
           



            if(player_info.gold = 2) {
                const embed_genoeggoud = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription(`Je hebt genoeg ${client.emoji.goud} gouden munten!\nWil je naar de onderwereld?\n Je hebt 10 seconden om te klikken`)
m.reply({embeds: [embed_genoeggoud], components:[new MessageActionRow().addComponents(
    new MessageButton()
    .setStyle("SUCCESS")
    .setLabel('Ja')
    .setCustomId('ja_onderwereld')
    , new MessageButton()
    .setStyle("DANGER")
    .setLabel('nee')
    .setCustomId('nee_onderwereld')

   
)]})
const collector_ja_nee = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 10000, filter: filter})


collector_ja_nee.on('collect', async (m) => {
    if(message.author.id != m.user.id) return m.reply({content: "Deze knop is niet van jou!", ephemeral: true})
        if(m.customId === 'ja_onderwereld') {
            await m.deferReply()
            const embed_ja = new Discord.MessageEmbed()
            .setColor(0x5865F2)
            .setDescription('Je hebt 2 <:emojisky:938894175817072650> gouden munten uitgegeven!')
            db.set(`player_${message.author.id}.gold`, 0)
            db.set(`player_${message.author.id}.last_saved_location`, 'onderwereld')
            m.editReply({embeds: [embed_ja]})

            setTimeout(() => {
                return  back_to_start_edirreply_Test(m)
}, 5000);
        }
        if(m.customId === 'nee_onderwereld') {
            await m.deferReply()
            const embed_nee = new Discord.MessageEmbed()
            .setColor(0x5865F2)
            .setDescription(`Je hebt geen ${client.emoji.goud} gouden munten uitgegeven!`)
            m.editReply({embeds: [embed_nee]})
            setTimeout(() => {
                return  back_to_start_edirreply_Test(m)
}, 5000);
        }
    })
            }
            
        }
   })



   async function back_to_start() {
    const command = client.commands.get('start')
    await command.run(client, message, args);
}
async function back_to_start_edirreply_Test(m) {
    const command = client.commands.get('start')
    await command.run(client, message, args, m);
}

}
}
