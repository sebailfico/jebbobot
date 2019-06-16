const dotenv = require('dotenv');
dotenv.config();





const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

// const keyboard = Markup.inlineKeyboard([
//   Markup.urlButton('❤️', 'http://telegraf.js.org'),
//   Markup.callbackButton('Delete', 'delete')
// ])



const bot = new Telegraf(process.env.BOT_TOKEN)
bot.telegram.getMe().then((botInfo) => {
    bot.options.username = botInfo.username
  })

bot.start((ctx) => ctx.reply('Hello'))
bot.help((ctx) => ctx.reply('Help message'))
// bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message))
bot.hears(/.*vagina.*/i,  ({ reply }) => reply("dev'essere bella") );
bot.hears(/.*piano.*/i,  ({ reply }) => reply("È grande Rocco!") );



// bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard)))
// bot.action('delete', ({ deleteMessage }) => deleteMessage())
bot.launch()
