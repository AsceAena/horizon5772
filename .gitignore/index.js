const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: ~Help");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "~Help"){
        message.channel.sendMessage("Liste des commandes: \n ~Test : Tester le bot \n ~AEmbed : Créer des Embed \~Avatar : Afficher votre avatar");
    }

    if (message.content === "~Test"){
        message.reply("test :)");
        console.log("Commande Salut effectué")
        message.reply;
    }
    if (message.content === "Test"){
        message.channel.sendMessage("Test \n Test2")
    }

     
      if (message.content.split(" ")[0] == "~AEmbed"){//EMBED
        var embed = new Discord.RichEmbed()
        .setColor("#0b8cf1")
        .setTitle(message.content.slice("*AEmbed ".length))
        console.log("Commande test")
        message.channel.send({embed})
      }

       if (message.content === '~avatar') {
        message.reply(message.author.avatarURL);
      }
      

      
});
