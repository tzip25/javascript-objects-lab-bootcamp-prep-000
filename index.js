var recipes = {
  eggs: 2,
  milk: "1 cup",
  flour: "2 cups",
};

function updateObjectWithKeyAndValue(obj, key, val) {
Object.assign({newObj}, obj, { [key]: val });
  return newObj;
}