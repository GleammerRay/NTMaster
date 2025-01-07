import * as common from '../common.js';
Object.assign(global, common);

const commandSignatures = [
  {
    name: 'help',
    description: 'List all available commands',
    dm_permission: true,
    type: 1,
  },
];

const buttonSignatures = [
/*
  {
    id: 'template',
  },
*/
];

class Command {
  rest;
  db;
  burstStackManager;

  constructor(options) {
    this.rest = options.rest;
    this.db = options.db;
    this.burstStackManager = options.burstStackManager;
  }

  async execute(interaction) {
    const helpMsg = '`/help` - List all available commands' +
      '\n`/callouts`, `/map` - Show map callouts' +
      '\n`/anp`, `/discord` - Active NEOTOKYO° Players invite link' +
      '\n`/linux` - Linux Proton fix';
    const components = JSON.parse(JSON.stringify(defaultComponents));
    return await this.rest.createEphemeralInteractionResponse(interaction, { embeds: [ buildEmbed({ title: 'Command list', description: helpMsg }) ], components: components });
  }

  async executeButton(interaction) {
    const customId = interaction.data.custom_id.split(' ');
    //
  }
}

export { commandSignatures, buttonSignatures, Command };
