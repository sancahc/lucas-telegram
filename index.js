const { Composer, log, session } = require("micro-bot");

const bot = new Composer();

bot.use(log());
bot.use(session());

bot.start(({ reply }) =>
  reply("Oi, eu sou o Lucas, um dos bots do Hackerspace Sanca.")
);
bot.help(({ reply }) =>
  reply(
    "Não tenho comandos úteis, ajude enviando um PR para https://github.com/sancahc/lucas-telegram"
  )
);
bot.settings(({ reply }) => reply("Bot settings"));

bot.command("date", ({ reply }) => reply(`Server time: ${Date()}`));

module.exports = bot;
