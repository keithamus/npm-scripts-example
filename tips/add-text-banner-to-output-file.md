# Add text banner to output file

## Notes

This tip was written via an [issue by @koskh on 18 Oct 2015](https://github.com/keithamus/npm-scripts-example/issues/31).

## Instructions

If you want to add banner to output file, you could reproduce the following steps.

1. Make a helper file (`add-banner.js` for example)
  ```javascript
  var pckgJson = require(process.env.PWD +'/package.json');
  var banner = '/* ' + pckgJson.name + ' - '+ pckgJson.config.banner +' - ' + new Date() + ' */\n';
  
  process.stdout.write(banner);
  process.stdin.pipe(process.stdout);
  ```
2. Add the data inside the `config` of `package.json`
  ```javascript
  "config": {
    "banner": " ...Header banner text ... "
  }
  ```
3. Add into scripts for `node-sass`, `stylus` or whatever...
  ```javascript
  "build:sass": "node-sass ./style/index.scss | node ./utils/build/add-banner.js > ./build/index.css",
  "build:stylus": "stylus assets/styles/main.styl --print | node ./add-banner.js > dist/main.css",
  ```

## Demo available on its dedicated branch

This tips has been implemented on its own branch `tips/add-text-banner-to-output-file` (based on the master).

Once you are on the branch, do `npm install` if necessary, then `npm run build:banner` which will run `stylus assets/styles/main.styl --print | node ./add-banner.js > dist/main.css` ...