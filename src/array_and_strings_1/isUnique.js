function isUnique(str) {
  const hashStr = {};
  for (const char of str) {
    if (hashStr[char]) {
      return false;
    } else {
      hashStr[char] = 1;
    }
  }
  return true;
}

console.log(isUnique('helo'));

export { isUnique };
