const defaultMaps = {
  ballistremade: { callouts: 'https://media.discordapp.net/attachments/1275189035798761533/1284525541218713692/callout_-_ballistremade.png?ex=677d3e22&is=677beca2&hm=9901cee1101d810633a5b44637406b89784b7c8e5f31ff92d941e9711cde6fb2&=&format=webp&quality=lossless&width=1221&height=686' },
  ballistrade: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284525754570244181/callout_-_ballistrade.png?ex=677d3e55&is=677becd5&hm=05b751261c0acb235608c14fb9595af90d0f00623ca28943c8b37127d4418a0e&' },
  dawn: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284525901174013952/callout_-_dawn.png?ex=677d3e78&is=677becf8&hm=861006fac60483daec7b617b7c92f7f06f68e6983eb3c186d1e74add72e42574&' },
  culvert: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284525999911997533/callout_-_culvert_callouts_incomplete.png?ex=677d3e8f&is=677bed0f&hm=9d92642bc2461ed7cbe6041c89043e6ca7f5bb1917795db5dbb88c977477e611&' },
  entry: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284526069487239188/callout_-_entry.png?ex=677d3ea0&is=677bed20&hm=2f9e21296444a0dfe42e3158977d5b1bcf8f1c54c6498e46ab32fc6d19e5ef59&' },
  envoy: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284526136273010770/callout_-_envoy.png?ex=677d3eb0&is=677bed30&hm=95ae618244f542ec96f54339606196570b469ae97860d223eec5081f830c7ec3&' },
  commute: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284526370411647028/callout_-_Commute_1f.png?ex=677d3ee8&is=677bed68&hm=9969d13825137b1c3532ed96e5a95c2f44e9ed80bde2a29937004ed95f50051a&' },
  breakwater: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284526516201459762/callout_-_breakwater.png?ex=677d3f0a&is=677bed8a&hm=29f7dd36fdcf2af79af68a3495a12b4b0762d8df7cc807f6e076d3061c235a30&' },
  grid: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284526651862024242/callout_-_gridb1comp.png?ex=677d3f2b&is=677bedab&hm=9568a511bf8f846c7922dd6f53b53dc9fd89549c074172faa09a5dfae442ddd1&' },
  threadplate: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284527136383701082/callout_-_treadplate.png?ex=677d3f9e&is=677bee1e&hm=d81243c8612af7d7d82ff0a148ed8c5f8f1034a90d25c266109a8484accd4a44&' },
  tetsu: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284527194823196716/callout_-_testub4.png?ex=677d3fac&is=677bee2c&hm=e6690d9ed88ee5faddc6e7110cb01ba67013de44988534977116a3704dc1917f&' },
  transit: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284527294341185552/callout_-_transit.png?ex=677d3fc4&is=677bee44&hm=ce49b9963553bcdd366ff97e418f52291209d3090f0e1971873e0a92d1eac31e&' },
  yokoalley: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284527418987647038/callout_-_yokoalley_a6.png?ex=677d3fe2&is=677bee62&hm=49f5f37cd14ba741d4047dfd05d78031d52ee35a90e10f6bfbb30d3ab35babec&' },
  saitama: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284527634037870683/callout_-_saitama.png?ex=677d4015&is=677bee95&hm=83afe7fc94673319713a4da180f4736dfd72119aee17351b32eddd6c3d470075&' },
  oliostain: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284527794713526324/callout_-_oliostain_b3.png?ex=677d403b&is=677beebb&hm=66493dbe472ef3ce9fbe5c3e403e127ba3d81bbf8fe847460c78a3955af21724&' },
  ghost: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284527912351039598/callout_-_ghost.png?ex=677d4057&is=677beed7&hm=9deae0582c3ec6f0f335c7de754a064af669bb81ae933495bdaf4730d08c35bb&' },
  bullet: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284528055615881256/callout_-_bullet_ctg_2caps.png?ex=677d4079&is=677beef9&hm=0d7211f172c241ccf4c7e64b6ab134cfb87cd3218c1bc0bd601a7445a970fe97&' },
  ikasen: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284528193927249920/callout_-_ikasen.png?ex=677d409a&is=677bef1a&hm=32cad3f8cee946a555bd414e659fc428d49ee6271a55b085ee98f3fdcdcc462f&' },
  uptown: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284545879662923948/callout_-_uptown_rc1_floor1.png?ex=677d5113&is=677bff93&hm=30f61e8be397b0e4375b8ad2207c48ac0069cbeafba48a70013f4339a21856af&' },
  snowfall: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284546189852938373/callout_-_snowfall_b8.png?ex=677d515d&is=677bffdd&hm=fb333b309f6aa96f3abc66f9e254d7c806c568098d3cd9fd01363c16fe053286&' },
  redlight: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284546280638517342/callout_-_nt_redlight_ctg.png?ex=677d5173&is=677bfff3&hm=a6fbd1384a4db395331e3d104ef5aaa34354904538ce3bc3b35a2e4e822d5028&' },
  olistain: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284546451392823318/callout_-_oilstain.png?ex=677d519b&is=677c001b&hm=5ea2a871b302641311038434fde49e33ffc962b9cdaa8152f2ae1aed4bface94&' },
  turmac: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284547136243110011/callout_-_tarmac.png?ex=677d523f&is=677c00bf&hm=cf3940bdc820a1acaecaa2689ca2fe08dcb88e81416c4774cafb8b8ce36301a2&' },
  rise: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284553126472454164/nt_rise_ctg.gif?ex=677d57d3&is=677c0653&hm=9af068626b2c6972f0c0a962edf613eb9fed9503aaff524bb76728edfaaccd7f&' },
  marketu: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1284553523811319928/callout_-_marketu.gif?ex=677d5831&is=677c06b1&hm=18e91d33fe6ef96ad757bb65f7ff14dfb99701c1c282668b8e041b35c9a59ea5&' },
  shrine: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1289365533031927818/nt_shrine_ctg-2024-Callouts.png?ex=677d0d7a&is=677bbbfa&hm=33da61828f4d43f668c8ee068caca22f75c0441c801a770d791bdfa9ff8cb305&' },
  dew: { callouts: 'https://cdn.discordapp.com/attachments/1275189035798761533/1314645463974285413/callout_-_Dew_A6.png?ex=677d64ff&is=677c137f&hm=aa9a73b7daf168b9751ba06e3cacbe5cfda5e9de0a8132e8e9e24c5f207ba4ea&' },
}

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
