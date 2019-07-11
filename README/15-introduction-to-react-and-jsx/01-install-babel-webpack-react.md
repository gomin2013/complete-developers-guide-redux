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
