const { MessageEmbed, Message, Channel } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);
module.exports = {
  name: "givebonus",
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
    {
      name: "give",
      description: "give to ?",
      required: false,
      type: "STRING",
      choices: [
        {
          name: "all",
          value: "all",
        },
        {
          name: "leader_ship",
          value: "leader_ship",
        },
        {
          name: "data_team",
          value: "data_team",
        },
        {
          name: "post_office_team",
          value: "post_office_team",
        },
        {
          name: "title_giver_team",
          value: "title_giver_team",
        },
        {
          name: "kingdom_event_team",
          value: "kingdom_event_team",
        },
        {
          name: "kvk_team",
          value: "kvk_team",
        },
        {
          name: "punishement_teams",
          value: "punishement_teams",
        },
        {
          name: "ark_team ",
          value: "ark_team ",
        },
      ],
    },
  ],
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const user = await interaction.options.getUser("user");
    const Rss = await interaction.options.getString("rss");
    const bag = await interaction.options.getString("bag");
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
    let credits;
    if (Rss === "wood" || Rss == "food") {
      credits = bag * 1;
    }

    if (Rss === "stone") {
      credits = bag * 2;
    }

    if (Rss === "Gold") {
      credits = bag * 3;
    }

    if (choices === "main_account") {
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:J",
      });

      const data = rows.data.values;
      const Index1 = data.findIndex((row) => row[3] === IgId);
      const matchingRow1 = data.find((row) => row[3] === IgId);
      const rowIndex = data.findIndex((row) => row[0] === id);
      const matchingRow2 = data.find((row) => row[0] === id);

      if (rowIndex == -1 && Index1 == -1) {
        return interaction.reply(
          "User not found, please enter a other User or Gov Id"
        );
      } else if (Index1 != -1) {
        const range1 = `Sheet1!J${Index1 + 1}:J${Index1 + 1}`;
        const value1 = matchingRow1[9];
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: range1,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[`=${value1}+` + credits]],
          },
        });
        return interaction.reply("User credit has been updated successfully !");
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
          const value2 = matchingRow2[9];
          await client.googleSheets.values.update({
            auth: client.auth,
            spreadsheetId: client.sheetId,
            range: range2,
            valueInputOption: "USER_ENTERED",
            resource: {
              values: [[`=${value2}+` + credits]],
            },
          });
          return interaction.reply(
            "User credits 'Rss Donation' has been updated successfully !"
          );
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
      const matchingRow1 = data.find((row) => row[3] === IgId);
      const matchingRow2 = data.find((row) => row[0] === id);

      if (rowIndex == -1 && Index1 == -1) {
        return interaction.reply(
          ":corn: User not found, please enter a other User or Gov Id"
        );
      } else if (Index1 != -1) {
        const range1 = `Sheet2!C${Index1 + 1}:Z${Index1 + 1}`;
        const value1 = matchingRow1[9];
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: range1,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[`=${value1}+` + credits]],
          },
        });
        return interaction.reply(
          "User credits 'Rss Donation' has been updated successfully !"
        );
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
          const range2 = `Sheet2!J${rowIndex + 1}:J${rowIndex + 1}`;
          const value2 = matchingRow2[9];
          await client.googleSheets.values.update({
            auth: client.auth,
            spreadsheetId: client.sheetId,
            range: range2,
            valueInputOption: "USER_ENTERED",
            resource: {
              values: [[`=${value1}+` + credits]],
            },
          });
          return interaction.reply(
            ":corn: User credit 'Rss Donation' has been updated successfully !"
          );
        }
      }
    }
  },
};
