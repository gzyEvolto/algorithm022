var isIsomorphic = function (s, t) {
  const s2t = {};
  const t2s = {};
  const length = s.length;
  for (let i = 0; i < length; i++) {
    let a1 = s2t[s[i]];
    console.log(a1);
    let a2 = t2s[t[i]];
    console.log(a2);
    if (a1 && a2) {
      if (a1 != t[i] || a2 != s[i]) {
        return false;
      }
    } else if (!a1 && !a2) {
      s2t[s[i]] = t[i];
      t2s[t[i]] = s[i];
    } else {
      return false;
    }
  }
  return true;
};
