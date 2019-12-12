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

function filterObject(object, value, extraValues) {
  let filtered;

  function compare(value, toCompare) {
    return String(value).toLowerCase().includes(toCompare.toLowerCase());
  }

  if (!extraValues.length) {
    filtered = object
      .filter((o) => Object.keys(o)
        .some((k) => compare(o[k], value)));
  } else {
    filtered = object && object
      .filter((raw) => extraValues
        .some((exValue) => compare(raw[exValue], value)));
  }

  return filtered;
}

export {
  paginator,
  filterObject,
};
