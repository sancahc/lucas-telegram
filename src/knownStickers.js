const knownStickers = (ctx, next) => {
  const { sticker } = ctx.message;
  console.log({ sticker });
  if (!sticker) {
    return next();
  }
  const { set_name: setName, file_id: fileId } = sticker;

  const ataIds = [
    "CAADAQADNgIAAohO0QnRzmP_5sKnGgI",
    "CAADAQADxwIAAohO0QkI2HtJ2G_L6gI"
  ];
  if (setName === "Monicaata" && ataIds.includes(fileId)) {
    ctx.state.stickerMeaning = "ata";
  }
  return next();
};

module.exports = knownStickers;
