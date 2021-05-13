import { TSESLint } from '@typescript-eslint/experimental-utils';
import rule from '../../src/rules/styled-no-only-value-prop';
import { basic, extend } from '../utils/generateCode';

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
    // input type="text"
    {
      code: basic({
        tag: 'input',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ value: "test" }',
        props: 'readOnly',
      }),
    },
    {
      code: basic({
        tag: 'input',
        props: 'readOnly value="test"',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ value: "test" }',
        props: 'onChange={() => {}}',
      }),
    },
    {
      code: basic({
        tag: 'input',
        props: 'onChange={() => {}} value="test"',
      }),
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ readOnly: true, value: "test" }',
      }),
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ onChange: () => {}, value: "test" }',
      }),
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ readOnly: true }',
        props: 'value="test"',
      }),
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ onChange: () => {} }',
        props: 'value="test"',
      }),
    },
    {
      code: extend({
        tag: 'input',
        props: 'onChange={() => {}} value="test"',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "text" }',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "text", value: "test" }',
        props: 'readOnly',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "text" }',
        props: 'readOnly value="test"',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "text", value: "test" }',
        props: 'onChange={() => {}}',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "text" }',
        props: 'onChange={() => {}} value="test"',
      }),
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "text", readOnly: true, value: "test" }',
      }),
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ type: "text", onChange: () => {}, value: "test" }',
      }),
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "text", readOnly: true }',
        props: 'value="test"',
      }),
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ type: "text", onChange: () => {} }',
        props: 'value="test"',
      }),
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "text" }',
        props: 'onChange={() => {}} value="test"',
      }),
    },
    // input type="checkbox"
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "checkbox" }',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "checkbox", checked: true }',
        props: 'readOnly',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "checkbox" }',
        props: 'readOnly checked={true}',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "checkbox", checked: true }',
        props: 'onChange={() => {}}',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "checkbox" }',
        props: 'onChange={() => {}} checked={true}',
      }),
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "checkbox", readOnly: true, checked: true }',
      }),
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs:
          '{ type: "checkbox", onChange: () => {}, checked: true }',
      }),
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "checkbox", readOnly: true }',
        props: 'checked={true}',
      }),
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ type: "checkbox", onChange: () => {} }',
        props: 'checked={true}',
      }),
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "checkbox" }',
        props: 'onChange={() => {}} checked={true}',
      }),
    },
    // input type="radio"
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "radio" }',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "radio", checked: true }',
        props: 'readOnly',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "radio" }',
        props: 'readOnly checked={true}',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "radio", checked: true }',
        props: 'onChange={() => {}}',
      }),
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "radio" }',
        props: 'onChange={() => {}} checked={true}',
      }),
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "radio", readOnly: true, checked: true }',
      }),
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ type: "radio", onChange: () => {}, checked: true }',
      }),
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "radio", readOnly: true }',
        props: 'checked={true}',
      }),
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ type: "radio", onChange: () => {} }',
        props: 'checked={true}',
      }),
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "radio" }',
        props: 'onChange={() => {}} checked={true}',
      }),
    },
    // textarea
    {
      code: basic({
        tag: 'textarea',
      }),
    },
    {
      code: basic({
        tag: 'textarea',
        attrs: '{ value: "test" }',
        props: 'readOnly',
      }),
    },
    {
      code: basic({
        tag: 'textarea',
        props: 'readOnly value="test"',
      }),
    },
    {
      code: basic({
        tag: 'textarea',
        attrs: '{ value: "test" }',
        props: 'onChange={() => {}}',
      }),
    },
    {
      code: basic({
        tag: 'textarea',
        props: 'onChange={() => {}} value="test"',
      }),
    },
    {
      code: extend({
        tag: 'textarea',
        attrs: '{ readOnly: true, value: "test" }',
      }),
    },
    {
      code: extend({
        tag: 'textarea',
        extendedAttrs: '{ onChange: () => {}, value: "test" }',
      }),
    },
    {
      code: extend({
        tag: 'textarea',
        attrs: '{ readOnly: true }',
        props: 'value="test"',
      }),
    },
    {
      code: extend({
        tag: 'textarea',
        extendedAttrs: '{ onChange: () => {} }',
        props: 'value="test"',
      }),
    },
    {
      code: extend({
        tag: 'textarea',
        props: 'onChange={() => {}} value="test"',
      }),
    },
    // select
    {
      code: basic({
        tag: 'select',
      }),
    },
    {
      code: basic({
        tag: 'select',
        attrs: '{ value: "test" }',
        props: 'readOnly',
      }),
    },
    {
      code: basic({
        tag: 'select',
        props: 'readOnly value="test"',
      }),
    },
    {
      code: basic({
        tag: 'select',
        attrs: '{ value: "test" }',
        props: 'onChange={() => {}}',
      }),
    },
    {
      code: basic({
        tag: 'select',
        props: 'onChange={() => {}} value="test"',
      }),
    },
    {
      code: extend({
        tag: 'select',
        attrs: '{ readOnly: true, value: "test" }',
      }),
    },
    {
      code: extend({
        tag: 'select',
        extendedAttrs: '{ onChange: () => {}, value: "test" }',
      }),
    },
    {
      code: extend({
        tag: 'select',
        attrs: '{ readOnly: true }',
        props: 'value="test"',
      }),
    },
    {
      code: extend({
        tag: 'select',
        extendedAttrs: '{ onChange: () => {} }',
        props: 'value="test"',
      }),
    },
    {
      code: extend({
        tag: 'select',
        props: 'onChange={() => {}} value="test"',
      }),
    },
  ],
  invalid: [
    // input type="text"
    {
      code: basic({
        tag: 'input',
        attrs: '{ value: "test" }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: basic({
        tag: 'input',
        props: 'value="test"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ value: "test" }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ value: "test" }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        props: 'value="test"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "text", value: "test" }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "text" }',
        props: 'value="test"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: basic({
        tag: 'input',
        props: 'type="text" value="test"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "text", value: "test" }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ type: "text", value: "test" }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "text" }',
        extendedAttrs: '{ value: "test" }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "text" }',
        props: 'value="test"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ type: "text" }',
        props: 'value="test"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        attrs: '{ value: "test" }',
        props: 'as="input" type="text"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        extendedAttrs: '{ value: "test" }',
        props: 'as="input" type="text"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        props: 'as="input" type="text" value="test"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    // input type="checkbox"
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "checkbox", checked: true }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "checkbox" }',
        props: 'checked={true}',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: basic({
        tag: 'input',
        props: 'type="checkbox" checked={true}',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "checkbox", checked: true }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ type: "checkbox", checked: true }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "checkbox" }',
        extendedAttrs: '{ checked: true }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "checkbox" }',
        props: 'checked={true}',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ type: "checkbox" }',
        props: 'checked={true}',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        attrs: '{ checked: true }',
        props: 'as="input" type="checkbox"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        extendedAttrs: '{ checked: true }',
        props: 'as="input" type="checkbox"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        props: 'as="input" type="checkbox" checked={true}',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    // input type="radio"
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "radio", checked: true }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: basic({
        tag: 'input',
        attrs: '{ type: "radio" }',
        props: 'checked={true}',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: basic({
        tag: 'input',
        props: 'type="radio" checked={true}',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "radio", checked: true }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ type: "radio", checked: true }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "radio" }',
        extendedAttrs: '{ checked: true }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        attrs: '{ type: "radio" }',
        props: 'checked={true}',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'input',
        extendedAttrs: '{ type: "radio" }',
        props: 'checked={true}',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        attrs: '{ checked: true }',
        props: 'as="input" type="radio"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        extendedAttrs: '{ checked: true }',
        props: 'as="input" type="radio"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        props: 'as="input" type="radio" checked={true}',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    // textarea
    {
      code: basic({
        tag: 'textarea',
        attrs: '{ value: "test" }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: basic({
        tag: 'textarea',
        props: 'value="test"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'textarea',
        attrs: '{ value: "test" }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'textarea',
        extendedAttrs: '{ value: "test" }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'textarea',
        props: 'value="test"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        attrs: '{ value: "test" }',
        props: 'as="textarea"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        extendedAttrs: '{ value: "test" }',
        props: 'as="textarea"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        props: 'as="textarea" value="test"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    // select
    {
      code: basic({
        tag: 'select',
        attrs: '{ value: "test" }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: basic({
        tag: 'select',
        props: 'value="test"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'select',
        attrs: '{ value: "test" }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'select',
        extendedAttrs: '{ value: "test" }',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        tag: 'select',
        props: 'value="test"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        attrs: '{ value: "test" }',
        props: 'as="select"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        extendedAttrs: '{ value: "test" }',
        props: 'as="select"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
    {
      code: extend({
        props: 'as="select" value="test"',
      }),
      errors: [{ messageId: 'no-only-value-prop' }],
    },
  ],
});
