const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "tips_cavalery",
  description: "top stats of 1215 Wallet `",
  options: [
    {
      name: "commanders",
      description: "Witch commander ?",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "Attila",
          value: "attila",
        },
        {
          name: "Alexander Nevsky",
          value: "alexander",
        },
        {
          name: "Baibars",
          value: "baibars",
        },
        {
          name: "Belisarius",
          value: "belisarius",
        },
        {
          name: "Bertrand du Guesclin",
          value: "bertrand",
        },
        {
          name: "CaoCao",
          value: "caocao",
        },
        {
          name: "Chandragupta Maurya",
          value: "chandragupta",
        },
        {
          name: "Genghis Khan",
          value: "genghis",
        },
        {
          name: "Jadwiga",
          value: "jadwiga",
        },
        {
          name: "Jan Zizka",
          value: "jan",
        },
        {
          name: "Joan of arc Prime",
          value: "joan",
        },
        {
          name: "Minamoto no Yoshitsune",
          value: "minamoto",
        },
        {
          name: "Pelagius",
          value: "pelagius",
        },
        {
          name: "Saladin",
          value: "saladin",
        },
        {
          name: "Takeda shingen",
          value: "takeda",
        },
        {
          name: "William I",
          value: "william",
        },
        {
          name: "Xiang Yu",
          value: "xiang",
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
    const embed2 = new MessageEmbed().setTimestamp().setFooter({
      text: "Kd 1215",
      iconURL:
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
    });
    const embed3 = new MessageEmbed().setTimestamp().setFooter({
      text: "Kd 1215",
      iconURL:
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
    });

    if (com == "attila") {
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
    } else if (com == "alexander") {
      embed.setColor("#FFDC00");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#FFDC00");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "bertrand") {
      embed.setColor("#FFDC00");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#FFDC00");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "caocao") {
      embed.setColor("#FFDC00");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#FFDC00");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "chandragupta") {
      embed.setColor("#FFDC00");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#FFDC00");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "genghis") {
      embed.setColor("#FFDC00");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#FFDC00");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "jadwiga") {
      embed.setColor("#FFDC00");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#FFDC00");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "artemis") {
      embed.setColor("#FFDC00");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#FFDC00");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "jan") {
      embed.setColor("#FFDC00");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#FFDC00");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "minamoto") {
      embed.setColor("#FFDC00");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#FFDC00");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "saladin") {
      embed.setColor("#FFDC00");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#FFDC00");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "takeda") {
      embed.setColor("#FFDC00");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#FFDC00");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "william") {
      embed.setColor("#FFDC00");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#FFDC00");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "xiang") {
      embed.setColor("#FFDC00");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#FFDC00");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "baibars") {
      embed.setColor("#C100FF");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#C100FF");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );

      return interaction.reply({ embeds: [embed] });
    } else if (com == "belisarius") {
      embed.setColor("#C100FF");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#C100FF");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "pelagius") {
      embed.setColor("#C100FF");
       embed.setTitle("Alexander the Great");
       embed.setURL("https://www.rok.guide/alexander-the-great/");
       embed.setThumbnail(
         "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
       );
       embed.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
       );
       embed.setDescription(
         `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
           emoji(emo.CharlesMartel) +
           emoji(emo.RichardI) +
           emoji(emo.guan) +
           emoji(emo.YiSeongGye) +
           emoji(emo.EuljiMundeok)
       );
       embed.setAuthor({
         name: "rok-guide",
         iconURL:
           "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
       });
       embed.setFields(
         {
           name: "Specialties :",
           value:
             "\u200B" +
             emoji(emo.infantry) +
             `**|** *Infantry* ` +
             emoji(emo.vesatility) +
             `**|** *Versatility* ` +
             emoji(emo.attack) +
             `**|** *Attack*`,
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
             emoji(emo.etoile_vide) +
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
             emoji(emo.etoile_vide) +
             "*",
           inline: true,
         }
       );
       embed2.setColor("#C100FF");
       embed2.setImage(
         "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
       );
      return interaction.reply({ embeds: [embed] });
    } else {
      return interaction.reply("No commander found!");
    }
  },
};
