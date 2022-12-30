const { MessageEmbed, Interaction } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "list",
  description: "Shows all the users added to the list!",
  userPerms: ["ADMINISTRATOR"],
  options: [
    {
      name: "list",
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
        {
          name: "blacklist",
          value: "blacklist",
        },
      ],
    },
  ],

  run: async (client, interaction, args) => {
    const choices = await interaction.options.getString("list");
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    let type;
    if (choices == "main_account") {
      type = "Sheet1!A2:H";
    }
    if (choices == "farm_account") {
      type = "Sheet2!A2:H";
    }

    if (choices == "blacklist") {
      type = "Sheet1!A2:H";
    }
    const embed = new MessageEmbed()
      .setColor("GREEN")
      .setDescription("List of Users type `/user` for more details");

    const rows = await client.googleSheets.values.get({
      auth: client.auth,
      spreadsheetId: client.sheetId,
      range: type,
    });

    if (rows.data.values.length > 0) {
      for (let i = 0; i < rows.data.values.length; i++) {
        const row = rows.data.values[i];
        embed.addField(
          `${row[1]}`,
          emoji(emo.tag) +
            ` **In game Name:** ${row[2]}\n` +
            emoji(emo.ally) +
            ` **In game id:** ${row[3]}\n` +
            emoji(emo.bagGems) +
            ` **Credits:** ${row[7]}`
        );
      }
    } else {
      embed.setDescription("No users added to the list!");
    }

    await interaction.reply({ embeds: [embed] });
  },
};
