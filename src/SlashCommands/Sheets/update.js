module.exports = {
  name: "update",
  description: "Adds a user to the spreadsheet!",
  options: [
    {
      name: "user",
      description: "The user to add to the spreadsheet",
      type: "USER",
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
      required: true,
    },
    {
      name: "rokid",
      description: "in Game Id of player",
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
    const id = await user.id;
    const username = await user.username;

    const rows = await client.googleSheets.values.get({
      auth: client.auth,
      spreadsheetId: client.sheetId,
      range: "Sheet1!A:A",
    });

    const data = rows.data.values.find((row) => row[0] === id);
    let toDeleteRow;
    for (let i = 0; i < rows.data.values.length; i++) {
      const row = rows.data.values[i];
      if (row[0] === id) {
        toDeleteRow = i;
      }
    }
    if (data) {
      await client.googleSheets.batchUpdate({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        resource: {
          requests: [
            {
              deleteDimension: {
                range: {
                  sheetId: 0,
                  dimension: "ROWS",
                  startIndex: toDeleteRow,
                  endIndex: toDeleteRow + 1,
                },
              },
            },
          ],
        },
      });
      await client.googleSheets.values.append({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:F",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[id, username, IgN, IgId, power, Kpower]],
        },
      });
      return interaction.reply("User has been updated successfully !`");
    } else if (!data) {
      return interaction.reply("User not found");
    }
  },
};
