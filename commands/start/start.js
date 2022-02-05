const Discord = require("discord.js");
const { Message, Client, MessageActionRow, MessageButton, MessageEmbed, MessageAttachment } = require("discord.js");
const db = require('quick.db')
module.exports = {
   name: "start",
   aliases: ["begin", "play", "s"],

   description: "",
   usage: "",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args, m) => {
       if(!db.has(`player_${message.author.id}`)) {
           choose_player()
       }
const locations = ['Elysische velden', 'Tartaros', 'Asphodelvelden', 'Styx', 'Phletegon', 'Acheron','Cocytus', 'Lethe']
const last_saved_loc = db.get(`player_${message.author.id}.last_saved_location`)

const embed_onderwereld_join = new Discord.MessageEmbed()
.setColor("#303434")
.setDescription(`Je bent nu in de ${last_saved_loc}, waar wil je heen?`)
.setImage('https://cdn.discordapp.com/attachments/938882276765335584/939236600435593257/hell_blink.gif')

let array_test_ffs = []
if(m) {
    if(last_saved_loc === 'onderwereld') {
    array_test_ffs.push('hoi') 
         await m.editReply({embeds: [embed_onderwereld_join],components: [new MessageActionRow().addComponents(
            new MessageButton()
            .setStyle("SUCCESS")
            .setLabel('Ontdekken')
            .setCustomId('explore_underworld')
            .setEmoji('<:square_discovery:939295416724369480>')
            , new MessageButton()
            .setStyle("DANGER")
            .setLabel('stop')
            .setCustomId('stop_uw')
            .setEmoji('🛑')
        
           
        )]})
 
            return await handle_buttons_underworld()
        
    }
}

    if(array_test_ffs.length === 0) {
        if(last_saved_loc === 'onderwereld') {

         await message.reply({embeds: [embed_onderwereld_join],components: [new MessageActionRow().addComponents(
            new MessageButton()
            .setStyle("SUCCESS")
            .setLabel('Ontdekken')
            .setCustomId('explore_underworld')
            .setEmoji('<:square_discovery:939295416724369480>')
            , new MessageButton()
            .setStyle("DANGER")
            .setLabel('stop')
            .setCustomId('stop_uw')
            .setEmoji('🛑')
        
           
        )]})
  
            return await handle_buttons_underworld()
         }
    }  


  
    
setTimeout(() => {
    if(last_saved_loc === 'styx') {
        
        const embed = new Discord.MessageEmbed()
    .setColor("#303434")
    .setDescription(`Je bent bij de ${last_saved_loc}, wat wil je nu doen?`)
    .setImage('https://i.imgur.com/MAPMrc4.png')
    message.reply({embeds: [embed],components: [new MessageActionRow().addComponents(
        new MessageButton()
        .setStyle("SUCCESS")
        .setLabel('Praten met Charon')
        .setCustomId('charon')
        , new MessageButton()
        .setStyle("SUCCESS")
        .setLabel('Zoeken naar goud')
        .setCustomId('goud')
        .setEmoji('<:emojisky:938894175817072650>')
        , new MessageButton()
        .setStyle("DANGER")
        .setLabel('stop')
        .setCustomId('stop')
        .setEmoji('🛑')
    
       
    )]})
    setTimeout(async () => {
       return await handle_buttons_styx()
    }, 100);
    } 
}, 1000);


if( last_saved_loc === 'bs') {
    await handle_buttons_na_bs()
}





    

    


    














































































          async function choose_player() {
            const command = client.subcommands.get('chooseplayer')
            await command.run(client, message, args);
        }
        async function handle_buttons_styx() {
            const command = client.subcommands.get('hbtlstyx')
            await command.run(client, message, args);
        }
        async function handle_buttons_underworld() {
            const command = client.subcommands.get('hbtluw')
            await command.run(client, message, args);
        }
        async function handle_buttons_na_bs() {
            const command = client.subcommands.get('na_bs')
            await command.run(client, message, args);
        }
   },
   
};




