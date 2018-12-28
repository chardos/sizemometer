## Sizemometer

## Config file

Set up a config file at `.sizemometer/config.js` in the root of your project.

```
module.exports = {
  files: ['dist/bundle.js']
}
```

`files` is an array of the files which will be monitored.

## .gitignore

Add this to your `.gitignore`:

```
.sizemometer/report
```