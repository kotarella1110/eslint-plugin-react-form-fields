import {
  TSESLint,
  TSESTree,
  AST_NODE_TYPES,
} from '@typescript-eslint/experimental-utils';
import { getAsPropValue } from './getAsPropValue';
import { propertyToJSXAttribute } from './propertyToJSXAttribute';
import type { CollectedStyledComponents } from './types';

export const jsxElementsParser =
  (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context: Readonly<TSESLint.RuleContext<any, any>>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rule: TSESLint.RuleModule<any, any>,
    collectedStyledComponents: CollectedStyledComponents
  ) =>
  (node: TSESTree.JSXElement): void => {
    if (node.openingElement.name.type !== AST_NODE_TYPES.JSXIdentifier) {
      return;
    }
    const originalName = node.openingElement.name.name;
    const styledComponent = collectedStyledComponents[originalName];
    if (styledComponent) {
      const { tag, attrs } = styledComponent;
      const originalNodeAttr = node.openingElement.attributes;
      try {
        const allAttrs = originalNodeAttr.concat(
          attrs.map(propertyToJSXAttribute)
        );
        const asPropValue = getAsPropValue(allAttrs);
        node.openingElement.attributes = allAttrs;
        node.openingElement.name.name = asPropValue || tag;
        rule.create(context).JSXElement?.(node);
      } finally {
        node.openingElement.name.name = originalName;
        node.openingElement.attributes = originalNodeAttr;
      }
    }
  };
