const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "tips_archery",
  description: "Archery Commander Tips / Talent tree",
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
          emoji(emo.Hermann) +
          `\n\n__Video Guides :__\n>>> **[YSG-Guide_NotCasuals](https://youtu.be/THvz7d6Qj7A)**`
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
      embed.setTitle("Ramesses II");
      embed.setURL("https://www.rok.guide/ramesses-ii/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069720159113195651/1675111551534.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069720368773873674/ramesses-ii-talent-tree.png"
      );
      embed.setDescription(
        `Ramesses II may not possess high nuking skills like other great commanders of Rise of Kingdom nor the AOE output damage. Yet he is the most powerful debuffing archer commander in the Rise of Kingdom F2P game. In other words, free players cannot ask for higher commanders as they can be bought if they spend money, yet for smooth going of your game on a day to day basis, you can find that Ramesses II is outstanding. \n\n__Best Pairing :__ \n` +
          emoji(emo.YiSeongGye) +
          emoji(emo.Hermann) +
          emoji(emo.EdwardofWoodstock) +
          emoji(emo.ElCid) +
          emoji(emo.ArtemisiaI11) +
          `\n\n__Video Guides :__\n>>> **[Talent Pairing_Shinshi42](https://youtu.be/UAadVht3huo) \n [F2p Value?_Shinshi42](https://youtu.be/zUCgREi6n34)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360198369689651/Ramesses-II-1.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.archer) +
            `**|** *Archery* ` +
            emoji(emo.vesatility) +
            `**|** *Versatile* ` +
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
      return interaction.reply({ embeds: [embed] });
    } else if (com == "elcid") {
      embed.setColor("#FFDC00");
      embed.setTitle("El-Cid");
      embed.setURL("https://www.rok.guide/commanders/El-Cid/#");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069723840378318888/el-cid-223x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069723979650170981/el-cid-openfield-talent-build.png"
      );
      embed.setDescription(
        `El Cid is one of the oldest commanders in Rise Of Kingdoms. El Cid is a legendary archer commander but it pretty bad commander. He does not have good nuking skills or damage. The only purpose of El Cid is to disable attacks and active skill for 1 seconds.\n\n__Best Pairing :__ \n` +
          emoji(emo.YiSeongGye) +
          emoji(emo.RamessesII1) +
          emoji(emo.EdwardofWoodstock) +
          emoji(emo.Tomyris) +
          emoji(emo.KusunokiMasashige) +
          emoji(emo.Hermann)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360341827473426/El-Cid.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.archer) +
            `**|** *Archery* ` +
            emoji(emo.vesatility) +
            `**|** *Versatility* ` +
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
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
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
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "eow") {
      embed.setColor("#FFDC00");
      embed.setTitle("Edward of Woodstock");
      embed.setURL("https://www.rok.guide/edward-of-woodstock/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069727092129935522/1675113201087.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069727339740659802/edward-of-woodstock-open-field-talent-tree.png"
      );
      embed.setDescription(
        `Edward of Woodstock is legendary archer commander in Rise Of Kingdoms. Great commander for field fights and rally. Edward of Woodstock will provide an insane amount of nuke damage and buffs for archers. He is a commander that you must have if you leading rally AOO and KVK.\n\n__Best Pairing :__ \n` +
          emoji(emo.YiSeongGye) +
          emoji(emo.RamessesII1) +
          emoji(emo.Tomyris) +
          emoji(emo.ElCid)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360341592580208/Edward-of-Woodstock.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.archer) +
            `**|** *Archery* ` +
            emoji(emo.vesatility) +
            `**|** *Versatility* ` +
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
            emoji(emo.etoile_plein) +
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
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "ctg") {
      embed.setColor("#FFDC00");
      embed.setTitle("Cyrus the Great");
      embed.setURL("https://www.rok.guide/cyrus-the-great/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360343521960037/cyrus-the-great.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069729784285888542/cyrus-open-field-skill-talent-tree.png"
      );
      embed.setDescription(
        `Cyrus the Great is an archer commander that is only available on kingdoms who are older than 310 days. Cyrus the Great has great skills and a talent tree so he is a great PVP commander who is dominating field battles. A lot of people are using him in field battles in KVK and in ARK. \nIf you are an archer player you can invest in him. Cyrus the Great can be used for field battles and for Rallying objectives. He has a lot of nuking damage and defense skills that is helping a lot.\n\n__Best Pairing :__ \n` +
          emoji(emo.YiSeongGye) +
          emoji(emo.RamessesII1) +
          emoji(emo.EdwardofWoodstock) +
          emoji(emo.NebuchadnezzarII)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360343521960037/cyrus-the-great.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.archer) +
            `**|** *Archery* ` +
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
    } else if (com == "thut") {
      embed.setColor("#FFDC00");
      embed.setTitle("Thutmose III");
      embed.setURL("https://www.rok.guide/commander/thutmose-iii/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360100558512279/Thutmose-III-avatar-208x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069731567414546452/Thutmose-III-Talent-Tree-Build-and-Guide-1120x630.png"
      );
      embed.setDescription(
        `In Rise of Kingdoms, Thutmose III is a new legendary archer commander who is a part of the Egypt civilization. He has the Archer, Versatility, and Support talent trees available to him. In new kingdoms, where a large number of players will have Richard, Thutmose III will be an incredibly helpful commander to have. Richard is vulnerable to Thutmose IIIfirst skill, which lowers Richards healing. His other skills are ok.`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360100558512279/Thutmose-III-avatar-208x300.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.archer) +
            `**|** *Archery* ` +
            emoji(emo.vesatility) +
            `**|** *Versatility* ` +
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
            emoji(emo.etoile_plein) +
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
    } else if (com == "tomirys") {
      embed.setColor("#FFDC00");
      embed.setTitle("Tomyris");
      embed.setURL("https://www.rok.guide/tomyris/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069734738799116418/Tomyris_full-1-367x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069734580485095525/tomyris-openfield-rally-build.png"
      );
      embed.setDescription(
        `Tomyris is a legendary archer commander in Rise Of Kingdoms. The problem with Tomyris is that there is only one good pair for her and that is Edwards. Edward primary and Tomyris secondary with right talent tree will great combo for field fights and for rallying objectives.\n\n__Best Pairing :__ \n` +
          emoji(emo.cyrusthegreat) +
          emoji(emo.NebuchadnezzarII) +
          emoji(emo.YiSeongGye) +
          emoji(emo.ArtemisiaI11) +
          emoji(emo.RamessesII1) +
          emoji(emo.EdwardofWoodstock)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360100856311848/Tomyris.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.archer) +
            `**|** *Archery* ` +
            emoji(emo.conquering) +
            `**|** *conquering* ` +
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
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "artemis") {
      embed.setColor("#FFDC00");
      embed.setTitle("Artemisia I");
      embed.setURL("https://www.rok.guide/artemisia-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360447289040998/Artemisia-I-1_1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069736423462273044/artemisia-open-field-talent-tree.png"
      );
      embed.setDescription(
        `Artemisa is a new strange and unique commander in Rise Of Kingdoms. Artemisia’s first skill deals damage to 3 targets but it will also do self-damage. This is a big problem because in PVP you will fill up the hospital very fast.\n\n__Best Pairing :__ \n` +
          emoji(emo.YiSeongGye) +
          emoji(emo.RamessesII1) +
          emoji(emo.Tomyris) +
          emoji(emo.ElCid) +
          emoji(emo.KusunokiMasashige) +
          emoji(emo.Hermann) +
          emoji(emo.SunTzu) +
          emoji(emo.OsmanI)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360447289040998/Artemisia-I-1_1.png",
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
            emoji(emo.defense) +
            `**|** *Defense*`,
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
    } else if (com == "gil") {
      embed.setColor("#FFDC00");
      embed.setTitle("Gilgamesh");
      embed.setURL("https://www.rok.guide/Gilgamesh");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360448249536593/1675021527971.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069738349834797197/gilgamesh-open-field-skill-build.png"
      );
      embed.setDescription(
        `Gilgamesh is a legendary archer commander who can be used in battle and to rally troops. Gilgamesh is a commander that you must have if you enjoy archers or playing aoo league in Rise Of Kingdoms.\n\n__Best Pairing :__ \n` +
          emoji(emo.NebuchadnezzarII) +
          emoji(emo.cyrusthegreat) +
          emoji(emo.RamessesII1) +
          emoji(emo.YiSeongGye)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360448249536593/1675021527971.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.archer) +
            `**|** *Archery* ` +
            emoji(emo.conquering) +
            `**|** *Conquering* ` +
            emoji(emo.skill) +
            `**|** *skill*`,
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
    } else if (com == "amanitor") {
      embed.setColor("#FFDC00");
      embed.setTitle("Amanitor");
      embed.setURL("https://www.rok.guide/commander/amanitore-guide/");
      embed.setThumbnail(
        "https://media.discordapp.net/attachments/1069360006908084245/1069740452535873668/1675116386535.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069740638960107540/Amanitore-garrison-build.png"
      );
      embed.setDescription(
        `Amanitore is not that great a commander. Amanitore is a great counter to infantry commanders but she is weak against cavalry. She will take 5% more damage against cavalry units and we already know that archers are weak against cavalry units.\n\nProblem is that most of the players have cavalry units for rally, especially Attila and Takeda. Now there is no point in getting her in our opinion. There are better commanders that can be used for defending. Amanitore is only worth getting if you are pay to win players and have defending roles in KVK and AOO.\n\n__Best Pairing :__ \n` +
          emoji(emo.ArtemisiaI11) +
          emoji(emo.YiSeongGye)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://media.discordapp.net/attachments/1069360006908084245/1069740452535873668/1675116386535.png",
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
            emoji(emo.etoile_plein) +
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
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "henry") {
      embed.setColor("#FFDC00");
      embed.setTitle("Henry V");
      embed.setURL("https://kangfumaster.com/rok-commanders-henry-v/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360292271763486/henry-v-avatar.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069742304711163904/image.png"
      );
      embed.setDescription(
        `__Best Pairing (Henry V in Second) :__ \n` +
          emoji(emo.boudicaprime) +
          emoji(emo.gilmagesh) +
          emoji(emo.NebuchadnezzarII) +
          emoji(emo.RamessesII1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360292271763486/henry-v-avatar.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.archer) +
          `**|** *Archery* ` +
          emoji(emo.conquering) +
          `**|** *Conquering* ` +
          emoji(emo.support) +
          `**|** *Support*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "hermann") {
      embed.setColor("#C100FF");
      embed.setTitle("Hermann");
      embed.setURL("https://www.rok.guide/commanders/hermann/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360292447911956/Hermann.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069743540856442880/hermann-open-field-build.png"
      );
      embed.setDescription(
        `Hermann is an archer commander in Rise of Kingdoms. His main strengths include generating rage and reducing the rage of the enemies. His rage engine is extremely strong compared to other commanders, which makes him a powerful choice.\n\n__Best Pairing :__ \n` +
          emoji(emo.ElCid) +
          emoji(emo.YiSeongGye) +
          emoji(emo.KusunokiMasashige)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360292447911956/Hermann.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.archer) +
          `**|** *Archery* ` +
          emoji(emo.garrison) +
          `**|** *Garrison* ` +
          emoji(emo.skill) +
          `**|** *Skill*`,
      });

      return interaction.reply({ embeds: [embed] });
    } else if (com == "keira") {
      embed.setColor("#C100FF");
      embed.setTitle("Keira");
      embed.setURL("https://www.rok.guide/keira/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069744759951872130/Keira_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069745259338276956/keira-skill-talent-tree-builds.png"
      );
      embed.setDescription(
        `In Rise of Kingdoms, Keira is a peacekeeping archer commander. In the event Ceroli Crisis, Keira can be obtained. She is the only commander in Rise Of Kingdoms whose skill damage in scenario battles has been increased. Great commander for annihilating barbarians.\n\n__Best Pairing :__ \n` +
          emoji(emo.RichardI) +
          emoji(emo.YiSeongGye) +
          emoji(emo.RamessesII1) +
          emoji(emo.Aethelflaed)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069744759951872130/Keira_full-1.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.archer) +
            `**|** *Archery* ` +
            emoji(emo.peacekeeping) +
            `**|** *Peacekeeping* ` +
            emoji(emo.skill) +
            `**|** *Skill*`,
        },
        {
          name: "Overall :",
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
    } else if (com == "imhotep") {
      embed.setColor("#C100FF");
      embed.setTitle("Imhotep");
      embed.setURL("https://www.rok.guide/commander/imhotep/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069746294702215288/imhotep-avatar-193x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069746736706375741/Imhotep-Talent-Tree-Build-and-Guide1-1120x630.png"
      );
      embed.setDescription(
        `Imhotep was an adviser to Pharaoh Djoser during the Third Dynasty of Ancient Egypt and the high priest of the sun god Ra at Heliopolis. He received this status not by birthright  he was a commoner  but for wisdom and perseverance. Thanks to them, he rose and became the right hand of the pharaoh.`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069365369858441236/imhotep-frame.png",
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
            emoji(emo.support) +
            `**|** *Support*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_vide) +
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
            emoji(emo.etoile_vide) +
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
            emoji(emo.etoile_vide) +
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
            emoji(emo.etoile_vide) +
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "km") {
      embed.setColor("#C100FF");
      embed.setTitle("Kusunoki Masashige");
      embed.setURL("https://www.rok.guide/commanders/kusunoki-masashige/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069747238013771786/kusunoki-masashige-187x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069747460437704774/kusunoki-masashige-open-field-build-1024x616.png"
      );
      embed.setDescription(
        `Kusunoki is a powerful commander in Rise of Kingdoms and has some tremendous skills that make him a valuable character in the game. However, what sets him apart from the other commanders is his massive damage potential. His four skills mainly focus on increasing damage and attack, and this means that he is an excellent commander to use on the battlefield. \n\n__Best Pairing :__ \n` +
          emoji(emo.YiSeongGye) +
          emoji(emo.YiSeongGye) +
          emoji(emo.Hermann)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360291839737936/Kusunoki-Masashige.png",
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
            emoji(emo.etoile_plein) +
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else {
      return interaction.reply("No commander found!");
    }
  },
};
