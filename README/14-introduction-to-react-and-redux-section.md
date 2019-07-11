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
