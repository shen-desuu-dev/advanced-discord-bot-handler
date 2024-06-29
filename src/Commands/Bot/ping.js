const { SlashCommandBuilder } = require("discord.js");
const {
  CommandBuilder,
} = require("../../Utils/Core/Classes/Builders/CommandBuilder");
const { reply } = require("../../Utils/Core/Functions");

module.exports = new CommandBuilder({
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping command."),
  run(interaction, client) {
    reply(interaction, { content: "```Pong 🏓```" }, false);
  },
});
