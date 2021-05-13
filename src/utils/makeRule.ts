import { jsxElementsParser } from './jsxElementsParser';
import { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils';
import { collectStyledComponentData } from './collectStyledComponentData';
import type { StyledComponents } from './types';

export const makeRule = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rule: TSESLint.RuleModule<any, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): TSESLint.RuleModule<any, any> => {
  return {
    meta: rule.meta,
    create(context) {
      const styledComponents: StyledComponents = {};
      const jsxElements: TSESTree.JSXElement[] = [];
      return {
        ...collectStyledComponentData(styledComponents),
        JSXElement: (node) => jsxElements.push(node),
        'Program:exit': () => {
          const parser = jsxElementsParser(context, rule, styledComponents);
          jsxElements.forEach((jsxElement) => parser(jsxElement));
        },
      };
    },
  };
};
