import { JSXElement } from '@typescript-eslint/types/dist/ts-estree';
import { getTagName } from '.';

export const isFormFieldTag = (node: JSXElement): boolean => {
  const tagName = getTagName(node);
  return ['input', 'textarea', 'select'].includes(tagName);
};
