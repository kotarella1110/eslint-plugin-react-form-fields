import { TSESLint } from '@typescript-eslint/experimental-utils';
import { hasProp } from 'jsx-ast-utils';
import { capitalize } from '../utils/capitalize';
import { docsUrl } from '../utils/docsUrl';
import { getTagName } from '../utils/getTagName';
import { isCheckboxOrRadioInput } from '../utils/isCheckboxOrRadioInput';
import { isFormFieldTags } from '../utils/isFormFieldTags';

const rule: TSESLint.RuleModule<'no-mix-controlled-with-uncontrolled', []> = {
  meta: {
    docs: {
      description:
        'Forbid to specify both value/checked and defaultValue/defaultChecked props to form fields',
      category: 'Possible Errors',
      recommended: 'error',
      url: docsUrl('no-mix-controlled-with-uncontrolled'),
    },
    messages: {
      'no-mix-controlled-with-uncontrolled':
        '{{capitalizeTagName}} elements must be either controlled or uncontrolled (specify either the {{valueName}} prop, or the {{defaultValueName}} prop, but not both). Decide between using a controlled or uncontrolled {{tagName}} element and remove one of these props.',
    },
    schema: [],
    type: 'problem',
  },
  create: (context) => {
    return {
      JSXElement(node) {
        const tagName = getTagName(node);
        if (!isFormFieldTags(node)) {
          return;
        }
        if (isCheckboxOrRadioInput(node)) {
          const hasCheckedProp = hasProp(
            node.openingElement.attributes,
            'checked'
          );
          const hasDefaultCheckedProp = hasProp(
            node.openingElement.attributes,
            'defaultChecked'
          );
          if (hasCheckedProp && hasDefaultCheckedProp) {
            context.report({
              node,
              messageId: 'no-mix-controlled-with-uncontrolled',
              data: {
                tagName,
                capitalizeTagName: capitalize(tagName),
                valueName: 'checked',
                defaultValueName: 'defaultChecked',
              },
            });
          }
        }
        const hasValueProp = hasProp(node.openingElement.attributes, 'value');
        const hasDefaultValueProp = hasProp(
          node.openingElement.attributes,
          'defaultValue'
        );
        if (hasValueProp && hasDefaultValueProp) {
          context.report({
            node,
            messageId: 'no-mix-controlled-with-uncontrolled',
            data: {
              tagName,
              capitalizeTagName: capitalize(tagName),
              valueName: 'value',
              defaultValueName: 'defaultValue',
            },
          });
        }
      },
    };
  },
};

export default rule;
