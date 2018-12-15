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
  message.channel.sendMessage("```Execution => test.exe```")
  setTimeout(() => {message.channel.sendMessage("``.``");}, 60 * 14)
  setTimeout(() => {message.channel.sendMessage("``.``");}, 60 * 14)
  setTimeout(() => {message.channel.sendMessage("``.``");}, 60 * 14)
  setTimeout(() => {message.channel.sendMessage("```OK```");}, 60 * 18)
}

  if(message.content === "~help") { 
    var embed = new Discord.RichEmbed()
     .setTitle("Liste des commandes :")
     .addField("**~LaCarte**", "Renseignez vous sur nos produits à consommer !")
     .addField(" \n **~test : **", "Tester le bot.")
     .addField("**~embed : **", "Créer des Embed.")
     .addField("**~avatar :**", "Afficher l'avatar de qui vous souhaitez.")
     .addField("**~infodiscord :**", "Infos à propos du serveur.")
     .addField("**~infobot : **", "Afficher quelques renseignement à propos du bot")
     .addField("**~createchannel : **", "Créer vos propres channels !")
     .addField("**~cmdbump :**", "Affiche les commandes pour bumper le serveur !! ")
     .addField("**~say :**", "Faites dire ce que vous souhaitez au bot !.")
     .addField("**~ping :**", "Indication du temps de latence du serveur")
     .addField("**~date :**", "Il vous sera indiqué la date actuelle !")
     .addField("**~sondage :**", "Faites voter vos idées !")
     .addField("**~listfun :**", "Afficher la liste des commandes.. inutile")
     .addField("**~modocmd**", "Affiche les commandes pour les modérateurs !")
     .addField(" \n ***Bonne visite à la Friterie ! Et bon appétit !***", "**:D**")
     .setColor("#FF8C00")
     .setAuthor("La Friteuse")
     .setFooter("La Friterie")
        message.channel.sendEmbed(embed)
      };

      if(message.content === "~modocmd") { 
        var embed = new Discord.RichEmbed()
      .setTitle("Commande de modération")
      .addField("~clear <nombre>", "Effacer un nombre de message voulu")
      .addField("~mute <mention>", "Muter un membre du serveur")
      .addField("~kick <mention>", "Kick un membre du serveur")
      .addField("~ban <mention>", "Ban un membre du serveur")
      .setFooter("La Friterie")
      .setColor("#FF4500")
           message.channel.sendEmbed(embed)
       };

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
     };

  if(message.content === "~infobot"){
      let bicon1 = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
    .setTitle("Information du bot")
    .setColor("#FF8C00")
    .setThumbnail(bicon1)
    .addField("Nom du bot", bot.user.username)
    .addField("Développeur", "<@387291278670430208>")
    .addField("Nombre de commande :", "**25**")
    .addField("Créer le", bot.user.createdAt)
    .addField("Pour toute aide : ", "``~help``");
       message.channel.send(botembed);
    };

   if(message.content === "~listfun") { 
      var embed1 = new Discord.RichEmbed()
    .setTitle("Liste des commandes fun :")
    .addField("**~frites : **", "Fait apparaitre une image de frites !!.")
    .addField("**Hugs :**", "Faites des câlins !")
    .addField("**Et d'autres à venir..**", "Proposez vos idées..")
    .setColor("#8800fc")
       message.channel.sendEmbed(embed1)
   };

   if(message.content === "~createchannel"){
    var embedz = new Discord.RichEmbed()
    .setTitle("Création de channel ")
    .setDescription("***Ces commandes sont uniquemet utilisables par les utilisateurs ayant la permission de \"Manage Channels\"***")
    .addField("**~createtchannel : **", "Créer votre channel textuel avec : ``~createtchannel <nom>``")
    .addField("**~tempochannel : **", "Créer votre channel vocal privé avec : ``~tempochannel <\"nom\"> <nombre>``")
    .addField("**~deletechannel : **", "Supprimer votre channel après l'avoir utilisé avec : ``~deletechannel <nom>``")
    .setFooter(`Toutes ces commandes sont à utiliser dans le channel invocation !`)
    .setColor("#FF4500")
       message.channel.sendEmbed(embedz)
   };

   if(message.content === "~createtchannel"){
    message.reply("Merci de mentionner un nom de channel avec la commande  ``~createtchannel <Nom>`` !")
  }else{
   if(message.content.startsWith('~createtchannel')) {
     if(!message.member.hasPermission("MANAGE_CHANNELS")){
      message.reply("Vous n'avez pas la permission.")
     }else{
      const argsws = message.content.slice(16)
      const args2t = argsws.toLocaleLowerCase()
      message.guild.createChannel(`${args2t}`, 'text',).then(channel => {
      channel.setParent('520741915570864131')
      var embedvv = new Discord.RichEmbed()
    .setColor("RANDOM")  
    .setDescription(`Votre channel textuel <#${channel.id}> a bien été créé ! `)
     message.channel.send(embedvv)
     const channelrc = message.guild.channels.find('name', `${args2t}`)
        var embedd = new Discord.RichEmbed()
        .setColor('#FF4500')
        .setTitle(`${argsws}`)
        .setDescription(`**Voici votre channel ! <@${message.author.id}>**`)
        channelrc.sendEmbed(embedd)
    })
}}};

