export default [
  {
    title: '文本输入框',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/input-1.png',
    schema: {
      componentName: 'Form.Item',
      props: {},
      children: [
        {
          componentName: 'Input',
          props: {},
        },
      ],
    },
  },
  {
    title: '多行输入框',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/input-text-area-1.png',
    schema: {
      componentName: 'Form.Item',
      props: {},
      children: [
        {
          componentName: 'TextArea',
          props: {},
          children: [],
        },
      ],
    },
  },
  {
    title: '数字输入框',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/input-number-1.png',
    schema: {
      componentName: 'Form.Item',
      props: {},
      children: [
        {
          componentName: 'InputNumber',
          props: {},
          children: [],
        },
      ],
    },
  },
  {
    title: '单选框',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/radio-group-1.png',
    schema: {
      componentName: 'Form.Item',
      props: {},
      children: [
        {
          componentName: 'Radio',
          props: {
            "valuePropName": "checked",
          },
          children: [],
        },
      ],
    },
  },
  {
    title: '多选框',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/checkbox-group-1.png',
    schema: {
      componentName: 'Form.Item',
      props: {},
      children: [{ componentName: 'Checkbox', props: {}, children: [] }],
    },
  },
  {
    title: '下拉框',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/select-1.png',
    schema: {
      componentName: 'Form.Item',
      props: {},
      children: [{ componentName: 'Select', props: {}, children: [] }],
    },
  },
  {
    title: '开关',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/switch-1.png',
    schema: {
      componentName: 'Form.Item',
      props: {
        valuePropName: 'checked',
      },
      children: [{ componentName: 'Switch', props: {}, children: [] }],
    },
  },
  {
    title: '滑动输入条',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/slider-1.png',
    schema: {
      componentName: 'Form.Item',
      props: {},
      children: [{ componentName: 'Slider', props: {}, children: [] }],
    },
  },
];
