# react-form-fields/no-mix-controlled-with-uncontrolled

> - ⭐️ This rule is included in `plugin:react-form-fields/recommended` preset.

Form elements must be either controlled or uncontrolled (specify either the `value`/`checked` prop, or the `defaultValue`/`defaultChecked` prop, but not both). Decide between using a controlled or uncontrolled form element and remove one of these props.

## Rule Details

Examples of **incorrect** code:

```js
let Hello = <input />;
let Hello = <input type="text" value="test" />;
let Hello = <input type="text" defaultValue="test" />;
let Hello = <input type="checkbox" checked={true} />;
let Hello = <input type="checkbox" defaultChecked={true} />;
let Hello = <input type="radio" checked={true} />;
let Hello = <input type="radio" defaultChecked={true} />;
let Hello = <textarea />;
let Hello = <textarea value="test" />;
let Hello = <textarea defaultValue="test" />;
let Hello = <select />;
let Hello = <select value="test" />;
let Hello = <select defaultValue="test" />;
```

Examples of **correct** code:

```js
let Hello = <input type="text" value="test" defaultValue="test" />;
let Hello = <input type="checkbox" checked={true} defaultChecked={true} />;
let Hello = <input type="radio" checked={true} defaultChecked={true} />;
let Hello = <textarea value="test" defaultValue="test" />;
let Hello = <select type="text" value="test" defaultValue="test" />;
```

## Implementation

- [Rule source](../../src/rules/no-mix-controlled-with-uncontrolled.ts)
- [Test source](../../tests/rules/no-mix-controlled-with-uncontrolled.ts)
