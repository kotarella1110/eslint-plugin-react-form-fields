import { JSXElement } from '@typescript-eslint/types/dist/ts-estree';

export const getTagName = (node: JSXElement): string =>
  node.openingElement.name.type === 'JSXIdentifier'
    ? node.openingElement.name.name
    : '';
