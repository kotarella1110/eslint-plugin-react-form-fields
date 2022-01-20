import { TSESLint } from '@typescript-eslint/experimental-utils';
import { hasProp } from 'jsx-ast-utils';
import { docsUrl } from '../utils/docsUrl';
import { isCheckboxOrRadioInput } from '../utils/isCheckboxOrRadioInput';
import { isFormFieldTags } from '../utils/isFormFieldTags';
import { isHiddenInput } from '../utils/isHiddenInput';

const rule: TSESLint.RuleModule<'no-only-value-prop', []> = {
  meta: {
    docs: {
      description:
        'Forbid to specify only value/checked without onChange and readOnly props to form fields',
      category: 'Possible Errors',
      recommended: 'error',
      url: docsUrl('no-only-value-prop'),
    },
    messages: {
      'no-only-value-prop':
        'You provided a `{{valueName}}` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `{{defaultValueName}}`. Otherwise, set either `onChange` or `readOnly`.',
    },
    schema: [],
    type: 'problem',
  },
  create: (context) => {
    return {
      JSXElement(node) {
        if (!isFormFieldTags(node) || isHiddenInput(node)) {
          return;
        }
        const hasOnChangeProp = hasProp(
          node.openingElement.attributes,
          'onChange'
        );
        const hasReadOnlyProp = hasProp(
          node.openingElement.attributes,
          'readOnly'
        );
        if (isCheckboxOrRadioInput(node)) {
          const hasCheckedProp = hasProp(
            node.openingElement.attributes,
            'checked'
          );
          if (hasCheckedProp && !hasOnChangeProp && !hasReadOnlyProp) {
            context.report({
              node,
              messageId: 'no-only-value-prop',
              data: {
                valueName: 'checked',
                defaultValueName: 'defaultChecked',
              },
            });
          }
        }
        const hasValueProp = hasProp(node.openingElement.attributes, 'value');
        if (hasValueProp && !hasOnChangeProp && !hasReadOnlyProp) {
          context.report({
            node,
            messageId: 'no-only-value-prop',
            data: {
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
