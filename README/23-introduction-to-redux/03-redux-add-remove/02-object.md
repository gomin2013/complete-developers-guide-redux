### Redux (Add & Remove Object)[![gototop](/README/images/gototop.png)](#23-introduction-to-redux)

```javascript
import {createStore} from 'redux'

const nameReducer = function (state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return state.concat(action.user);
    case 'REMOVE_USER':
      return state.filter(function (user) {
        return user.id !== action.id
      });
    default:
      return state;
  }
};

const store = createStore(nameReducer);

console.log(store.getState());

store.dispatch({
  type: 'ADD_USER',
  user: {
    id: 1,
    name: 'Apple'
  }
});

store.dispatch({
  type: 'ADD_USER',
  user: {
    id: 2,
    name: 'Banana'
  }
});

console.log(store.getState());

store.dispatch({
  type: 'ADD_USER',
  user: {
    id: 3,
    name: 'Mango'
  }
});

store.dispatch({
  type: 'ADD_USER',
  user: {
    id: 4,
    name: 'Orange'
  }
});

console.log(store.getState());

store.dispatch({
  type: 'REMOVE_USER',
  id: 2
});

console.log(store.getState());
```
