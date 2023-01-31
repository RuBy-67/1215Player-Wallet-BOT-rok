const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "tips_leadership",
  description: "top stats of 1215 Wallet `",
  options: [
    {
      name: "commanders",
      description: "Witch commander ?",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "Æthelflæd",
          value: "Aethelflaed",
        },
        {
          name: "Charlemagne",
          value: "charlemagne",
        },
        {
          name: "Frederick I",
          value: "frederick",
        },
        {
          name: "Hannibal Barca",
          value: "hannibal",
        },
        {
          name: "Hermann",
          value: "hermann",
        },
        {
          name: "Honda Tadakatsu",
          value: "honda",
        },
        {
          name: "Julius Caesar",
          value: "jc",
        },
        {
          name: "LuBu",
          value: "lubu",
        },
        {
          name: "Mehmed II",
          value: "mehmed",
        },
        {
          name: "Moctezuma I",
          value: "moc",
        },
        {
          name: "Osman I",
          value: "osman",
        },
        {
          name: "Ragnar Lodbrok",
          value: "ragnar",
        },
        {
          name: "Scipio Africanus",
          value: "scipio",
        },
        {
          name: "Sulleiman I",
          value: "sull",
        },
        {
          name: "Theodora",
          value: "theodora",
        },
        {
          name: "Trajan",
          value: "trajan",
        },
        {
          name: "Wu Zetian",
          value: "wu",
        },
        {
          name: "Yi Sun Sin",
          value: "yss",
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

    if (com == "Aethelflaed") {
      embed.setColor("#FFDC00");
      embed.setTitle("Æthelflæd");
      embed.setURL("https://www.rok.guide/aethelflaed/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069976313881964604/Aethelflaed_full-1-530x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069978222810378290/aethelflaed-mixed-troops-talent-tree.png"
      );
      embed.setDescription(
        `Aethelflaed is by far the most useful commander in every aspect of Rise of Kingdoms. A lot of people will say that Aethelflaed is there for free to play players but that is not true. Most of the pay to win players will use her in fights because of the first skill.\n\n__Best Pairing Primary:__ \n` +
          emoji(emo.MehmedII) +
          emoji(emo.JoanofArc1) +
          emoji(emo.YiSeongGye) +
          emoji(emo.OsmanI) +
          emoji(emo.SunTzu) +
          emoji(emo.FrederickI) +
          `\n\n__Best Pairing Secondary:__ \n` +
          emoji(emo.RichardI) +
          emoji(emo.Baibars) +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.Belisarius) +
          `__Video Guide :__\n>>> [Guide Free commander](https://youtu.be/FrT0Kao_p-A)`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360449805631639/Aethelflaed.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `**|** *Leadership* ` +
            emoji(emo.peacekeeping) +
            `**|** *Peacekeeper* ` +
            emoji(emo.support) +
            `**|** *Support*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "charlemagne") {
      embed.setColor("#FFDC00");
      embed.setTitle("Charlemagne");
      embed.setURL("https://www.rok.guide/Charlemagne/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069979789458419722/Charlemagne_full-1-397x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069980050683875458/charlemagne-rally-mixed-troops.png"
      );
      embed.setDescription(
        `Charlemagne is a legendary commander that was part of a reward in the first KVK in Rise of Kingdoms. The only purpose of Charlemagne is to rally city. Unfortunately, Charlemagne by far one of the worst legendary commanders in Rise Of kingdoms.\n\n__Best Pairing :__ \n` +
          emoji(emo.JuliusCaesar) +
          emoji(emo.HannibalBarca) 
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360411276750878/Charlemagne.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `**|** *Leadership* ` +
            emoji(emo.conquering) +
            `**|** *Conquering* ` +
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "frederick") {
      embed.setColor("#FFDC00");
      embed.setTitle("Frederick I");
      embed.setURL("https://www.rok.guide/commanders/frederick-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069981754816995378/frederick-1-1-228x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069982178060021820/Frederick-I-Rally-Build-Mixed-Troops.png"
      );
      embed.setDescription(
        `Frederick I is one of the first legendary commanders in Rise of Kingdoms. He was great when Rise Of Kingdoms was released but now Frederick is not so good. Do not invest universal legendary sculptures in Frederick, it is not worth it now and you can get him gold chests.\n\n__Best Pairing :__ \n` +
          emoji(emo.JuliusCaesar) +
          emoji(emo.HannibalBarca)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360342565670972/Frederick-I.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `**|** *Leadership* ` +
            emoji(emo.conquering) +
            `**|** *Conquering* ` +
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
            emoji(emo.etoile_vide) +
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
            emoji(emo.etoile_vide) +
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
            emoji(emo.etoile_vide) +
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
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
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
    } else if (com == "henry") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "henry") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "henry") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "scipio") {
      embed.setColor("#FFDC00");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "scipio") {
      embed.setColor("#C100FF");

      return interaction.reply({ embeds: [embed] });
    } else if (com == "osman") {
      embed.setColor("#C100FF");
      return interaction.reply({ embeds: [embed] });
    } else {
      return interaction.reply("No commander found!");
    }
  },
};
