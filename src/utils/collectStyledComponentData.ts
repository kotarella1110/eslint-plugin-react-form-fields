import {
  TSESLint,
  TSESTree,
  AST_NODE_TYPES,
} from '@typescript-eslint/experimental-utils';
import {
  getAttrsProperties,
  getStyledComponentName,
  isStyled,
  isStyledFuncComponent,
  isStyledFuncComponentWithAttrs,
  isStyledFuncTag,
  isStyledFuncTagWithAttrs,
  isStyledWithAttrs,
} from './styledJSX';
import type { StyledComponents } from './types';

export const collectStyledComponentData = (
  styledComponentsDict: StyledComponents
): {
  TaggedTemplateExpression: TSESLint.RuleFunction<TSESTree.TaggedTemplateExpression>;
} => ({
  TaggedTemplateExpression(node) {
    const scName = getStyledComponentName(node);
    if (!scName) return;
    let attrs: TSESTree.Property[] = [];
    let tag = '';
    // const A = styled.div``
    if (isStyled(node)) {
      tag =
        (node.tag.type === AST_NODE_TYPES.MemberExpression &&
          node.tag.property.type === AST_NODE_TYPES.Identifier &&
          node.tag.property.name) ||
        '';
      styledComponentsDict[scName] = {
        name: scName,
        tag,
        attrs,
      };
    }
    // styled('div')``
    if (isStyledFuncTag(node)) {
      tag =
        (node.tag.type === AST_NODE_TYPES.CallExpression &&
          node.tag.arguments[0].type === AST_NODE_TYPES.Literal &&
          typeof node.tag.arguments[0].value === 'string' &&
          node.tag.arguments[0].value) ||
        '';
      styledComponentsDict[scName] = {
        name: scName,
        tag,
        attrs,
      };
      return;
    }
    // styled(Component)``
    if (isStyledFuncComponent(node)) {
      const ancestorScName =
        node.tag.type === AST_NODE_TYPES.CallExpression &&
        node.tag.arguments[0].type === AST_NODE_TYPES.Identifier &&
        node.tag.arguments[0].name;
      if (!ancestorScName || !styledComponentsDict[ancestorScName]) return;
      tag = styledComponentsDict[ancestorScName].tag;
      attrs = styledComponentsDict[ancestorScName].attrs;
      styledComponentsDict[scName] = { name: scName, attrs, tag };
      return;
    }
    // styled.div.attrs(...)``
    if (isStyledWithAttrs(node)) {
      tag =
        (node.tag.type === AST_NODE_TYPES.CallExpression &&
          node.tag.callee.type === AST_NODE_TYPES.MemberExpression &&
          node.tag.callee.object.type === AST_NODE_TYPES.MemberExpression &&
          node.tag.callee.object.property.type === AST_NODE_TYPES.Identifier &&
          node.tag.callee.object.property.name) ||
        '';
      attrs = getAttrsProperties(node);
      styledComponentsDict[scName] = {
        name: scName,
        tag,
        attrs,
      };
      return;
    }
    // styled('div').attrs(...)``
    if (isStyledFuncTagWithAttrs(node)) {
      tag =
        (node.tag.type === AST_NODE_TYPES.CallExpression &&
          node.tag.callee.type === AST_NODE_TYPES.MemberExpression &&
          node.tag.callee.object.type === AST_NODE_TYPES.CallExpression &&
          node.tag.callee.object.arguments[0].type === AST_NODE_TYPES.Literal &&
          typeof node.tag.callee.object.arguments[0].value === 'string' &&
          node.tag.callee.object.arguments[0].value) ||
        '';
      attrs = getAttrsProperties(node);
      styledComponentsDict[scName] = {
        name: scName,
        tag,
        attrs,
      };
      return;
    }
    // styled(Component).attrs(...)``
    if (isStyledFuncComponentWithAttrs(node)) {
      const ancestorScName =
        node.tag.type === AST_NODE_TYPES.CallExpression &&
        node.tag.callee.type === AST_NODE_TYPES.MemberExpression &&
        node.tag.callee.object.type === AST_NODE_TYPES.CallExpression &&
        node.tag.callee.object.arguments[0].type ===
          AST_NODE_TYPES.Identifier &&
        node.tag.callee.object.arguments[0].name;
      if (!ancestorScName || !styledComponentsDict[ancestorScName]) return;
      tag = styledComponentsDict[ancestorScName].tag;
      attrs = styledComponentsDict[ancestorScName].attrs.concat(
        getAttrsProperties(node)
      );
      styledComponentsDict[scName] = {
        name: scName,
        tag,
        attrs,
      };
      return;
    }
  },
});
