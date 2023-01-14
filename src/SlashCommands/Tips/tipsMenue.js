const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "tips",
  description: "Tips",
  options: null,
  run: async (client, interaction, args) => {
    const embed = new MessageEmbed()
      .setTitle("Tips Menu By STARK")
      .setDescription("Description: In Build")
      .setColor("#00FFE2")
      .setFooter({
        text: "1215",
        iconURL:
          "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
      });

    return interaction.reply({ embeds: [embed] });
  },
};
