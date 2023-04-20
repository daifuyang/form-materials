import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'TextArea',
  title: '文本域',
  docUrl: '',
  screenshot: '',
  configure: {
    props: [
      {
        name: 'bordered',
        title: { label: '显示边框', tip: '是否有边框' },
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
        name: 'placeholder',
        title: { label: '占位提示', tip: '占位提示' },
        propType: 'string',
        defaultValue: '请输入',
        setter: 'StringSetter'
      },
      {
        name: 'showCount',
        title: { label: '展示字数', tip: '是否展示字数' },
        propType: 'bool',
        defaultValue: false,
        setter: 'BoolSetter'
      },
      {
        name: 'maxLength',
        title: { label: '最大长度', tip: '最大长度' },
        propType: 'number',
        setter: 'NumberSetter'
      },
      {
        name: 'size',
        title: { label: '控件大小', tip: '控件大小' },
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
        name: 'autoSize',
        title: { label: '高度自适应设置', tip: '高度自适应设置' },
        propType: {
          type: 'oneOfType',
          value: [
            'bool',
            {
              type: 'shape',
              value: [
                {
                  name: 'minRows',
                  title: '最小行数',
                  setter: 'NumberSetter',
                  defaultValue: 3,
                },
                {
                  name: 'maxRows',
                  title: '最大行数',
                  setter: 'NumberSetter',
                  defaultValue: 3,
                },
              ],
            },
          ],
        },
        defaultValue: false,
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
    title: '文本域',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/input-text-area-1.png',
    schema: {
      componentName: 'TextArea',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  // snippets,
};
