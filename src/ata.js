const shrug = "¯\\_(ツ)_/¯";

module.exports = ctx => {
  const { reply, update, session } = ctx;
  const { message } = update;
  const { reply_to_message: msgToSave } = message;
  const { savedMessages = {} } = session;
  if (msgToSave) {
    ctx.session.savedMessages = { ...savedMessages, ata: msgToSave };
    return reply("ok");
  }
  if (savedMessages.ata && savedMessages.ata.message_id) {
    return reply("👆", {
      reply_to_message_id: savedMessages.ata.message_id
    });
  }
  return reply(shrug);
};
