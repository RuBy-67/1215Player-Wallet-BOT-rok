const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "tips_civilisation",
  description: "top stats of 1215 Wallet `",
  options: [
    {
      name: "civilisation",
      description: "Witch civilisations ?",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "Arabia",
          value: "arabia",
        },
        {
          name: "Britain",
          value: "britain",
        },
        {
          name: "Byzantium",
          value: "byzantium",
        },
        {
          name: "China",
          value: "china",
        },
        {
          name: "Egypt",
          value: "egypt",
        },
        {
          name: "France",
          value: "france",
        },
        {
          name: "Germany",
          value: "germany",
        },
        {
          name: "Japan",
          value: "japan",
        },
        {
          name: "Korea",
          value: "korea",
        },
        {
          name: "Rome",
          value: "rome",
        },
        {
          name: "Ottoman",
          value: "ottoman",
        },

        {
          name: "Spain",
          value: "spain",
        },
        {
          name: "Vikings",
          value: "vikings",
        },
      ],
    },
  ],

  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }

    const com = await interaction.options.getString("civilisation");
    const embed = new MessageEmbed().setTimestamp().setFooter({
      text: "Kd 1215",
      iconURL:
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
    });

    if (com == "arabia") {
      embed.setTitle("Arabia");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362432318914681/arabia-flag.png"
      );
      embed.setColor("#26980F");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "britain") {
      embed.setTitle("Britain");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362432570556446/britain-flag.png"
      );
      embed.setColor("#C63101");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "byzantium") {
      embed.setTitle("Byzantium");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362545946804295/byzantium-flag.png"
      );
      embed.setColor("#8202E6");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "china") {
      embed.setTitle("China");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362546269753364/china-flag.png"
      );
      embed.setColor("#F00303");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "egypt") {
      embed.setTitle("Egypt");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362433099042958/1675026165145.png"
      );
      embed.setColor("#DDA700");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "france") {
      embed.setTitle("France");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362546517213296/france-flag.png"
      );
      embed.setColor("#005EDD");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "germany") {
      embed.setTitle("Germany");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362546798247956/germany-flag.png"
      );
      embed.setColor("#FFFFFF");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "japan") {
      embed.setTitle("Japan");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362547045699644/japan-flag.png"
      );
      embed.setColor("#FFD6FB");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "korea") {
      embed.setTitle("Korea");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362545095344339/korea-flag.png"
      );
      embed.setColor("#0B00B2");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "rome") {
      embed.setTitle("Rome");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362545640607844/rome-flag.png"
      );
      embed.setColor("#A101B1");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "ottoman") {
      embed.setTitle("Ottoman");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362545372184596/ottoman-flag.png"
      );
      embed.setColor("#CE0808");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "spain") {
      embed.setTitle("Spain");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362433438793829/spain-flag.png"
      );
      embed.setColor("#A20B0B");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "vikings") {
      embed.setTitle("Vikings");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362432822231070/Viking-icon.png"
      );
      embed.setColor("#1FDBDB");
      return interaction.reply({ embeds: [embed] });
    } else {
      return interaction.reply("No commander found!");
    }
  },
};
