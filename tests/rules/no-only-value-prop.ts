import { TSESLint } from '@typescript-eslint/experimental-utils';
import rule from '../../src/rules/no-only-value-prop';

const ruleName = 'no-only-value-prop';
const testerConfig: TSESLint.RuleTesterConfig = {
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};

new TSESLint.RuleTester(testerConfig).run(ruleName, rule, {
  valid: [
    { code: '<input />' },
    { code: '<input type="text" />' },
    { code: '<input readOnly type="text" value="test" />' },
    { code: '<input onChange={() => {}} type="text" value="test" />' },
    { code: '<input type="checkbox" />' },
    { code: '<input readOnly type="checkbox" />' },
    { code: '<input onChange={() => {}} type="checkbox"  />' },
    { code: '<input type="radio" />' },
    { code: '<input readOnly type="radio" checked={true} />' },
    { code: '<input onChange={() => {}} type="radio" checked={true} />' },
    { code: '<textarea />' },
    { code: '<textarea readOnly value="test" />' },
    { code: '<textarea onChange={() => {}} value="test" />' },
    { code: '<select />' },
    { code: '<select readOnly value="test" />' },
    { code: '<select onChange={() => {}} value="test" />' },
  ],
  invalid: [
    {
      code: '<input value="test" />',
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: '<input type="text" value="test" />',
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: '<input type="checkbox" checked={true} />',
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: '<input type="radio" checked={true} />',
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: '<textarea value="test" />',
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: '<select value="test" />',
      errors: [{ messageId: 'no-only-value-prop' }],
    },
  ],
});
