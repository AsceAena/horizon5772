const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("~")

bot.on('ready', function() {
    bot.user.setGame("Commandes: ~help");
    console.log("Connectedç");
});

bot.login(process.env.Token1);

bot.on('guildMemberAdd', member => {

  let serverTag = member.guild.name
  const welcomechannel = member.guild.channels.find('name', 'friterie-1-🍟')
  var embed = new Discord.RichEmbed()
  .setColor('#FF4500')
  .setDescription(`:inbox_tray:  **Bienvenue à <@${member.user.id}> qui nous rejoint à ${serverTag} !!** \n \n Nous t'invitons à lire les informations complémetaires dans le channel <#513811643172388910>, ainsi qu'à __lire le réglement__, <#513815192698617883> ! \n \n Bonne visite à La Friterie et bon appétit !! 🍟`)
  .setImage(member.avatarURL)
  return welcomechannel.send({embed})
});

bot.on("guildMemberRemove", member => {
  let serverTag = member.guild.name
  const GG = member.guild.channels.find('name', 'friterie-1-🍟')   
  var embed = new Discord.RichEmbed()
  .setColor('#FF8C00')
  .setDescription(`:inbox_tray: <@${member.user.id}> **à quitté ${serverTag} , à la prochaine fois en espérant te revoir très bientôt !!** 🍟`)
  return GG.send({embed})
});

bot.on('message', message => {
        if (message.content === prefix + "start"){
            message.channel.sendMessage("Bot en cours d'éxecution !");
        }

if (message.content === "~test"){
            message.channel.sendMessage("```css \n Test 1...```  ```Test1 OK```  ```Bot OK```")
              }

  if(message.content === "~help") { 
    var embed = new Discord.RichEmbed()
     .setTitle("Liste des commandes :")
     .addField("**~LaCarte**", "Renseignez vous sur nos produits à consommer !")
     .addField(" \n **~test : **", "Tester le bot.")
     .addField("**~embed : **", "Créer des Embed.")
     .addField("**~avatar :**", "Afficher votre propre avatar.")
     .addField("**~infodiscord :**", "Infos à propos du serveur.")
     .addField("**~infobot : **", "Afficher des renseignement à propos du bot")
     .addField("**~createchannel : **", "Créer vos propres channels !")
     .addField("**~cmdbump :**", "Affiche les commandes pour bumper le serveur !! ")
     .addField("**~say :**", "Faites dire ce que vous souhaitez au bot !.")
     .addField("**~sondage :**", "Faites voter vos idées !.")
     .addField("**~listfun :**", "Afficher la liste des commandes.. inutile")
     .addField(" \n ***Bonne visite à la Friterie ! Et bon appétit !***", "**:D**")
     .setColor("#FF4500")
        message.channel.sendEmbed(embed)
      }

  if(message.content === "~infodiscord") { 
      let bicon = message.author.displayAvatarURL;
      var embed = new Discord.RichEmbed()
    .setThumbnail(bicon)
    .setTitle("Information du Discord")
    .addField("Nom du discord", message.guild.name)
    .addField("Crée le", message.guild.createdAt)
    .addField("Tu as rejoins le", message.member.joinedAt)
    .addField("Utilisateur sur le discord", message.guild.memberCount)
    .addField("Nombre de catégories et de salons", message.guild.channels.size)
    .setFooter("La Friterie")
    .setColor("#FF4500")
         message.channel.sendEmbed(embed)
     }

  if(message.content === "~infobot"){
      let bicon1 = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
    .setTitle("Information du bot")
    .setColor("#15f153")
    .setThumbnail(bicon1)
    .addField("Nom du bot", bot.user.username)
    .addField("Créer le", bot.user.createdAt);
       message.channel.send(botembed);
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

   if(message.content === "~createtchannel"){
    message.reply("Merci de mentionner un nom de channel avec la commande  ``~createchannel <Nom>`` !")
  }else{
   if(message.content.startsWith('~createtchannel')) {
     if(!message.member.hasPermission("MANAGE_CHANNELS")){
      message.reply("Vous n'avez pas la permission.")
     }else{
      const args = message.content.slice(16)
      const args2 = args.toLocaleLowerCase()
      message.guild.createChannel(`${args2}`, 'text',).then(channel => {
      channel.setParent('520741915570864131')
      var embedvv = new Discord.RichEmbed()
    .setColor("RANDOM")  
    .setDescription(`Votre channel textuel ${args} a bien été implémanté ! <#${channel.id}>`)
     message.channel.send(embedvv)
     const channelrc = message.guild.channels.find('name', `${args2}`)
        var embedd = new Discord.RichEmbed()
        .setColor('#FF4500')
        .setTitle(`${args}`)
        .setDescription(`**Voici votre channel ! <@${message.author.id}>**`)
        channelrc.sendEmbed(embedd)
    })
}}};

if(message.content === "~deletechannel"){
  message.reply("Merci de mentionner un channel avec la commande ``~deletechannel`` !")
}else{
  if(message.content.startsWith("~deletechannel")){
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
      message.reply("Vous n'avez pas pas la permission.")
    }else{
      const argss = message.content.slice(15)
      const argss2 = argss.toLocaleLowerCase()
      const channelrss = message.guild.channels.find('name', `${argss2}`)
       channelrss.delete(`${argss2}`, 'text',).then(console => {
         console.log("cc")
        var embedss = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Le channel textuel ${argss} a bien été supprimé !`)
        channel.sendEmbed(embedss)
      })
    }
  }
  
};

   if(message.content === "~ping"){
     message.channel.sendMessage('Temps de latence avec le serveur: `' + `${message.createdTimestamp - Date.now()}` + 'ms`');
   }

    if (message.content.split(" ")[0] == "~embed"){//EMBED
        message.delete()
        var embed = new Discord.RichEmbed()
      .setColor("#FF7F50")  
      .setDescription(message.content.slice("~embed ".length))
        message.channel.send({embed});
      }
        
   if(message.content === "~avatar"){
        message.reply("Merci de mentionner un utilisateur valide avec la commande ``~avatar [Utilisateur]``")
     }else{
        if(message.content.startsWith('~avatar')) {
            var user = message.mentions.users.first();
            let embed = new Discord.RichEmbed()
          .setImage(user.avatarURL)
          .setColor('RANDOM')
            message.channel.send(embed);
          }};
          
   if (message.content.startsWith("~say")) {
          message.delete()
          const str = message.content.substring("~say".length)
          message.channel.sendMessage(str)
        }

    if(message.content === "~cmdbump"){
        var embedcmd = new Discord.RichEmbed()
      .setColor('RANDOM')
      .addField("``?bump``", "*Bump_Bot*")
      .addField("``!disboard bump``", "*Disboard*")
        message.channel.sendEmbed(embedcmd)
      }

   if (message.content.split(" ")[0] == "~sondage"){//sondage
          message.delete()
          var embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(message.content.slice("~sondage ".length))
          message.channel.send({embed}).then(embedMessage => {
          embedMessage.react("👍");
          embedMessage.react("👎");
      })}
         
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

