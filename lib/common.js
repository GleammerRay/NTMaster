import * as Fs from 'fs';
import * as Path from 'path';

const mapsPath = Path.join(Path.dirname(process.argv[1]), 'maps.json');
const defaultMaps = JSON.parse(Fs.readFileSync(mapsPath, 'utf8'));

const defaultComponents = [
  {
    type: 1,
    components: [
      {
        type: 2,
        label: '+ Install User App',
        style: 5,
        url: 'https://discord.com/oauth2/authorize?client_id=1325928263473696940'
      },
    ],
  },
];

const defaultEmbedColor = 0xA5A5A5;
const defaultLogoURL = 'https://raw.github.com/GleammerRay/INTERLINKED/master/assets/logo.png';
const defaultEmbedAuthor = {
  name: 'NEOTOKYO° Master',
  url: 'https://github.com/GleammerRay/NTMaster',
  icon_url: defaultLogoURL,
};

const defaultEmbedFooter = {
  icon_url: 'https://cdn.discordapp.com/attachments/1005272489380827199/1005581705035399198/gleam.jpg',
  text: 'Made by Gleammer (nice)',
};

const buildEmbed = embed => {
  if (embed.title == undefined) embed.title = 'NEOTOKYO° Master';
  if (embed.footer == undefined) embed.footer = defaultEmbedFooter;
  if (embed.thumbnail == undefined) embed.thumbnail = { url: defaultLogoURL };
  if (embed.author == undefined) embed.author = defaultEmbedAuthor;
  if (embed.color == undefined) embed.color = defaultEmbedColor;
  return embed;
}

const snakeToCamel = str => str.replace( /([-_]\w)/g, g => g[ 1 ].toUpperCase() );

const snakeToPascal = str => {
  let camelCase = snakeToCamel( str );
  let pascalCase = camelCase[ 0 ].toUpperCase() + camelCase.substr( 1 );
  return pascalCase;
}

const simpleStringMatchAccuracy = (a, b) => {
  var _bIndex = 0;
  if (b.length == 0) return;
  for (let i = 0; i != a.length; i++) {
    if (a[i] == b[_bIndex]) {
      _bIndex++;
      if (_bIndex == b.length) return _bIndex;
      continue;
    }
    _bIndex = 0;
  }
  return _bIndex;
}

const linearStringMatchAccuracy = (a, b) => {
  var _bIndex = 0;
  if (b.length == 0) return;
  for (let i = 0; i != a.length; i++) {
    if (a[i] != b[_bIndex]) break;
    _bIndex++;
    if (_bIndex == b.length) return _bIndex;
  }
  return _bIndex;
}

const truncate = (str, n) => {
  return (str.length > n) ? str.slice(0, n-1) + '&hellip;' : str;
};

const isAdmin = (member) => {
  return (member.permissions & (1 << 3)) == (1 << 3);
}

export { defaultMaps, buildEmbed, snakeToCamel, snakeToPascal, simpleStringMatchAccuracy, linearStringMatchAccuracy, truncate, isAdmin };
