class CommandBuilder {
  /**
   * Create a command with this command builder class.
   * @param {import("../../Typings/Commands/TCommandType").TCommandType} data the data of the command
   */
  constructor(data) {
    Object.assign(this, data);
  }
}

class SubcommandBuilder {
  /**
   * Handle all commands that has a subcommand
   * @param {import("../../Typings/Commands/TSubcommandType").TSubcommandType} data the data of the subcommand
   */
  constructor(data) {
    Object.assign(this, data);
  }
}


module.exports = {
  CommandBuilder,
  SubcommandBuilder
}