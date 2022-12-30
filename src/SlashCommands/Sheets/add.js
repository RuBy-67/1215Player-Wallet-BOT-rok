module.exports = {
  name: "add",
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
      required: true,
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
    const choices = await interaction.options.getString("type");
    const IgN = await interaction.options.getString("rokname");
    const IgId = await interaction.options.getString("rokid");
    const power = await interaction.options.getString("power");
    const Kpower = await interaction.options.getString("killpower");
    const id = await user.id;
    const username = (await user.username) + "#" + user.discriminator;

    const rows = await client.googleSheets.values.get({
      auth: client.auth,
      spreadsheetId: client.sheetId,
      range: "Sheet1!A:A",
    });

    const data = rows.data.values.find((row) => row[0] === id);

    if (data && choices !== "farm_account") {
      return interaction.reply("User has been in List try to use `/update`");
    } else if (!data) {
      await client.googleSheets.values.append({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:G",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[id, username, IgN, IgId, power, Kpower, choices]],
        },
      });
      return interaction.reply("The user has been added to the list!");
    }
    if (choices == "farm_account") {
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet2!A:D",
      });
      const value = rows.data.values.find((row) => row[3] === IgId);
      if (value) {
        return interaction.reply("farm already added to the list!");
      } else {
        await client.googleSheets.values.append({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: "Sheet2!A:G",
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[id, username, IgN, IgId, power, Kpower, choices]],
          },
        });
        return interaction.reply("farm added to the list!");
      }
    }
  },
};
