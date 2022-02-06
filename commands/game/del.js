const Discord = require("discord.js");
module.exports = {
   name: "delete",
   aliases: ["del"],
   cooldowns: 3000,
   description: "",
   usage: "",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {
     const db = require('quick.db')
    db.delete(`player_${message.author.id}`) 
   },
};
