import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Input',
  title: '文本输入框',
  docUrl: '',
  screenshot: '',
  configure: {
    props: [
      {
        name: 'allowClear',
        title: { label: '支持清除', tip: '是否允许清除' },
        propType: 'bool',
        setter: 'BoolSetter',
      },
      {
        name: 'bordered',
        title: { label: '显示边框', tip: '是否有边框' },
        propType: 'bool',
        defaultValue: true,
        setter: 'BoolSetter',
      },
      {
        name: 'disabled',
        title: { label: '是否禁用', tip: '是否为禁用状态' },
        propType: 'bool',
        defaultValue: false,
        setter: 'BoolSetter',
      },
      {
        name: 'placeholder',
        title: { label: '占位提示', tip: '占位提示' },
        propType: 'string',
        defaultValue: '请输入',
        setter: 'StringSetter',
      },
      {
        name: 'maxLength',
        title: { label: '最大长度', tip: '最大长度' },
        propType: 'number',
        setter: 'NumberSetter',
      },
      {
        name: 'size',
        title: { label: '控件大小', tip: '控件大小' },
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
        propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
        defaultValue: 'middle',
      }
    ],
    component: {
      isContainer: false,
      nestingRule: { parentWhitelist: ['Form.Item'] },
      disableBehaviors: '*',
    },
    supports: {
      className: true,
      style: true,
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
    title: '文本输入框',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/input-1.png',
    schema: {
      componentName: 'Input',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
};
