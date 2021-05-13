import { jsxElementsParser } from './jsxElementsParser';
import { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils';
import { collectStyledComponentData } from './collectStyledComponentData';
import type { CollectedStyledComponents } from './types';

export const makeRule = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rule: TSESLint.RuleModule<any, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): TSESLint.RuleModule<any, any> => {
  return {
    meta: rule.meta,
    create(context) {
      const collectedStyledComponents: CollectedStyledComponents = {};
      const jsxElements: TSESTree.JSXElement[] = [];
      return {
        ...collectStyledComponentData(collectedStyledComponents),
        JSXElement: (node) => jsxElements.push(node),
        'Program:exit': () => {
          const parser = jsxElementsParser(
            context,
            rule,
            collectedStyledComponents
          );
          jsxElements.forEach((jsxElement) => parser(jsxElement));
        },
      };
    },
  };
};