if(message.content === "~deletechannel"){
  message.reply("Merci de mentionner un channel avec la commande ``~deletechannelt`` !")
}else{
  if(message.content.startsWith("~deletechannel")){
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
      message.reply("Vous n'avez pas pas la permission.")
    }else{
      var argss = message.content.slice(15)
      var argss2 = argss.toLocaleLowerCase()
      var channelrss = message.guild.channels.find('name', `${argss2}`)
      if(!message.guild.channels.exists('name', `${argss2}`)){
        message.reply("Channel introuvable") 
      }else{
      const channelip = message.guild.channels.find('name', `invocation`)
       channelrss.delete(`${argss2}`, 'text',).then(message => {
         var embedss = new Discord.RichEmbed()
         .setColor('#FF4500')
         .setDescription(`Le channel #${argss} a bien été supprimé !`)
         channelip.sendEmbed(embedss)
      })}
    }}};
   
if(message.content === "~clear"){
  message.reply("Merci de préciser le nombre de message à supprimer avec la commande ``~clear <nombre>")
}else{
  if(message.content.startsWith("~clear")){
    if(!message.member.hasPermission("KICK_MEMBERS")){
      message.reply("Vous n'avez pas la permission")
    }else{
      var limita = message.content.slice(7)
      var limitao = parseInt(limita)
      message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(limitao + 1);
            messagesDeleted = messages.array().length
            var embedw = new Discord.RichEmbed()
         .setColor('#FF4500')
         .setDescription(`Messages supprimés avec succés. \n Total  des messages supprimés : ` + limitao)
         message.channel.sendEmbed(embedw)
         setTimeout(() => {message.channel.bulkDelete(1);}, 60 * 250)
          })
      }}};

if(message.content === "~ping"){
     message.channel.sendMessage('Temps de latence avec le serveur: `' + `${message.createdTimestamp - Date.now()}` + 'ms`');
   };

    if (message.content.split(" ")[0] == "~embed"){//EMBED
        message.delete()
        var embed = new Discord.RichEmbed()
      .setColor("#FF7F50")  
      .setDescription(message.content.slice("~embed ".length))
        message.channel.send({embed});
      };
        
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
        };

  if(message.content === "~cmdbump"){
        var embedcmd = new Discord.RichEmbed()
      .setColor('#FF8C00')
      .addField("**Bump Bot**", "``?bump``")
      .addField("**Disboard**", "``!disboard bump``")
      .setFooter("La Friterie")
        message.channel.sendEmbed(embedcmd)
      };

   if (message.content.split(" ")[0] == "~sondage"){//sondage
          message.delete()
          var embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`**Idée de : ${message.author}** \n ${message.content.slice("~sondage ".length)} `);
          message.channel.send({embed}).then(embedMessage => {
          embedMessage.react("👍");
          embedMessage.react("👎");
      })};
         
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

    class TempChannel {
      constructor(msg) {
          this.msg = msg;
          this.guild = msg.guild;
          this.channel;
          this.namer;
          this.max;
  
          this.getArgs();
          this.create();
          this.interval = setInterval(() => {this.autodelete()}, 1000 * 60 * 1);
      }
  
      getArgs() {
          this.namer = this.msg.content.split('"')[1];
          this.max = Number(this.msg.content.split('"')[2].split(" ")[1]);
      }
  
      create() {
          this.guild.createChannel(this.namer, "voice")
              .then(chan => {
                  this.get(chan);
              })
              .catch(console.error);
      }
  
      get(chan) {
          this.channel = chan;
          this.channel.setParent("520741915570864131")
              .catch(console.catch);
  
          this.channel.edit({
              userLimit: this.max
          })
      }
  
      autodelete() {
          if (this.channel.members.array().length == 0) {
              this.delete();
              clearInterval(this.interval);
          }
      }
  
      delete() {
          this.channel.delete();
      }
  }

  bot.on('message', msg => {
    if (msg.content == '~tempochannel'){
        msg.reply("Merci d'utiliser correctement la commande avec ``~tempochannel <\"nom\"> <nombre>``");
    }else{
      if(msg.content.startsWith('~tempochannel')) {
        if(!msg.member.hasPermission("MANAGE_CHANNELS")){
         msg.reply("Vous n'avez pas la permission.")
        }else{
          var num = msg.content.slice.length
          if(num === 2){
            new TempChannel(msg);
          var embed1 = new Discord.RichEmbed()
          .setDescription("***Channel créé avec succés !***")
          .setColor("#8800fc")
             msg.channel.sendEmbed(embed1).catch(err => console.log(err));
            }else{
               msg.reply("Merci d'utiliser correctement la commande avec ``~tempochannel <\"nom\"> <nombre>``.")
            }}}}
     });

  bot.on('message', msg => {
    if (msg.content === "~mute"){
      msg.reply("Vous devez mentionner un utilisateur à mute avec ``~mute <nom>``");
    }else{
    if(msg.content.startsWith("~mute")){
      if(!msg.member.hasPermission("KICK_MEMBERS")){
        msg.reply("Vous n'avez pas la permission de mute !")
      }else{
        let mute_role = msg.guild.roles.find("name", "Mute");
      let memberd = msg.mentions.members.first();
      memberd.addRole(mute_role)
      setTimeout(() => {memberd.removeRole(mute_role);}, 60 * 20000)
        var embedsys = new Discord.RichEmbed()
        .setColor('#FF4500')
        .setTitle(`Mute de 20 minutes effectué avec succés !`)
        .setDescription(`${memberd} s'est fait mute par ${msg.author} le temps de 20 minutes..`)
        .setImage("https://static1.terrafemina.com/articles/4/34/35/44/@/506712-faire-rechauffer-ses-frites-622x0-1.gif")
        .setFooter("Cordialement, La Friterie")
        .setAuthor("La Friteuse")
        msg.channel.sendEmbed(embedsys)
        }}}
});

