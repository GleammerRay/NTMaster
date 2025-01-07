import * as common from '../common.js';
Object.assign(global, common);

const commandSignatures = [
  {
    name: 'linux',
    description: 'Linux Proton fix',
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
    return await this.rest.createInteractionResponse(interaction, { type: 4, data: { content: 'https://www.mediafire.com/file/aiiahblok2s2ymm/NTLinuxFix.zip/file' } });
  }

  async executeButton(interaction) {
    const customId = interaction.data.custom_id.split(' ');
    //
  }
}

export { commandSignatures, buttonSignatures, Command };
