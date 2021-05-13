import {
  TSESLint,
  TSESTree,
  AST_NODE_TYPES,
} from '@typescript-eslint/experimental-utils';
import {
  getAttrsProperties,
  getStyledComponentName,
  isStyledTags,
  isCreateStyledComponent,
  isCreateStyledComponentWithAttrs,
  isCreateStyledTags,
  isCreateStyledTagsWithAttrs,
  isStyledTagsWithAttrs,
} from './styledJSX';
import type { CollectedStyledComponents } from './types';

export const collectStyledComponentData = (
  styledComponents: CollectedStyledComponents
): {
  TaggedTemplateExpression: TSESLint.RuleFunction<TSESTree.TaggedTemplateExpression>;
} => ({
  TaggedTemplateExpression(node) {
    const scName = getStyledComponentName(node);
    if (!scName) return;
    let attrs: TSESTree.Property[] = [];
    let tag = '';
    if (isStyledTags(node)) {
      tag =
        (node.tag.type === AST_NODE_TYPES.MemberExpression &&
          node.tag.property.type === AST_NODE_TYPES.Identifier &&
          node.tag.property.name) ||
        '';
      styledComponents[scName] = {
        name: scName,
        tag,
        attrs,
      };
    }
    // styled('div')``
    if (isCreateStyledTags(node)) {
      tag =
        (node.tag.type === AST_NODE_TYPES.CallExpression &&
          node.tag.arguments[0].type === AST_NODE_TYPES.Literal &&
          typeof node.tag.arguments[0].value === 'string' &&
          node.tag.arguments[0].value) ||
        '';
      styledComponents[scName] = {
        name: scName,
        tag,
        attrs,
      };
      return;
    }
    // styled(Component)``
    if (isCreateStyledComponent(node)) {
      const ancestorScName =
        node.tag.type === AST_NODE_TYPES.CallExpression &&
        node.tag.arguments[0].type === AST_NODE_TYPES.Identifier &&
        node.tag.arguments[0].name;
      if (!ancestorScName || !styledComponents[ancestorScName]) return;
      tag = styledComponents[ancestorScName].tag;
      attrs = styledComponents[ancestorScName].attrs;
      styledComponents[scName] = { name: scName, attrs, tag };
      return;
    }
    // styled.div.attrs(...)``
    if (isStyledTagsWithAttrs(node)) {
      tag =
        (node.tag.type === AST_NODE_TYPES.CallExpression &&
          node.tag.callee.type === AST_NODE_TYPES.MemberExpression &&
          node.tag.callee.object.type === AST_NODE_TYPES.MemberExpression &&
          node.tag.callee.object.property.type === AST_NODE_TYPES.Identifier &&
          node.tag.callee.object.property.name) ||
        '';
      attrs = getAttrsProperties(node);
      styledComponents[scName] = {
        name: scName,
        tag,
        attrs,
      };
      return;
    }
    if (isCreateStyledTagsWithAttrs(node)) {
      tag =
        (node.tag.type === AST_NODE_TYPES.CallExpression &&
          node.tag.callee.type === AST_NODE_TYPES.MemberExpression &&
          node.tag.callee.object.type === AST_NODE_TYPES.CallExpression &&
          node.tag.callee.object.arguments[0].type === AST_NODE_TYPES.Literal &&
          typeof node.tag.callee.object.arguments[0].value === 'string' &&
          node.tag.callee.object.arguments[0].value) ||
        '';
      attrs = getAttrsProperties(node);
      styledComponents[scName] = {
        name: scName,
        tag,
        attrs,
      };
      return;
    }
    // styled(Component).attrs(...)``
    if (isCreateStyledComponentWithAttrs(node)) {
      const ancestorScName =
        node.tag.type === AST_NODE_TYPES.CallExpression &&
        node.tag.callee.type === AST_NODE_TYPES.MemberExpression &&
        node.tag.callee.object.type === AST_NODE_TYPES.CallExpression &&
        node.tag.callee.object.arguments[0].type ===
          AST_NODE_TYPES.Identifier &&
        node.tag.callee.object.arguments[0].name;
      if (!ancestorScName || !styledComponents[ancestorScName]) return;
      tag = styledComponents[ancestorScName].tag;
      attrs = styledComponents[ancestorScName].attrs.concat(
        getAttrsProperties(node)
      );
      styledComponents[scName] = {
        name: scName,
        tag,
        attrs,
      };
      return;
    }
  },
});
