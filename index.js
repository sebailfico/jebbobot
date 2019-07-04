const HTMLParser = require('node-html-parser');
const dotenv = require('dotenv');
// const http = require('http');
var https = require('https');
dotenv.config();






const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

// const keyboard = Markup.inlineKeyboard([
//   Markup.urlButton('❤️', 'http://telegraf.js.org'),
//   Markup.callbackButton('Delete', 'delete')
// ])

let hasToSaveVoiceMessage = false;

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username
})

bot.start((ctx) => ctx.reply('Hello'))
bot.help((ctx) => ctx.reply('Help message'))
// bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message))
bot.hears(/.*vagina.*/i, ({ reply }) => reply("dev'essere bella"));
bot.hears(/.*piano.*/i, ({ reply }) => reply("È grande Rocco!"));



bot.hears(/.*pape.*/i, ({ reply }) => reply("https://www.youtube.com/watch?v=IRtQDoYJ4mU"));

// COMMANDS
bot.command('quit', (ctx) => {
  // Explicit usage
  ctx.telegram.leaveChat(ctx.message.chat.id)

  // Using shortcut
  ctx.leaveChat()
})

bot.command('lasbo', (ctx) => {
  // Explicit usage
  hasToSaveVoiceMessage = true;

  ctx.reply("Gimme da Sbò...");
})

bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.on('voice', (ctx) => {
  // ctx.sendCopy(ctx.message.chat.id, ctx.message)

  ctx.reply(ctx.message)
  ctx.reply(ctx.message.voice.file_id)
  ctx.replyWithVoice(ctx.message.chat.id, ctx.message.voice.file_id, null)
  // ctx.sendVoice(ctx.message.chat.id, ctx.message.voice.file_id, {})
})


bot.command('baffo', (ctx) => {


  https.get({ host: 'www.realtimemenu.com', path: '/menu-bar-selfservice-dora-730-itit-p-d.aspx' }, function (res) {

    res.on('data', function (d) {

      // console.log(d)
      // console.log("cagnette")
      // console.log(String(d))

      var root = HTMLParser.parse(String(d));
      var a = root.querySelector('#colonna-centrale a')//[href*="/Public/Images"
      if (a) {
        try {
          console.log(a.childNodes[0].rawAttributes)

        }
        catch{
          console.log("Andato in mona")
        }
      }
      else
        console.log("NISBA MALE");
    });

  }).on('error', function (e) {
    console.log("ERRORACCIO")
    console.error(e);
  });

  // var options = {
  //   host: 'https://www.realtimemenu.com',
  //   port: 80,
  //   path: '/menu-bar-selfservice-dora-730-itit-p-d.aspx'
  // };

  // http.get(options, function(res) {
  //   console.log("Got response: " + res.statusCode);
  // }).on('error', function(e) {
  //   console.log("Got error: " + e.message);
  // });


  // ctx.reply("Gimme da Sbò...");
})



// bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard)))
// bot.action('delete', ({ deleteMessage }) => deleteMessage())
bot.launch()


