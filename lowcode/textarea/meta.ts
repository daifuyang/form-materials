import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'TextArea',
  title: '文本域',
  docUrl: '',
  screenshot: '',
  configure: {
    props: [],
    component: {
      isContainer: false,
      nestingRule: { parentWhitelist: ['Form',"Col"] }
    },
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onClick',
        }
      ],
      loop: true,
    },
    advanced: {},
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
  snippets,
};
