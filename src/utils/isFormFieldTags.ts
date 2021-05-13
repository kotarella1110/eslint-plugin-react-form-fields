import { TSESTree } from '@typescript-eslint/experimental-utils';
import { getTagName } from './getTagName';

export const isFormFieldTags = (node: TSESTree.JSXElement): boolean => {
  const tagName = getTagName(node);
  return ['input', 'textarea', 'select'].includes(tagName);
};
