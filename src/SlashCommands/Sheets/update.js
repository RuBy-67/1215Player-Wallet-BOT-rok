module.exports = {
  name: "update",
  description: "Adds a user to the spreadsheet!",
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
      description: "The user to add to the spreadsheet",
      type: "USER",
      required: true,
    },
    {
      name: "rokid",
      description: "in Game Id of player",
      type: "STRING",
      required: true,
    },
    {
      name: "rokname",
      description: "in Game Name of player",
      type: "STRING",
      required: true,
    },
    {
      name: "power",
      description: "Current power of the player",
      type: "STRING",
      required: false,
    },
    {
      name: "killpower",
      description: "Curent Kill power of the player",
      type: "STRING",
      required: false,
    },
  ],
  run: async (client, interaction, args) => {
    const user = await interaction.options.getUser("user");
    const IgN = await interaction.options.getString("rokname");
    const IgId = await interaction.options.getString("rokid");
    const power = await interaction.options.getString("power");
    const Kpower = await interaction.options.getString("killpower");
    const choices = await interaction.options.getString("type");
    const id = await user.id;
    const username = await user.username;

    if (choices === "main_account") {
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:A",
      });

      const data = rows.data.values;
      const rowIndex = data.findIndex((row) => row[0] === id);
      if (rowIndex == -1) {
        return interaction.reply("User not found");
      }
      const range1 = `Sheet1!A${rowIndex + 1}:Z${rowIndex + 1}`;
      await client.googleSheets.values.update({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: range1,
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[id, username, IgN, IgId, power, Kpower]],
        },
      });
      return interaction.reply("User has been updated successfully !`");
    } else if (choices === "farm_account") {
      const rows2 = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet2!D:D",
      });

      const data2 = rows2.data.values;

      const Index = data2.findIndex((row) => row[0] === IgId);
      if (Index == -1) {
        return interaction.reply("User not found");
      }
      const range2 = `Sheet2!A${Index + 1}:F${Index + 1}`;
      await client.googleSheets.values.update({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: range2,
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[id, username, IgN, IgId, power, Kpower]],
        },
      });
      return interaction.reply(":corn: Farm has been updated successfully !`");
    }
  },
};
