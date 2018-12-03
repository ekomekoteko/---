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


////////////////////////////////////// كود يقولك كام شخص متبند من السيرفر


               client.on('message', message => {
                   if (message.content.startsWith("?bans")) {
                       message.guild.fetchBans()
                       .then(bans => message.channel.send(`${bans.size} **الاشخــاص الـمتبنده ... من السيرفر ** `))
                 .catch(console.error);
               }
               });






////////////////////////////////////// كود برودكاست للرتبه معينه



          client.on('message' , message => {
      if(message.author.bot) return;

      if(message.content.startsWith("?bk")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')

        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
            return;
        }


              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });

 




////////////////////////////////////// كود يكرر الكلام بالشات كل شوى



client.on('message' , async message => {
            if(message.content.startsWith(prefix + "ads")) {
     await message.channel.send("`ارسال الرساله .`").then(e => {
    let filter = m => m.author.id === message.author.id
    let tests = '';
    let time = '';
    let channel = '';
    let chaTests = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
    .then(collected => {
      tests = collected.first().content
      collected.first().delete()
e.edit("`تكرار الرساله كل ....... دقائق`")
let chaTime = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("`الوقت بالدقائق ! ارقام فقطٍ`");
if(co.first().content > 1500 || co.first().content < 1) return message.channel.send("`لا اقل من دقيقه ولا اكثر من يوم`")
  time = co.first().content
co.first().delete()
  e.edit("`ادخل اسم الروم`")
  let chaChannel = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(col => {
  channel = col.first().content
col.first().delete()
  e.edit("`جاري اعداد المعلومات الرجاء الانتظاار...`").then(b => {
              setTimeout(() => {
    b.edit(`** تم اعداد المعلومات بنجاح .**`)
        },2000);
  })
  var room = message.guild.channels.find('name' , channel)
  if(!room) return;
  if (room) {
setInterval(() => {
room.send(tests);
}, time*60000)
  }
})
})
})

})
}
});

////////////////////////////// يعطيك صوره السيرفر

 client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "simage"){
          const embed = new Discord.RichEmbed()

      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

/////////////////////////////// 	

  client.on('message', message => {
  if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'move')) {
   if (message.member.hasPermission("MOVE_MEMBERS")) {
   if (message.mentions.users.size === 0) {
   return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
  }
  if (message.member.voiceChannel != null) {
   if (message.mentions.members.first().voiceChannel != null) {
   var authorchannel = message.member.voiceChannelID;
   var usermentioned = message.mentions.members.first().id;
  var embed = new Discord.RichEmbed()
   .setTitle("Succes!")
   .setColor("#000000")
   .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
  var embed = new Discord.RichEmbed()
  .setTitle(`You are Moved in ${message.guild.name}`)
   .setColor("RANDOM")
  .setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
   message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
  message.guild.members.get(usermentioned).send(embed)
  } else {
  message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
  }
  } else {
   message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
  }
  } else {
  message.react("❌")
   }}});
 

//////////////////////////////// امر الايدى زى برو بوت 

client.on('message', message => { 
	var prefix ="?";
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`First Bot `, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });



//////////////////////////////////////  كود الافتار 
client.on('message', message => {
    if (message.content.startsWith("?avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

////////////////////////////////////////////////////Code Credit
 const cool = [];
  client.on('message',async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
  
    const args = message.content.split(' ');
    const credits = require('./credits.json');
    const path = './credits.json';
    const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
    const mentionn = message.mentions.users.first() || client.users.get(args[1]);
    const author = message.author.id;
    const balance = args[2];
    const daily = Math.floor(Math.random() * 350) + 10;
  
    if(!credits[author]) credits[author] = {credits: 50};
    if(!credits[mention.id]) credits[mention.id] = {credits: 50};
    fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
  
    
    if(message.content.startsWith(prefix + "credit")) {
    if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
  
    if(args[2]) {
      if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
      if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
      if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
      if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
  
      var number = `${one}${two}${three}${four}`;
      
      message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
          if(c.first().content === number) {
            m.delete();
            message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
            credits[author].credits += (-balance);
            credits[mention.id].credits += (+balance);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
          } else if(c.first().content !== number) {
            m.delete();
            message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
          }
        });
      });
    }
    if(!args[2]) {
      if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
      message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);
    } 
    
    }
    if(message.content.startsWith(prefix + "daily")) {
      if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \`${moment().startOf('day').locale('ar-eg').fromNow().replace('منذ', 'بعد')}\` , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
      if(mentionn) {
        var one = Math.floor(Math.random() * 9) + 1;
        var two = Math.floor(Math.random() * 9) + 1;
        var three = Math.floor(Math.random() * 9) + 1;
        var four = Math.floor(Math.random() * 9) + 1;
    
        var number = `${one}${two}${three}${four}`;
  
        message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
          message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
            if(collected.first().content === number) {
              m.delete();
              collected.first().delete();
              credits[mentionn.id].credits += (+daily);
              fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
  
            message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
            }
            if(collected.first().content !== number) {
              return m.delete();
            }
          });
        });
      } else if(!mentionn) {
        credits[author].credits += (+daily);
        fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
  
        message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
      }
      cool.unshift(message.author.id);
  
      setTimeout(() => {
        cool.shift(message.author.id);
        message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
      }, ms("1d"));
    }
  });









 client.login(process.env.BOT_TOKEN);
