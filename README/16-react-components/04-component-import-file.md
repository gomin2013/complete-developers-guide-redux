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
