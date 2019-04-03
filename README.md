# use-typed
[![Build Status](https://travis-ci.org/realdennis/use-typed.svg?branch=master)](https://travis-ci.org/realdennis/use-typed)
[![Coverage Status](https://coveralls.io/repos/github/realdennis/use-typed/badge.svg?branch=master)](https://coveralls.io/github/realdennis/use-typed?branch=master)

![Demo](https://media.giphy.com/media/jt9KXTqhairEudjIeR/giphy.gif)

A React custom hook for an awesome library [Typed.js](https://github.com/mattboldt/typed.js), you can use it to make some fancy typed effect!

[Demo](https://codesandbox.io/s/r0o29ry2rm)

## Installation

```bash
$ yarn add use-typed
```

## Usage

```jsx
const Demo = () => {
  const demoRef = React.useRef(null);
  useTyped(demoRef, {
    strings: [
      '<strong>Typed.js</strong> is awesome!',
      'Here is a custom hook for <strong>Typed.js</strong>!'
    ],
    typeSpeed: 30,
    backSpeed: 30
  });
  return (
    <div className="demo-typed">
      <span ref={demoRef} />
    </div>
  );
};
```

## More

Toggle / State / Stop / ... etc

```jsx
const Demo = () => {
  const demoTyped = useTyped(demoRef, options);
  // same as the prev example
  return (
    <div className="demo">
       <span ref={demoRef} />
       <button onClick={() => demoTyped.toggle()}>Toggle</button>
       <button onClick={() => demoTyped.start()}>Start</button>
       <button onClick={() => demoTyped.stop()}>Stop</button>
       <button onClick={() => demoTyped.destroy()}>Destroy</button>
       <button onClick={() => demoTyped.reset()}>Reset</button>
    </div>
  );
};
```

---

LICENSE MIT © 2019 realdennis
