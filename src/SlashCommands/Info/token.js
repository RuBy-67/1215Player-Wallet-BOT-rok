const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "token",
  description: "See the 1215 Token",
  options: null,
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const embed = new MessageEmbed()
      .setTitle("Anana Token")
      .setImage(
        "https://cdn.discordapp.com/attachments/643475562333208587/1069300758626959370/token.png"
      )
      .setColor("#00FFA5");

    return interaction.reply({ embeds: [embed] });
  },
};
