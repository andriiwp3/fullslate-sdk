export const mapObjectKeysDeep = (obj, formatterFn) => {
    if (Array.isArray(obj)) {
      return obj.map(v => mapObjectKeysDeep(v, formatterFn));
    } else if (obj != null && obj.constructor === Object) {
      return Object.keys(obj).reduce(
        (result, key) => ({
          ...result,
          [formatterFn(key)]: mapObjectKeysDeep(obj[key], formatterFn),
        }),
        {},
      );
    }
    return obj;
  };
  