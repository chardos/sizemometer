function trimPath(path, num = 1) {
  const split = path.split('/');
  const length = split.length;
  return split.slice(0, length - num).join('/');
}

module.exports = trimPath;
