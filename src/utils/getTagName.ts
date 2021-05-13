import { TSESTree } from '@typescript-eslint/experimental-utils';

export const getTagName = (node: TSESTree.JSXElement): string =>
  node.openingElement.name.type === 'JSXIdentifier'
    ? node.openingElement.name.name
    : '';
