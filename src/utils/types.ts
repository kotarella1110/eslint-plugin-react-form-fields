import { TSESTree } from '@typescript-eslint/experimental-utils';

export type StyledComponents = {
  [key: string]: {
    name: string;
    tag: string;
    attrs: TSESTree.Property[];
  };
};
