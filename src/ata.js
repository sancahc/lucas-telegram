const slotName = "ata";

// stores or retrieves a message
remember = ctx => {
  const { reply, update, session } = ctx;
  const { savedMessages = {} } = session;
  const { message } = update;
  const { reply_to_message: msgToSave } = message;

  // set message
  if (msgToSave) {
    ctx.session.savedMessages = { ...savedMessages, [slotName]: msgToSave };
    return reply("ok");
  }

  // get message
  if (savedMessages[slotName] && savedMessages[slotName].message_id) {
    return reply("👆", {
      reply_to_message_id: savedMessages[slotName].message_id
    });
  }

  // failed get message
  return reply("¯\\_(ツ)_/¯");
};
