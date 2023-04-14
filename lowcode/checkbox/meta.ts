import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Checkbox',
  title: '多选框',
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
    title: '多选框',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/checkbox-group-1.png',
    schema: {
      componentName: 'Checkbox',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
