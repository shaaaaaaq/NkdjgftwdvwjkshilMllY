const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', message => {
    if (message.content === 'help') {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle('**أوامر الميوزك...**')
        .setDescription('**برفكس البوت (!)**')
        .addField('play', 'لتشغيل اغنية')
        .addField('join', 'دخول رومك الصوتي')
        .addField('disconnect', 'الخروج من رومك الصوتي')
        .addField('skip', 'تخطي الأغنية')
        .addField('pause', 'ايقاف الاغنية مؤقتا')
        .addField('resume', 'تكملة الاغنية')
        .addField('queue', 'اظهار قائمة التشغيل')
        .addField('np', 'اظهار الاغنية اللي انت مشغلها حاليا')
        .setFooter('(general_commands) لاظهار الاوامر العامة')
      message.channel.send(helpEmbed);




client.login("NDgwNDcyMzc1MDQ1OTE0NjM0.DloXYQ.FI9Bfxgrt0jmS2sog5LCRgstj4Y");
