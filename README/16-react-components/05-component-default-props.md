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
