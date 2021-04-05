import { TSESLint } from '@typescript-eslint/experimental-utils';
import rule from '../../src/rules/example-rule';

new TSESLint.RuleTester().run('example-rule', rule, {
  valid: ['var foo = 1;'],
  invalid: [
    {
      code: 'var example = 1;',
      errors: [{ messageId: 'disallowExample' }],
    },
  ],
});
