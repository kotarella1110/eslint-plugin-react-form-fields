import {
  TSESTree,
  AST_NODE_TYPES,
} from '@typescript-eslint/experimental-utils';

export const getStyledComponentName = (
  node: TSESTree.TaggedTemplateExpression
): string | null => {
  if (
    node.parent?.type === AST_NODE_TYPES.VariableDeclarator &&
    node.parent.id.type === AST_NODE_TYPES.Identifier
  ) {
    return node.parent.id.name;
  }
  return null;
};

// css``
export const isStyledCSS = (node: TSESTree.TaggedTemplateExpression): boolean =>
  node.tag.type === AST_NODE_TYPES.Identifier && node.tag.name === 'css';

// styled('div')`` || styled(Component)``
export const isStyledFunc = (
  node: TSESTree.TaggedTemplateExpression
): boolean =>
  node.tag.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.type === AST_NODE_TYPES.Identifier &&
  node.tag.callee.name === 'styled';

// styled('div')``
export const isStyledFuncTag = (
  node: TSESTree.TaggedTemplateExpression
): boolean =>
  node.tag.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.type === AST_NODE_TYPES.Identifier &&
  node.tag.callee.name === 'styled' &&
  node.tag.arguments[0].type === AST_NODE_TYPES.Literal;

// styled(Component)``
export const isStyledFuncComponent = (
  node: TSESTree.TaggedTemplateExpression
): boolean =>
  node.tag.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.type === AST_NODE_TYPES.Identifier &&
  node.tag.callee.name === 'styled' &&
  node.tag.arguments[0].type === AST_NODE_TYPES.Identifier;

// styled('div').attrs(...)`` || styled(Component).attrs(...)``
export const isStyledFuncWithAttrs = (
  node: TSESTree.TaggedTemplateExpression
): boolean =>
  node.tag.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.type === AST_NODE_TYPES.MemberExpression &&
  node.tag.callee.object.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.object.callee.type === AST_NODE_TYPES.Identifier &&
  node.tag.callee.object.callee.name === 'styled';

// styled('div').attrs(...)``
export const isStyledFuncTagWithAttrs = (
  node: TSESTree.TaggedTemplateExpression
): boolean =>
  node.tag.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.type === AST_NODE_TYPES.MemberExpression &&
  node.tag.callee.object.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.object.callee.type === AST_NODE_TYPES.Identifier &&
  node.tag.callee.object.callee.name === 'styled' &&
  node.tag.callee.object.arguments[0].type === AST_NODE_TYPES.Literal;

// styled(Component).attrs(...)``
export const isStyledFuncComponentWithAttrs = (
  node: TSESTree.TaggedTemplateExpression
): boolean =>
  node.tag.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.type === AST_NODE_TYPES.MemberExpression &&
  node.tag.callee.object.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.object.callee.type === AST_NODE_TYPES.Identifier &&
  node.tag.callee.object.callee.name === 'styled' &&
  node.tag.callee.object.arguments[0].type === AST_NODE_TYPES.Identifier;

// styled.div``
export const isStyled = (node: TSESTree.TaggedTemplateExpression): boolean =>
  node.tag.type === AST_NODE_TYPES.MemberExpression &&
  node.tag.object.type === AST_NODE_TYPES.Identifier &&
  node.tag.object.name === 'styled';

// styled.div.attrs(...)``
export const isStyledWithAttrs = (
  node: TSESTree.TaggedTemplateExpression
): boolean =>
  node.tag.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.type === AST_NODE_TYPES.MemberExpression &&
  node.tag.callee.object.type === AST_NODE_TYPES.MemberExpression &&
  node.tag.callee.object.object.type === AST_NODE_TYPES.Identifier &&
  node.tag.callee.object.object.name === 'styled';

const getAttrsNode = (node: TSESTree.TaggedTemplateExpression) => {
  if (
    !isStyledWithAttrs(node) &&
    !isStyledFuncComponentWithAttrs(node) &&
    isStyledFuncTagWithAttrs(node)
  ) {
    return null;
  }
  if (node.tag.type !== AST_NODE_TYPES.CallExpression) {
    return null;
  }
  return node.tag.arguments?.[0] || null;
};

export const getAttrsProperties = (
  node: TSESTree.TaggedTemplateExpression
): TSESTree.Property[] => {
  const attrsNode = getAttrsNode(node);
  let attrsNodeProperties: TSESTree.ObjectLiteralElementLike[] = [];
  // styled.div.attrs(() => ({...}))``
  if (attrsNode?.type === AST_NODE_TYPES.ArrowFunctionExpression) {
    attrsNodeProperties =
      (attrsNode.body.type === AST_NODE_TYPES.ObjectExpression &&
        attrsNode.body.properties) ||
      [];
  }
  // styled.div.attrs(function () { return ({...}) })``
  if (attrsNode?.type === AST_NODE_TYPES.FunctionExpression) {
    const attrsReturnStatement =
      (attrsNode.body.type === AST_NODE_TYPES.BlockStatement &&
        attrsNode.body.body.find(
          (statement): statement is TSESTree.ReturnStatement =>
            statement.type === AST_NODE_TYPES.ReturnStatement
        )) ||
      undefined;
    attrsNodeProperties =
      (attrsReturnStatement?.argument?.type ===
        AST_NODE_TYPES.ObjectExpression &&
        attrsReturnStatement.argument.properties) ||
      [];
  }
  // styled.div.attrs({...})``
  if (attrsNode?.type === AST_NODE_TYPES.ObjectExpression) {
    attrsNodeProperties = attrsNode.properties || [];
  }
  return attrsNodeProperties.filter(
    (property): property is TSESTree.Property =>
      property.type === AST_NODE_TYPES.Property
  );
};
