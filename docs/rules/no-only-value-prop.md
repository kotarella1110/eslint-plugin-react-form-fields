# react-form-fields/no-only-value-prop

> Forbid to specify only value/checked without onChange and readOnly props to form fields
>
> - ⭐️ This rule is included in `plugin:react-form-fields/recommended` preset.

You provided a `value`/`checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`/`defaultChecked`. Otherwise, set either `onChange` or `readOnly`.

## Rule Details

Examples of **incorrect** code:

```js
let Hello = <input />;
let Hello = <input type="text" />;
let Hello = <input readOnly type="text" value="test" />;
let Hello = <input onChange={() => {}} type="text" value="test" />;
let Hello = <input type="checkbox" />;
let Hello = <input readOnly type="checkbox" />;
let Hello = <input onChange={() => {}} type="checkbox" />;
let Hello = <input type="radio" />;
let Hello = <input readOnly type="radio" checked={true} />;
let Hello = <input onChange={() => {}} type="radio" checked={true} />;
let Hello = <textarea />;
let Hello = <textarea readOnly value="test" />;
let Hello = <textarea onChange={() => {}} value="test" />;
let Hello = <select />;
let Hello = <select readOnly value="test" />;
let Hello = <select onChange={() => {}} value="test" />;
```

Examples of **correct** code:

```js
let Hello = <input value="test" />;
let Hello = <input type="text" value="test" />;
let Hello = <input type="checkbox" checked={true} />;
let Hello = <input type="radio" checked={true} />;
let Hello = <textarea value="test" />;
let Hello = <select value="test" />;
```

## Implementation

- [Rule source](../../src/rules/no-only-value-prop.ts)
- [Test source](../../tests/rules/no-only-value-prop.ts)
