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

  async populateSections(interaction, maps, mapName, calloutSections, suffix = '') {
    const map = maps[mapName];
    if (map == null) return await this.rest.createEphemeralInteractionResponse(interaction, { content: `Map \`${mapName}\` not found. :thinking:` });
    if (map.callouts == null) return await this.rest.createEphemeralInteractionResponse(interaction, { content: `No callouts available for map \`${mapName}\`. :empty_nest:` });
    var callouts = map.callouts;
    if (Array.isArray(callouts)) {
      if (callouts.length == 0) return await this.rest.createEphemeralInteractionResponse(interaction, { content: `No callouts available for map \`${mapName}\`. :empty_nest:` });
      if (callouts.length > 1) {
        for (let i = 1; i != callouts.length; i++) {
          var image = callouts[i];
          var name = i.toString();
          if (image.constructor == Object) {
            if (image.name == null) continue;
            if (image.url == null) continue;
            name = image.name;
            image = image.url;
          }
          calloutSections.push({
            type: 2,
            label: name,
            style: 1,
            custom_id: `callouts section ${mapName} ${i}${suffix}`
          });
        }
      }
    }
    if (typeof(callouts) == 'string') callouts = [callouts];
    if (calloutSections.length == 0) calloutSections.push(0);
    return callouts;
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
    var calloutSections = [];
    const callouts = await this.populateSections(interaction, maps, mapName, calloutSections);
    if (calloutSections.length == 0) return callouts;
    else if (calloutSections[0] == 0) calloutSections = [];
    var components = JSON.parse(JSON.stringify(defaultComponents));
    //if (calloutSections.length != 0) {
    //  components.splice(0, 0, {
    //    type: 1,
    //    components: calloutSections,
    //  });
    //}
    var embeds;
    if (callouts.length == 1) {
      embeds = [ { title: `Callouts for \`${mapName}\``, image: { url: callouts[0] } } ];
    } else {
      embeds = [];
      var description = 'Tap the image and swipe to view callout sections:\n';
      for (let i = 1; i != callouts.length; i++) {
        const calloutSection = callouts[i];
        embeds.push({ url: 'https://github.com/GleammerRay/NTMaster', image: { url: calloutSection.url } });
        description += `${i}: ${calloutSection.name}\n`;
      }
      embeds[0].description = description;
      embeds[0].title = `Callouts for \`${mapName}\``;
    }
    return await this.rest.createInteractionResponse(interaction, { type: 4, data: { embeds: embeds, components: components } });
  }

  async executeButton(interaction) {
    const customId = interaction.data.custom_id.split(' ');
    if (customId.length < 4) return await this.rest.createEphemeralInteractionResponse(interaction, { content: `Map section not found. :thinking:` });
    const maps = this.db.get(`maps.json`, defaultMaps);
    const mapName = customId[2];
    var index;
    try {
      index = Number(customId[3]);
    } catch {
      return await this.rest.createEphemeralInteractionResponse(interaction, { content: `Map section not found. :thinking:` });
    }
    var type = 4;
    if (customId.length > 4) {
      if (customId[4] == '1') type = 7;
    }
    const map = maps[mapName];
    if (map == null) return await this.rest.createEphemeralInteractionResponse(interaction, { content: `Map \`${mapName}\` not found. :thinking:` });
    const callouts = map.callouts;
    if (callouts == null) return await this.rest.createEphemeralInteractionResponse(interaction, { content: `No callouts available for map \`${mapName}\`. :empty_nest:` });
    if (!(Array.isArray(callouts))) return await this.rest.createEphemeralInteractionResponse(interaction, { content: `Map section not found. :thinking:` });
    if (callouts.length <= index) return await this.rest.createEphemeralInteractionResponse(interaction, { content: `Map section not found. :thinking:` });
    var image = callouts[index];
    var sectionName = image.name;
    if (image.constructor == Object) {
      image = image.url;
    }
    var calloutSections = [];
    const result = await this.populateSections(interaction, maps, mapName, calloutSections, ' 1');
    if (calloutSections.length == 0) return result;
    else if (calloutSections[0] == 0) calloutSections = [];
    var components = [];
    if (calloutSections.length != 0) {
      components.splice(0, 0, {
        type: 1,
        components: calloutSections,
      });
    }
    return await this.rest.createInteractionResponse(interaction, { type: type, data: { flags: 1 << 6, embeds: [ { title: `Callouts for \`${mapName}\` - ${sectionName}`, image: { url: image } } ], components: components } });
  }
}

export { commandSignatures, buttonSignatures, Command };
