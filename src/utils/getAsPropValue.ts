import { TSESTree } from '@typescript-eslint/experimental-utils';
import { getProp, getLiteralPropValue } from 'jsx-ast-utils';

export const getAsPropValue = (
  attributes: (TSESTree.JSXAttribute | TSESTree.JSXSpreadAttribute)[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  const asProp = getProp(attributes, 'as');
  const asPropValue = getLiteralPropValue(asProp);
  return asPropValue;
};
