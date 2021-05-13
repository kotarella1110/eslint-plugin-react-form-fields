# react-form-fields/styled-no-only-value-prop

> Forbid to specify only value/checked without onChange and readOnly props to form fields

Support styled-components in the no-only-value-prop rule

## Rule Details

Examples of **incorrect** code:

```js
let StyledInput = styled.input``;
let Hello = <StyledInput value="test" />;

let StyledInput = styled.input.attrs({
  value: 'test',
})``;
let Hello = <StyledInput />;

let StyledInput = styled.input``;
let ExtendedInput = styled(StyledInput).attrs({
  value: 'test',
})``;
let Hello = <ExtendedInput />;

let StyledDiv = styled.div``;
let Hello = <StyledDiv as="input" value="test" />;
```

Examples of **correct** code:

```js
let StyledInput = styled.input``;
let Hello = <StyledInput readOnly value="test" />;

let StyledInput = styled.input.attrs({
  onChange: () => {},
})``;
let Hello = <StyledInput value="test" />;

let StyledInput = styled.input.attrs({
  onChange: () => {},
})``;
let ExtendedInput = styled(StyledInput).attrs({
  value: 'test',
})``;
let Hello = <ExtendedInput />;

let StyledDiv = styled.div``;
let Hello = <StyledDiv as="input" value="test" onChange={() => {}} />;
```

## Implementation

- [Rule source](../../src/rules/styled-no-only-value-prop.ts)
- [Test source](../../tests/rules/styled-no-only-value-prop.ts)
