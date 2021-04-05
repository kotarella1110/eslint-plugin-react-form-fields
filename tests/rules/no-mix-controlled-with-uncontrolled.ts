import { TSESLint } from '@typescript-eslint/experimental-utils';
import rule from '../../src/rules/no-mix-controlled-with-uncontrolled';

const testerConfig: TSESLint.RuleTesterConfig = {
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};

new TSESLint.RuleTester(testerConfig).run(
  'no-mix-controlled-with-uncontrolled',
  rule,
  {
    valid: [
      { code: '<input />' },
      { code: '<input type="text" value="test" />' },
      { code: '<input type="text" defaultValue="test" />' },
      { code: '<input type="checkbox" checked={true} />' },
      { code: '<input type="checkbox" defaultChecked={true} />' },
      { code: '<input type="radio" checked={true} />' },
      { code: '<input type="radio" defaultChecked={true} />' },
      { code: '<textarea />' },
      { code: '<textarea value="test" />' },
      { code: '<textarea defaultValue="test" />' },
      { code: '<select />' },
      { code: '<select value="test" />' },
      { code: '<select defaultValue="test" />' },
    ],
    invalid: [
      {
        code: '<input type="text" value="test" defaultValue="test" />',
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: '<input type="checkbox" checked={true} defaultChecked={true} />',
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: '<input type="radio" checked={true} defaultChecked={true} />',
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: '<textarea value="test" defaultValue="test" />',
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: '<select type="text" value="test" defaultValue="test" />',
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
    ],
  }
);
