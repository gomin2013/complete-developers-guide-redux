### Redux Simple Example (Increment & Decrement)[![gototop](/README/images/gototop.png)](#23-introduction-to-redux)

Store
```javascript
  storeSubscribe = () => {
    store.subscribe(render);
  }
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
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
</html>
```

```javascript
import {createStore} from 'redux'

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
  store = createStore(numberReducer),
  value = document.getElementById('value'),
  render = () => {
    value.innerHTML = store.getState().toString();
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
  storeSubscribe = () => {
    store.subscribe(render);
  };

render();
clickIncrement();
clickDecrement();
storeSubscribe();
```
