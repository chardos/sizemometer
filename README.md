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

```js
module.exports = {
  title: 'Your project name',
  trackedFiles: ['dist/bundle.js', 'main-*.js'],
  commitIgnorePattern: "Update dependency",
  theme: {
    accentColor: '#BADA55'
  }
}
```

| Property            | Description                                                                 | Types         |
|---------------------|-----------------------------------------------------------------------------|---------------|
| title               | Displayed in app header                                                     | string        |
| trackedFiles        | Files to take snapshots of. Supports globbing.                              | array         |
| commitIgnorePattern | When this matches your latest commit message, no new snapshot will be taken | string, regex |
| theme.accentColor   | Changes the color of the bars                                               | string        |

## Using sizemometer

To take your first snapshot, run:

```
npx sizemometer add
```

Then to view the report:

```
npx sizemometer report
```

## API

```
import { add } from 'sizemometer';

await add({currentHistory});
```

