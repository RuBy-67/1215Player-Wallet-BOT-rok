const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "social",
  description: "Social link of my devs",
  options: null,
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const embed = new MessageEmbed()
      .setTitle("Social Link")
      .setDescription(
        `➼ ` +
          emoji(emo.github) +
          `** | [GitHub_RuBy67](https://github.com/RuBy-67)**\n➼ ` +
          emoji(emo.Twitter) +
          `** | [@ruben_bey67](https://twitter.com/ruben_bey67)**\n➼ ` +
          emoji(emo.discord) +
          `** |** <@375590278880428034>`
      )
      .setColor("#3135D8")
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/375590278880428034/6c3bb7adecda83c484564b4c6cadd699.png?size=1024"
      );

    return interaction.reply({ embeds: [embed] });
  },
};
