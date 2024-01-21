const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageReactionRemove,
	async execute(reaction, user) {
		if (reaction.message.id === "1198415813577814087") {
            try {
                const roleId = "1198514077379608626";
                const guild = reaction.message.guild;
                const member = await guild.members.fetch(user.id);
                member.roles.remove(roleId).then(
                    console.log(`Removed \"Ping Me When Live\" role from ${user.tag}`)
                );
            } catch (error) {
                console.error(error);
            }
        }
	},
};
