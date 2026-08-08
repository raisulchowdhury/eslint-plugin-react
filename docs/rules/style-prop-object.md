# react/style-prop-object

📝 Enforce style prop value is an object.

<!-- end auto-generated rule header -->

Require that the value of the prop `style` be an object or a variable that is
an object.

When a style object is created inline during render, it is a new object on every render. Components that rely on referential equality (for example, memoized children) may therefore re-render unnecessarily. If the style value is static or reusable, prefer reusing an object declared outside the render path or memoizing it when appropriate.

## Rule Details

Examples of **incorrect** code for this rule:

```jsx
<div style="color: 'red'" />

<div style={true} />

<Hello style={true} />

const styles = true;
<div style={styles} />
```

```js
React.createElement("div", { style: "color: 'red'" });

React.createElement("div", { style: true });

React.createElement("Hello", { style: true });

const styles = true;
React.createElement("div", { style: styles });
```

Examples of **correct** code for this rule:

```jsx
<div style={{ color: "red" }} />

<Hello style={{ color: "red" }} />

const styles = { color: "red" };
<div style={styles} />
```

```js
React.createElement("div", { style: { color: 'red' }});

React.createElement("Hello", { style: { color: 'red' }});

const styles = { height: '100px' };
React.createElement("div", { style: styles });
```

## Rule Options

```js
...
"react/style-prop-object": [<enabled>, {
  "allow": [<string>]
}]
...
```

### `allow`

A list of elements that are allowed to have a non-object value in their style attribute. The default value is `[]`.

#### Example

```js
{
  "allow": ["MyComponent"]
}
```

Examples of **incorrect** code for this rule:

```js
<Hello style="a string">
React.createElement(Hello, { style: "some styling" });
```

Examples of **correct** code for this rule:

```js
<MyComponent style="a string">
React.createElement(MyComponent, { style: "some styling" });
```
