const { AutocompleteInteraction } = require("discord.js");

/**
 * Autocomplete implementation
 * @param {AutocompleteInteraction} interaction
 * @param {{name: string, value: string}[]} options
 */
module.exports = function (interaction, options) {
  if (!options)
    return interaction.respond([
      { name: "There are no options for this command", value: "..." },
    ]);
  else {
    let option = interaction.options.getFocused();

    let mapFilter = options
      .filter(
        (value) =>
          value.name.toLowerCase().includes(option) ||
          value.value.toLowerCase().includes(option)
      )
      .map((value) => value)
      .sort()
      .slice(0, 25);

    return interaction.respond(mapFilter);
  }
};
