const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "buy",
  description: "Shop of 1215 Kingdom",
  options: null,
  run: async (client, interaction, args) => {
    const embed = new MessageEmbed()
      .setTitle("1215 Shopping ")
      .setDescription("🛠️")
      .setColor("GREEN")
      .setFooter({
        text: "1215",
        iconURL:
          "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=90",
      });

    return interaction.reply({ embeds: [embed] });
  },
};
