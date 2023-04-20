import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'InputNumber',
  title: '数字输入框',
  docUrl: '',
  screenshot: '',
  configure: {
    props: [
      {
        name: 'placeholder',
        title: { label: '占位提示', tip: '占位提示' },
        propType: 'string',
        defaultValue: '请输入',
        setter: 'StringSetter'
      },
      {
        name: 'max',
        title: { label: '最大值', tip: '最大值' },
        propType: 'number',
        setter: 'NumberSetter'
      },
      {
        name: 'min',
        title: { label: '最小值', tip: '最小值' },
        propType: 'number',
        setter: 'NumberSetter'
      },
      {
        name: 'size',
        title: { label: '尺寸', tip: '输入框大小' },
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
        name: 'step',
        title: { label: '单步长', tip: '每次改变步数' },
        propType: 'number',
        setter: 'NumberSetter'
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
    title: '数字输入框',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/input-number-1.png',
    schema: {
      componentName: 'InputNumber',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  // snippets,
};
