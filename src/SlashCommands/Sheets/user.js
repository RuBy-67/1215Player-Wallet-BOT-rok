const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "user",
  description: "See info of user",
  options: [
    {
      name: "user",
      description: "The user to check",
      type: "USER",
      required: true,
    },
  ],

  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const user = await interaction.options.getUser("user");
    const userid = await user.id;

    const rows = await client.googleSheets.values.get({
      auth: client.auth,
      spreadsheetId: client.sheetId,
      range: "Sheet1!A:G",
    });

    const data = rows.data.values.find((row) => row[0] === userid);

    if (data) {
      if (rows.data.values.length > 0) {
        const embed = new MessageEmbed().setColor("GREEN");

        for (let i = 0; i < rows.data.values.length; i++) {
          const row = rows.data.values[i];
          if (row[0] === userid) {
            embed.setTitle(`${row[1]} - ${row[2]}`);
            embed.setThumbnail(client.user.displayAvatarURL());
            embed.addFields(
              {
                name: emoji(emo.discord) + " Player :",
                value: `<@${row[0]}>`,
                inline: false,
              },
              {
                name: emoji(emo.books) + " In Game Info :",
                value: `__InGame Name :__ ${row[2]}\n __Rok Id:__ ${row[3]}`,
                inline: false,
              },
              {
                name: emoji(emo.lohar2) + "Current Power :",
                value: `${row[4]}` + emoji(emo.star),
                inline: true,
              },
              {
                name: emoji(emo.sword) + " Current Kill Power :",
                value: `${row[5]} ` + emoji(emo.skull),
                inline: true,
              },
              {
                name: emoji(emo.bagGems) + " Current Credits :",
                value: `${row[6]} ` + emoji(emo.gems),
                inline: false,
              }
            );

            embed.setTimestamp(Date.now());
            embed.setFooter(
              `${row[2]}`,
              "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905"
            );
          }
        }

        return interaction.reply({ embeds: [embed] });
      }
    } else if (!data) {
      return interaction.reply(
        "User is not in the list! for add you type `/add`"
      );
    }
  },
};
