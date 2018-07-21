const { Composer, log, session } = require("micro-bot");

const knownStickers = require("./knownStickers");
const ata = require("./ata");

const bot = new Composer();
const { NODE_ENV } = process.env;

console.log({ NODE_ENV });

if (NODE_ENV === "development") {
  bot.use(log());
}

bot.use(session());
bot.use(knownStickers);

bot.on("sticker", ctx => {
  const { reply, state } = ctx;
  if (state.stickerMeaning === "ata") {
    return ata(ctx);
  }
});
bot.command("/ata", ata);

bot.start(({ reply }) =>
  reply("Oi, eu sou o Lucas, um dos bots do Hackerspace Sanca.")
);

bot.help(({ reply }) =>
  reply(
    "Não tenho comandos úteis, ajude enviando um PR para https://github.com/sancahc/lucas-telegram"
  )
);

module.exports = bot;
