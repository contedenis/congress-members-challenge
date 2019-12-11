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

function filterObject(object, value) {
  return object.filter(
    (objectItem) => Object.values(objectItem)
      .find((item) => String(item).toLowerCase().startsWith(value.toLowerCase())),
  );
}

export {
  paginator,
  filterObject,
};
