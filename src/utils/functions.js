function paginator(arr, size = 1, cache = []) {
  const tmp = [...arr];
  if (size <= 0) {
    return cache;
  }
  while (tmp.length) {
    cache.push(tmp.splice(0, size));
  }
  return cache;
}

export {
  paginator,
};
