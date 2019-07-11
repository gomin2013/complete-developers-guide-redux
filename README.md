# Complete Developers Guide (Redux)

- [24 Adding Redux to React](#24-adding-redux-to-react)
- [23 Introduction to Redux](#23-introduction-to-redux)
    - [Redux Simple Example (Add User)](#redux-simple-example-add-user)
    - [Redux Simple Example (Increment & Decrement)](#redux-simple-example-increment--decrement)
    - [Redux (Add & Remove Object)](#redux-add--remove-object)
    - [Redux (Add & Remove Array)](#redux-add--remove-array)
        - [Object](#object)
        - [Array (Concat & Filter)](#array-concat--filter)
- [17 React States](#17-react-states)
- [16 React Components](#16-react-components)
    - [Component (Set Interval)](#component-set-interval)
    - [Component (Create Class Function)](#component-create-class-function)
    - [Component (ES6 class syntax)](#component-es6-class-syntax)
    - [Component (Import File)](#component-import-file)
    - [Component (Default Props)](#component-default-props)
    - [Component (Prop Types)](#component-prop-types)
    - [Component (NPM package solutions)](#component-npm-package-solutions)
- [15 Introduction to React and JSX](#15-introduction-to-react-and-jsx)
    - [Install Babel, Webpack & React](#install-babel-webpack--react)
    - [Components](#components)
    - [Components (Array)](#components-array)
    - [Components (JSON)](#components-json)
    - [Components (Text Input)](#components-text-input)
- [14 Introduction to React and Redux Section](#14-introduction-to-react-and-redux-section)
    - [React](#react)

## 24 Adding Redux to React[![gototop](/README/images/gototop.png)](#complete-developers-guide-redux)

### NEW

```html

```

```javascript

```

## 23 Introduction to Redux[![gototop](/README/images/gototop.png)](#complete-developers-guide-redux)

- [Redux Simple Example (Add User)](#redux-simple-example-add-user)
- [Redux Simple Example (Increment & Decrement)](#redux-simple-example-increment--decrement)
- [Redux (Add & Remove Object)](#redux-add--remove-object)
- [Redux (Add & Remove Array)](#redux-add--remove-array)
    - [Object](#object)
    - [Array (Concat & Filter)](#array-concat--filter)

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

## 17 React States[![gototop](/README/images/gototop.png)](#complete-developers-guide-redux)

### NEW

```html

```

```javascript

```

## 16 React Components[![gototop](/README/images/gototop.png)](#complete-developers-guide-redux)

- [Component (Set Interval)](#component-set-interval)
- [Component (Create Class Function)](#component-create-class-function)
- [Component (ES6 class syntax)](#component-es6-class-syntax)
- [Component (Import File)](#component-import-file)
- [Component (Default Props)](#component-default-props)
- [Component (Prop Types)](#component-prop-types)
- [Component (NPM package solutions)](#component-npm-package-solutions)

### Component (Set Interval)[![gototop](/README/images/gototop.png)](#16-react-components)

dist/index.html

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
  <div id="app"></div>
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
```

src/index.js

```javascript
import React from 'react';
import {render} from 'react-dom';

const App = (props) => {
  const {num} = props;

  return (
    <div>
      <h1>Hello to the Visual DOM</h1>
      <h3>I've been rendered {num} times!</h3>
    </div>
  );
};

let num = 0;

const timer = () => {
  num += 1;

  render(
    <App num={num} />,
    document.getElementById('app')
  );
};

setInterval(timer, 1000);
```

[![Component (Set Interval)](/README/images/16-01-component-set-interval.gif)](#16-react-components)

### Component (Create Class Function)[![gototop](/README/images/gototop.png)](#16-react-components)

Install `create-react-class` packages to `devDependencies`.

```
npm i -D create-react-class
```

dist/index.html

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
  <div id="app"></div>
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
```

src/characters.json

```json
[
  {
    "name": "Grizzly",
    "imgUrl": "https://vignette.wikia.nocookie.net/we-bare-bears-fanon/images/4/43/Grizz.png/revision/latest/scale-to-width-down/175?cb=20150908100531"
  },
  {
    "name": "Panda",
    "imgUrl": "https://vignette.wikia.nocookie.net/webarebears/images/d/dc/Pandanda.png/revision/latest/scale-to-width-down/175?cb=20160614205746"
  },
  {
    "name": "Ice Bear",
    "imgUrl": "https://vignette.wikia.nocookie.net/webarebears/images/7/7d/Icee.png/revision/latest/scale-to-width-down/175?cb=20160620180135"
  }
]
```

src/index.js

```javascript
import React from 'react'
import CreateReactClass from 'create-react-class'
import {render} from 'react-dom'
import Characters from './characters.json';

const Character = CreateReactClass({
  displayName: 'Character',

  render: function () {
    const {name, imgUrl} = this.props;

    return (
      <li>
        <h2>{name}</h2>
        <img src={imgUrl} alt={name}/>
      </li>
    );
  }
});

const App = CreateReactClass({
  displayName: 'App',

  render: function () {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'space-around'
    };

    return (
      <div>
        <h1>American Dad!</h1>
        <ul style={containerStyle}>{
          Characters.map((character, i) => {
            const {name, imgUrl} = character;

            return (
              <Character key={i} name={name} imgUrl={imgUrl}/>
            );
          })
        }</ul>
      </div>
    );
  }
});

render(
  <App/>,
  document.getElementById('app')
);
```

[![Component (Create Class Function)](/README/images/16-02-component-create-class-function.gif)](#16-react-components)

### Component (ES6 class syntax)[![gototop](/README/images/gototop.png)](#16-react-components)

dist/index.html

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
  <div id="app"></div>
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
```

src/characters.json

```json
[
  {
    "name": "Ice Bear",
    "imgUrl": "https://vignette.wikia.nocookie.net/webarebears/images/7/7d/Icee.png/revision/latest/scale-to-width-down/175?cb=20160620180135"
  },
  {
    "name": "Panda",
    "imgUrl": "https://vignette.wikia.nocookie.net/webarebears/images/d/dc/Pandanda.png/revision/latest/scale-to-width-down/175?cb=20160614205746"
  },
  {
    "name": "Grizzly",
    "imgUrl": "https://vignette.wikia.nocookie.net/we-bare-bears-fanon/images/4/43/Grizz.png/revision/latest/scale-to-width-down/175?cb=20150908100531"
  }
]
```

src/index.js

```javascript
import React, {Component} from 'react'
import {render} from 'react-dom'
import Characters from './characters.json'

class Character extends Component {
  render() {
    const {name, imgUrl} = this.props;

    return (
      <li>
        <h2>{name}</h2>
        <img src={imgUrl} alt={name}/>
      </li>
    );
  }
}

class App extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'space-around'
    };

    return (
      <div>
        <h1>American Dad!</h1>
        <ul style={containerStyle}>{
          Characters.map((character, i) => {
            const {name, imgUrl} = character;

            return (
              <Character key={i} name={name} imgUrl={imgUrl}/>
            );
          })
        }</ul>
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById('app')
);
```

[![Component (ES6 class syntax)](/README/images/16-03-component-es6-class-syntax.gif)](#16-react-components)

### Component (Import File)[![gototop](/README/images/gototop.png)](#16-react-components)

dist/index.html

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
  <div id="app"></div>
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
```

src/characters.json

```json
[
  {
    "name": "Finn the Human",
    "imgUrl": "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f3/Original_Finn.png/revision/latest/scale-to-width-down/175?cb=20190807133114"
  },
  {
    "name": "Jake the Dog",
    "imgUrl": "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/175?cb=20190807133015"
  },
  {
    "name": "Ice King",
    "imgUrl": "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/175?cb=20160405041324"
  }
]
```

src/components/Character.js

```javascript
import React, {Component} from 'react'

export default class Character extends Component {
  render() {
    const {name, imgUrl} = this.props;

    return (
      <li>
        <h2>{name}</h2>
        <img src={imgUrl} alt={name}/>
      </li>
    );
  }
}
```

src/index.js

```javascript
import React, {Component} from 'react'
import {render} from 'react-dom'
import Character from './components/Character'
import Characters from './characters.json'

class App extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'space-around'
    };

    return (
      <div>
        <h1>American Dad!</h1>
        <ul style={containerStyle}>{
          Characters.map((character, i) => {
            const {name, imgUrl} = character;

            return (
              <Character key={i} name={name} imgUrl={imgUrl}/>
            );
          })
        }</ul>
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById('app')
);
```

[![Component (Import File)](/README/images/16-04-component-import-file.gif)](#16-react-components)

### Component (Default Props)[![gototop](/README/images/gototop.png)](#16-react-components)

dist/index.html

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
  <div id="app"></div>
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
```

src/characters.json

```json
[
  {
    "firstName": "Stan",
    "lastName": "Smith",
    "age": 42,
    "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/0/0d/AmericanDad_09_Stan_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20101130170500"
  },
  {
    "firstName": "Francine",
    "lastName": "Smith",
    "age": 40,
    "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/1/16/AmericanDad_09_Francine_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20101130170555"
  },
  {
    "firstName": "Hayley",
    "lastName": "Smith",
    "age": 19,
    "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/b/b6/Gal_hayley.jpg/revision/latest/scale-to-width-down/175?cb=20121108030428"
  },
  {
    "firstName": "Steve",
    "lastName": "Smith",
    "age": 14,
    "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/1/17/AmericanDad_09_Steve_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20120410225346"
  },
  {
    "firstName": "Roger",
    "lastName": "Smith",
    "age": 1601
  }
]
```

src/components/Character.js

```javascript
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Character extends Component {
  render() {
    const {firstName, lastName, age, imgUrl} = this.props;

    return (
      <li>
        <h2>{firstName} {lastName}</h2>
        <h3>Age : {age}</h3>
        <img src={imgUrl} alt={firstName + ' ' + lastName}/>
      </li>
    );
  }
}

Character.defaultProps = {
  imgUrl: 'https://dummyimage.com/175/eeeeee/cccccc.gif'
};
```

src/components/App.js

```javascript
import React, {Component} from 'react'
import Character from "./Character";
import Characters from "../characters";

export default class App extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'space-around'
    };

    return (
      <div>
        <h1>American Dad!</h1>
        <ul style={containerStyle}>{
          Characters.map((character, i) => {
            const {firstName, lastName, age, imgUrl} = character;

            return (
              <Character
                key={i}
                firstName={firstName}
                lastName={lastName}
                age={age}
                imgUrl={imgUrl}/>
            );
          })
        }</ul>
      </div>
    );
  }
}
```

src/index.js

```javascript
import React from 'react'
import {render} from 'react-dom'
import App from "./components/App";

render(
  <App/>,
  document.getElementById('app')
);
```

[![Component (Default Props)](/README/images/16-05-component-default-props.gif)](#16-react-components)

### Component (Prop Types)[![gototop](/README/images/gototop.png)](#16-react-components)

dist/index.html

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
  <div id="app"></div>
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
```

src/characters.json

```json
[
  {
    "firstName": "Stan",
    "lastName": "Smith",
    "age": 42,
    "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/0/0d/AmericanDad_09_Stan_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20101130170500"
  },
  {
    "firstName": "Francine",
    "lastName": "Smith",
    "age": 40,
    "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/1/16/AmericanDad_09_Francine_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20101130170555"
  },
  {
    "firstName": "Hayley",
    "lastName": "Smith",
    "age": 19,
    "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/b/b6/Gal_hayley.jpg/revision/latest/scale-to-width-down/175?cb=20121108030428"
  },
  {
    "firstName": "Steve",
    "lastName": "Smith",
    "age": 14,
    "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/1/17/AmericanDad_09_Steve_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20120410225346"
  },
  {
    "firstName": "Roger",
    "lastName": "Smith",
    "age": 1601
  }
]
```

src/components/Character.js

```javascript
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Character extends Component {
  render() {
    const {firstName, lastName, age, imgUrl} = this.props;

    return (
      <li>
        <h2>{firstName} {lastName}</h2>
        <h3>Age : {age}</h3>
        <img src={imgUrl} alt={firstName + ' ' + lastName}/>
      </li>
    );
  }
}

Character.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  imgUrl: function (props, propName) {
    const pattern = new RegExp('^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$', 'i');

    if (typeof props[propName] !== 'string') {
      return new Error(propName + ': must be a string.');
    }

    if (!pattern.test(props[propName])) {
      return new Error(propName + ': must be a url.');
    }
  }
};

Character.defaultProps = {
  imgUrl: 'https://dummyimage.com/175/eeeeee/cccccc.gif'
};
```

src/components/App.js

```javascript
import React, {Component} from 'react'
import Character from "./Character";
import Characters from "../characters";

export default class App extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'space-around'
    };

    return (
      <div>
        <h1>American Dad!</h1>
        <ul style={containerStyle}>{
          Characters.map((character, i) => {
            const {firstName, lastName, age, imgUrl} = character;

            return (
              <Character
                key={i}
                firstName={firstName}
                lastName={lastName}
                age={age}
                imgUrl={imgUrl}/>
            );
          })
        }</ul>
      </div>
    );
  }
}
```

src/index.js

```javascript
import React from 'react'
import {render} from 'react-dom'
import App from "./components/App";

render(
  <App/>,
  document.getElementById('app')
);
```

[![Component (Prop Types)](/README/images/16-06-component-prop-types.gif)](#16-react-components)

### Component (NPM package solutions)[![gototop](/README/images/gototop.png)](#16-react-components)

Install `sass-google-fonts`, `url-validation`, `vanilla-lazyload` packages to `devDependencies`.

```
npm i sass-google-fonts url-validation vanilla-lazyload 
```

dist/index.html

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
  <div id="app"></div>
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
```

src/places.json

```json
[
  {
    "name": "Taj Mahal",
    "location": "Agra, India",
    "imgUrl": "https://wallpapercave.com/wp/wp2037798.jpg"
  },
  {
    "name": "The Roman Colosseum",
    "location": "Rome",
    "imgUrl": "https://wallpapercave.com/wp/LboHRVL.jpg"
  },
  {
    "name": "Machu Picchu",
    "location": "Peru",
    "imgUrl": "https://wallpapercave.com/wp/wp1844656.jpg"
  },
  {
    "name": "Christ the Redeemer Statue",
    "location": "Rio de Janeiro, Brazil",
    "imgUrl": "https://wallpapercave.com/wp/wp1991596.jpg"
  },
  {
    "name": "Chichen Itza",
    "location": "Yucatan Peninsula, Mexico",
    "imgUrl": "https://wallpapercave.com/wp/wp1885764.jpg"
  },
  {
    "name": "Great Wall of China",
    "location": "Beijing, China",
    "imgUrl": "https://wallpapercave.com/wp/wp4107185.jpg"
  },
  {
    "name": "Petra",
    "location": "Jordan",
    "imgUrl": "https://wallpapercave.com/wp/wp2003603.jpg"
  }
]
```

src/plugins/lazy-image.js

```javascript
import React from 'react';
import LazyLoad from 'vanilla-lazyload';

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy'
  });
}

export default class LazyImage extends React.Component {
  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  render() {
    const {alt, src} = this.props;
    return (
      <img
        alt={alt}
        className="lazy"
        data-src={src}
      />
    );
  }
}
```

src/stylesheets/place.scss

```scss
#place {
  max-width: 1024px;
  margin: auto;
  padding: 2rem 1.5rem;

  h1, h2 {
    font-family: 'DM Serif Text', serif;
  }

  h1 {
    margin: 0 0 2rem;
  }

  h2 {
    margin: 0 0 1rem;
  }

  dl {
    display: flex;
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 1rem;

    dd {
      margin-left: 0.5rem;
    }
  }

  .list {
    list-style: none;
    padding-left: 0;

    li {
      margin-bottom: 4rem;
    }
  }

  .img {
    border-radius: 5px;
    height: 40.35vw;
    overflow: hidden;
    position: relative;

    img {
      font-size: 0;
      object-fit: cover;
      overflow: hidden;
      transition: opacity .3s ease-in-out .6s;
      width: 100%;
      height: 100%;
      opacity: 0;
    }

    .loaded {
      opacity: 1;
    }
  }
}
```

src/components/Place.js

```javascript
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import isUrlValid from 'url-validation'
import LazyImage from '../plugins/lazy-image.js'


import '../stylesheets/place.scss'

export default class Place extends Component {
  render() {
    const {name, location, imgUrl} = this.props;

    return (
      <li>
        <h2>{name}</h2>
        <dl>
          <dt>Location : </dt>
          <dd>{location}</dd>
        </dl>
        <div className="img">
          <LazyImage src={imgUrl} alt={name + '(' + location + ')'}/>
        </div>
      </li>
    );
  }
}

Place.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imgUrl: function (props, propName) {
    if (!isUrlValid(props[propName]))
      return new Error(propName + ': must be a url.');
  }
};

Place.defaultProps = {
  imgUrl: 'https://dummyimage.com/175/eeeeee/cccccc.gif'
};
```

src/components/App.js

```javascript
import React, {Component} from 'react'
import Place from "./Place";
import Places from "../places";

export default class App extends Component {
  render() {
    return (
      <div id="place">
        <h1>Seven Wonders of the World</h1>
        <ul className="list">{
          Places.map((place, i) => {
            const {name, location, imgUrl} = place;

            return (
              <Place
                key={i}
                name={name}
                location={location}
                imgUrl={imgUrl}/>
            );
          })
        }</ul>
      </div>
    );
  }
}
```

src/stylesheets/base/fonts.scss

```scss
@import 'node_modules/sass-google-fonts/src/GoogleFonts.scss';

@include google-font('DM Serif Text');
```

src/index.js

```javascript
import React from 'react'
import {render} from 'react-dom'
import App from "./components/App";

import './stylesheets/base/fonts.scss'

render(
  <App/>,
  document.getElementById('app')
);
```

[![Component (NPM package solutions)](/README/images/16-07-component-npm-package-solutions.gif)](#16-react-components)

## 15 Introduction to React and JSX[![gototop](/README/images/gototop.png)](#complete-developers-guide-redux)

- [Install Babel, Webpack & React](#install-babel-webpack--react)
- [Components](#components)
- [Components (Array)](#components-array)
- [Components (JSON)](#components-json)
- [Components (Text Input)](#components-text-input)

### Install Babel, Webpack & React[![gototop](/README/images/gototop.png)](#15-introduction-to-react-and-jsx)

Create a `package.json` inside the project directory manually.
```json
{
  "name": "complete-developers-guide-redux",
  "private": true,
  "main": "index.js",
  "scripts": {
    "start": "./node_modules/.bin/webpack-dev-server"
  }
}
```

Install `Babel` & `Webpack` packages to `devDependencies`.

```
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
```

```
npm i -D webpack webpack-cli webpack-dev-server
```

Install `React` packages to `dependencies`.

```
npm i react react-dom
```

See the result inside `package.json`

```json
{
  "name": "complete-developers-guide-redux",
  "private": true,
  "main": "index.js",
  "scripts": {
    "start": "./node_modules/.bin/webpack-dev-server"
  },
  "devDependencies": {
    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.6",
    "webpack": "^4.39.2",
    "webpack-cli": "^3.3.6",
    "webpack-dev-server": "^3.8.0"
  },
  "dependencies": {
    "react": "^16.9.0",
    "react-dom": "^16.9.0"
  }
}
```

webpack.config.js

```javascript
var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    port: 3000,
    https: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ]
        }
      }
    }]
  }
};
```

dist/index.html

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
  <div id="app"></div>
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
```

src/index.js

```jsx harmony
import React from 'react';
import {render} from 'react-dom';

render(
  <h1>Hello React!</h1>,
  document.getElementById('app')
);
```

### Components[![gototop](/README/images/gototop.png)](#15-introduction-to-react-and-jsx)

dist/index.html

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
  <div id="app"></div>
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
```

src/index.js

```javascript
import React from 'react';
import {render} from 'react-dom';

const Character = (props) => {
  const {firstName, lastName, imgUrl} = props;

  return (
    <div>
      <h2>{firstName}</h2>
      <h3>{lastName}</h3>
      <img src={imgUrl} alt={firstName + ' ' + lastName}/>
    </div>
  );
};

const AppContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around'
};

const App = () => {
  return (
    <div>
      <h1>American Dad!</h1>
      <div style={AppContainerStyle}>
        <Character
          firstName="Stan"
          lastName="Smith"
          imgUrl="https://vignette.wikia.nocookie.net/americandad/images/0/0d/AmericanDad_09_Stan_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20101130170500"/>
        <Character
          firstName="Francine"
          lastName="Smith"
          imgUrl="https://vignette.wikia.nocookie.net/americandad/images/1/16/AmericanDad_09_Francine_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20101130170555"/>
        <Character
          firstName="Hayley"
          lastName="Smith"
          imgUrl="https://vignette.wikia.nocookie.net/americandad/images/b/b6/Gal_hayley.jpg/revision/latest/scale-to-width-down/175?cb=20121108030428"/>
        <Character
          firstName="Steve"
          lastName="Smith"
          imgUrl="https://vignette.wikia.nocookie.net/americandad/images/1/17/AmericanDad_09_Steve_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20120410225346"/>
      </div>
    </div>
  );
};

render(
  <App/>,
  document.getElementById('app')
);
```

### Components (Array)[![gototop](/README/images/gototop.png)](#15-introduction-to-react-and-jsx)

dist/index.html

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
  <div id="app"></div>
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
```

src/index.js

```javascript
import React from 'react';
import {render} from 'react-dom';

const AppContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around'
};

const Characters = [
 {
   "firstName": "Stan",
   "lastName": "Smith",
   "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/0/0d/AmericanDad_09_Stan_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20101130170500"
 },
 {
   "firstName": "Francine",
   "lastName": "Smith",
   "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/1/16/AmericanDad_09_Francine_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20101130170555"
 },
 {
   "firstName": "Hayley",
   "lastName": "Smith",
   "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/b/b6/Gal_hayley.jpg/revision/latest/scale-to-width-down/175?cb=20121108030428"
 },
 {
   "firstName": "Steve",
   "lastName": "Smith",
   "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/1/17/AmericanDad_09_Steve_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20120410225346"
 }
];

const Character = (props) => {
  const {firstName, lastName, imgUrl} = props;
  return (
    <li>
      <h2>{firstName}</h2>
      <h3>{lastName}</h3>
      <img src={imgUrl} alt={firstName + ' ' + lastName}/>
    </li>
  );
};

const App = () => {
  return (
    <div>
      <h1>American Dad!</h1>
      <ul style={AppContainerStyle}>{
        Characters.map((character, i) =>
          <Character
            key={i}
            firstName={character.firstName}
            lastName={character.lastName}
            imgUrl={character.imgUrl}/>
        )
      }</ul>
    </div>
  );
};

render(
  <App/>,
  document.getElementById('app')
);
```

### Components (JSON)[![gototop](/README/images/gototop.png)](#15-introduction-to-react-and-jsx)

dist/index.html

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
  <div id="app"></div>
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
```

src/characters.json

```json
[
  {
    "firstName": "Stan",
    "lastName": "Smith",
    "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/0/0d/AmericanDad_09_Stan_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20101130170500"
  },
  {
    "firstName": "Francine",
    "lastName": "Smith",
    "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/1/16/AmericanDad_09_Francine_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20101130170555"
  },
  {
    "firstName": "Hayley",
    "lastName": "Smith",
    "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/b/b6/Gal_hayley.jpg/revision/latest/scale-to-width-down/175?cb=20121108030428"
  },
  {
    "firstName": "Steve",
    "lastName": "Smith",
    "imgUrl": "https://vignette.wikia.nocookie.net/americandad/images/1/17/AmericanDad_09_Steve_v1F.jpg/revision/latest/scale-to-width-down/175?cb=20120410225346"
  }
]
```

src/index.js

```javascript
import React from 'react';
import {render} from 'react-dom';
import Characters from './characters.json';

const AppContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around'
};

const Character = (props) => {
  const {firstName, lastName, imgUrl} = props;
  return (
    <li>
      <h2>{firstName}</h2>
      <h3>{lastName}</h3>
      <img src={imgUrl} alt={firstName + ' ' + lastName}/>
    </li>
  );
};

const App = () => {
  return (
    <div>
      <h1>American Dad!</h1>
      <ul style={AppContainerStyle}>{
        Characters.map((character, i) =>
          <Character
            key={i}
            firstName={character.firstName}
            lastName={character.lastName}
            imgUrl={character.imgUrl}/>
        )
      }</ul>
    </div>
  );
};

render(
  <App/>,
  document.getElementById('app')
);
```

### Components (Text Input)[![gototop](/README/images/gototop.png)](#15-introduction-to-react-and-jsx)

dist/index.html

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
  <div id="app"></div>
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
```

src/index.js

```javascript
import React from 'react';
import {render} from 'react-dom';

const changeHandler = (event) => {
  console.log(event.target.value);
};

const App = () => {
  return (
    <div>
      <input onChange={changeHandler} />
    </div>
  );
};

render(
  <App/>,
  document.getElementById('app')
);
```

## 14 Introduction to React and Redux Section[![gototop](/README/images/gototop.png)](#complete-developers-guide-redux)

### React[![gototop](/README/images/gototop.png)](#14-introduction-to-react-and-redux-section)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>Complete Developers Guide (Redux)</title>
</head>
<body>
<div id="root">
</div>
<script type="text/javascript" src="assets/bundle.js"></script>
</body>
</html>
```

Creating components with ES6 class syntax.

```jsx harmony
import React, {Component} from 'react';
import { render } from 'react-dom';

class HelloWorld extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

render(
  <HelloWorld name='David' />,
  document.getElementById('root')
);
```

Creating stateless functional components.

```jsx harmony
import React from 'react';
import { render } from 'react-dom';

const HelloWorld = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

render(
  <HelloWorld name='David' />,
  document.getElementById('root')
);
```

<!--
# Install Python Package Manager.
brew install python

# Setup MarkdownPP on Mac.
sudo pip3 install MarkdownPP

# Generate README.
markdown-pp README/index.mdpp -o README.md

# Markdown Preprocessor (MarkdownPP)
https://github.com/jreese/markdown-pp
-->
