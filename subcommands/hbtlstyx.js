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
    const filter = i => { 
        if(i.user.id != message.author.id) return i.reply({content: "Die knop is niet van jou!", ephemeral: true})
    }
    
    
    const collector = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 10000, filter: filter})


    collector.on('collect', async (m) => {
        if(m.customId === 'stop') {
        const embed_pauze = new Discord.MessageEmbed()
        .setColor(0x5865F2)
        .setDescription('ik heb het gepauzeerd')
        m.reply({embeds: [embed_pauze]})
        }

        if(m.customId === 'goud') {
const embed_opzoek_naar_goud = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription(`Waar wil je ${client.emoji.goud} zoeken?`)
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

const collector_goud_zoeken = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 10000, filter: filter})

collector_goud_zoeken.on('collect', async (m) => {
    if(m.customId === 'struik') {
        const embed_goud_struik = new Discord.MessageEmbed()
        .setColor(0x5865F2)
        .setDescription(`Je hebt ${client.emoji.goud} gevonden in een struik!`)
        db.add(`player_${message.author.id}.gold`, 1)
        m.reply({embeds: [embed_goud_struik]})
        setTimeout(() => {
   back_to_start()
}, 5000);
    }  
    if(m.customId === 'steen') {
        const embed_goud_struik = new Discord.MessageEmbed()
        .setColor(0x5865F2)
        .setDescription(`Je hebt ${client.emoji.goud} gevonden onder een steen!` )
        db.add(`player_${message.author.id}.gold`, 1)
        m.reply({embeds: [embed_goud_struik]})
setTimeout(() => {
   back_to_start()
}, 5000);
    }  

if(m.customId === 'boom') {
    const embed_goud_struik = new Discord.MessageEmbed()
    .setColor(0x5865F2)
    .setDescription(`Je hebt ${client.emoji.goud} gevonden in een boom!`)
    db.add(`player_${message.author.id}.gold`, 1)
    m.reply({embeds: [embed_goud_struik]})
    setTimeout(() => {
   back_to_start()
}, 5000);

}  
})








        }
        if(m.customId === 'charon') {
            const player_info = db.get(`player_${message.author.id}`)

            if(player_info.gold === 1) {
const embed_geengoud = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription(`Je hebt nog niet genoeg ${client.emoji.goud}!\nJe moet nog 1 ${client.emoji.goud} hebben om verder te gaan! (klik op "zoeken naar goud" om te zoeken) `)
m.reply({embeds: [embed_geengoud]})
setTimeout(() => {
   back_to_start()
}, 5000);
            }
            if(player_info.gold > 2) {
                const embed_geengoud = new Discord.MessageEmbed()
                .setColor(0x5865F2)
                .setDescription(`Je hebt al 2 ${client.emoji.goud}`)
                m.reply({embeds: [embed_geengoud]})
                setTimeout(() => {
                   back_to_start()
                }, 5000);
                            }



            if(player_info.gold = 2) {
                const embed_genoeggoud = new Discord.MessageEmbed()
.setColor(0x5865F2)
.setDescription(`Je hebt t genoeg ${client.emoji.goud}!\nWil je naar de onderwereld?`)
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
        if(m.customId === 'ja_onderwereld') {
            const embed_ja = new Discord.MessageEmbed()
            .setColor(0x5865F2)
            .setDescription('Ik heb 2 <:emojisky:938894175817072650> goude munten voor jou uitgegeven!')
            db.set(`player_${message.author.id}.gold`, 0)
            db.set(`player_${message.author.id}.last_saved_location`, 'onderwereld')
            m.reply({embeds: [embed_ja]})
            setTimeout(() => {
   back_to_start()
}, 5000);
        }
        if(m.customId === 'nee_onderwereld') {

            const embed_nee = new Discord.MessageEmbed()
            .setColor(0x5865F2)
            .setDescription(`Ik heb geen ${client.emoji.goud} voor je uit gegeven!`)
            m.reply({embeds: [embed_nee]})
            setTimeout(() => {
   back_to_start()
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

}
}
