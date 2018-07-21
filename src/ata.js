const shrug = "¯\\_(ツ)_/¯";

module.exports = ctx => {
  const { reply, update, session } = ctx;
  const { savedMessages = {} } = session;
  if (savedMessages.ata && savedMessages.ata.message_id) {
    return reply("👆", {
      reply_to_message_id: savedMessages.ata.message_id
    });
  }

  const { message } = update;
  const { reply_to_message: msgToSave } = message;
  if (msgToSave) {
    ctx.session.savedMessages = { ...savedMessages, ata: msgToSave };
    return reply("ok");
  }

  return reply(shrug);
};
