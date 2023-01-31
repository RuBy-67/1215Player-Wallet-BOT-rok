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
          name: "Alexandre the Great",
          value: "alexandre",
        },
        {
          name: "Charles Martel",
          value: "charles",
        },
        {
          name: "Cheok Jun-gyeong",
          value: "cheok",
        },
        {
          name: "Constantine I",
          value: "constantin",
        },
        {
          name: "Eulji Mundeok",
          value: "eulji",
        },
        {
          name: "Flavius Aetius",
          value: "flavius",
        },
        {
          name: "Guan Yu",
          value: "guan",
        },
        {
          name: "Harald Sigurdssun",
          value: "harald",
        },
        {
          name: "K'inich Janaab' Pakal",
          value: "pakal",
        },
        {
          name: "Lenonidas I",
          value: "leonidas",
        },
        {
          name: "Richard I",
          value: "richard",
        },
        {
          name: "Sargon the great",
          value: "sargon",
        },
        {
          name: "Scipio Africanus Prime",
          value: "scipio",
        },
        {
          name: "Sun Tzu",
          value: "sun",
        },
        {
          name: "Tariq ibn Ziyad",
          value: "tariq",
        },
        {
          name: "Zenobia",
          value: "zenobia",
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

    if (com == "alexandre") {
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
    } else if (com == "charles") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "cheok") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "constantin") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "flavius") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "guan") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "harald") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "artemis") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "pakal") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "richard") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "sargon") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "scipio") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "tariq") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "zenobia") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "eulji") {
      embed.setColor("#C100FF");

      return interaction.reply({ embeds: [embed] });
    } else if (com == "sun") {
      embed.setColor("#C100FF");
      return interaction.reply({ embeds: [embed] });
    } else {
      return interaction.reply("No commander found!");
    }
  },
};
