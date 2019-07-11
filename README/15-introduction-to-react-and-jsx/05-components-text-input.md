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
