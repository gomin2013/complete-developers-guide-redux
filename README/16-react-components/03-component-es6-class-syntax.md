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
