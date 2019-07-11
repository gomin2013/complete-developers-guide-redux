### Object[![gototop](/README/images/gototop.png)](#23-introduction-to-redux)

```javascript
const initialState = {
  item: 'Test',
  inStock: true
};

function simpleReducer(state, action) {
  switch (action.type) {
    case 'OUT_OF_STOCK':
      return {
        ...state,
        item: 'OUT OF STOCK!',
        inStock: false
      };
    case 'MAKE_IN_STOCK':
      return {
        ...state,
        item: 'MAKE IN STOCK!',
        inStock: true
      };
    default:
      return state;
  }
}

console.log(initialState);
console.log(simpleReducer(initialState, {type: 'OUT_OF_STOCK'}));
console.log(simpleReducer(initialState, {type: 'MAKE_IN_STOCK'}));
console.log(initialState);
```
