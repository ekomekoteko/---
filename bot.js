const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?"
 
 
 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/////////////////////////////////////////////////////t7t el Syana
client.on('message', msg => {
  if (msg.content ==='?help') {
    msg.reply('**Wait Please For Update 5%**');
  }
});

client.on('message', msg => {
  if (msg.content === '?suppor') {
    msg.reply('**Wait Please For Update 5%:tm:**');
  }
});


////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////// الاستريمنج 
 client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' ?help ','?invite | ?support ' ];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/FirstBot]`);
    }, ms);

})
 
 
/////////////////////////////////////////////////////////////////////////
 
 
 ///////////////////////////////////////////////////////////////////////// كود معرفه الرسايل الى تتبعت للبوت فى الخاص



///////////////////////////////////////////////////////////////////////// امر تقفيل وفتح الشات
            client.on("message", (message) => {
                        if (message.channel.type === "dm") {
                    if (message.author.id === client.user.id) return;
                    let yumz = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle("Direct Message To The Bot")
                                .addField(`Sent By:`, `<@${message.author.id}>`)
                                .setColor("RANDOM")
                                .setThumbnail(message.author.displayAvatarURL)
                                .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                                .setFooter(`DM Bot Messages | DM Logs`)
                            client.users.get("519255451125415937").send(yumz)
                        }
            });



 
          client.on('message', message => {
                 if(message.content === "?mc") {
                                     if(!message.channel.guild) return message.reply("**This command only for servers**");

             if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__ليس لديك صلاحيات__**");
                        message.channel.overwritePermissions(message.guild.id, {
                      SEND_MESSAGES: false

                        }).then(() => {
                            message.reply("**__تم تقفيل الشات__:red_circle:  https://cdn.discordapp.com/attachments/519248442804011032/519256944045719582/giphy_1.gif **")
                        });
                          }

              if(message.content === "?unmc") {
                                  if(!message.channel.guild) return message.reply("**This command only for servers**");

             if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__ليس لديك صلاحيات__**");
                        message.channel.overwritePermissions(message.guild.id, {
                      SEND_MESSAGES: true

                        }).then(() => {
                            message.reply("**__تم فتح الشات__**:large_blue_circle: https://cdn.discordapp.com/attachments/519248442804011032/519256944045719582/giphy_1.gif")
                        });
              }

          });

 
 
 
 
 ///////////////////////////////////////////////////////////////////////// Members

   client.on('message', message => {
                 if (!message.channel.guild) return;
         if(message.content =='?members')
         var kayan = new Discord.RichEmbed()
         .setThumbnail(message.author.avatarURL)
         .setFooter(message.author.username, message.author.avatarURL)
         .setTitle('🌷| Members info')
         .addBlankField(true)
         .addField('📗| Online',
         `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
         .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
         .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
         .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
         .addField('➡| Server Members',`${message.guild.memberCount}`)
         message.channel.send(kayan);

       });

 



 ///////////////////////////////////////////////////////////////////////// ADMINN BRODCAST


               client.on('message', message => {
                           if(!message.channel.guild) return;
               let args = message.content.split(' ').slice(1).join(' ');
               if (message.content.startsWith('?abc')){
                if (message.author.id !== '411137717884289024') return message.reply('**Hello , Bye**')
               message.channel.sendMessage('جار ارسال الرسالة |✅')
               client.users.forEach(m =>{
               m.sendMessage(args)
               })
               }
               });

			   
			   
			   

               client.on('message', message => {
                           if(!message.channel.guild) return;
               let args = message.content.split(' ').slice(1).join(' ');
               if (message.content.startsWith('?abc')){
                if (message.author.id !== '200644160179535872') return message.reply('** Hello **')
               message.channel.sendMessage('جار ارسال الرسالة |✅')
               client.users.forEach(m =>{
               m.sendMessage(args)
               })
               }
               });


               client.on('guildCreate', guild => {
                 var embed = new Discord.RichEmbed()
                 .setColor(0x5500ff)
                 .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
                     guild.owner.send(embed)
               });



