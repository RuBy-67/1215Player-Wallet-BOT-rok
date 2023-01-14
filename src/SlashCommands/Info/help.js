const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Shows the help page!",
  options: null,
  run: async (client, interaction, args) => {
    const embed = new MessageEmbed()
      .setTitle("Help Menu")
      .setDescription("Here is Help page of 1215 DATA BOT")
      .addFields(
        {
          name: "Infos",
          value:
            "`/buy` Shop of 1215 Kingdom\n`/user` In game info on a user\n`/social` Social Network \n**[Admin Command]**\n`/list` User List on google sheet",
          inline: true,
        },
        { name: "Tips", value: "`In coming [...]`", inline: true },
        { name: "\u200B", value: "\u200B" }, // troue
        {
          name: "Add",
          value:
            "**[User Command]**\n`/add`: add new user on google sheet\n**[Admin Command]**\n`/addbl`: add new user on Black List\n `/addcredits` : add credit on a user or a groups",
          inline: true,
        },
        {
          name: "Update",
          value:
            "[User Command]\n`/update`: Update your in game info \n**[Admin Command]**\n`/rssdonation` Give Credits after a ressource donation",
          inline: true,
        },
        {
          name: "Remove",
          value:
            "**[Admin Command]**\n`/rmuser`: remove user on sheet\n`/rmcredits`: remove credits from a user",
        }
      )
      .setColor("GREEN")
      .setThumbnail("")
      .setFooter({
        text: "1215",
        iconURL:
          "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
      })
      .setTimestamp(Date.now());

    return interaction.reply({ embeds: [embed] });
  },
};
