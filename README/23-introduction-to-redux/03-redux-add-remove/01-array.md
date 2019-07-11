### Redux (Add & Remove Array)[![gototop](/README/images/gototop.png)](#23-introduction-to-redux)

```javascript
import {createStore} from 'redux'

const nameReducer = function (state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return state.concat(action.name);
    case 'REMOVE_USER':
      return state.filter(function(name) {
        return name !== action.name
      });
    default:
      return state;
  }
};

const store = createStore(nameReducer);

console.log(store.getState());

store.dispatch({
  type: 'ADD_USER',
  name: 'Apple'
});

console.log(store.getState());

store.dispatch({
  type: 'ADD_USER',
  name: 'Banana'
});

console.log(store.getState());

store.dispatch({
  type: 'ADD_USER',
  name: 'Mango'
});

console.log(store.getState());

store.dispatch({
  type: 'ADD_USER',
  name: 'Orange'
});

console.log(store.getState());

store.dispatch({
  type: 'REMOVE_USER',
  name: 'Banana'
});

console.log(store.getState());
```
