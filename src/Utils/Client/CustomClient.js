const Discord = require("discord.js");
const Functions = require("../Core/Functions");
const { Handler } = require("../Core/Handlers");

class Client extends Discord.Client {
  // Commands
  /** @type {Discord.Collection<string, import("../Core/Typings/Commands/TCommandType").TCommandType>} */
  commands = new Discord.Collection();
  /** @type {Discord.Collection<string, import("../Core/Typings/Commands/TSubcommandType").TSubcommandType>} */
  subcommands = new Discord.Collection();
  // Events
  events = new Discord.Collection();
  restEvents = new Discord.Collection();
  // Functions
  logger = Functions.logger;
  // The array for the commands
  commandArray = []

  /**
   * @param {import("discord.js").ClientOptions} options The important options like intents, partials, etc.
   */
  constructor(options) {
    super(options);
  }

  start() {
    try {
      this.logger.info("Client Logging in.");
      Handler(this);
      this.login(process.env.TOKEN);
    } catch (error) {
      this.logger.error("Failed to login", error);
      this.destroy();
      process.exit(1);
    }
  }
}

module.exports = Client