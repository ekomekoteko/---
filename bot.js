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



 
 
 
 
 
 
 
 
 
 
 
 
 client.login(process.env.BOT_TOKEN);
