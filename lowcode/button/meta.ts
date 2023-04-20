import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Button',
  title: '按钮',
  docUrl: '',
  screenshot: '',
  configure: {
    props: [
      {
        name: 'items',
        title: {
          label: '按钮组',
          tip: '',
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
                      title: '行为',
                      name: 'action',
                      description: '按钮类型',
                      setter: [
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            options: [
                              {
                                title: '提交',
                                value: 'submit',
                              },
                              {
                                title: '重置',
                                value: 'reset',
                              },
                            ],
                          },
                        },
                        'VariableSetter',
                      ],
                      defaultValue: '',
                      isRequired: true,
                    },
                    {
                      name: 'children',
                      title: {
                        label: '内容',
                        tip: '文本内容',
                      },
                      setter: 'StringSetter',
                      defaultValue: '按钮',
                      isRequired: true,
                    },
                    {
                      name: 'onClick',
                      title: {
                        label: '点击事件',
                        tip: '绑定自定义事件,绑定后默认行为失效',
                      },
                      setter: 'FunctionSetter',
                      defaultValue: '',
                    },
                    {
                      name: 'type',
                      title: { label: '类型', tip: '设置按钮类型' },
                      propType: {
                        type: 'oneOf',
                        value: ['primary', 'ghost', 'dashed', 'danger', 'link', 'text','default'],
                      },
                      setter: [
                        {
                          componentName: 'SelectSetter',
                          props: {
                            options: [
                              {
                                title: '主按钮',
                                value: 'primary',
                              },
                              {
                                title: '虚线框按钮',
                                value: 'dashed',
                              },
                              {
                                title: '危险按钮',
                                value: 'danger',
                              },
                              {
                                title: '链接按钮',
                                value: 'link',
                              },
                              {
                                title: '类文本按钮',
                                value: 'text',
                              },
                              {
                                title: '默认',
                                value: 'default',
                              },
                            ],
                          },
                        },
                        'VariableSetter',
                      ],
                    },
                    {
                      title: '类名',
                      name: 'className',
                      description: '自定义样式',
                      setter: 'ClassNameSetter'
                    },
                    {
                      title: '按钮样式',
                      name: 'style',
                      display: 'accordion',
                      description: '自定义样式',
                      setter: 'StyleSetter'
                    },
                  ],
                },
              },
            },
          },
          initialValue: [
            {
              action: 'submit',
              children: '提交',
            },
            {
              action: 'reset',
              children: '重置',
            }
          ],
        },
      },
      {
        type: 'group',
        title: '布局',
        display: 'accordion',
        items: [
          {
            name: 'wrapperCol',
            title: '内容栅格布局设置',
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
                        initialValue: 16,
                        componentName: 'NumberSetter',
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
                        initialValue: 8,
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
          }
        ],
      },
    ],
    component: {
      isContainer: false,
      nestingRule: { parentWhitelist: ['Form', 'Col'] },
    },
    supports: {
      className: true,
      style: true,
    },
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
  category: '按钮',
  group: '表单',
};
const snippets: Snippet[] = [
  {
    title: '按钮',
    screenshot: require('./__screenshots__/button-1.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'primary',
        children: '主按钮',
      },
    },
  },
];

export default {
  ...Meta,
  snippets,
};
