import { TSESLint } from '@typescript-eslint/experimental-utils';
import rule from '../../src/rules/styled-no-mix-controlled-with-uncontrolled';
import { basic, extend } from '../utils/generateCode';

const testerConfig: TSESLint.RuleTesterConfig = {
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};

new TSESLint.RuleTester(testerConfig).run(
  'styled-no-mix-controlled-with-uncontrolled',
  rule,
  {
    valid: [
      // input type="text"
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
        }),
      },
      {
        code: basic({
          tag: 'input',
          attrs: '{ type: "text" }',
          props: 'defaultValue="test"',
        }),
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "text", value: "test" }',
        }),
      },
      {
        code: extend({
          tag: 'input',
          extendedAttrs: '{ type: "text", defaultValue: "test" }',
        }),
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "text" }',
          extendedAttrs: '{ value: "test" }',
        }),
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "text" }',
          props: 'defaultValue="test"',
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
        }),
      },
      {
        code: basic({
          tag: 'input',
          attrs: '{ type: "checkbox" }',
          props: 'defaultChecked={true}',
        }),
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "checkbox", checked: true }',
        }),
      },
      {
        code: extend({
          tag: 'input',
          extendedAttrs: '{ type: "checkbox", defaultChecked: true }',
        }),
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "checkbox" }',
          extendedAttrs: '{ checked: true }',
        }),
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "checkbox" }',
          props: 'defaultChecked={true}',
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
        }),
      },
      {
        code: basic({
          tag: 'input',
          attrs: '{ type: "radio" }',
          props: 'defaultChecked={true}',
        }),
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "radio", checked: true }',
        }),
      },
      {
        code: extend({
          tag: 'input',
          extendedAttrs: '{ type: "radio", defaultChecked: true }',
        }),
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "radio" }',
          extendedAttrs: '{ checked: true }',
        }),
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "radio" }',
          props: 'defaultChecked={true}',
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
        }),
      },
      {
        code: basic({
          tag: 'textarea',
          props: 'defaultValue="test"',
        }),
      },
      {
        code: extend({
          tag: 'textarea',
          attrs: '{ value: "test" }',
        }),
      },
      {
        code: extend({
          tag: 'textarea',
          extendedAttrs: '{ defaultValue: "test" }',
        }),
      },
      {
        code: extend({
          tag: 'textarea',
          props: 'defaultValue="test"',
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
        }),
      },
      {
        code: basic({
          tag: 'select',
          props: 'defaultValue="test"',
        }),
      },
      {
        code: extend({
          tag: 'select',
          attrs: '{ value: "test" }',
        }),
      },
      {
        code: extend({
          tag: 'select',
          extendedAttrs: '{ defaultValue: "test" }',
        }),
      },
      {
        code: extend({
          tag: 'select',
          props: 'defaultValue="test"',
        }),
      },
    ],
    invalid: [
      // input type="text"
      {
        code: basic({
          tag: 'input',
          attrs: '{ value: "test", defaultValue: "test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: basic({
          tag: 'input',
          attrs: '{ value: "test" }',
          props: 'defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ defaultValue: "test", value: "test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          extendedAttrs: '{ defaultValue: "test", value: "test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ value: "test" }',
          extendedAttrs: '{ defaultValue: "test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ value: "test" }',
          props: 'defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          extendedAttrs: '{ value: "test" }',
          props: 'defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: basic({
          tag: 'input',
          attrs: '{ type: "text", value: "test", defaultValue: "test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: basic({
          tag: 'input',
          attrs: '{ type: "text", value: "test" }',
          props: 'defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "text", defaultValue: "test", value: "test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          extendedAttrs:
            '{ type: "text", defaultValue: "test", value: "test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "text", value: "test" }',
          extendedAttrs: '{ defaultValue: "test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "text", value: "test" }',
          props: 'defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          extendedAttrs: '{ type: "text", value: "test" }',
          props: 'defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          attrs: '{ value: "test" }',
          props: 'as="input" type="text" defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          extendedAttrs: '{ value: "test" }',
          props: 'as="input" type="text" defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      // input type="checkbox"
      {
        code: basic({
          tag: 'input',
          attrs: '{ type: "checkbox", checked: true, defaultChecked: true }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: basic({
          tag: 'input',
          attrs: '{ type: "checkbox", checked: true }',
          props: 'defaultChecked={true}',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "checkbox", checked: true, defaultChecked: true }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          extendedAttrs:
            '{ type: "checkbox", checked: true, defaultChecked: true }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "checkbox", checked: true }',
          extendedAttrs: '{ defaultChecked: true }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "checkbox", checked: true }',
          props: 'defaultChecked={true}',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          extendedAttrs: '{ type: "checkbox", checked: true }',
          props: 'defaultChecked={true}',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          attrs: '{ checked: true }',
          props: 'as="input" type="checkbox" defaultChecked={true}',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          extendedAttrs: '{ checked: true }',
          props: 'as="input" type="checkbox" defaultChecked={true}',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      // input type="radio"
      {
        code: basic({
          tag: 'input',
          attrs: '{ type: "radio", checked: true, defaultChecked: true }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: basic({
          tag: 'input',
          attrs: '{ type: "radio", checked: true }',
          props: 'defaultChecked={true}',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "radio", checked: true, defaultChecked: true }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          extendedAttrs:
            '{ type: "radio", checked: true, defaultChecked: true }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "radio", checked: true }',
          extendedAttrs: '{ defaultChecked: true }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          attrs: '{ type: "radio", checked: true }',
          props: 'defaultChecked={true}',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'input',
          extendedAttrs: '{ type: "radio", checked: true }',
          props: 'defaultChecked={true}',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          attrs: '{ checked: true }',
          props: 'as="input" type="radio" defaultChecked={true}',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          extendedAttrs: '{ checked: true }',
          props: 'as="input" type="radio" defaultChecked={true}',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      // textarea
      {
        code: basic({
          tag: 'textarea',
          attrs: '{ value: "test", defaultValue ="test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: basic({
          tag: 'textarea',
          attrs: '{ value: "test" }',
          props: 'defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'textarea',
          attrs: '{ value: "test", defaultValue ="test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'textarea',
          extendedAttrs: '{ value: "test", defaultValue ="test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'textarea',
          attrs: '{ value: "test" }',
          extendedAttrs: '{ defaultValue: "test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'textarea',
          attrs: '{ value: "test" }',
          props: 'defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'textarea',
          extendedAttrs: '{ value: "test" }',
          props: 'defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          attrs: '{ value: "test" }',
          props: 'as="textarea" defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          extendedAttrs: '{ value: "test" }',
          props: 'as="textarea" defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      // select
      {
        code: basic({
          tag: 'select',
          attrs: '{ value: "test", defaultValue ="test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: basic({
          tag: 'select',
          attrs: '{ value: "test" }',
          props: 'defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'select',
          attrs: '{ value: "test", defaultValue ="test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'select',
          extendedAttrs: '{ value: "test", defaultValue ="test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'select',
          attrs: '{ value: "test" }',
          extendedAttrs: '{ defaultValue: "test" }',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'select',
          attrs: '{ value: "test" }',
          props: 'defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          tag: 'select',
          extendedAttrs: '{ value: "test" }',
          props: 'defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          attrs: '{ value: "test" }',
          props: 'as="select" defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
      {
        code: extend({
          extendedAttrs: '{ value: "test" }',
          props: 'as="select" defaultValue="test"',
        }),
        errors: [{ messageId: 'no-mix-controlled-with-uncontrolled' }],
      },
    ],
  }
);
