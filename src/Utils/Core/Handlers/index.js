const CommandHandler = require("./CommandHandler");
const EventHandler = require("./EventHandler");

module.exports.Handler = async (client) => {
  await CommandHandler(client);
  await EventHandler(client);
}