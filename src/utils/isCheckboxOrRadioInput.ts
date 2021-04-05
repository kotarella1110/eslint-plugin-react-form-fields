import { JSXElement } from '@typescript-eslint/types/dist/ts-estree';
import { getProp, getLiteralPropValue } from 'jsx-ast-utils';
import { getTagName } from '.';

export const isCheckboxOrRadioInput = (node: JSXElement): boolean => {
  const tagName = getTagName(node);
  const typeProp = getProp(node.openingElement.attributes, 'type');
  const typePropValue = getLiteralPropValue(typeProp);
  return 'input' === tagName && ['checkbox', 'radio'].includes(typePropValue);
};
