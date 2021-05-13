import { TSESTree } from '@typescript-eslint/experimental-utils';
import { getProp, getLiteralPropValue } from 'jsx-ast-utils';
import { getTagName } from './getTagName';

export const isCheckboxOrRadioInput = (node: TSESTree.JSXElement): boolean => {
  const tagName = getTagName(node);
  const typeProp = getProp(node.openingElement.attributes, 'type');
  const typePropValue = getLiteralPropValue(typeProp);
  return 'input' === tagName && ['checkbox', 'radio'].includes(typePropValue);
};
