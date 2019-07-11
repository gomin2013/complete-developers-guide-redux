# Complete Developers Guide (Redux)

**Redux (Add & Remove Array)**
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

**React**
```jsx harmony
import React, {Component} from 'react';
import { render } from 'react-dom';

class HelloWorld extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const HelloWorld = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

render(
  <HelloWorld name='David' />,
  document.getElementById('root')
);
```

**Object**
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

**Array (Concat & Filter)**
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
