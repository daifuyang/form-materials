import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { uuid } from '../_utils/utils';

const Meta: ComponentMetadata = {
  componentName: 'Select',
  title: '下拉框',
  docUrl: '',
  screenshot: '',
  configure: {
    props: [
      {
        name: 'options',
        title: { label: '可选项', tip: '可选项' },
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
                propType: ['string', 'number'],
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
                      setter: ['StringSetter', 'VariableSetter'],
                      isRequired: true
                    },
                    {
                      name: 'value',
                      title: '选项值',
                      setter: ['StringSetter', 'NumberSetter', 'VariableSetter'],
                      isRequired: true
                    },
                    {
                      name: 'disabled',
                      title: '是否禁用',
                      setter: ['BoolSetter', 'VariableSetter'],
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
        name: 'placeholder',
        title: { label: '选择框默认文字', tip: '选择框默认文字' },
        propType: 'string',
        setter: 'StringSetter'
      },
      {
        name: 'allowClear',
        title: { label: '支持清除', tip: '是否允许清除' },
        propType: 'bool',
        defaultValue: false,
        setter: 'BoolSetter'
      },
      {
        name: 'autoFocus',
        title: { label: '自动聚焦', tip: '默认获取焦点' },
        propType: 'bool',
        defaultValue: false,
        setter: 'BoolSetter'
      },
      {
        name: 'defaultActiveFirstOption',
        title: { label: '高亮首个选项', tip: '是否默认高亮第一个选项' },
        propType: 'bool',
        defaultValue: true,
        setter: 'BoolSetter'
      },
      {
        name: 'disabled',
        title: { label: '是否禁用', tip: '是否为禁用状态' },
        propType: 'bool',
        defaultValue: false,
        setter: 'BoolSetter'
      },
      {
        name: 'mode',
        title: { label: '多选/单选', tip: '多选/单选' },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '单选',
                value: 'single',
              },
              {
                title: '多选',
                value: 'multiple',
              },
              {
                title: '任意内容',
                value: 'tags',
              },
            ],
          },
        },
        propType: { type: 'oneOf', value: ['single', 'multiple', 'tags'] },
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
      loop: true,
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
    title: '下拉框',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/select-1.png',
    schema: {
      componentName: 'Select',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  // snippets,
};

