### Array (Concat & Filter)[![gototop](/README/images/gototop.png)](#23-introduction-to-redux)

```javascript
const originalArr = ['Apple', 'Banana', 'Mango'];

function concatArr(arr) {
  const newName = 'Orange';
  return arr.concat(newName);
}

function filterArr(arr) {
  return arr.filter(function(name) {
    return name !== 'Apple';
  });
}

console.log(originalArr);
console.log(concatArr(originalArr));
console.log(filterArr(originalArr));
console.log(originalArr);
```
