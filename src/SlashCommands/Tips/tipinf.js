const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "tips_infantery",
  description: "top stats of 1215 Wallet `",
  options: [
    {
      name: "commanders",
      description: "Witch commander ?",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "Yi-Seong-Gye",
          value: "ysg",
        },
        {
          name: "Ramesses II",
          value: "ramesses",
        },
        {
          name: "El Cid",
          value: "elcid",
        },
        {
          name: "Edward of Woodstock",
          value: "eow",
        },
        {
          name: "Cyrus the Great",
          value: "ctg",
        },
        {
          name: "Thutmose III",
          value: "thut",
        },
        {
          name: "Tomyris",
          value: "tomirys",
        },
        {
          name: "Artemisia I",
          value: "artemis",
        },
        {
          name: "Gilgamesh",
          value: "gil",
        },
        {
          name: "Amanitor",
          value: "amanitor",
        },
        {
          name: "Henry V",
          value: "henry",
        },
        {
          name: "Hermann",
          value: "hermann",
        },
        {
          name: "Keira",
          value: "keira",
        },
        {
          name: "Imhotep",
          value: "imhotep",
        },
        {
          name: "Kusunoki Masashige",
          value: "km",
        },
      ],
    },
  ],

  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }

    const com = await interaction.options.getString("commanders");
    const embed = new MessageEmbed().setTimestamp().setFooter({
      text: "Kd 1215",
      iconURL:
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
    });

    if (com == "ysg") {
      embed.setColor("#FFDC00");
      embed.setTitle("Yi-Seong-Gye");
      embed.setURL("https://www.rok.guide/commanders/yi-seong-gye/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069378929900662784/yi-seong-gye-225x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069379608094457947/Yi-Seong-Gye-Open-Field-Build-scaled.png"
      );
      embed.setDescription(
        `Yi Seong-Gye (YSG) is a Legendary Archer commander, one of the best commanders in Rise of Kingdoms. When choosing any Archer Civilization as a special unit, Yi Seong-Gye must be our first Legendary to reach maximum levels and skills, even playing with Cavalry or Infantry it will never stop being significant at any point in the game.\n\n__Best Pairing :__ \n` +
          emoji(emo.EdwardofWoodstock) +
          emoji(emo.RamessesII1) +
          emoji(emo.ElCid) +
          emoji(emo.Tomyris) +
          emoji(emo.CharlesMartel) +
          emoji(emo.RichardI) +
          emoji(emo.WuZetian) +
          emoji(emo.SunTzu) +
          emoji(emo.Hermann)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360099761594449/Yi-Seong-Gye.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.archer) +
            `**|** *Archery* ` +
            emoji(emo.garrison) +
            `**|** *Garrison* ` +
            emoji(emo.skill) +
            `**|** *Skill*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "ramesses") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "elcid") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "eow") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "ctg") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "thut") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "tomirys") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "artemis") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "gil") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "amanitor") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "henry") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "hermann") {
      embed.setColor("#C100FF");

      return interaction.reply({ embeds: [embed] });
    } else if (com == "keira") {
      embed.setColor("#C100FF");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "imhotep") {
      embed.setColor("#C100FF");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "km") {
      embed.setColor("#C100FF");
      return interaction.reply({ embeds: [embed] });
    } else {
      embed.setColor("#C100FF");
      return interaction.reply("No commander found!");
    }
  },
};
