const { MessageEmbed, Message, Channel } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);
module.exports = {
  name: "rssdonation",
  userPerms: ["ADMINISTRATOR"],
  description: "update Rss Donation of Users [Admin_Only]",
  options: [
    {
      name: "type",
      description: "Main or Farm Account",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "main_account",
          value: "main_account",
        },
        {
          name: "farm_account",
          value: "farm_account",
        },
      ],
    },
    {
      name: "rss",
      description: "Rss Types",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "food",
          value: "food",
        },
        {
          name: "wood",
          value: "wood",
        },
        {
          name: "stone",
          value: "stone",
        },
        {
          name: "gold",
          value: "gold",
        },
      ],
    },
    {
      name: "bag",
      description: "How many ?",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "100M",
          value: "1",
        },
        {
          name: "200M",
          value: "2",
        },
        {
          name: "300M",
          value: "3",
        },
        {
          name: "400M",
          value: "4",
        },
        {
          name: "500M",
          value: "5",
        },
        {
          name: "600M",
          value: "6",
        },
        {
          name: "700M",
          value: "7",
        },
        {
          name: "800M",
          value: "8",
        },
        {
          name: "900M",
          value: "9",
        },
        {
          name: "1b",
          value: "10",
        },
      ],
    },
    {
      name: "user",
      description: "The user to update to the spreadsheet",
      type: "USER",
      required: false,
    },
    {
      name: "rokid",
      description: "in Game Id of player",
      type: "STRING",
      required: false,
    },
  ],
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const user = await interaction.options.getUser("user");
    const Rss = await interaction.options.getString("rss");
    const bag = await interaction.options.getString("bag");
    const amount = await interaction.options.getString("amount");
    const IgId = await interaction.options.getString("rokid");
    const choices = await interaction.options.getString("type");
    let username;
    let id;
    //---------------------------
    if (user == null) {
      username = 1215;
      id = 1215;
    }
    if (user != null) {
      id = user.id;
      username = user.username + "#" + user.discriminator;
    }
    //----------------------

    if (choices === "main_account") {
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:E",
      });
      const data = rows.data.values;
      const Index1 = data.findIndex((row) => row[3] === IgId);
      const rowIndex = data.findIndex((row) => row[0] === id);

      if (rowIndex == -1 && Index1 == -1) {
        return interaction.reply(
          "User not found, please enter a other User or Gov Id"
        );
      } else if (Index1 != -1) {
        const range1 = `Sheet1!J${Index1 + 1}:J${Index1 + 1}`;
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: range1,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[amount]],
          },
        });
        return interaction.reply("User has been updated successfully !");
      } else if (rowIndex != -1) {
        const matchingRows = data.filter((row) => row[0] === id);
        const rowCount = matchingRows.length;
        if (rowCount > 1) {
          const embed = new MessageEmbed();
          embed.setTitle(username);
          embed.setColor("#00FFDB");
          embed.setDescription(
            "More than one account please make the change with your gov id, here is the list of your accounts"
          );
          embed.setTimestamp(Date.now());
          embed.setFooter(
            username,
            "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905"
          );
          for (const row of matchingRows) {
            embed.addField(
              emoji(emo.ally) + `__Name__: **${row[2]}**`,
              emoji(emo.sword) +
                `__Power :__ **${row[4]}** __Id :__ **${row[3]}**\n**_**`
            );
          }
          return interaction.reply({ embeds: [embed] });
        } else if (rowCount == 1) {
          const range2 = `Sheet1!A${rowIndex + 1}:Z${rowIndex + 1}`;
          await client.googleSheets.values.update({
            auth: client.auth,
            spreadsheetId: client.sheetId,
            range: range2,
            valueInputOption: "USER_ENTERED",
            resource: {
              values: [[id, username, IgN, IgId, power, Kpower]],
            },
          });
          return interaction.reply("User has been updated successfully !");
        }
      }
    } else if (choices === "farm_account") {
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet2!A:E",
      });
      const data = rows.data.values;
      const Index1 = data.findIndex((row) => row[3] === IgId);
      const rowIndex = data.findIndex((row) => row[0] === id);
      console.log(rowIndex);
      console.log(Index1);

      if (rowIndex == -1 && Index1 == -1) {
        return interaction.reply(
          ":corn: User not found, please enter a other User or Gov Id"
        );
      } else if (Index1 != -1) {
        const range1 = `Sheet2!C${Index1 + 1}:Z${Index1 + 1}`;
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: range1,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[IgN, IgId, power, Kpower]],
          },
        });
        return interaction.reply("User has been updated successfully !");
      } else if (rowIndex != -1) {
        const matchingRows = data.filter((row) => row[0] === id);
        const rowCount = matchingRows.length;
        if (rowCount > 1) {
          const embed = new MessageEmbed();
          embed.setTitle(username);
          embed.setColor("#daa520");
          embed.setDescription(
            "More than one account please make the change with your gov id, here is the list of your farm accounts"
          );
          embed.setTimestamp(Date.now());
          embed.setFooter(
            username,
            "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905"
          );
          for (const row of matchingRows) {
            embed.addField(
              `:corn: __Name__: **${row[2]}**`,
              emoji(emo.sword) +
                `__Power :__ **${row[4]}** __Id :__ **${row[3]}**\n**_**`
            );
          }
          return interaction.reply({ embeds: [embed] });
        } else if (rowCount == 1) {
          const range2 = `Sheet2!A${rowIndex + 1}:Z${rowIndex + 1}`;
          await client.googleSheets.values.update({
            auth: client.auth,
            spreadsheetId: client.sheetId,
            range: range2,
            valueInputOption: "USER_ENTERED",
            resource: {
              values: [[id, username, IgN, IgId, power, Kpower]],
            },
          });
          return interaction.reply(
            ":corn: User has been updated successfully !"
          );
        }
      }
    }
  },
};
