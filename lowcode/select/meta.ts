import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Select',
  title: '下拉框',
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
    title: '下拉框',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/select-1.png',
    schema: {
      componentName: 'Select',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
