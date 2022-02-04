const Discord = require("discord.js");
const { Message, Client, MessageActionRow, MessageButton, MessageEmbed, MessageAttachment } = require("discord.js");
const db = require('quick.db')
module.exports = {
   name: "start",
   aliases: ["begin", "play", ""],

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
.setColor(0x5865F2)
.setDescription(`Je bent in de ${last_saved_loc}`)

let array_test_ffs = []
if(m) {
    if(last_saved_loc === 'onderwereld') {
    array_test_ffs.push('hoi') 
         await m.editReply({embeds: [embed_onderwereld_join]})
        
    }
}

    if(array_test_ffs.length === 0) {
        if(last_saved_loc === 'onderwereld') return await message.reply({embeds: [embed_onderwereld_join]})
    }  


  
    
setTimeout(() => {
    if(last_saved_loc === 'styx') {
        
        const embed = new Discord.MessageEmbed()
    .setColor(0x5865F2)
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





    

    


    














































































          async function choose_player() {
            const command = client.subcommands.get('chooseplayer')
            await command.run(client, message, args);
        }
        async function handle_buttons_styx() {
            const command = client.subcommands.get('hbtlstyx')
            await command.run(client, message, args);
        }
   },
   
};




