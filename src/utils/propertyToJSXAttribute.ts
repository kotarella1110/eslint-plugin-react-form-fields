import {
  TSESTree,
  AST_NODE_TYPES,
} from '@typescript-eslint/experimental-utils';

const getBaseNode = ({
  type,
  loc,
  range,
}: TSESTree.Node): TSESTree.BaseNode => {
  return {
    type,
    loc,
    range,
  };
};

export const propertyToJSXAttribute = (
  node: TSESTree.Property
): TSESTree.JSXAttribute => {
  const { key, value } = node;
  return {
    ...getBaseNode(node),
    type: AST_NODE_TYPES.JSXAttribute,
    name: {
      ...getBaseNode(key),
      type: AST_NODE_TYPES.JSXIdentifier,
      name:
        key.type === AST_NODE_TYPES.Identifier
          ? key.name
          : key.type === AST_NODE_TYPES.Literal
          ? typeof key.value === 'string'
            ? key.value
            : ''
          : '',
    },
    value:
      value.type === AST_NODE_TYPES.AssignmentPattern ||
      value.type === AST_NODE_TYPES.ArrayPattern ||
      value.type === AST_NODE_TYPES.ObjectPattern ||
      value.type === AST_NODE_TYPES.Identifier ||
      value.type === AST_NODE_TYPES.TSEmptyBodyFunctionExpression
        ? null
        : value.type === AST_NODE_TYPES.Literal
        ? value
        : {
            ...getBaseNode(value),
            type: AST_NODE_TYPES.JSXExpressionContainer,
            expression: value,
          },
  };
};
