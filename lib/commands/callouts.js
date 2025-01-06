import * as common from '../common.js';
Object.assign(global, common);

const options = [
  {
    name: 'map',
    description: 'Map name',
    dm_permission: true,
    type: 3,
    required: true,
    autocomplete: true,
  }
]
const commandSignatures = [
  {
    name: 'callouts',
    description: 'Show map callouts',
    dm_permission: true,
    type: 1,
    options: options,
  },
  {
    name: 'map',
    description: 'Show map callouts',
    dm_permission: true,
    type: 1,
    options: options,
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
    const options = interaction.data.options;
    if (options == null) return;
    if (options.length < 1) return;
    const option0 = options[0];
    if (option0.name != 'map') return;
    const mapName = option0.value;
    const maps = this.db.get(`maps.json`, defaultMaps);
    if (option0.focused == true) {
      var mapNames = Object.keys(maps);
      var choices = [];
      mapNames.sort((a, b) => simpleStringMatchAccuracy(b.toLowerCase(), mapName.toLowerCase()) - simpleStringMatchAccuracy(a.toLowerCase(), mapName.toLowerCase()));
      mapNames.forEach((name) => choices.push({ name: name, value: name }));
      if (choices.length > 15) choices.splice(15);
      return await this.rest.createInteractionResponse(interaction, JSON.stringify({ type: 8, data: { choices: choices } }));
    }
    const map = maps[mapName];
    if (map == null) return this.rest.createEphemeralInteractionResponse(interaction, { content: `Map \`${mapName}\` not found. :thinking:` });
    return this.rest.createInteractionResponse(interaction, { type: 4, data: { content: map.callouts } });
  }

  async executeButton(interaction) {
    const customId = interaction.data.custom_id.split(' ');
    //
  }
}

export { commandSignatures, buttonSignatures, Command };