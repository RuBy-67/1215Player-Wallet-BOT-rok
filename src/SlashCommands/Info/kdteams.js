const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "kdteams",
  description: "Shows the help page!",
  options: null,
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const embed = new MessageEmbed()
      .setTitle(emoji(emo.ananass) + "Kingdom Team")
      .setDescription("Here is Kd teams of 1215 Kingdoms")
      .addFields(
        {
          name: "📊kingdom-data-team ",
          value:
            "__**LEADER :**__ <@786383129417089054>\nMember: <@880802030896185450>\nMember: <@905202580559388693>\nMember: <@713981018574553118>\nMember: <@375590278880428034> [1215 DATA-BOT]\nMember: <@674862133690761217>",
        },
        {
          name: "🎗 Title-givers-teams",
          value:
            "__**LEADER :**__ <@&955160707148681245>\n No list here, ASK to join the team !",
        },
        {
          name: "🗞 Post-office-team ",
          value:
            "__**LEADER :**__ <@880802030896185450>\nMember: <@754757463231955034>\nMember: <@289116423106723843>\nMember: <@>\nMember: <@>",
        },
        {
          name: "🏆 Mge-team",
          value:
            "__**LEADER :**__ <@163361116829908992>\nMember: <@786383129417089054>",
        },
        {
          name: "🎆 Kingdom-event-team ",
          value:
            "__**LEADER :**__ <@282468879966404608>\nMember: <@754757463231955034>\nMember: <@289116423106723843>\nMember: <@905202580559388693>",
        },
        {
          name: " ⚔ Kvk-and-territory-team ",
          value:
            "__**LEADER :**__ <@198493412805050370>\nMember: <@674862133690761217>\nMember: <@565643522389180476>\nMember: <@163361116829908992>\nMember: <@>",
        },
        {
          name: "☠ Punishment-team ",
          value:
            "__**LEADER :**__ <@229047492816273409>\nMember: <@786383129417089054>\nMember: <@163361116829908992>\nMember: <@565643522389180476>\nMember: <@1030294818020151337>\nMember: <@>",
        },
        {
          name: "🔱Ark-management-team",
          value:
            "__**LEADER :**__ <@198493412805050370>\nMember: <@282468879966404608>\nMember: <@638032330191011892>\nMember: <@905202580559388693>\nMember: <@289116423106723843>",
        }
      )
      .setColor("#F3D906")
      .setThumbnail(
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905"
      )
      .setFooter({
        text: "1215",
        iconURL:
          "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
      })
      .setTimestamp(Date.now());

    return interaction.reply({ embeds: [embed] });
  },
};