bot.on('message', msg => {
  if (msg.content === "~ban"){
    msg.reply("Vous devez mentionner un utilisateur à ban avec ``~ban <nom>``");
  }else{
  if(msg.content.startsWith("~ban")){
    if(!msg.member.hasPermission("BAN_MEMBERS")){
      msg.reply("Vous n'avez pas la permission de ban !")
    }else{
    let memberd = msg.mentions.members.first();
     memberd.ban("GG")
      var embedsys = new Discord.RichEmbed()
      .setTitle("BAN effectué avec succés !")
      .setColor('#FF4500')
      .setDescription(`${memberd} s'est fait ban par ${msg.author} ! Ce n'est qu'un au revoir !!`)
      .setImage("http://www.gif-maniac.com/gifs/9/8887.gif")
      .setFooter("Cordialement, La Friterie")
      .setAuthor("La Friteuse")
      msg.channel.sendEmbed(embedsys)
      }}}
});

bot.on('message', msg => {
  if (msg.content === "~kick"){
    msg.reply("Vous devez mentionner un utilisateur à kick avec ``~kick <nom>``");
  }else{
  if(msg.content.startsWith("~kick")){
    if(!msg.member.hasPermission("KICK_MEMBERS")){
      msg.reply("Vous n'avez pas la permission de kick !")
    }else{
    let memberd = msg.mentions.members.first();
     memberd.kick("GG")
      var embedsys = new Discord.RichEmbed()
      .setTitle('KICK effectué avec succés !')
      .setColor('#FF4500')
      .setDescription(`${memberd} s'est fait Kick par ${msg.author} ! A la prochaine à la Friterie !!`)
      .setImage("https://data.photofunky.net/output/image/0/c/1/0/0c10f3/photofunky.gif")
      .setAuthor("La Friteuse")
      .setFooter("Cordialement, La Friterie")
      msg.channel.sendEmbed(embedsys)
      }}}
});

bot.on('message', msg => {
  
    const date = new Date();
    let hour = date.getHours() +1;
    hour = (hour < 10 ? '0' : '') + hour;
    let min = date.getMinutes();
    min = (min < 10 ? '0' : '') + min;
    let sec = date.getSeconds();
    sec = (sec < 10 ? '0' : '') + sec;
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = (month < 10 ? '0' : '') + month;
    let day = date.getDate();
    day = (day < 10 ? '0' : '') + day;

   
   if(msg.content === "~date"){
    var embedsys = new Discord.RichEmbed()
    .setTitle('HORLOGE')
    .setColor('RANDOM')
    .addField(`__**Heure :**__`, `**${hour}h ${min}min ${sec}sec**`)
    .addField(`__**Date :**__`, `**${day}/${month}/${year}**`)
    .setAuthor("La Friteuse")
    .setFooter("La Friterie")
    msg.channel.sendEmbed(embedsys)
};


    
});
