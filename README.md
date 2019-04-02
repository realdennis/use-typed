# use-odometer

A React custom hook for an awesome library Typed.js, you can use it to make some fancy typed effect!

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
    <>
      <button onClick={() => demoTyped.toggle()}>Toggle</button>
      <button onClick={() => demoTyped.start()}>Start</button>
      <button onClick={() => demoTyped.stop()}>Stop</button>
      <button onClick={() => demoTyped.destroy()}>Destroy</button>
      <button onClick={() => demoTyped.reset()}>Reset</button>
    </>
  );
};
```

---

LICENSE MIT © 2019 realdennis
