const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("~")

bot.on('ready', function() {
    bot.user.setGame("Commandes: ~help");
    console.log("Connectedç");
});

bot.login(process.env.Token1);


bot.on("guildMemberAdd", member =>{
  member.guild.channels.find("name", "friterie-1-🍟").send('Bienvenue ${member}')
})

bot.on("guildMemberRemove", member => {
  member.guild.channels.find("name", "friterie-1-🍟").send('${member} viens de quitter')
})

bot.on('guildMemberAdd', member => {
  var role = member.guild.roles.find('name', 'Clients');
  member.addRole(role)
})

bot.on('message', message => {
        if (message.content === prefix + "start"){
            message.channel.sendMessage("Bot en cours d'éxecution !");
        }


    
        
        if (message.content === "~test"){
            message.channel.sendMessage("```css \n Test 1...```  ```Test1 OK```  ```Bot OK```")
              }
          
    
    if (message.content.split(" ")[0] == "~embed"){//EMBED
             message.delete()
             var embed = new Discord.RichEmbed()
            .setColor("#FF7F50")
            .setDescription(message.content.slice("~embed ".length))
            console.log("Embed")
            message.channel.send({embed})
          }

    
          if (message.content === "~avatar") {
        var embed5 = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("RANDOM")
            message.channel.send({embed5})
          }
        
       if(message.content === "~infodiscord") { 
             var embed = new Discord.RichEmbed()
             .setTitle("Information du Discord")
             .addField("Nom du discord", message.guild.name)
            .addField("Crée le", message.guild.createdAt)
            .addField("Tu as rejoins le", message.member.joinedAt)
            .addField("Utilisateur sur le discord", message.guild.memberCount)
            .addField("Nombre de catégories et de salons", message.guild.channels.size)
            .setFooter("La Friterie")
            .setColor("RANDOM")
         message.channel.sendEmbed(embed)
         }

        
         if (message.content.startsWith("~say")) {
          message.delete()
          const str = message.content.substring("~say".length)
          message.channel.sendMessage(str)
        }

        if(message.content === "~help") { 
          var embed = new Discord.RichEmbed()
          .setTitle("Liste des commandes :")
          .addField("**~LaCarte**", "Renseignez vous sur nos produits à consommer !")
          .addField(" \n **~test : **", "Tester le bot.")
         .addField("**~embed : **", "Créer des Embed.")
         .addField("**~avatar :**", "Afficher votre propre avatar.")
         .addField("**~infodiscord :**", "Infos à propos du serveur.")
         .addField("**~say :**", "Faites dire ce que vous souhaitez au bot !.")
         .addField("**~sondage :**", "Faites voter vos idées !.")
         .addField("**~listfun :**", "Afficher la liste des commandes.. inutile")
         .addField(" \n ***Bonne visite à la Friterie ! Et bon appétit !***", "**:D**")
         .setColor("#8800fc")
      message.channel.sendEmbed(embed)
        }


        if (message.content.split(" ")[0] == "~sondage"){//sondage
          message.delete()
          var embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(message.content.slice("~sondage ".length))
          console.log("sondage")
          message.channel.send({embed}).then(embedMessage => {
            embedMessage.react("👍");
            embedMessage.react("👎");
         })
         }


    var randnum = 0

        function randomc(min, max){
          min = Math.ceil(0);
          max = Math.floor(6);
          randnum = Math.floor(Math.random() * (max - min +1)+ min);
      }

      if (message.content === "~frites"){
        randomc()
        if (randnum ==1){
          var embed = new Discord.RichEmbed()
          .setDescription("1")
          .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514163546272038922/frite-belge-friteuse-pro.jpg")
         .setColor("RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }
     
        if (randnum ==2){
          var embed = new Discord.RichEmbed()
          .setDescription("2")
          .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514163545718521868/images_3.jpeg")
         .setColor("RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }

        if (randnum ==3){
          var embed = new Discord.RichEmbed()
          .setDescription("3")
          .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514163545718521866/ls.jpg")
         .setColor("RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }

        if (randnum ==4){
          var embed = new Discord.RichEmbed()
          .setDescription("4")
          .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514163544506499072/telechargement_4.jpeg")
         .setColor("#RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }

        if (randnum ==5){
          var embed = new Discord.RichEmbed()
          .setDescription("5")
          .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514163543906451479/348s.jpg")
         .setColor("RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }

        if (randnum ==6){
            var embed = new Discord.RichEmbed()
            .setDescription("6")
            .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514163543906451476/536d9bf8b164c6babb8d7b14a2e694c5-1302886126.jpg")
           .setColor("RANDOM")
        message.channel.sendEmbed(embed)
              console.log(randnum);
          }
 }

    if(message.content === "~listfun") { 
      var embed1 = new Discord.RichEmbed()
      .setDescription("***Liste des commandes fun :***")
      .addField("**~frites : **", "Fait apparaitre une image de frites !!.")
      .addField("**Hugs :**", "Faites des câlins !")
      .addField("**Et d'autres à venir..**", "Proposez vos idées..")
     .setColor("#8800fc")
  message.channel.sendEmbed(embed1)
    }
      

    var randhug = 0

        function random(min, max){
          min = Math.ceil(0);
          max = Math.floor(4);
          randhug = Math.floor(Math.random() * (max - min +1)+ min);
      }

      if (message.content === "Hugs"){
        random()
        if (randhug ==1){
          var embed = new Discord.RichEmbed()
          .setDescription("***Tiens un câlin ! :D***")
         .setColor("#8800fc")
      message.channel.sendEmbed(embed)
            console.log(randhug);
        }
     
        if (randhug ==2){
          var embed = new Discord.RichEmbed()
          .setDescription("***Non ?! T'as cru que j'étais ton pote ?*** ")
         .setColor("#000000")
      message.channel.sendEmbed(embed)
            console.log(randhug);
        }

        if (randhug ==3){
          var embed = new Discord.RichEmbed()
          .setDescription("***Petit câlin - qui fait du bien.~***")
         .setColor("#C71585")
      message.channel.sendEmbed(embed)
            console.log(randhug);
        }

        if (randhug ==4){
          var embed = new Discord.RichEmbed()
          .setDescription("***Full of hugs for you!*** ")
         .setColor("#FFB6C1")
      message.channel.sendEmbed(embed)
            console.log(randhug);
        }
        
    }
                
                

     });

