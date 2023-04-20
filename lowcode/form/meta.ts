import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Form',
  title: '表单',
  docUrl: '',
  screenshot: '',
  configure: {
    props: [
      {
        name: 'colon',
        title: {
          label: '展示冒号',
          tip: '',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        type: 'group',
        title: '布局',
        display: 'accordion',
        items: [
          {
            name: 'labelCol',
            title: {
              label: '标签栅格布局设置',
              tip: 'label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效',
            },
            display: 'inline',
            setter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'span',
                      title: '宽度',
                      setter: {
                        componentName: 'NumberSetter',
                        initialValue: 8,
                        props: {
                          min: 0,
                          max: 24,
                        },
                      },
                    },
                    {
                      name: 'offset',
                      title: '偏移',
                      setter: {
                        componentName: 'NumberSetter',
                        props: {
                          min: 0,
                          max: 24,
                        },
                      },
                    },
                  ],
                },
              },
            },
            description:
              'label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效',
          },
          {
            name: 'wrapperCol',
            title: {
              label: '内容栅格布局设置',
              tip: '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
            },
            display: 'inline',
            setter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'span',
                      title: '宽度',
                      setter: {
                        componentName: 'NumberSetter',
                        initialValue: 16,
                        props: {
                          min: 0,
                          max: 24,
                        },
                      },
                    },
                    {
                      name: 'offset',
                      title: '偏移',
                      setter: {
                        componentName: 'NumberSetter',
                        props: {
                          min: 0,
                          max: 24,
                        },
                      },
                    },
                  ],
                },
              },
            },
            description: '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
          },
        ],
      },
      {
        name: 'labelAlign',
        title: {
          label: '标签对齐',
          tip: 'label 标签的文本对齐方式',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '左',
                value: 'left',
              },
              {
                title: '右',
                value: 'right',
              },
            ],
          },
        },
        propType: { type: 'oneOf', value: ['left', 'right'] },
        defaultValue: 'right',
      },
      {
        name: 'layout',
        title: { label: '表单布局', tip: '表单布局' },
        setter: {
          componentName: 'RadioGroupSetter',
          initialValue: 'horizontal',
          props: {
            options: [
              {
                title: '水平',
                value: 'horizontal',
              },
              {
                title: '垂直',
                value: 'vertical',
              },
              {
                title: '行内',
                value: 'inline',
              },
            ],
          },
        },
        propType: { type: 'oneOf', value: ['horizontal', 'vertical', 'inline'] },
      },
    ],
    component: {
      isContainer: true,
      disableBehaviors: "*"
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
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
  category: '容器',
  group: '表单',
};
const snippets: Snippet[] = [
  {
    title: '表单',
    screenshot: 'https://img.alicdn.com/tfs/TB1oH02u2b2gK0jSZK9XXaEgFXa-112-64.png',
    schema: {
      componentName: 'Form',
      props: {
        onFinish: {
          type: 'JSFunction',
          value: "function onFinish(values) {\n  console.log('onFinish', values);\n}",
        },
        onFinishFailed: {
          type: 'JSFunction',
          value:
            "function onFinishFailed({ values, errorFields, outOfDate }) {\n  console.log('onFinishFailed', values, errorFields, outOfDate);\n}",
        },
      },
      children: [],
    },
  },
];

export default {
  ...Meta,
  // snippets,
};
