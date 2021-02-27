var firstUniqChar = function (s) {
  const position = new Map();
  const n = s.length;
  for (let [i, ch] of Array.from(s).entries()) {
    if (position.has(ch)) {
      position.set(ch, -1);
    } else {
      position.set(ch, i);
    }
  }
  let first = n;
  for (let pos of position.values()) {
    if (pos !== -1 && pos < first) {
      first = pos;
    }
  }
  if (first === n) {
    first = -1;
  }
  return first;
};
