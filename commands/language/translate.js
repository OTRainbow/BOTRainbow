const { SlashCommandBuilder } = require('discord.js');
const {Translate} = require('@google-cloud/translate').v2;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('translate')
		.setDescription('Translates to a language of your choice')
        .addStringOption(option =>
            option
                .setName("language")
                .setDescription("The resulting language")
                .setRequired(true)
                .addChoices(
                    { name: "English", value: "en"},
                    { name: "Vietnamese", value: "vi"}
                ))
        .addStringOption(option =>
            option
                .setName("input")
                .setDescription("The input text (language is auto-detected)")
                .setRequired(true)),
	async execute(interaction) {
        const language = interaction.options.getString("language")
        const input = interaction.options.getString("input")
        const translate = new Translate()
		let translation = await translate.translate(input, language)
        await interaction.reply(translation)
	},
};