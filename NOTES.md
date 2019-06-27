## Build step (`yarn build`):

- Copies over `index.html` and `bundle.js` into dist from `sizemometer-report`.
- `dist/index.html` and `dist/bundle.js` , whereas `dist/history.jsonp` and `dist/config.jsonp` are ignored.

## sizemometer report

- When this command is run, it takes a snapshot, puts the below files into dist/assets of sizemometer (the report runs out of sizemometers node_modules)
  - Creates a config.jsonp out of the config.js
  - Takes a snapshot and creates a history.jsonp out of the history.json

## File structure

- `/scripts` - Being run locally in sizemometer.
- `/src`
  - `/api` - Functions to be imported. Currently being consumed by sizemometer-s3-deploy
  - `/commands` - Corresponds to the sizemometer cli commands, e.g. `sizemometer add`
  

