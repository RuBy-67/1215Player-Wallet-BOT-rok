const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "tips",
  description: "test",
  options: [
    {
      type: 1,
      name: "archery",
      description: "Commander List + Talent tree in archery",
      options: [
        {
          name: "commanders",
          description: "Witch commander ?",
          type: "STRING",
          choices: [
            {
              name: "Resume pairing",
              value: "resume",
            },
            {
              name: "Amanitor",
              value: "amanitor",
            },
            {
              name: "Artemisia I",
              value: "artemis",
            },
            {
              name: "Boudica Prime",
              value: "bp",
            },
            {
              name: "Cyrus the Great",
              value: "ctg",
            },
            {
              name: "Edward of Woodstock",
              value: "eow",
            },
            {
              name: "El Cid",
              value: "elcid",
            },
            {
              name: "Gilgamesh",
              value: "gil",
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
              name: "Imhotep",
              value: "imhotep",
            },
            {
              name: "Keira",
              value: "keira",
            },
            {
              name: "Kusunoki Masashige",
              value: "km",
            },
            {
              name: "Ramesses II",
              value: "ramesses",
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
              name: "Yi-Seong-Gye",
              value: "ysg",
            },
          ],
          required: true,
        },
      ],
    },
    {
      type: 1,
      name: "leadership",
      description: "Commander List + Talent tree in leadership",
      options: [
        {
          name: "commanders",
          type: "STRING",
          description: "Witch commander ?",
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
          required: true,
        },
      ],
    },
    {
      type: 1,
      name: "integration",
      description: "Commander List + Talent tree in integration",
      options: [
        {
          type: "STRING",
          name: "commanders",
          description: "Witch commander ?",
          choices: [
            {
              name: "Boudica",
              value: "boudica",
            },
            {
              name: "Cleopatra VII",
              value: "cleopatra",
            },
            {
              name: "Diaochan",
              value: "diaochan",
            },
            {
              name: "Ishida Mitsunari",
              value: "ishida",
            },
            {
              name: "Joan of Arc",
              value: "joan",
            },
            {
              name: "Lohar",
              value: "lohar",
            },
            {
              name: "Mathilda of Flanders",
              value: "mathilda",
            },
            {
              name: "Mulan",
              value: "mulan",
            },
            {
              name: "Queen Tamar of Georgia",
              value: "tamar",
            },
            {
              name: "Seondeok",
              value: "seondeok",
            },
          ],
          required: true,
        },
      ],
    },
    {
      type: 1,
      name: "infantry",
      description: "Commander List + Talent tree in infantry",
      options: [
        {
          type: "STRING",
          name: "commanders",
          description: "Witch commander ?",
          choices: [
            {
              name: "Resume pairing",
              value: "resume",
            },
            {
              name: "Alexander the Great",
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
              value: "scipiop",
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
          required: true,
        },
      ],
    },
    {
      type: 1,
      name: "cavalry",
      description: "Commander List + Talent tree in cavalry",
      options: [
        {
          type: "STRING",
          name: "commanders",
          description: "Witch commander ?",
          choices: [
            {
              name: "Resume pairing cav",
              value: "resume",
            },
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
              value: "joanp",
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
          required: true,
        },
      ],
    },
    {
      type: 1,
      name: "civilisation",
      description: "Tips on civilisation",
      options: [
        {
          type: "STRING",
          name: "civilisation",
          description: "Witch civilisations ?",
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
          required: true,
        },
      ],
    },
  ],
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }

    const com = await interaction.options.getString("commanders");
    const civi = await interaction.options.getString("civilisation");
    const skill = await interaction.options.getString("skill");
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
      embed.setTitle("Attila");
      embed.setURL("https://www.rok.guide/attila/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070796406136258590/Attila_full-1-596x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070797471875342376/attila-talent-tree.png"
      );
      embed.setDescription(
        `Attila is the best cavalry commander in Rise of Kingdoms. There is no commander in Rise Of Kingdoms that can stop Attila from doing an insane amount of damage. After nerf Attila is still strongest commander. His main mission is to rally buildings.\n\n__Best Pairing :__ \n` +
          emoji(emo.TakedaShingen)`\n\n` +
          emoji(emo.yt) +
          ` __Video Guide :__ \n>>> **[Attila x Takeda](https://youtu.be/Ew-aJ3UhNsA)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360466352152667/Attila.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.conquering) +
            `  *Garrison* ` +
            emoji(emo.attack) +
            `  *Attack*`,
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
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "alexander") {
      embed.setColor("#FFDC00");
      embed.setTitle("Alexander Nevsky");
      embed.setURL("https://www.rok.guide/commander/alexander-nevsky/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450074062868/alexander-nevsky.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070804040620970126/alexander-nevsky-talents-1024x575.png"
      );
      embed.setDescription(
        `Alexander Nevsky is the most powerful legendary cavalry commander in Rise Of Kingdoms, providing an insane amount of nuke and survivability. The talent tree of Alexander Nevsky is excellent, but you do not require it because he is the commander you will use as secondary commander the majority of the time, and we all know that the secondary commander's talent tree does not work.\n\n__Best Pairing :__ \n` +
          emoji(emo.xiangyu) +
          emoji(emo.WilliamI) +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.ChandraguptaMaurya1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450074062868/alexander-nevsky.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "alexander") {
      embed.setColor("#FFDC00");
      embed.setTitle("Alexander Nevsky");
      embed.setURL("https://www.rok.guide/commander/alexander-nevsky/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450074062868/alexander-nevsky.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070804040620970126/alexander-nevsky-talents-1024x575.png"
      );
      embed.setDescription(
        `Alexander Nevsky is the most powerful legendary cavalry commander in Rise Of Kingdoms, providing an insane amount of nuke and survivability. The talent tree of Alexander Nevsky is excellent, but you do not require it because he is the commander you will use as secondary commander the majority of the time, and we all know that the secondary commander's talent tree does not work.\n\n__Best Pairing :__ \n` +
          emoji(emo.xiangyu) +
          emoji(emo.WilliamI) +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.ChandraguptaMaurya1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450074062868/alexander-nevsky.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "joanp") {
      embed.setColor("#FFDC00");
      embed.setTitle("Joan of Arc Prime");
      embed.setURL(
        "https://riseofkingdomsguides.com/legendary-joan-of-arc-prime-talent-tree-build-and-guide/"
      );
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360447565873182/1675020321320.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1071534071622140085/Legendary-Joan-Of-Arc-Prime-Talent-Tree-Build-1163x630.png"
      );
      embed.setDescription(
        `Joan Of Arc Prime is a legendary cavalry commander in Rise Of Kingdoms with versatility, cavalry, and support talent tree. Joan Of Arc Prime is an extremely powerful commander for open-field fighting during KVK and Ark Of Osiris. Simply scroll down to see all of her skills, especially the first one that is insanely good for open-field fighting.`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360447565873182/1675020321320.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.support) +
            `  *Support*`,
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
    } else if (com == "bertrand") {
      embed.setColor("#FFDC00");
      embed.setTitle("Bertrand du Guesclin");
      embed.setURL("https://www.rok.guide/commander/Bertrand-du-Guesclin/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360410031042631/bertrand-du-guesclin.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070807405815934976/Bertrand-Conqueroring-Talent-Tree-Build-1024x468.png"
      );
      embed.setDescription(
        `Bertrand du Guesclin is one of the two commanders introduced to Rise of Kingdoms along with Alexander Nevsky. Bertrand is a legendary commander that specializes in cavalry, conquering, and defense. If you are looking for a legendary cavalry commander to join your ranks, we will tell you this right now: Bertrand isn't a great commander based on his skill set.\n\n__Best Pairing :__ \n` +
          emoji(emo.Attila) +
          emoji(emo.ChandraguptaMaurya1) +
          emoji(emo.GenghisKhan1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360410031042631/bertrand-du-guesclin.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalery* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.defense) +
            `  *Defense*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070807421653626920/Bertrand-PvP-Talent-Tree-Build-1024x468.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "caocao") {
      embed.setColor("#FFDC00");
      embed.setTitle("Cao Cao");
      embed.setURL("https://www.rok.guide/commanders/cao-cao/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070808810815496262/cao-cao-300x285.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070808655353622718/cao-cao-king-of-speed-talent-tree.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.Saladin) +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.TakedaShingen) +
          emoji(emo.Aethelflaed) +
          emoji(emo.Baibars) +
          emoji(emo.Boudica)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360410844729475/Cao-Cao.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.cavalry) +
          `  *Cavalry* ` +
          emoji(emo.peacekeeping) +
          `  *Peacekeeping* ` +
          emoji(emo.mobility) +
          `  *Mobility*`,
      });
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://media.discordapp.net/attachments/1069720356379709595/1070808676379668561/cao-cao-openfield-build.png?width=960&height=698"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "chandragupta") {
      embed.setColor("#FFDC00");
      embed.setTitle("Chandragupta Maurya");
      embed.setURL("https://www.rok.guide/chandragupta-maurya/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070809243613143171/Chandragupta-Maurya_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070809880136532018/Chandragupta-Rally-Talent-Build.png"
      );
      embed.setDescription(
        `Chandragupta Maurya is a legendary Conquering commander that can be used on kingdoms which have been open for more than 310 days. He looks like a great commander but we will see how he is performing on in PVP. Chandragupta Maurya needs to be tested but he was just realized so you have to wait for In-depth guide, talent tree and pairs.\n\n__Best Pairing :__ \n` +
          emoji(emo.WilliamI) +
          emoji(emo.TakedaShingen) +
          emoji(emo.GenghisKhan1) +
          emoji(emo.Attila) +
          emoji(emo.Saladin) +
          `\n\n` +
          emoji(emo.yt) +
          ` __Video Guide :__\n>>> [Chandragupta Maurya guide](https://youtu.be/RNomkqOsqLU)`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360411104772096/Chandragupta-Maurya_1.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070809900189487184/Chandragupta-Openfield-Build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "genghis") {
      embed.setColor("#FFDC00");
      embed.setTitle("Genghis Khan");
      embed.setURL("https://www.rok.guide/genghis-khan/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070811033654005760/genghis-khan-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070811842080935967/genghis-khan-talent-tree.png"
      );
      embed.setDescription(
        `Genghis Khan is one of the best legendary cavalry commanders in Rise Of Kingdoms. The amount of nuke that Genghis Khan is providing is insane. Great commander to have. you can use Genghis Khan for a rally, field fighting and in some situations for defending.\n\n__Best Pairing :__ \n` +
          emoji(emo.Pelagius) +
          emoji(emo.Baibars) +
          emoji(emo.CaoCao) +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.Belisarius) +
          `\n\n` +
          emoji(emo.yt) +
          ` __Video Guide :__ \n>>> [Genghis Khan Walkthrough](https://youtu.be/2D10yudDdIs)`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360342762790912/Genghis-Khan_1.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
    } else if (com == "jadwiga") {
      embed.setColor("#FFDC00");
      embed.setTitle("Jadwiga");
      embed.setURL("https://www.rok.guide/jadwiga");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070813041559601152/Jadwiga.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` + emoji(emo.WuZetian) + emoji(emo.Theodora)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1070813041559601152/Jadwiga.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.cavalry) +
          `  *Cavalry* ` +
          emoji(emo.garrison) +
          `  *Garrison* ` +
          emoji(emo.mobility) +
          `  *Mobility*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "jan") {
      embed.setColor("#FFDC00");
      embed.setTitle("Jan Zizka");
      embed.setURL("https://www.rok.guide/commander/jan-zizka/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360291013476553/jan-zizka-x500.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070815034751590420/Jan-Zizka-Talent-Tree-Build-1163x630.png"
      );
      embed.setDescription(
        `Jan Zizka is a legendary cavalry commander in Rise of Kingdoms with cavalry, garrison, and skill talent tree. Jan Zizka is one of the strongest commanders when it comes to defending objectives in KVK and AOO but when it comes to rallying and fighting in the open field he will underperform. The majority of his skills are focused on garrison so there is no point in using him in open-field fighting. \n\n__Best Pairing :__ \n` +
          emoji(emo.Jadwiga) +
          `\nJadwiga In prime`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360291013476553/jan-zizka-x500.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
    } else if (com == "minamoto") {
      embed.setColor("#FFDC00");
      embed.setTitle("Minamoto no Yoshitsune");
      embed.setURL("https://www.rok.guide/commanders/minamoto-no-yoshitsune/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070816162801258536/Minamoto_full-1-398x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070816751979339808/openfield-minamoto-talent-tree-1024x715.png"
      );
      embed.setDescription(
        `Minamoto No Yoshitsune is the best cavalry commander for new players in Rise of kingdoms. With the right Minamoto talent tree build and pairs, he will do an insane amount of nuke. You can use Minamoto No Yoshitsune for field battles, rally, destroying barbarians and barbarians fort.\n\n__Best Pairing :__ \n` +
          emoji(emo.GenghisKhan1) +
          emoji(emo.CaoCao) +
          emoji(emo.Saladin) +
          emoji(emo.Pelagius) +
          emoji(emo.AlexandertheGreat)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360243739467806/Minamoto-no-Yoshitsune.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeping* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070816772523040799/nuking-minamoto-talent-tree-1024x714.png"
      );
      embed3.setColor("#FFDC00");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070816789652574289/peacekeeping-minamoto-talent-tree-1024x721.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "saladin") {
      embed.setColor("#FFDC00");
      embed.setTitle("Saladin");
      embed.setURL("https://www.rok.guide/commanders/saladin");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070817992402800711/Saladin_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070818632025784320/saladin-conquering-talent-tree.png"
      );
      embed.setDescription(
        `Saladin is a legendary cavalry commander that you must have if you are a cavalry player. One of the greatest legendary commanders in the Rise of Kingdoms game includes Saladin talent tree. He is the powerful anti-debuff and the city conqueror.\n\nOne of his abilities is in minimizing the healing effect of the march as well as counterattack damage to decrease tanks on the battleground. Saladin is a fabulous commander to have if you will know how to use it properly. Because of the first skill, Saladin is a great counter to Richard. With 5551 skills and right talent tree build Saladin is an insanely strong commander.\n\n__Best Pairing :__ \n` +
          emoji(emo.GenghisKhan1) +
          emoji(emo.CaoCao) +
          emoji(emo.TakedaShingen) +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.YiSeongGye) +
          emoji(emo.FrederickI) +
          emoji(emo.Baibars) +
          emoji(emo.OsmanI)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360198856224898/Saladin.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.support) +
            `  *Support*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070818652930187394/saladin-open-field-talent-tree.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "takeda") {
      embed.setColor("#FFDC00");
      embed.setTitle("Takeda Shingen");
      embed.setURL("https://www.rok.guide/takeda-shingen/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070819321955233832/Takeda_full-1-539x630.pngg"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.Attila)`\n\n` +
          emoji(emo.yt) +
          ` __Video Guide :__\n>>> [Takeda, Bad ?](https://youtu.be/g3suKMkoPKA)`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360197920886886/Takeda-Shingen.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.mobility) +
            `  *Mobility*`,
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "william") {
      embed.setColor("#FFDC00");
      embed.setTitle("William I");
      embed.setURL("https://www.rok.guide/william-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070822693210964098/Rise-of-Kingdoms-William-I-1-300x292.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070823260331180163/william-open-field-build-Rise-of-Kingdoms.png"
      );
      embed.setDescription(
        `William I is one of best legendary cavalry commander that can be used on kingdoms which have been open for more than 310 days. By looking at his skills he is a very strong commander.\n\n__Best Pairing :__ \n` +
          emoji(emo.GenghisKhan1) +
          emoji(emo.TakedaShingen) +
          emoji(emo.Attila) +
          emoji(emo.Saladin)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360098876596314/William-I.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *cavalry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.attack) +
            `  *Attack*`,
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
    } else if (com == "xiang") {
      embed.setColor("#FFDC00");
      embed.setTitle("Xiang Yu");
      embed.setURL("https://www.rok.guide/xiang-yu/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070823865875451914/xiang-yu.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070824087993192498/xiang-yu-rally-talent-build.png"
      );
      embed.setDescription(
        `Xiang Yu is a Cavalry Conquering commander that provides a lot of nuke damage. Xiang Yu Talent Tree is great for PVP and cavalry players, If you are cavalry players you should get Xiang Yu. He is great for field battles and rallying objectives. Great commander to have in the collection.\n\n__Best Pairing :__ \n` +
          emoji(emo.CharlesMartel) +
          emoji(emo.RichardI) +
          emoji(emo.guan) +
          emoji(emo.YiSeongGye) +
          emoji(emo.EuljiMundeok)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1070823865875451914/xiang-yu.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070824116250218496/xiang-yu-open-field-talent-build.png"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "baibars") {
      embed.setColor("#C100FF");
      embed.setTitle("Baibars");
      embed.setURL("https://www.rok.guide/baibars");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070824606501445752/Baibars_full-531x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070824913885216880/baibars-conquering-talent-tree-build-scaled.png"
      );
      embed.setDescription(
        `Baibars is Rise of Kingdoms’ most underappreciated cavalry commander. Because of his first skill, Baibars is a formidable commander. That skill has the potential to deal a massive amount of damage to five targets. Baibars is the only cavalry commander in Rise of Kingdoms who can deal AOE damage.\n\n__Best Pairing :__ \n` +
          emoji(emo.CaoCao) +
          emoji(emo.Pelagius) +
          emoji(emo.SunTzu) +
          emoji(emo.KusunokiMasashige) +
          `\n\n` +
          emoji(emo.yt) +
          ` __Video Guide :__ \n>>> **[Baibars Guide](https://youtu.be/2R1EHCXqQlI)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360409460609134/Baibars.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#C100FF");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070824925251764244/baibars-skill-talent-tree-build-scaled.png"
      );

      return interaction.reply({ embeds: [embed] });
    } else if (com == "belisarius") {
      embed.setColor("#C100FF");
      embed.setTitle("Belisarius");
      embed.setURL("https://www.rok.guide/commanders/belisarius/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070828038943686766/Belisarius_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070828911891591281/Belisarius-speed-build.png"
      );
      embed.setDescription(
        `In Rise Of Kingdoms, Belisarius commands the Epic Cavalry. He is a very useful commander, and if you build the right talent tree for mobility, you will have the fastest troops in Rise Of Kingdoms. Belisarius is also a peacekeeping commander who you will constantly use to hunt barbarians.\n\n__Best Pairing :__ \n` +
          emoji(emo.Aethelflaed) +
          emoji(emo.CaoCao) +
          emoji(emo.lohar) +
          emoji(emo.diaochan) +
          emoji(emo.Baibars) +
          emoji(emo.Pelagius)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360409712263318/Belisarius.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeping* ` +
            emoji(emo.mobility) +
            `  *Mobility*`,
        },
        {
          name: "Overall :",
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
      embed2.setColor("#C100FF");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070828927234363432/Belisarius-attack-build.png"
      );
      embed3.setColor("#C100FF");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070828946507174048/Belisarius-peacekeeping-build.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "pelagius") {
      embed.setColor("#C100FF");
      embed.setTitle("Pelagius");
      embed.setURL("https://www.rok.guide/commanders/pelagius");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070829691985993738/Pelagius_full.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070829897494319286/pelagius-pve-talent-tree.png"
      );
      embed.setDescription(
        `In Rise of Kingdoms, Pelagius is the best Epic cavalry epic commander. You'll be relying on him all the time. He will be insanely good in field battles since he has the best talent tree build for cavalry. Pelagius can also be used to defend structures in the early stages of ROK.\n\n__Best Pairing :__ \n` +
          emoji(emo.CharlesMartel) +
          emoji(emo.RichardI) +
          emoji(emo.guan) +
          emoji(emo.YiSeongGye) +
          emoji(emo.EuljiMundeok)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360245744345108/Pelagius.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#C100FF");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070829925860376617/pelagius-pvp-talent-tree.png"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "resume") {
      embed.setTitle("Best Calvary Commander Pairs");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070808810815496262/cao-cao-300x285.png"
      );
      embed.setDescription(
        emoji(emo.alexandernevsky) +
          " *x* " +
          emoji(emo.xiangyu) +
          " / " +
          emoji(emo.WilliamI) +
          emoji(emo.bertrandduguesclin) +
          "\n" +
          emoji(emo.Jadwiga) +
          " *x* " +
          emoji(emo.Saladin) +
          " / " +
          emoji(emo.YiSunsin) +
          emoji(emo.Theodora) +
          "\n" +
          emoji(emo.xiangyu) +
          " *x* " +
          emoji(emo.alexandernevsky) +
          " / " +
          emoji(emo.ChandraguptaMaurya1) +
          emoji(emo.WilliamI) +
          "\n" +
          emoji(emo.Pelagius) +
          " *x* " +
          emoji(emo.Baibars) +
          " / " +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.CaoCao) +
          "\n" +
          emoji(emo.Baibars) +
          " *x* " +
          emoji(emo.Aethelflaed) +
          " / " +
          emoji(emo.SunTzu) +
          emoji(emo.MinamotonoYoshitsune) +
          "\n" +
          emoji(emo.Belisarius) +
          " *x* " +
          emoji(emo.CaoCao) +
          " / " +
          emoji(emo.Baibars) +
          emoji(emo.Pelagius) +
          "\n" +
          emoji(emo.MinamotonoYoshitsune) +
          " *x* " +
          emoji(emo.CaoCao) +
          " / " +
          emoji(emo.Pelagius) +
          emoji(emo.Baibars) +
          "\n" +
          emoji(emo.Attila) +
          " *x* " +
          emoji(emo.TakedaShingen) +
          " / " +
          emoji(emo.Saladin) +
          "\n" +
          emoji(emo.GenghisKhan1) +
          " *x* " +
          emoji(emo.Saladin) +
          " / " +
          emoji(emo.Pelagius) +
          emoji(emo.CaoCao) +
          "\n" +
          emoji(emo.Aethelflaed) +
          " *x* " +
          emoji(emo.SunTzu) +
          " / " +
          emoji(emo.JoanofArc1) +
          emoji(emo.Baibars) +
          "\n" +
          emoji(emo.Saladin) +
          " *x* " +
          emoji(emo.GenghisKhan1) +
          " / " +
          emoji(emo.CaoCao) +
          "\n" +
          emoji(emo.CaoCao) +
          " *x* " +
          emoji(emo.MinamotonoYoshitsune) +
          " / " +
          emoji(emo.Belisarius) +
          emoji(emo.Saladin)
      );
      embed.setColor("#F70505");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "ysg") {
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
          `  \n\n` +
          emoji(emo.yt) +
          ` __Video Guides :__\n>>> **[YSG-Guide_NotCasuals](https://youtu.be/THvz7d6Qj7A)**`
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
            `*Archery* ` +
            emoji(emo.garrison) +
            ` *Garrison* ` +
            emoji(emo.skill) +
            ` *Skill*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070437353484726292/Yi-Seong-Gye-Rally-Build-scaled.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
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
          `\n\n` +
          emoji(emo.yt) +
          ` __Video Guides :__\n>>> **[Talent Pairing_Shinshi42](https://youtu.be/UAadVht3huo) \n [F2p Value?_Shinshi42](https://youtu.be/zUCgREi6n34)**`
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
            `  *Archery* ` +
            emoji(emo.vesatility) +
            `  *Versatile* ` +
            emoji(emo.attack) +
            `  *Attack*`,
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
            `  *Archery* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070437621240696843/el_cid_open_field_2_talents.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
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
            `  *Archery* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070437813771833375/edward-of-woodstock-rally-talent-tree.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
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
            `  *Archery* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.attack) +
            `  *Attack*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070437929144561724/cyrus-open-field-archer-talent-tree.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
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
            `  *Archery* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.support) +
            `  *Support*`,
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
            `  *Archery* ` +
            emoji(emo.conquering) +
            `  *conquering* ` +
            emoji(emo.attack) +
            `  *Attack*`,
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
            `  *Archery* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.defense) +
            `  *Defense*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070438144056504411/artemisia-garrison-talent-tree.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
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
            `  *Archery* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.skill) +
            `  *skill*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070438549842821251/Gilgamesh-Rally-Build.png"
      );
      embed3.setColor("#FFDC00");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070438571435118742/gilgamesh-Open-field-and-Rally-Builld-archer.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
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
            `  *Archery* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.support) +
            `  *Support*`,
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
          `  *Archery* ` +
          emoji(emo.conquering) +
          `  *Conquering* ` +
          emoji(emo.support) +
          `  *Support*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "bp") {
      embed.setColor("#FFDC00");
      embed.setTitle("Boudica Prime");
      embed.setURL("https://www.rok.guide/commander/boudica-p/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360447939162263/1675020817189.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070822322262515812/image.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.YiSeongGye) +
          emoji(emo.henryvavatar) +
          emoji(emo.NebuchadnezzarII) +
          emoji(emo.ArtemisiaI11) +
          emoji(emo.hondatadakatsu)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1070821238898966588/Boudica-avatar.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.archer) +
          `  *Archery* ` +
          emoji(emo.vesatility) +
          `  *Versatile* ` +
          emoji(emo.skill) +
          `  *Skill*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "hermann") {
      embed.setColor("#C100FF");
      embed.setTitle("Hermann");
      embed.setURL("https://www.rok.guide/commanders/hermann/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070075913083043981/Hermann_full-1-466x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069743540856442880/hermann-open-field-build.png"
      );
      embed.setDescription(
        `Hermann is an archer commander in Rise of Kingdoms. His main strengths include generating rage and reducing the rage of the enemies. His rage engine is extremely strong compared to other commanders, which makes him a powerful choice.\n\n__Best Pairing :__ \n` +
          emoji(emo.ElCid) +
          emoji(emo.YiSeongGye) +
          emoji(emo.KusunokiMasashige) +
          `\n\n__Video Guide :__\n**[Quick Guide Hermann](https://youtu.be/gQYglqenTM8)**`
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
          `  *Archery* ` +
          emoji(emo.garrison) +
          `  *Garrison* ` +
          emoji(emo.skill) +
          `  *Skill*`,
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
            `  *Archery* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeping* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
      embed2.setColor("#C100FF");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070438969281626232/keira-peacekeeing-talent-tree-build.png"
      );
      embed3.setColor("#C100FF");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070438999581266020/keira-archer-talent-tree.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
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
            `  *Archery* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.support) +
            `  *Support*`,
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
            `  *Archery* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
    } else if (com == "resume") {
      embed.setTitle("Best Archery Commander Pairs");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069734738799116418/Tomyris_full-1-367x630.png"
      );
      embed.setDescription(
        emoji(emo.NebuchadnezzarII) +
          " *x* " +
          emoji(emo.cyrusthegreat) +
          " / " +
          emoji(emo.amanitor) +
          emoji(emo.YiSeongGye) +
          "\n" +
          emoji(emo.amanitor) +
          " *x* " +
          emoji(emo.ArtemisiaI11) +
          " / " +
          emoji(emo.NebuchadnezzarII) +
          emoji(emo.cyrusthegreat) +
          "\n" +
          emoji(emo.gilmagesh) +
          " *x* " +
          emoji(emo.cyrusthegreat) +
          " / " +
          emoji(emo.NebuchadnezzarII) +
          emoji(emo.amanitor) +
          "\n" +
          emoji(emo.YiSeongGye) +
          " *x* " +
          emoji(emo.RamessesII1) +
          " / " +
          emoji(emo.Hermann) +
          emoji(emo.RichardI) +
          "\n" +
          emoji(emo.Hermann) +
          " *x* " +
          emoji(emo.YiSeongGye) +
          " / " +
          emoji(emo.KusunokiMasashige) +
          emoji(emo.ElCid) +
          "\n" +
          emoji(emo.KusunokiMasashige) +
          " *x* " +
          emoji(emo.YiSeongGye) +
          " / " +
          emoji(emo.Hermann) +
          "\n" +
          emoji(emo.ElCid) +
          " *x* " +
          emoji(emo.ArtemisiaI11) +
          " / " +
          emoji(emo.Hermann) +
          emoji(emo.YiSeongGye) +
          "\n" +
          emoji(emo.ArtemisiaI11) +
          " *x* " +
          emoji(emo.ElCid) +
          " / " +
          emoji(emo.YiSeongGye) +
          emoji(emo.Hermann) +
          "\n" +
          emoji(emo.RamessesII1) +
          " *x* " +
          emoji(emo.ArtemisiaI11) +
          " / " +
          emoji(emo.YiSeongGye) +
          emoji(emo.Hermann) +
          "\n" +
          emoji(emo.EdwardofWoodstock) +
          " *x* " +
          emoji(emo.Tomyris) +
          " / " +
          emoji(emo.YiSeongGye) +
          emoji(emo.RamessesII1) +
          "\n" +
          emoji(emo.cyrusthegreat) +
          " *x* " +
          emoji(emo.NebuchadnezzarII) +
          " / " +
          emoji(emo.amanitor) +
          emoji(emo.YiSeongGye)
      );
      embed.setColor("#F70505");
      return interaction.reply({ embeds: [embed] });
    } else if (com == "Aethelflaed") {
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
          `\n\n` +
          emoji(emo.yt) +
          ` __Video Guide :__\n>>> **[Guide Free commander](https://youtu.be/FrT0Kao_p-A)**`
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
            `  *Leadership* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeper* ` +
            emoji(emo.support) +
            `  *Support*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070433389292834826/aethelflaed-specific-troops-talent-tree.png"
      );
      embed3.setColor("#FFDC00");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070433411224850543/aethelflaed-farming-talent-tree.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
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
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070434096632844418/charlemagne-rally-build-conquering-talents.png"
      );
      embed3.setColor("#FFDC00");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070434127385464852/charlemagne-rally-build-skill.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
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
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070434417111207976/Frederick-I-Rally-Build-Conquering.png"
      );
      embed3.setColor("#FFDC00");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070434439466856458/Frederick-I-Rally-Build-Skill.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "hannibal") {
      embed.setColor("#FFDC00");
      embed.setTitle("Hannibal Barca");
      embed.setURL("https://www.rok.guide/commanders/Hannibal%20Barca/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070074771057938464/Hannibal-Barca_full-1-291x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070075031004127262/hannibal-barca-open-field.png"
      );
      embed.setDescription(
        `Hannibal Barca is a great commander to have on new kingdoms but for old kingdoms he is bad. Hannibal Barca talent tree is designed for a mixed army and attacking city. You can obtain Hannibal Barca only with purchasing chests.\n\n__Best Pairing :__ \n` +
          emoji(emo.Aethelflaed) +
          emoji(emo.JuliusCaesar) +
          emoji(emo.Charlemagne) +
          emoji(emo.FrederickI) +
          emoji(emo.MehmedII) +
          emoji(emo.JoanofArc1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360343014445137/Hannibal-Barca.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.defense) +
            `  *Defense*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070434724461416560/hannibal-barca-rally-build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "honda") {
      embed.setColor("#FFDC00");
      embed.setTitle("Honda Tadakatsu");
      embed.setURL("https://www.rok.guide/commander/honda-tadakatsu/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360292682809426/honda-tadakatsu.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070077621909594222/honda-tadakatsu-talents-1024x595.png"
      );
      embed.setDescription(
        `Honda Tadakatsu is a new commander with many great abilities, but he requires a lot of rages. Honda Tadakatsu is a commander that is decent for rallies and field battels.\n\nWhat is great about Honda Tadakatsu is that you can use mixed troops with him and probably you will. Now is it worth investing in Honda Tadakatsu? Yes if you are pay to win player but if you are free to play probably not.\n\n__Best Pairing :__ \n` +
          emoji(emo.Suleiman) +
          emoji(emo.Trajan)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360292682809426/honda-tadakatsu.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
    } else if (com == "jc") {
      embed.setColor("#FFDC00");
      embed.setTitle("Julius Caesar");
      embed.setURL("https://www.rok.guide/commanders/julius-caesar/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070078561865707571/Julius-Caesar_full.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070078806020341890/julius-talent-tree-1-1024x576.png"
      );
      embed.setDescription(
        `Julius Caesar is still one of the great legendary commanders in Rise of Kingdoms and with the right talent tree build is used for attacking cities but he is a great tank too. He can be obtained with golden chests so do not use universal sculptures on him.

\n\n__Best Pairing :__ \n` +
          emoji(emo.Boudica) +
          emoji(emo.SunTzu) +
          emoji(emo.Aethelflaed) +
          emoji(emo.CharlesMartel)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360291567124561/Julius-Caesar.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.attack) +
            `  *Attack*`,
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
    } else if (com == "lubu") {
      embed.setColor("#FFDC00");
      embed.setTitle("Lu Bu");
      embed.setURL("https://www.rok.guide/lu-bu");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360245996007504/lu-bu.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070080834020851732/lu-bu-mixed-troops-talent-build.png"
      );
      embed.setDescription(
        `Lu Bu is a legendary commander that is focused on Leadership and Conquering with nice skill damage. Lu Bu is a commander that was made with collaboration between Rise Of Kingdoms and Dynasty Warriors 9.

\n\n__Best Pairing :__ \n` +
          emoji(emo.JuliusCaesar) +
          emoji(emo.HannibalBarca) +
          emoji(emo.Attila) +
          emoji(emo.ChandraguptaMaurya1) +
          emoji(emo.Charlemagne)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360245996007504/lu-bu.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070435160622891069/lu-bu-conquering-talent-build.png"
      );
      embed3.setColor("#FFDC00");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070435191572664453/lu-bu-skill-talent-build.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "mehmed") {
      embed.setColor("#FFDC00");
      embed.setTitle("Mehmed II");
      embed.setURL("https://www.rok.guide/commanders/mehmed-ii/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070081356077469876/Mehmed_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070081773091958875/mehmed-ii-openfield-talent-tree-build.png"
      );
      embed.setDescription(
        `Mehmed is a Conquering commander that is designed to destroy cities in Rise Of Kingdoms. You can obtain Mehmed in gold chests. You can use him for field battles but because of Mehmed's talent tree and skills, he is pure tier S+ commander for rallying cities.

\n\n__Best Pairing :__ \n` +
          emoji(emo.FrederickI) +
          emoji(emo.HannibalBarca) +
          emoji(emo.JuliusCaesar)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360243529756694/Mehmed-II.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "moc") {
      embed.setColor("#FFDC00");
      embed.setTitle("Moctezuma I");
      embed.setURL("https://www.rok.guide/moctezuma-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360244263764028/moctezuma-i.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070083138572779651/Moctezuma-I-PVE-Skill-Build.png"
      );
      embed.setDescription(
        `Moctezuma I is the perfect commander to destroy or assault any type of PVE structures in KVK or the Lost Kingdom, Camps, Crusader Fortresses, Shrines, Hieron, Pass, Circles, Ziggurat, etc.\n\nEverything will be conquered much easier by using this commander.

\n\n__Best Pairing :__ \n` +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.guan) +
          emoji(emo.YiSeongGye) +
          emoji(emo.diaochan)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360244263764028/moctezuma-i.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.leadership) +
          `  *Leadership* ` +
          emoji(emo.peacekeeping) +
          `  *Peacekeeping* ` +
          emoji(emo.skill) +
          `  *Skill*`,
      });
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070435526823387146/Moctezuma-I-PVE-Peacekeeping-Build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "ragnar") {
      embed.setColor("#FFDC00");
      embed.setTitle("Ragnar Lodbrok");
      embed.setURL("https://www.rok.guide/ragnar-lodbrok/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360466129862666/Ragnar-Lodbrok.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070087045533417705/Ragnar-Lodbrok-open-field-mixed-troops.png"
      );
      embed.setDescription(
        `Ragnar Lodbrok is a legendary commander in Rise Of Kingdoms that is specialized in attacking and conquering cities and he is great for PVP. Ragnar Lodbrok’s talent tree is focused on attacking cities.

\n\n__Best Pairing :__ \n` +
          emoji(emo.Trajan) +
          emoji(emo.lubu1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360466129862666/Ragnar-Lodbrok.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.attack) +
            `  *Attack*`,
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

      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070435818705002507/Ragnar-Lodbrok-rally-build-mixed-troops.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "sull") {
      embed.setColor("#FFDC00");
      embed.setTitle("Sulleiman I");
      embed.setURL("https://www.rok.guide/commander/suleiman-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360197434355792/Suleiman.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070090911977058384/suleiman-rally-build-1024x595.png"
      );
      embed.setDescription(
        `Suleiman is a legendary commander in Rise of Kingdoms who excels at leadership, conquering, and attacking. Suleiman is a commander for pay to win players. If you are a low-spender or a free-to-play player, he is not worthy of your gold sculptures. 

\n\n__Best Pairing :__ \n` +
          emoji(emo.Trajan) +
          emoji(emo.hondatadakatsu)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360197434355792/Suleiman.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.attack) +
            `  *Attack*`,
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

      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070436114898370650/suleiman-openfield-build-1024x595.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "theodora") {
      embed.setColor("#FFDC00");
      embed.setTitle("Theodora");
      embed.setURL("https://www.rok.guide/theodora/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070091582189080696/Theodora_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070091779476553788/theodora-garrison-build-2.png"
      );
      embed.setDescription(
        `Theodora is a legendary commander. She is a very strong commander for defending objectives. Theodora can only be used in kingdoms which have been opened for more than 310 days.

\n\n__Best Pairing :__ \n` +
          emoji(emo.WuZetian) +
          emoji(emo.YiSunsin)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360207672660069/Theodora.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.defense) +
            `  *Defense*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070436344045777026/theodora-garrison-build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "trajan") {
      embed.setColor("#FFDC00");
      embed.setTitle("Trajan");
      embed.setURL("https://www.rok.guide/Trajan");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360098624929895/Trajan.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070093125114134649/trajan-openfield-talent-tree.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.ConstantineI) +
          emoji(emo.HannibalBarca) +
          emoji(emo.lubu1) +
          emoji(emo.mulan)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360098624929895/Trajan.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.leadership) +
          `  *Leadership* ` +
          emoji(emo.vesatility) +
          `  *Versatile* ` +
          emoji(emo.support) +
          `  *Support*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "wu") {
      embed.setColor("#FFDC00");
      embed.setTitle("Wu Zetian");
      embed.setURL("https://www.rok.guide/wu-zetian/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070093704112648303/Wu-Zetian_full-1-354x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070094258666745996/wu-zetian-talent-tree-1024x739.png"
      );
      embed.setDescription(
        `Wu Zetian is a type of commander that is good only for pay to win players. Wu Zetian's only role is to defend building nothing else. Very bad commander for field fights.

\n\n__Best Pairing :__ \n` +
          emoji(emo.YiSeongGye) +
          emoji(emo.ConstantineI) +
          emoji(emo.CharlesMartel) +
          emoji(emo.Saladin) +
          emoji(emo.SunTzu) +
          emoji(emo.CaoCao) +
          emoji(emo.KusunokiMasashige) +
          emoji(emo.ElCid)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360099207938058/Wu-Zetian.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.support) +
            `  *Support*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070436608970596392/wu-zetian-talent-tree-open-field-1024x650.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "yss") {
      embed.setColor("#FFDC00");
      embed.setTitle("Yi Sun Sin");
      embed.setURL("https://www.rok.guide/yi-sun-sin/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070095171355680828/Yi-Sun-Sin_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070095464206184559/yi-sun-sin-alternative-garrison-build.png"
      );
      embed.setDescription(
        `Yi Sun-Sin is a legendary infantry commander that can only be used in kingdoms which have been opened for more than 310 days.

\n\n__Best Pairing :__ \n` +
          emoji(emo.WuZetian) +
          emoji(emo.Theodora)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360100030021712/Yi-Sun-sin.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.defense) +
            `  *Defense*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070436755959972021/yi-sun-sin-garrison-build-2.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "osman") {
      embed.setColor("#C100FF");
      embed.setTitle("Osman I");
      embed.setURL("https://www.rok.guide/commanders/osman-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070085326732808192/Osman_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070085571160047778/osman-I-open-field-build-1024x640.png"
      );
      embed.setDescription(
        `Osman is a great commander for new players who do not have nuking legendary commanders especially for new servers in Rise Of Kingdoms. Osman Talent Tree is bad for field fights so you will usually use him as a secondary commander.

\n\n__Best Pairing :__ \n` +
          emoji(emo.SunTzu) +
          emoji(emo.ScipioAfricanus) +
          emoji(emo.JoanofArc1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360245186510878/Osman-I.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.skill) +
            `  *Skill*`,
        },
        {
          name: "Overall :",
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
    } else if (com == "scipio") {
      embed.setColor("#C100FF");
      embed.setTitle("Scipio Africanus");
      embed.setURL("https://www.rok.guide/commanders/scipio-africanus/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070088896534286366/Scipio_full-1-634x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070089244384710716/scipio-africanus-talent-tree.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.JuliusCaesar) +
          emoji(emo.CharlesMartel) +
          emoji(emo.EuljiMundeok) +
          emoji(emo.JoanofArc1) +
          emoji(emo.OsmanI)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360196939431966/Scipio-Africanus.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.attack) +
            `  *Attack*`,
        },
        {
          name: "Overall :",
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
          name: "Open Field :",
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
    } else if (com == "boudica") {
      embed.setColor("#C100FF");
      embed.setTitle("Boudica");
      embed.setURL(
        "https://cdn.rok.guide/wp-content/uploads/2019/02/boudica-294x300.png"
      );
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070104348551565423/boudica-294x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070104677296914513/boudica-peacekeeping-talent-tree.png"
      );
      embed.setDescription(
        `Boudica is a great commander for players who just started with Rise of Kingdoms. With Boudica, you can kill barbarians, forts, boost the experience . For PVP she is great on new servers but on old, she will not perform well next to strong legendary commander.\n\n__Best Pairing PVE:__ \n` +
          emoji(emo.Aethelflaed) +
          emoji(emo.CaoCao) +
          emoji(emo.lohar) +
          emoji(emo.diaochan) +
          emoji(emo.CharlesMartel) +
          `\n\n__Best Pairing PVP :__ \n` +
          emoji(emo.RichardI) +
          emoji(emo.Aethelflaed) +
          emoji(emo.SunTzu)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360410647605308/Boudica.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeping* ` +
            emoji(emo.skill) +
            `  *Skill*`,
        },
        {
          name: "Overall :",
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
          name: "Open Field :",
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "cleopatra") {
      embed.setColor("#FFDC00");
      embed.setTitle("Cleopatra VII");
      embed.setURL(
        "https://cdn.rok.guide/wp-content/uploads/2019/02/boudica-294x300.png"
      );
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070106043423658074/Cleopatra_full.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070106320910434394/cleopatra-gathering-high-level-build.png"
      );
      embed.setDescription(
        `Cleopatra is a legendary gathering commander in Rise of kingdoms. She is a pretty bad commander and the only use of Cleopatra is gathering with gathering talent tree build. You can obtain Cleopatra with events and with gold chests. Do not invest universal legendary sculptures on her.\n\n__Best Pairing :__ \n` +
          emoji(emo.IshidaMitsunari11) +
          emoji(emo.Seondeok1) +
          emoji(emo.JoanofArc1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360466645762089/Cleopatra-VII.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.integration) +
          `  *Integration* ` +
          emoji(emo.garrison) +
          `  *Garrison* ` +
          emoji(emo.support) +
          `  *Support*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "diaochan") {
      embed.setColor("#C100FF");
      embed.setTitle("Diaochan");
      embed.setURL("https://www.rok.guide/diaochan/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360341412237413/diaochan.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070107576978649128/diaochan-peacekeeping-talent-tree-build.png"
      );
      embed.setDescription(
        `Diaochan is an epic peacekeeping commander with supporting skills. She is a commander that was created in collaboration between Rise Of Kingdoms and Dynasty Warriors 9.\n\n__Best Pairing :__ \n` +
          emoji(emo.mulan) +
          emoji(emo.lubu1) +
          emoji(emo.CaoCao) +
          emoji(emo.YiSeongGye) +
          emoji(emo.RichardI) +
          emoji(emo.lohar)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360341412237413/diaochan.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeping* ` +
            emoji(emo.support) +
            `  *Support*`,
        },
        {
          name: "Overall :",
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
    } else if (com == "ishida") {
      embed.setColor("#FFDC00");
      embed.setTitle("Ishida Mitsunari");
      embed.setURL("https://www.rok.guide/commanders/ishida-mitsunari/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070108092643156048/Ishida-Mitsunari_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070108403751464960/Ishida-Mitsunari-talent-tree.png"
      );
      embed.setDescription(
        `Ishida Mitsunari is a rage generating machine. Problem is that his other skills are not great for PVP Fights. He can be good for free to players who just started playing Rise Of kingdoms.\n\nHe can be good for stealing resources from the city because he haves a 50% bonus load.\n\nIshida Mitsunari is gathering commander and he can only be used in new kingdoms where people do not have all commanders. Use Him only as a secondary commander. Do not waste your XP and golden stars on him.\n\n__Best Pairing :__ \n` +
          emoji(emo.CleopatraVII) +
          emoji(emo.Seondeok1) +
          emoji(emo.JoanofArc1) +
          emoji(emo.MatildaofFlanders)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360292993183794/Ishida-Mitsunari-1_1.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.integration) +
          `  *Integration* ` +
          emoji(emo.gathering) +
          `  *Peacekeeping* ` +
          emoji(emo.support) +
          `  *Support*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "joan") {
      embed.setColor("#C100FF");
      embed.setTitle("Joan of Arc");
      embed.setURL("https://www.rok.guide/commanders/joan-of-arc/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070109195359227964/joan-of-arc-179x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070109433989967952/joan-of-arc-gathering-build-1024x578.png"
      );
      embed.setDescription(
        `Joan Of Arc is the best support and farming commander in the Rise Of Kingdoms. She is a great early, mid and late game. With the right talent tree build, Joan Of Arc will give an insane amount of support buffs for your and alliance troops.\n\n__Best Pairing :__ \n` +
          emoji(emo.Aethelflaed)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360291265118319/Joan-of-Arc_1.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
            emoji(emo.gathering) +
            `  *Gathering* ` +
            emoji(emo.support) +
            `  *Support*`,
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

      embed2.setColor("#C100FF");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070433028335222894/joan-of-arc-support-build-1024x578.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "lohar") {
      embed.setColor("#C100FF");
      embed.setTitle("Lohar");
      embed.setURL("https://www.rok.guide/commanders/lohar");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070110251652755597/lohar-238x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070110715949629440/lohar-pve-build-1024x631.png"
      );
      embed.setDescription(
        `Lohar is the best peacekeeper in the Rise of Kingdoms. His role is pretty special compared to other commanders because he was basically created to be used in a player vs. environment setting (PvE), so his expertise lies in killing barbarians.  He has a very specific role in the game that no other commander can take. But without context, his importance can be easily overlooked. His skills revolve around damage to barbarians and healing potential. \n\n__Best Pairing :__ \n` +
          emoji(emo.Aethelflaed) +
          emoji(emo.CaoCao) +
          emoji(emo.Boudica) +
          emoji(emo.diaochan)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360467203600515/Lohar.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeping* ` +
            emoji(emo.support) +
            `  *Support*`,
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
    } else if (com == "mathilda") {
      embed.setColor("#C100FF");
      embed.setTitle("Mathilda of Flanders");
      embed.setURL("https://www.rok.guide/matilda-of-flanders/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360243336822835/Matilda-of-Flanders.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070111587723120670/Matilda-of-Flanders-gathering-talent-tree.png"
      );
      embed.setDescription(
        `Matilda of Flanders is an epic gathering commander available in Expedition and Tavern. She is an excellent gathering commander. When you reach the maximum level of all Matilda of Flanders, you will receive an additional 10% resources upon completion of the gathering. Matilda of Flanders is an excellent choice for free-to-play players.\n\n__Best Pairing :__ \n` +
          emoji(emo.CleopatraVII) +
          emoji(emo.IshidaMitsunari11) +
          emoji(emo.Seondeok1) +
          emoji(emo.JoanofArc1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360243336822835/Matilda-of-Flanders.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
            emoji(emo.gathering) +
            `  *Gatering* ` +
            emoji(emo.defense) +
            `  *Defense*`,
        },
        {
          name: "Overall :",
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
    } else if (com == "mulan") {
      embed.setColor("#FFDC00");
      embed.setTitle("Mulan");
      embed.setURL("https://www.rok.guide/mulan");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070112563167232110/Rise-of-Kingdoms-mulan.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070112796269871244/mulan_peacekeeping_talents-1024x800.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.RichardI) +
          emoji(emo.Saladin) +
          emoji(emo.ConstantineI) +
          emoji(emo.CharlesMartel) +
          `__Video Guide :__\n>>> **[Mulan Guides](https://youtu.be/iQ_KweClWvU)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360244632858725/mulan.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeping* ` +
            emoji(emo.support) +
            `  *Support*`,
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
    } else if (com == "tamar") {
      embed.setColor("#C100FF");
      embed.setTitle("Queen Tamar of Georgia");
      embed.setURL("https://www.rok.guide/commander/queen-tamar-of-georgia/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070114274522959974/bWFyLnBuZw.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070114960543322212/queen-tamar-of-georgia-gathering-build-1024x587.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.CleopatraVII) +
          emoji(emo.Seondeok1) +
          emoji(emo.IshidaMitsunari11)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1070114274522959974/bWFyLnBuZw.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
            emoji(emo.gathering) +
            `  *Gathering* ` +
            emoji(emo.support) +
            `  *Support*`,
        },
        {
          name: "Overall :",
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
      embed2.setColor("");
      embed2.setImage("");
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "seondeok") {
      embed.setColor("#FFDC00");
      embed.setTitle("Seondeok");
      embed.setURL("https://www.rok.guide/seondeok/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070115527952965702/Seondeok_full-1-340x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070115674451615925/seondeok-farming-talent-build.png"
      );
      embed.setDescription(
        `Seondeok is one more legendary gathering commander in Rise of Kingdoms. The only use of Seondeok is to farm resources with gathering talent tree build. Do not invest legendary universal sculptures on her. Seondeok can be obtained with a golden chest.\n\n__Best Pairing :__ \n` +
          emoji(emo.CleopatraVII) +
          emoji(emo.JoanofArc1) +
          emoji(emo.IshidaMitsunari11) +
          emoji(emo.MatildaofFlanders)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360197165912174/Seondeok_1.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.integration) +
          `  *Integration* ` +
          emoji(emo.gathering) +
          `  *Gathering* ` +
          emoji(emo.attack) +
          `  *Attack*`,
      });
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070427551996051516/seondeok-farming-talent-build-level-60.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "alexandre") {
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
            `  *Infantry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.attack) +
            `  *Attack*`,
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
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "charles") {
      embed.setColor("#FFDC00");
      embed.setTitle("Charles Martel");
      embed.setURL("https://www.rok.guide/commanders/charles-martel/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070451891647033435/charles-martel-264x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070452144345456801/charles-martel-garrison-build.png"
      );
      embed.setDescription(
        `Charles Martel is one of the first infantry legendary commanders in Rise Of Kingdoms. Charles Martel is a commander that you must have. Great for rally, field fighting and defending buildings. Charles Martel will provide a good amount of infantry stats and counter damage.\n\n__Best Pairing :__ \n` +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.ConstantineI) +
          emoji(emo.RichardI) +
          emoji(emo.WuZetian) +
          emoji(emo.YiSeongGye) +
          emoji(emo.EuljiMundeok) +
          emoji(emo.SunTzu)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360411549372466/Charles-Martel.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.defense) +
            `  *Defense*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070452165618978946/charles-martel-openfield-build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "cheok") {
      embed.setColor("#FFDC00");
      embed.setTitle("Cheok Jun-gyeong");
      embed.setURL("https://www.rok.guide/cheok-jun-gyeong/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360409213153420/Cheok-Jun-gyeong-137x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070453378011910205/Cheok-Jun-gyeong-Open-field-Talent-Tree.png"
      );
      embed.setDescription(
        `Cheok Jun-Gyeong is a Legendary infantry commander that came with an update March of the Ages. Cheok Jun-Gyeong is a great commander to have, especially if you focus on infantry commanders. The great thing about this commander is that you can use him for field fighting and rallying. \n\n__Best Pairing :__ \n` +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.guan) +
          `\n\n` +
          emoji(emo.yt) +
          ` __Videos Guides :__ \n>>> [Cheok meta ?](https://youtu.be/uTb5QOQaLVc)\n[Pakal x Cheok](https://youtu.be/Cg1gYr_JUpE)`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360409213153420/Cheok-Jun-gyeong-137x300.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.attack) +
            `  *Attack*`,
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
    } else if (com == "constantin") {
      embed.setColor("#FFDC00");
      embed.setTitle("Constantine I");
      embed.setURL("https://www.rok.guide/constantine-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070454769329643680/Constantine_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070455079712329738/Constantine-I-Open-Field-Build.png"
      );
      embed.setDescription(
        `Constantine is a legendary infantry commander that is available for kingdoms that have been open for more than 120 days. Constantine is a great commander and if you are an infantry player you must have him. He is great for Field battles and Defending.\n\n__Best Pairing :__ \n` +
          emoji(emo.WuZetian) +
          emoji(emo.RichardI) +
          emoji(emo.CharlesMartel)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360343287091380/Constantine-I.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.support) +
            `  *Support*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070455100595769455/Constantine-I-Garrison-Build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "flavius") {
      embed.setColor("#FFDC00");
      embed.setTitle("Flavius Aetius");
      embed.setURL("https://www.rok.guide/commander/flavius-aetius/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360342322385027/flavius-aetius.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070456669101899776/Flavius-Aetius-Damage-Talent-Tree-1120x630.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.cipioprime) +
          emoji(emo.HaraldSigurdsson1) +
          emoji(emo.guan) +
          emoji(emo.Zenobia1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360342322385027/flavius-aetius.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070456685539381428/Flavius-Aetius-Garrison-Talent-Tree-1120x630.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "guan") {
      embed.setColor("#FFDC00");
      embed.setTitle("Guan Yu");
      embed.setURL("https://www.rok.guide/guan-yu/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070084399770652763/Rise-of-Kingdoms-Guan-Yu-1-293x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070458115331465256/Guan-Yu-Open-Field-Build.png"
      );
      embed.setDescription(
        `GUAN YU is a new infantry commander that is exclusively available for kingdoms older than 240 days. You can get Guan Yu in a wheel of fortune. Guan Yu is a great commander for big field fights in Ark Of Osiris and KVK where he can do his AOE damage.\n\n__Best Pairing :__ \n` +
          emoji(emo.LeonidasI) +
          emoji(emo.RichardI) +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.CharlesMartel) +
          emoji(emo.YiSeongGye) +
          emoji(emo.SunTzu) +
          emoji(emo.EuljiMundeok)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1070083893534937201/R3Vhbi1ZdS5wbmc.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070458115545366528/Guan-Yu-Rally-Build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "harald") {
      embed.setColor("#FFDC00");
      embed.setTitle("Harald Sigurdsson");
      embed.setURL("https://www.rok.guide/harald-sigurdsson/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070458769684832336/harald-sigurdsson.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070459081577463979/harald_sigurdsson_open_field_build.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.guan) +
          emoji(emo.LeonidasI) +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.ConstantineI) +
          emoji(emo.CharlesMartel) +
          emoji(emo.RichardI)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360466956132443/Harald-Sigurdsson-1.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.infantry) +
          `  *Infantry* ` +
          emoji(emo.conquering) +
          `  *Conquering* ` +
          emoji(emo.skill) +
          `  *Skill*`,
      });
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "pakal") {
      embed.setColor("#FFDC00");
      embed.setTitle("K'inich Janaab' Pakal");
      embed.setURL("https://www.rok.guide/kinich-janaab-pakal/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360449478467695/1675021736047.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070460683734499388/Pakal-II-Rally-Talent-Tree.png"
      );
      embed.setDescription(
        `Pakal II is a legendary infantry commander that was introduced with the updated March of the Ages. Pakal II is a strong infantry commander that has a lot of damage reduction and survivability and on top of that, he is doing nice damage. The only downside is that most of his skills are focused on rallying objectives. \n\n__Best Pairing :__ \n` +
          emoji(emo.guan) +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.CheokJungyeong137x300) +
          emoji(emo.HaraldSigurdsson1)`\n\n` +
          emoji(emo.yt) +
          ` __Videos Guide :__ \n>>> [Pakal x CJG](https://youtu.be/Cg1gYr_JUpE)\n [Pakal testing](https://youtu.be/AyQXYGW_BAE)`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360449478467695/1675021736047.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.attack) +
            `  *Attack*`,
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
    } else if (com == "richard") {
      embed.setColor("#FFDC00");
      embed.setTitle("Richard I");
      embed.setURL("https://www.rok.guide/commanders/richard-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070461942252179548/richard-i-259x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070462304585519125/open-field-pvp-richard-i.png"
      );
      embed.setDescription(
        `Richard is one of the strongest commanders in Rise of Kingdoms. With the right talent tree build and pairing, he will be unstoppable. Richard will provide a good amount of healing, damage reduction, and infantry stats. Overall great commander to have.\n\n__Best Pairing :__ \n` +
          emoji(emo.CharlesMartel) +
          emoji(emo.JuliusCaesar) +
          emoji(emo.SunTzu) +
          emoji(emo.EuljiMundeok) +
          emoji(emo.ScipioAfricanus) +
          emoji(emo.HannibalBarca) +
          emoji(emo.JoanofArc1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360198621335602/Richard-I.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.garrison) +
            `  *Garrion* ` +
            emoji(emo.defense) +
            `  *Defense*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070462331978530946/garrison-talent-tree-richard-i.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "sargon") {
      embed.setColor("#FFDC00");
      embed.setTitle("Sargon the Great");
      embed.setURL("https://www.rok.guide/commander/sargon-the-great/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360199082721390/sargon-the-great-x500-253x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070463782398205962/image.png"
      );
      embed.setDescription(
        `Sar Kissatim is a strong infantry commander, but that does not mean that you should invest in him. The problem with Sar Kissatim is that he doesn’t have active skill damage that will deal instant nuke damage to the target.\n\nWhen his active skill gets activated, you have to attack the target continuously for 5 seconds to get the full effect from him, but we all know that can be hard sometimes, especially when there are big fights. Also, the problem is that he does not have AOE damage skills, which are best for free-to-play players. \n\n__Best Pairing :__ \n` +
          emoji(emo.tariq)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360199082721390/sargon-the-great-x500-253x300.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.infantry) +
          `  *Infantry* ` +
          emoji(emo.vesatility) +
          `  *Versatility* ` +
          emoji(emo.skill) +
          `  *Skill*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "scipiop") {
      embed.setColor("#FFDC00");
      embed.setTitle("Scipio Africanus [P]");
      embed.setURL("https://www.rok.guide/alexander-the-great/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069369222674776234/1675027814433.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070465077314064534/Legendary-Scipio-Africanus-mobility-talent-tree-build-2-1120x630.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.guan) +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.HaraldSigurdsson1) +
          emoji(emo.SunTzu)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1070464712078274711/scipio-africanus-legendary.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.support) +
            `  *Support*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070465092841381980/Scipio-Africanus-Legendary-Talent-Tree-Build-1120x630.png"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "leonidas") {
      embed.setColor("#FFDC00");
      embed.setTitle("Lenonidas I");
      embed.setURL("https://www.rok.guide/leonidas-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070467298713948160/leonidas-rise-of-kingdoms-265x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070467539177578556/Leonidas-Field-Battle-1024x576.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.guan) +
          emoji(emo.HaraldSigurdsson1) +
          emoji(emo.CharlesMartel)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360292074635344/Leonidas-I.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.defense) +
            `  *Defense*`,
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
    } else if (com == "tariq") {
      embed.setColor("#FFDC00");
      embed.setTitle("Tariq ibn Ziyad");
      embed.setURL("https://www.rok.guide/commander/tariq-ibn-ziyad/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360198118027294/tariq-ibn-ziyad-x500-209x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070470883023519864/image.png"
      );
      embed.setDescription(
        `In Rise of Kingdoms, Tariq ibn Ziyad is a new legendary Infantry commander who is a part of the Arabia civilization. He has the Infantry, Conquering, and Defense talent tree.`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.infantry) +
          `  *Infantry* ` +
          emoji(emo.conquering) +
          `  *Conquering* ` +
          emoji(emo.defense) +
          `  *Defense*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "zenobia") {
      embed.setColor("#FFDC00");
      embed.setTitle("Zenobia");
      embed.setURL("https://www.rok.guide/zenobia/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070472058099744848/Zenobia-Rise-of-Kingdoms.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070472793466085537/zenobia-garrison-support-talent-tree-infantry.png"
      );
      embed.setDescription(
        `This talent tree built for Zenobia is great for defending objectives and flags. Also you will generate a lot of rage so you can heal more. On top of that, there is bonus damage against cavalry which is great against Attila and Takeda.\n\n__Best Pairing :__ \n` +
          emoji(emo.WuZetian) +
          emoji(emo.ConstantineI) +
          emoji(emo.YiSunsin) +
          emoji(emo.YiSunsin) +
          emoji(emo.Theodora) +
          emoji(emo.CharlesMartel) +
          emoji(emo.YiSeongGye) +
          `  \n\n` +
          emoji(emo.yt) +
          ` __Video Guides :__\n>>> **[Zenobia x Harald](https://youtu.be/bTNvSTP_Hkw)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360100285886514/Zenobia-1.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.support) +
            `  *Support*`,
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070472753733451816/zenobia-garrison-support-talent-tree.png"
      );
      embed3.setColor("#FFDC00");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070472765993406464/zenobia-garrison-support-talent-tree-alternative.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "eulji") {
      embed.setColor("#C100FF");
      embed.setTitle("Eulji Mundeok");
      embed.setURL("https://www.rok.guide/commanders/eulji-mundeok/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070475079152054392/eulji-mundeok-216x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070475423525384252/eulji-field-flad-fight-talent-tree-1024x576.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.CharlesMartel) +
          emoji(emo.RichardI) +
          emoji(emo.ScipioAfricanus) +
          emoji(emo.SunTzu) +
          emoji(emo.OsmanI) +
          emoji(emo.Boudica) +
          `\n\n` +
          emoji(emo.yt) +
          ` __Video Guide :__\n>>> **[Water general](https://youtu.be/F5qZsyWgH0s)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360342087508058/Eulji-Mundeok.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.attack) +
            `  *Attack*`,
        },
        {
          name: "Overall :",
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
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#C100FF");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070475437597278309/eulji-talent-tree-1024x576.png"
      );

      return interaction.reply({ embeds: [embed] });
    } else if (com == "sun") {
      embed.setColor("#C100FF");
      embed.setTitle("Alexander the Great");
      embed.setURL("https://www.rok.guide/alexander-the-great/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070476453822595162/sun-tzu-2-207x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070476848414326914/sun-tzu-garrison-talent-tree.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.YiSeongGye) +
          emoji(emo.RichardI) +
          emoji(emo.CharlesMartel) +
          emoji(emo.HannibalBarca) +
          emoji(emo.FrederickI) +
          emoji(emo.ScipioAfricanus) +
          emoji(emo.EuljiMundeok) +
          emoji(emo.OsmanI) +
          emoji(emo.guan) +
          `  \n\n` +
          emoji(emo.yt) +
          ` __Video Guides :__\n>>> **[Suntzu Guides](https://youtu.be/sptyo_VzrpE)\n [Suntzu complete guide](https://youtu.be/UBR23VSDaAA)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360197673435197/Sun-Tzu.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.garrison) +
            `  *Garrion* ` +
            emoji(emo.skill) +
            `  *Skill*`,
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
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070476863874543696/sun-tzu-nuking-talent-tree.png"
      );
      embed3.setColor("#C100FF");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070476884749598751/sun-tzu-infantry-talent-tree.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "resume") {
      embed.setTitle("Best Infantry Commander Pairs");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070461942252179548/richard-i-259x300.png"
      );
      embed.setDescription(
        emoji(emo.HaraldSigurdsson1) +
          " *x* " +
          emoji(emo.AlexandertheGreat) +
          " / " +
          emoji(emo.CharlesMartel) +
          emoji(emo.ConstantineI) +
          "\n" +
          emoji(emo.SunTzu) +
          " *x* " +
          emoji(emo.RichardI) +
          " / " +
          emoji(emo.YiSeongGye) +
          emoji(emo.Aethelflaed) +
          "\n" +
          emoji(emo.RichardI) +
          " *x* " +
          emoji(emo.CharlesMartel) +
          " / " +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.ConstantineI) +
          "\n" +
          emoji(emo.CharlesMartel) +
          " *x* " +
          emoji(emo.RichardI) +
          " / " +
          emoji(emo.ConstantineI) +
          emoji(emo.SunTzu) +
          "\n" +
          emoji(emo.AlexandertheGreat) +
          " *x* " +
          emoji(emo.CharlesMartel) +
          " / " +
          emoji(emo.YiSeongGye) +
          emoji(emo.RichardI) +
          "\n" +
          emoji(emo.ConstantineI) +
          " *x* " +
          emoji(emo.CharlesMartel) +
          " / " +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.RichardI) +
          "\n" +
          emoji(emo.guan) +
          " *x* " +
          emoji(emo.AlexandertheGreat) +
          " / " +
          emoji(emo.CheokJungyeong137x300) +
          emoji(emo.SunTzu) +
          "\n" +
          emoji(emo.LeonidasI) +
          " *x* " +
          emoji(emo.CharlesMartel) +
          " / " +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.RichardI) +
          "\n" +
          emoji(emo.pakal) +
          " *x* " +
          emoji(emo.CheokJungyeong137x300) +
          " / " +
          emoji(emo.guan) +
          emoji(emo.SunTzu) +
          "\n" +
          emoji(emo.hondatadakatsu) +
          " *x* " +
          emoji(emo.Suleiman) +
          " / " +
          emoji(emo.Trajan) +
          "\n" +
          emoji(emo.Trajan) +
          " *x* " +
          emoji(emo.hondatadakatsu) +
          " / " +
          emoji(emo.HaraldSigurdsson1) +
          emoji(emo.CharlesMartel) +
          "\n" +
          emoji(emo.cipioprime) +
          " *x* " +
          emoji(emo.guan) +
          " / " +
          emoji(emo.HaraldSigurdsson1) +
          emoji(emo.AlexandertheGreat) +
          "\n" +
          emoji(emo.flaviusaetius) +
          " *x* " +
          emoji(emo.Zenobia1) +
          " / " +
          emoji(emo.cipioprime) +
          emoji(emo.guan)
      );
      embed.setColor("#F70505");
      return interaction.reply({ embeds: [embed] });
    } else if (civi == "arabia") {
      embed.setTitle("Arabia");
      embed.setColor("#26980F");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362432318914681/arabia-flag.png"
      );
      embed.setDescription(
        "__**Starting Commander:**__ " +
          emoji(emo.Baibars) +
          " / *Baibars*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Mamluk) +
          " / *Mamluk*\n\n	__**Perks :**__\n> Increase cavalry attack by 5%\n> Increase damage dealt to barbarians and other neutral units by 10%;\n> Increase damage dealt by rallied armies by 5%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (civi == "britain") {
      embed.setTitle("Britain");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362432570556446/britain-flag.png"
      );
      embed.setColor("#C63101");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.Boudica) +
          " / *Boudica*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Longbowman) +
          " / *Longbowman*\n\n	__**Perks :**__\n> Increase archer attack by 5%;\n> Increase troop training speed by 5%;\n> Increase ally garrison capacity by 20%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (civi == "byzantium") {
      embed.setTitle("Byzantium");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362545946804295/byzantium-flag.png"
      );
      embed.setColor("#8202E6");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.Belisarius) +
          " / *Belisarius*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Conquistador) +
          " / *Cataphract*\n\n	__**Perks :**__\n> Increase cavalry health by 5%;\n> Increase stone gathering speed by 10%;\n> Increase Hospital capacity by 15%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (civi == "china") {
      embed.setTitle("China");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362546269753364/china-flag.png"
      );
      embed.setColor("#F00303");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.SunTzu) +
          " / *Sun Tzu*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_ChuKoNu) +
          " / *ChuKoNu*\n\n	__**Perks :**__\n> Increase troop defense by 3%;\n> Increase action point recovery by 5%;\n> Increase building speed by 5%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (civi == "egypt") {
      embed.setTitle("Egypt");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362433099042958/1675026165145.png"
      );
      embed.setColor("#DDA700");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.imhotepframe) +
          " / *Imhotep*\n__**Special Units :**__ " +
          emoji(emo.Troop_Janissary) +
          " / *Maryannu*\n\n	__**Perks :**__\n> Increase archer attack by 5%;\n> Increase damage dealt by rallied armies by 5%;\n> Increase building and research speed by 1.5%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (civi == "france") {
      embed.setTitle("France");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362546517213296/france-flag.png"
      );
      embed.setColor("#005EDD");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.JoanofArc1) +
          " / *Joan of Arc*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Throwing_Axeman) +
          " / *Throwing_Axeman*\n\n	__**Perks :**__\n> Increase troop health by 3%;\n> Increase wood gathering speed by 10%;\n> Increase Hospital healing speed by 20%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (civi == "germany") {
      embed.setTitle("Germany");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362546798247956/germany-flag.png"
      );
      embed.setColor("#FFFFFF");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.Hermann) +
          " / *Hermann*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Teutonic_Knightgerma) +
          " / *Teutonic_Knight*\n\n	__**Perks :**__\n> Increase cavalry attack by 5%;\n> Increase troop training speed by 5%;\n> Increase action point recovery by 10%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (civi == "japan") {
      embed.setTitle("Japan");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362547045699644/japan-flag.png"
      );
      embed.setColor("#FFD6FB");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.KusunokiMasashige) +
          " / *Kusunoki Masashige*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Samurai) +
          " / *Samurai*\n\n	__**Perks :**__\n> Increase troop attack by 3%;\n> Increase scout march speed by 30%;\n> Increase resource gathering speed by 5%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (civi == "korea") {
      embed.setTitle("Korea");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362545095344339/korea-flag.png"
      );
      embed.setColor("#0B00B2");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.EuljiMundeok) +
          " / *Eulji Mundeok*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Hwarang) +
          " / *Hwarang*\n\n	__**Perks :**__\n> Increase archer defense by 5%;\n> Increase Hospital capacity by 15%;\n> Increase research speed by 3%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (civi == "rome") {
      embed.setTitle("Rome");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362545640607844/rome-flag.png"
      );
      embed.setColor("#A101B1");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.ScipioAfricanus) +
          " / *Scipio Africanus*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Legionary) +
          " / *Legionary*\n\n	__**Perks :**__\n> Increase infantry defense by 5%;\n> Increase troop march speed by 5%;\n> Increase food gathering speed by 10%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (civi == "ottoman") {
      embed.setTitle("Ottoman");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362545372184596/ottoman-flag.png"
      );
      embed.setColor("#CE0808");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.OsmanI) +
          " / *OsmanI*\n__**Special Units :**__ " +
          emoji(emo.Troop_Janissary) +
          " / *Janissary*\n\n	__**Perks :**__\n> Increase archer health by 5%;\n> Increase troop march speed by 5%;\n> Increase active skill damage by 5%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (civi == "spain") {
      embed.setTitle("Spain");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362433438793829/spain-flag.png"
      );
      embed.setColor("#A20B0B");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.Pelagius) +
          " / *OsmanI*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Conquistador) +
          " / *Conquistador*\n\n	__**Perks :**__\n> Increase cavalry defense by 5%;\n> Increase experience gained from barbarians and other neutral units by 10%;\n> Increase resource production by 20%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (civi == "vikings") {
      embed.setTitle("Vikings");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362432822231070/Viking-icon.png"
      );
      embed.setColor("#1FDBDB");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.bjornironside2) +
          " / *Bjorn Ironside*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Legionary) +
          " / *Berserker*\n\n	__**Perks :**__\n> Increase infantry attack by 5%;\n> Increase counterattack damage by 3%;\nIncrease troop load by 10%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else {
      return interaction.reply("Nothing found!");
    }
  },
};
