import {
  TSESTree,
  AST_NODE_TYPES,
} from '@typescript-eslint/experimental-utils';

export const getTagName = (node: TSESTree.JSXElement): string =>
  node.openingElement.name.type === AST_NODE_TYPES.JSXIdentifier
    ? node.openingElement.name.name
    : '';
