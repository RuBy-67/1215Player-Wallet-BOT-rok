const { MessageEmbed, Message } = require("discord.js");
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

    const rows1 = await client.googleSheets.values.get({
      auth: client.auth,
      spreadsheetId: client.sheetId,
      range: "Sheet1!A:H",
    });

    const data1 = rows1.data.values.find((row) => row[0] === userid);

    if (data1) {
      if (rows1.data.values.length > 0) {
        const embed1 = new MessageEmbed();

        for (let i = 0; i < rows1.data.values.length; i++) {
          const row = rows1.data.values[i];
          if (row[0] === userid) {
            embed1.setTitle(`${row[1]} - ${row[2]}`);
            embed1.setColor("#00FFDB");
            embed1.setThumbnail(user.displayAvatarURL());
            embed1.setDescription("__**Main Account**__");
            embed1.addFields(
              {
                name: emoji(emo.discord) + " User :",
                value: `<@${row[0]}>`,
                inline: false,
              },
              {
                name: emoji(emo.books) + " In Game Info :",
                value: `__InGame Name :__ ${row[2]}\n __Rok Id:__ ${row[3]}`,
                inline: false,
              },
              {
                name: "Current Power :",
                value: `${row[4]}` + emoji(emo.sword),
                inline: true,
              },
              {
                name: " Current Kill Power :",
                value: `${row[5]} ` + emoji(emo.skull),
                inline: true,
              },
              {
                name: emoji(emo.bagGems) + " Current Credits :",
                value: `${row[7]} ` + emoji(emo.gems),
                inline: false,
              }
            );

            embed1.setTimestamp(Date.now());
            embed1.setFooter(
              `${row[2]}`,
              "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905"
            );
          }
        }

        return interaction.reply({ embeds: [embed1] });
      }
    }
    const rows2 = await client.googleSheets.values.get({
      auth: client.auth,
      spreadsheetId: client.sheetId,
      range: "Sheet2!A:H",
    });
    const data2 = rows2.data.values.find((row) => row[0] === userid);
    if (data2) {
      if (rows2.data.values.length > 0) {
        const embed2 = new MessageEmbed();

        for (let i = 0; i < rows2.data.values.length; i++) {
          const row = rows2.data.values[i];
          if (row[0] === userid) {
            embed2.setTitle(`${row[1]} - ${row[2]}`);
            embed2.setColor("#daa520");
            embed2.setThumbnail(user.displayAvatarURL());
            embed2.setDescription("__**FARM Account**__");
            embed2.addFields(
              {
                name: emoji(emo.discord) + " User :",
                value: `<@${row[0]}>`,
                inline: false,
              },
              {
                name: emoji(emo.books) + " In Game Info :",
                value: `__InGame Name :__ ${row[2]}\n __Rok Id:__ ${row[3]}`,
                inline: false,
              },
              {
                name: "Current Power :",
                value: `${row[4]}` + emoji(emo.sword),
                inline: true,
              },
              {
                name: " Current Kill Power :",
                value: `${row[5]} ` + emoji(emo.skull),
                inline: true,
              },
              {
                name: emoji(emo.bagGems) + " Current Credits :",
                value: `${row[7]} ` + emoji(emo.gems),
                inline: false,
              }
            );

            embed2.setTimestamp(Date.now());
            embed2.setFooter(
              `${row[2]}`,
              "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905"
            );
          }
        }

        return message.channel.send(embed2);
      }
    }
    const rows3 = await client.googleSheets.values.get({
      auth: client.auth,
      spreadsheetId: client.sheetId,
      range: "Sheet3!A:H",
    });
    const data3 = rows3.data.values.find((row) => row[0] === userid);
    if (data3) {
      if (rows3.data.values.length > 0) {
        const embed3 = new MessageEmbed();

        for (let i = 0; i < rows3.data.values.length; i++) {
          const row = rows3.data.values[i];
          if (row[0] === userid) {
            embed3.setTitle(`${row[1]} - ${row[2]}`);
            embed3.setColor("#8b2d2d");
            embed3.setThumbnail(user.displayAvatarURL());
            embed3.setDescription("__**Black_Listed**__");
            embed3.addFields(
              {
                name: emoji(emo.discord) + " User :",
                value: `<@${row[0]}>`,
                inline: false,
              },
              {
                name: emoji(emo.books) + " In Game Info :",
                value: `__InGame Name :__ ${row[2]}\n __Rok Id:__ ${row[3]}`,
                inline: false,
              },
              {
                name: "Current Power :",
                value: `${row[4]}` + emoji(emo.sword),
                inline: true,
              },
              {
                name: " Current Kill Power :",
                value: `${row[5]} ` + emoji(emo.skull),
                inline: true,
              }
            );

            embed3.setTimestamp(Date.now());
            embed3.setFooter(
              `${row[2]}`,
              "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905"
            );
          }
        }

        return message.channel.send(embed3);
      }
    }
  },
};
