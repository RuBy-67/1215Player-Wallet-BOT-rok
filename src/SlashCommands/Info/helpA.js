const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "helpadmin",
  description: "Shows the help Admin page!",
  userPerms: ["USE_APPLICATION_COMMANDS"],
  options: null,
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const embed = new MessageEmbed()
      .setTitle("Help Menu for admin")
      .setDescription("Here is Help 'ADMIN' page of 1215 DATA-BOT")
      .addFields(
        {
          name: "Infos",
          value: "`/list` User List on google sheet",
        },
        /// { name: "\u200B", value: "\u200B" },  troue
        {
          name: "ADD Info",
          value:
            "`/addbl` add new user on Black List\n `/addcredits` add credit on a user or a predefined groups",
        },
        {
          name: "UPDATEInfo",
          value:
            "`/rssdonation` Give Credits after a ressource donation\n`/update` Update in game info of a player",
        },
        {
          name: "REMOVE Info",
          value:
            "`/rmuser` remove user on sheet\n`/rmcredits`: remove credits from a user",
        },
        {
          name: "Google Sheet",
          value:
            "**!! Keep Secret !!**\n[Google_DATA_Sheet_link](https://docs.google.com/spreadsheets/d/1Dd3zH9E_GxD6IOIaeiql6cnsOw1p6Mkydz35xvFE09w/edit#gid=0)",
        }
      )
      .setColor("GREEN")
      .setThumbnail(
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905"
      )
      .setFooter({
        text: "1215",
        iconURL:
          "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
      })
      .setTimestamp(Date.now());

    return interaction.reply({ embeds: [embed] });
  },
};