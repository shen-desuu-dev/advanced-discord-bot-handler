const {
  ClientEventBuilder,
} = require("../../Utils/Core/Classes/Builders/EventBuilder");

module.exports = new ClientEventBuilder({
  name: "ready",
  run(client) {
    client.application.commands.set(client.commandArray).then((cmd) => client.logger.info(`${cmd.size.toString().padEnd(3)} Commands`))
    client.logger.info(`${client.guilds.cache.size.toString().padEnd(3)} Guilds`);
    client.logger.info(`${client.users.cache.filter((user) => !user.bot).size.toString().padEnd(3)} Users`);

    client.logger.info(`${client.user.username} has logged in.`);
  },
});
