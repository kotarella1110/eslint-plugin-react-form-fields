import { TSESLint } from '@typescript-eslint/experimental-utils';
import { makeRule } from '../utils/makeRule';
import { docsUrl } from '../utils/docsUrl';
import rule from './no-only-value-prop';

const styledRule: TSESLint.RuleModule<'no-only-value-prop', []> = {
  ...rule,
  meta: {
    ...rule.meta,
    docs: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ...rule.meta.docs!,
      recommended: false,
      url: docsUrl('styled-no-only-value-prop'),
    },
  },
};

export default makeRule(styledRule);
