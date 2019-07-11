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
