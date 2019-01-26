## Sizemometer

[![npm version](https://img.shields.io/npm/v/rsk.svg?style=flat)](https://www.npmjs.com/package/rsk)
[![Build Status](https://travis-ci.com/chardos/sizemometer.svg?branch=master)](https://travis-ci.com/chardos/sizemometer)

## Setting up

Install the package:

```
npm install -g sizemometer
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
sizemometer add
```

Then to view the report:

```
sizemometer report
```


