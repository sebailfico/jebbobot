const dotenv = require('dotenv');
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


// bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard)))
// bot.action('delete', ({ deleteMessage }) => deleteMessage())
bot.launch()


