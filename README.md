## Sizemometer

## Config file

Set up a config file at `.sizemometer/config.js` in the root of your project.

```
module.exports = {
  trackedFiles: ['dist/bundle.js', 'main-*.js']
}
```

`trackedFiles` is an array of the trackedFiles which will be monitored.

## .gitignore

Add this to your `.gitignore`:

```
.sizemometer/report
```