var recipes = {
  eggs: 2,
  milk: "1 cup",
  flour: "2 cups",
};

function updateObjectWithKeyAndValue(obj, key, val) {
var newObj = Object.assign({}, obj, { [key]: val } );
  return NewObj;
}