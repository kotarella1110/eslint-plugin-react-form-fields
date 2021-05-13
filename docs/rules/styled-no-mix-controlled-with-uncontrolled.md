# react-form-fields/styled-no-mix-controlled-with-uncontrolled

> Forbid to specify both value/checked and defaultValue/defaultChecked props to form fields

Support styled-components in the no-mix-controlled-with-uncontrolled rule.

## Rule Details

Examples of **incorrect** code:

```js
let StyledInput = styled.input``;
let Hello = <StyledInput value="test" defaultValue="test" />;

let StyledInput = styled.input.attrs({
  value: 'test',
})``;
let Hello = <StyledInput defaultValue="test" />;

let StyledInput = styled.input.attrs({
  value: 'test',
})``;
let ExtendedInput = styled(StyledInput).attrs({
  defaultValue: 'test',
})``;
let Hello = <ExtendedInput />;

let StyledDiv = styled.div``;
let Hello = <StyledDiv as="input" value="test" defaultValue="test" />;
```

Examples of **correct** code:

```js
let StyledInput = styled.input``;
let Hello = <StyledInput value="test" />;

let StyledInput = styled.input.attrs({
  value: 'test',
})``;
let Hello = <StyledInput />;

let StyledInput = styled.input``;
let ExtendedInput = styled(StyledInput).attrs({
  defaultValue: 'test',
})``;
let Hello = <ExtendedInput />;

let StyledDiv = styled.div``;
let Hello = <StyledDiv as="input" value="test" />;
```

## Implementation

- [Rule source](../../src/rules/styled-no-mix-controlled-with-uncontrolled.ts)
- [Test source](../../tests/rules/styled-no-mix-controlled-with-uncontrolled.ts)
