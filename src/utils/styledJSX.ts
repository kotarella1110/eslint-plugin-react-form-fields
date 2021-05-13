import {
  TSESTree,
  AST_NODE_TYPES,
} from '@typescript-eslint/experimental-utils';

// css``
export const isStyledCSS = (node: TSESTree.TaggedTemplateExpression): boolean =>
  node.tag.type === AST_NODE_TYPES.Identifier && node.tag.name === 'css';

// styled.tag``
export const isStyledTags = (
  node: TSESTree.TaggedTemplateExpression
): boolean =>
  node.tag.type === AST_NODE_TYPES.MemberExpression &&
  node.tag.object.type === AST_NODE_TYPES.Identifier &&
  node.tag.object.name === 'styled';

// styled('tag')``
export const isCreateStyledTags = (
  node: TSESTree.TaggedTemplateExpression
): boolean =>
  node.tag.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.type === AST_NODE_TYPES.Identifier &&
  node.tag.callee.name === 'styled' &&
  node.tag.arguments[0].type === AST_NODE_TYPES.Literal;

// styled(Component)``
export const isCreateStyledComponent = (
  node: TSESTree.TaggedTemplateExpression
): boolean =>
  node.tag.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.type === AST_NODE_TYPES.Identifier &&
  node.tag.callee.name === 'styled' &&
  node.tag.arguments[0].type === AST_NODE_TYPES.Identifier;

// styled.tag.attrs(...)``
export const isStyledTagsWithAttrs = (
  node: TSESTree.TaggedTemplateExpression
): boolean =>
  node.tag.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.type === AST_NODE_TYPES.MemberExpression &&
  node.tag.callee.object.type === AST_NODE_TYPES.MemberExpression &&
  node.tag.callee.object.object.type === AST_NODE_TYPES.Identifier &&
  node.tag.callee.object.object.name === 'styled';

// styled('tag').attrs(...)``
export const isCreateStyledTagsWithAttrs = (
  node: TSESTree.TaggedTemplateExpression
): boolean =>
  node.tag.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.type === AST_NODE_TYPES.MemberExpression &&
  node.tag.callee.object.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.object.callee.type === AST_NODE_TYPES.Identifier &&
  node.tag.callee.object.callee.name === 'styled' &&
  node.tag.callee.object.arguments[0].type === AST_NODE_TYPES.Literal;

// styled(Component).attrs(...)``
export const isCreateStyledComponentWithAttrs = (
  node: TSESTree.TaggedTemplateExpression
): boolean =>
  node.tag.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.type === AST_NODE_TYPES.MemberExpression &&
  node.tag.callee.object.type === AST_NODE_TYPES.CallExpression &&
  node.tag.callee.object.callee.type === AST_NODE_TYPES.Identifier &&
  node.tag.callee.object.callee.name === 'styled' &&
  node.tag.callee.object.arguments[0].type === AST_NODE_TYPES.Identifier;

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

const getAttrsNode = (node: TSESTree.TaggedTemplateExpression) => {
  if (
    !isStyledTagsWithAttrs(node) &&
    !isCreateStyledComponentWithAttrs(node) &&
    !getStyledComponentName(node)
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
  // styled.tag.attrs(props => ({}))``
  if (attrsNode?.type === AST_NODE_TYPES.ArrowFunctionExpression) {
    attrsNodeProperties =
      (attrsNode.body.type === AST_NODE_TYPES.ObjectExpression &&
        attrsNode.body.properties) ||
      [];
  }
  // styled.tag.attrs(function (props) { return () })``
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
  // styled.tag.attrs({})``
  if (attrsNode?.type === AST_NODE_TYPES.ObjectExpression) {
    attrsNodeProperties = attrsNode.properties || [];
  }
  return attrsNodeProperties.filter(
    (property): property is TSESTree.Property =>
      property.type === AST_NODE_TYPES.Property
  );
};
