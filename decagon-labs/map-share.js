function mapShare(map) {
  if (map['a']) {
    map['b'] = map['a'];
  }
  delete map['c'];
  return map;
}