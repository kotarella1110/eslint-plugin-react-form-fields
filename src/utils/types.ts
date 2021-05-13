import { TSESTree } from '@typescript-eslint/experimental-utils';

export type CollectedStyledComponents = {
  [key: string]: {
    name: string;
    tag: string;
    attrs: TSESTree.Property[];
  };
};
