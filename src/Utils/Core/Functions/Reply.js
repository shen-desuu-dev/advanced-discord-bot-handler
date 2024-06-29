/**
 * 
 * @param {import("../Typings/Interfaces").ICommandInteraction} interaction 
 * @param {import("../Typings/Functions").TReplyOptions} options 
 * @param {boolean} ephemeral 
 * @returns 
 */
module.exports = function (interaction, options, ephemeral = false) {
  return interaction.reply({ ...options, ephemeral: ephemeral });
};
