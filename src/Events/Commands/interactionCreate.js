const {
  ClientEventBuilder,
} = require("../../Utils/Core/Classes/Builders/EventBuilder");
const { reply } = require("../../Utils/Core/Functions");

module.exports = new ClientEventBuilder({
  name: "interactionCreate",
  run(client, interaction) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);

      if (!command)
        return reply(
          interaction,
          { content: "```❌ The command you have used no longer exist.```" },
          true
        );

      if (
        command.developerOnly &&
        interaction.user.id !== client.application.owner.id
      )
        return reply(
          interaction,
          {
            content: "```❌ This command can only be used by my developer.```",
          },
          true
        );

      if (
        command.adminsOnly &&
        !interaction.memberPermissions.has("Administrator")
      )
        return reply(
          interaction,
          {
            content:
              "```❌ You must be an administrator of this server to use this command.```",
          },
          true
        );

      if (
        command.botPermissions &&
        !interaction.guild.members.me.permissions.has(command.botPermissions)
      )
        return reply(
          interaction,
          {
            content: `\`\`\`❌ I do not have sufficient permissions to run this command.\n\nPermissions Required:\n\u3000${command.botPermissions.join(
              "\n\u3000"
            )}\`\`\``,
          },
          true
        );

      if (
        command.userPermissions &&
        !interaction.memberPermissions.has(command.userPermissions)
      )
        return reply(
          interaction,
          {
            content: `\`\`\`❌ You do not have the permissions to use this command.\n\nPermissions Required:\n\u3000${command.userPermissions.join(
              "\n\u3000"
            )}\`\`\``,
          },
          true
        );

      const subcommand = interaction.options.getSubcommand(false);
      const subcommandGroup = interaction.options.getSubcommandGroup(false);

      const sub = client.subcommands.get(
        `${interaction.commandName}.${
          subcommandGroup ? `${subcommandGroup}.${subcommand}` : subcommand
        }`
      );

      sub ? sub.run(interaction, client) : command.run(interaction, client);
    }

    if (interaction.isAutocomplete()) {
      const command = client.commands.get(interaction.commandName);

      const subcommand = interaction.options.getSubcommand(false);
      const subcommandGroup = interaction.options.getSubcommandGroup(false);

      const sub = client.subcommands.get(
        `${interaction.commandName}.${
          subcommandGroup ? `${subcommandGroup}.${subcommand}` : subcommand
        }`
      );

      sub ? sub.autocomplete(interaction, client) : command.autocomplete(interaction, client);
    }
  },
});
