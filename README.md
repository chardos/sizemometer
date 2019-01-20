## Sizemometer

## Setting up

Install the package:

```
npm install -g sizemometer
```

Set up a config file at `.sizemometer/config.js` in the root of your project.

```
module.exports = {
  trackedFiles: ['dist/bundle.js', 'main-*.js']
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


