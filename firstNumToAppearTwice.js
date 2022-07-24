var repeatedCharacter = function (s) {
  if (s.length == 2) {
    return s[0];
  }
  let map = {};
  for (let char of s) {
    if (map.hasOwnProperty(char)) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }
};
console.log(repeatedCharacter("abccbaacz"));
