import { TSESLint } from '@typescript-eslint/experimental-utils';
import { makeRule } from '../utils/makeRule';
import { docsUrl } from '../utils/docsUrl';
import rule from './no-mix-controlled-with-uncontrolled';

const styledRule: TSESLint.RuleModule<
  'no-mix-controlled-with-uncontrolled',
  []
> = {
  ...rule,
  meta: {
    ...rule.meta,
    docs: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ...rule.meta.docs!,
      recommended: false,
      url: docsUrl('styled-no-mix-controlled-with-uncontrolled'),
    },
  },
};

export default makeRule(styledRule);
