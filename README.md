## Sizemometer

[![npm version](https://img.shields.io/npm/v/sizemometer.svg?style=flat)](https://www.npmjs.com/package/rsk)
[![Build Status](https://travis-ci.com/chardos/sizemometer.svg?branch=master)](https://travis-ci.com/chardos/sizemometer)

Monitoring for your front end assets. Gives you nice graphs to track the size of your files over time.

## Setting up

Install the package:

```
npm install -S sizemometer
```

Set up a config file at `.sizemometer/config.js` in the root of your project.

```
module.exports = {
  title: 'Your project name',
  trackedFiles: ['dist/bundle.js', 'main-*.js'],
  theme: {
    accentColor: '#BADA55'
  }
}
```

`trackedFiles` is an array of the trackedFiles which will be monitored.

## Using sizemometer

To take your first snapshot, run:

```
npx sizemometer add
```

Then to view the report:

```
npx sizemometer report
```


