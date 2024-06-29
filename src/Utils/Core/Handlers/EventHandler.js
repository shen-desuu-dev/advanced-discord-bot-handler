const { SlashCommandBuilder, Client } = require("discord.js");
const fs = require("node:fs");

/**
 *
 * @param {Client} client
 * @returns
 */
module.exports = (client) => {
  client.events.clear();
  client.restEvents.clear();

  const eventFolders = fs.readdirSync("./src/Events/");

  for (let folder of eventFolders) {
    let files = fs
      .readdirSync(`./src/Events/${folder}`)
      .filter((file) => file.endsWith(".js"));

    for (let file of files) {
      const event = require(`../../../Events/${folder}/${file}`);

      if (!event) return;
      const execute = (...args) => event.run(client, ...args);

      if (event.rest) {
        client.rest[event.once ? "once" : "on"](event.name, execute);
        client.restEvents.set(event.name, event);
      } else {
        client[event.once ? "once" : "on"](event.name, execute);
        client.events.set(event.name, event);
      }
    }
  }
};
