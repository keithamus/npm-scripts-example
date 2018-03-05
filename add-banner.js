var pckgJson = require(process.env.PWD +'/package.json');
var banner = '/* ' + pckgJson.name + ' - '+ pckgJson.config.banner +' - ' + new Date() + ' */\n';

process.stdout.write(banner);
process.stdin.pipe(process.stdout);
