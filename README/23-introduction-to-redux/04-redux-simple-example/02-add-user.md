### Redux Simple Example (Add User)[![gototop](/README/images/gototop.png)](#23-introduction-to-redux)

Combine Reducers
```javascript
  reducers = combineReducers({
    numState: numberReducer,
    nameState: nameReducer,
  })
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>Complete Developers Guide (Redux)</title>
</head>
<body>
<div>
  <div id="value"></div>
  <button id="increment">+</button>
  <button id="decrement">-</button>
  <div id="name"></div>
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
</html>
```

```javascript
import {combineReducers, createStore} from 'redux';

const
  numberReducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  },
  nameReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          name: action.name
        };
      default:
        return state;
    }
  },
  reducers = combineReducers({
    numState: numberReducer,
    nameState: nameReducer,
  }),
  store = createStore(reducers),
  value = document.getElementById('value'),
  nameDiv = document.getElementById('name'),
  render = () => {
    value.innerHTML = store.getState().numState;
    nameDiv.innerHTML = store.getState().nameState.name;
  },
  clickIncrement = () => {
    document.getElementById('increment')
      .addEventListener('click', (() => {
        store.dispatch({type: 'INCREMENT'});
      }));
  },
  clickDecrement = () => {
    document.getElementById('decrement')
      .addEventListener('click', (() => {
        store.dispatch({type: 'DECREMENT'});
      }));
  },
  clickDocument = () => {
    document.addEventListener('click', (() => {
      store.dispatch({type: 'ADD_USER', name: 'Apple'});
    }));
  },
  storeSubscribe = () => {
    store.subscribe(render);
  };

render();
clickIncrement();
clickDecrement();
clickDocument();
storeSubscribe();
```
