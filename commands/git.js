const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("DarkRed")
	.setTitle('Comandos Básicos do Git')
	.addFields(
		{ name: '$ git init', value: 'Caso você esteja iniciando o monitoramento de um projeto existente com Git, você precisa ir para o diretório do projeto e digitar.' },
		{ name: '$ git clone', value: 'Você clona um repositório com git clone [url].'},
		{ name: '$ git add README', value: 'Para passar a monitorar um novo arquivo, use o comando git add.'},
        { name: '$ git status', value: 'A principal ferramenta utilizada para determinar quais arquivos estão em quais estados.'},
        { name: '$ git commit -m "Mensagem"', value: 'Armazena o conteúdo atual do índice em um novo commit, juntamente com uma mensagem de registro do usuário que descreve as mudanças. Se usa o commit depois de já ter feito o git add.'},
        { name: '$ git pull origin develop', value: 'Incorpora as alterações de um repositório remoto no branch atual. Em seu modo padrão, git pull é uma abreviação para git fetch seguido de git merge FETCH_HEAD.'},
        { name: '$ git push origin develop', value: 'O git push é o comando em que você transfere commits a partir do seu repositório local para um repositório remoto. É a contrapartida do git fetch, que busca importações e comprometem as agências locais, utilizando o git push as exportações comprometem as filiais remotas. Para fazer isso, você executa git push [nome_do_repositório_remoto] [nome_da_sua_branch_local], que vai tentar fazer que o [nome_do_repositório_remoto] receba a sua branch [nome_da_sua_branch_local] contendo todos seus commits com alterações.'},
    )
	.setTimestamp()
	.setFooter({ text: 'Leia mais em: https://comandosgit.github.io/'});

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Resonde comandos básicos do git!"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}