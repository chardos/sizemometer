// Trims off n sections separated by '/'
// e.g. trimPath('foo/bar/baz')
// => 'foo/bar'
function trimPath(path, num = 1) {
  const split = path.split('/');
  const { length } = split;
  return split.slice(0, length - num).join('/');
}

module.exports = trimPath;
