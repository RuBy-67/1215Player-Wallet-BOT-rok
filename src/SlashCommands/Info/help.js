const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Shows the help page!",
  options: null,
  run: async (client, interaction, args) => {
    const embed = new MessageEmbed()
      .setTitle("Help Menu")
      .setDescription(
        client.slash
          .map((cmd) => `\`${cmd.name} - ${cmd.description}\``)
          .join("\n")
      )
      .addField(
        "Sheet Link",
        `[Google_Sheet-Temporaire-](https://docs.google.com/spreadsheets/d/1Dd3zH9E_GxD6IOIaeiql6cnsOw1p6Mkydz35xvFE09w/edit?usp=sharing)`
      )
      .setColor("GREEN")
      .setFooter(
        "TEST",
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905"
      );

    return interaction.reply({ embeds: [embed] });
  },
};