////////////////////////////////////////////////////// Code Ban + kick 


               client.on('message', message => {
                   var prefix = "?"
                 if (message.author.x5bz) return;
                 if (!message.content.startsWith(prefix + "ban")) return;

                 let command = message.content.split(" ")[0];
                 command = command.slice(prefix.length);

                 let args = message.content.split(" ").slice(1);

                 if (command == "ban") {
                              if(!message.channel.guild) return message.reply('** This command only for servers**');

                 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
                 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
                 let user = message.mentions.users.first();
                 let reason = message.content.split(" ").slice(2).join(" ");
                 /*let b5bzlog = client.channels.find("name", "5bz-log");
                 if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
                 if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
                 if(!reason) return message.reply ("**اكتب سبب الطرد**");
                 if (!message.guild.member(user)
                 .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

                 message.guild.member(user).ban(7, user);

                 const banembed = new Discord.RichEmbed()
                 .setAuthor(`BANNED!`, user.displayAvatarURL)
                 .setColor("RANDOM")
                 .setTimestamp()
                 .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
                 .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
                 .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
                 message.channel.send({
                   embed : banembed
                 })
               }
               });







               client.on('message', message => {
                   var prefix = "?"
                 if (message.author.x5bz) return;
                 if (!message.content.startsWith(prefix + "kick" )) return;

                 let command = message.content.split(" ")[0];
                 command = command.slice(prefix.length);

                 let args = message.content.split(" ").slice(1);

                 if (command == "kick") {
                              if(!message.channel.guild) return message.reply('** This command only for servers**');

                 if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
                 if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
                 let user = message.mentions.users.first();
                 let reason = message.content.split(" ").slice(2).join(" ");
                 if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
                 if(!reason) return message.reply ("**اكتب سبب الطرد**");
                 if (!message.guild.member(user)
                 .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

                 message.guild.member(user).kick();

                 const kickembed = new Discord.RichEmbed()
                 .setAuthor(`KICKED!`, user.displayAvatarURL)
                 .setColor("RANDOM")
                 .setTimestamp()
                 .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
                 .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
                 .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
                 message.channel.send({
                   embed : kickembed
                 })
               }
               });




               client.on('message', message => {
                   var prefix = "."
                 if (message.author.x5bz) return;
                 if (!message.content.startsWith(prefix + "ban")) return;

                 let command = message.content.split(" ")[0];
                 command = command.slice(prefix.length);

                 let args = message.content.split(" ").slice(1);

                 if (command == "ban") {
                              if(!message.channel.guild) return message.reply('** This command only for servers**');

                 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
                 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
                 let user = message.mentions.users.first();
                 let reason = message.content.split(" ").slice(2).join(" ");
                 if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
                 if(!reason) return message.reply ("**اكتب سبب الطرد**");
                 if (!message.guild.member(user)
                 .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

                 message.guild.member(user).ban(7, user);

                 const banembed = new Discord.RichEmbed()
                 .setAuthor(`BANNED!`, user.displayAvatarURL)
                 .setColor("RANDOM")
                 .setTimestamp()
                 .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
                 .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
                 .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
                 message.channel.send({
                   embed : banembed
                 })
               }
               });







               client.on('message', message => {
                   var prefix = "."
                 if (message.author.x5bz) return;
                 if (!message.content.startsWith(prefix + "kick" )) return;

                 let command = message.content.split(" ")[0];
                 command = command.slice(prefix.length);

                 let args = message.content.split(" ").slice(1);

                 if (command == "kick") {
                              if(!message.channel.guild) return message.reply('** This command only for servers**');

                 if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
                 if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
                 let user = message.mentions.users.first();
                 let reason = message.content.split(" ").slice(2).join(" ");
                 if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
                 if(!reason) return message.reply ("**اكتب سبب الطرد**");
                 if (!message.guild.member(user)
                 .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

                 message.guild.member(user).kick();

                 const kickembed = new Discord.RichEmbed()
                 .setAuthor(`KICKED!`, user.displayAvatarURL)
                 .setColor("RANDOM")
                 .setTimestamp()
                 .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
                 .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
                 .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
                 message.channel.send({
                   embed : kickembed
                 })
               }
               });



 
 
 
 client.login(process.env.BOT_TOKEN);
