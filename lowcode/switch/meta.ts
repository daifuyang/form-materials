import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Switch',
  title: '开关',
  docUrl: '',
  screenshot: '',
  configure: {
    props: [],
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
    title: '开关',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/switch-1.png',
    schema: {
      componentName: 'Switch',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  // snippets,
};
