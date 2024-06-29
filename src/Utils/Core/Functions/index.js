module.exports = {
  reply: require("./Reply"),
  logger: (new (require("./Logger"))()),
  chunk:  require("./Chunk"),
  autocomplete:  require("./Autocomplete")
}