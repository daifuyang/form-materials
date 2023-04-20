import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { uuid } from '../_utils/utils';

const Meta: ComponentMetadata = {
  componentName: 'Radio',
  title: '单选框',
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
                propType: 'string',
                description: '选项名',
                defaultValue: '选项名',
              },
              {
                name: 'value',
                propType: 'string',
                description: '选项值',
                defaultValue: '选项值',
              },
              {
                name: 'disabled',
                propType: 'bool',
                description: '是否禁用',
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
                      isRequired: true
                    },
                    {
                      name: 'value',
                      title: '选项值',
                      setter: 'StringSetter',
                      isRequired: true
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
      },
      {
        name: 'disabled',
        title: { label: '是否禁用', tip: '是否为禁用状态' },
        propType: 'bool',
        defaultValue: false,
        setter: 'BoolSetter',
        supportVariable: true
      },
    ],
    component: {
      isContainer: false,
      nestingRule: { parentWhitelist: ['Form.Item'] },
      disableBehaviors: "*",
    },
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onClick',
        }
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
    title: '单选框',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/radio-group-1.png',
    schema: {
      componentName: 'Radio',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  // snippets,
};
