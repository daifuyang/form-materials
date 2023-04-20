import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { uuid } from '../_utils/utils';

const Meta: ComponentMetadata = {
  componentName: 'Checkbox',
  title: '多选框',
  docUrl: '',
  screenshot: '',
  configure: {
    props: [
      {
        name: 'options',
        title: { label: '指定可选项', tip: '指定可选项' },
        propType: {
          type: 'arrayOf',
          value: {
            type: 'shape',
            value: [
              {
                name: 'label',
                description: '选项名',
                propType: 'string',
                defaultValue: '选项名',
              },
              {
                name: 'value',
                description: '选项值',
                propType: 'string',
                defaultValue: '选项值',
              },
              {
                name: 'disabled',
                description: '是否禁用',
                propType: 'bool',
                defaultValue: false,
              },
            ],
          },
        },
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'label',
                      title: '选项名',
                      setter: 'StringSetter',
                      isRequired: true,
                    },
                    {
                      name: 'value',
                      title: '选项值',
                      setter: 'StringSetter',
                      isRequired: true,
                    },
                    {
                      name: 'disabled',
                      title: '是否禁用',
                      setter: 'BoolSetter',
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  label: '选项名',
                  value: uuid(),
                  disabled: false,
                };
              },
            },
          },
        },
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: { label: '是否禁用', tip: '是否为禁用状态' },
        propType: 'bool',
        defaultValue: false,
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'optionType',
        title: { label: '类型', tip: '类型' },
        propType: { type: 'oneOf', value: ['default', 'button'] },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '默认类型',
                value: 'default',
              },
              {
                title: '按钮类型',
                value: 'button',
              },
            ],
          },
        },
        defaultValue: 'default',
      },
      {
        name: 'size',
        title: { label: '尺寸', tip: '大小，只对按钮样式生效' },
        condition(target) {
          return target.getProps().getPropValue('optionType') === 'button';
        },
        propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '大',
                value: 'large',
              },
              {
                title: '中',
                value: 'middle',
              },
              {
                title: '小',
                value: 'small',
              },
            ],
          },
        },
        defaultValue: 'middle',
      },
      {
        name: 'buttonStyle',
        title: {
          label: '按钮风格',
          tip: 'RadioButton 的风格样式，目前有描边和填色两种风格',
        },
        condition(target) {
          return target.getProps().getPropValue('optionType') === 'button';
        },
        propType: { type: 'oneOf', value: ['outline', 'solid'] },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '描边',
                value: 'outline',
              },
              {
                title: '填色',
                value: 'solid',
              },
            ],
          },
        },
        defaultValue: 'outline',
      },
    ],
    component: {
      isContainer: false,
      nestingRule: { parentWhitelist: ['Form.Item'] },
      disableBehaviors: '*',
    },
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onClick',
        },
      ],
      loop: false,
    },
    advanced: {
      callbacks: {
        onMoveHook() {
          return false;
        },
      },
    },
  },
  experimental: {
    callbacks: {},
  },
  category: '数据录入',
  group: '表单',
};
const snippets: Snippet[] = [
  {
    title: '多选框',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/checkbox-group-1.png',
    schema: {
      componentName: 'Checkbox',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  // snippets,
};

