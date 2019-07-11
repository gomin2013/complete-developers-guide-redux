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
