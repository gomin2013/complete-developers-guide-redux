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
