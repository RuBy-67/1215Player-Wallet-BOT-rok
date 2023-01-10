const { MessageEmbed, Message, Channel } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);
module.exports = {
  name: "givebonus",
  description: "update bonus of Users [Admin_Only], [Main account]",
  options: [
    {
      name: "amount",
      description: "amount of credits",
      type: "STRING",
      required: true,
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
      description: "give to ? if you choose 'give' don't select user and rok id",
      required: false,
      type: "STRING",
      choices: [
        {
          name: "all", /// tout les membres du kd les crédit vont dans les point "bonus"
          value: "all",
        },
        {
          name: "leader_ship", // tout les membres R4
          value: "leader_ship",
        },
        {
          name: "data_team", //  tout les membres faisant partie de la team data team
          value: "data_team",
        },
        {
          name: "post_office_team", //  tout les membres faisant partie de la post office
          value: "post_office_team",
        },
        {
          name: "title_giver_team", //  tout les membres faisant partie de la tittle giver
          value: "title_giver_team",
        },
        {
          name: "kingdom_event_team", //  tout les membres faisant partie de la kd event
          value: "kingdom_event_team",
        },
        {
          name: "kvk_team", //  tout les membres faisant partie de la kvk team
          value: "kvk_team",
        },
        {
          name: "punishement_teams", //  tout les membres faisant partie de la punishement teams
          value: "punishement_teams",
        },
        {
          name: "staff_ark_team",
          value: "Staff ark_team", //  tout les membres faisant partie de la staff ark team
        },
        /* {
          name: "member_ark_team",
          value: "member_ark_team", //Member with ark team role id 1047194574247972904
        },*/
      ],
    },
  ],
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const user = await interaction.options.getUser("user");
    const Rss = await interaction.options.getString("amount");
    const give = await interaction.options.getString("give");
    const IgId = await interaction.options.getString("rokid");
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
    let range
    if (give == "all") {
      range = "Sheet1!A:AE"

    }


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
        const range1 = `Sheet1!L${Index1 + 1}:L${Index1 + 1}`;
        const value1 = matchingRow1[11];
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
            "User credits 'Bonus' has been updated successfully !"
          );
        }
      }
    
  },
};
