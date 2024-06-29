const { SlashCommandBuilder } = require("discord.js");
const fs = require("node:fs");
const Client = require("../../Client/CustomClient");

/**
 * 
 * @param {Client} client 
 * @returns 
 */
module.exports = (client) => {
  client.commands.clear();
  client.subcommands.clear();

  const commandFolder = fs.readdirSync("./src/Commands/");

  for (let folder of commandFolder) {
    let files = fs
      .readdirSync(`./src/Commands/${folder}`)
      .filter((file) => file.endsWith(".js"));

    for (let file of files) {
      const command = require(`../../../Commands/${folder}/${file}`);

      if (!command) return;

      if (command.subcommand)
        return client.subcommands.set(command.subcommand, command);

      const properties = { ...command, category: folder };

      if (command.data instanceof SlashCommandBuilder) {
        client.commandArray.push(command.data.toJSON());
        client.commands.set(command.data.name, properties);
        client.logger.info(`${command.data.name} command has been registered.`);
      }
    }
  }
};
