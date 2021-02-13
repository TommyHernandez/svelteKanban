const miStorage = window.localStorage;

function saveItem(key, item) {
  console.log(key, JSON.stringify(item));
  miStorage.setItem(key, JSON.stringify(item));
}
function getItem(columnName) {
  return JSON.parse(miStorage.getItem(columnName));
}
function getStorage() {
  const values = [],
    keys = Object.keys(miStorage);
  let i = keys.length;
  while (i--) {
    values.push(JSON.parse(localStorage.getItem(keys[i])));
  }
  return values;
}
export default {
  saveItem,
  getItem,
  getStorage,
  length: miStorage.length,
};
