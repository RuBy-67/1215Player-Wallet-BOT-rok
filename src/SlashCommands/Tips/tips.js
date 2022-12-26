const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "tips",
	description: 'Tips',
	options: null,
	run: async(client, interaction, args)=>{

		const embed = new MessageEmbed()
		.setTitle("Tips Menu")
		.setDescription(client.slash.map(cmd => `\`${cmd.name} - ${cmd.description}\``).join("\n"))
			.setColor("GREEN")
		.setFooter({
            text: client.user.tag,
            iconURL: client.user.displayAvatarURL(),
		});

		return interaction.reply({ embeds: [embed] });

	}
}