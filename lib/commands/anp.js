import * as common from '../common.js';
Object.assign(global, common);

const commandSignatures = [
  {
    name: 'anp',
    description: 'Active NEOTOKYO° Players invite link',
    dm_permission: false,
    type: 1,
  },
  {
    name: 'discord',
    description: 'Active NEOTOKYO° Players invite link',
    dm_permission: false,
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
    const components = JSON.parse(JSON.stringify(defaultComponents));
    return await this.rest.createInteractionResponse(interaction, { type: 4, data: { content: 'https://discord.com/invite/kXnFXY2heG', components: components } });
  }

  async executeButton(interaction) {
    const customId = interaction.data.custom_id.split(' ');
    //
  }
}

export { commandSignatures, buttonSignatures, Command };
