import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { uuid } from '../_utils/utils';

import snippets from './snippets';

const Meta: ComponentMetadata = {
  componentName: 'Form.Item',
  title: '输入项容器',
  docUrl: '',
  screenshot: '',
  configure: {
    props: [
      {
        name: 'label',
        title: { label: '标签文本', tip: '标签的文本' },
        setter: ['StringSetter'],
        supportVariable: true,
        defaultValue: '表单项',
      },
      {
        name: 'name',
        title: { label: '字段名称', tip: '字段名' },
        isRequired: true,
        propType: 'string',
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: () => uuid(),
      },
      {
        name: 'labelAlign',
        title: { label: '标签对齐', tip: '标签文本对齐方式' },
        propType: { type: 'oneOf', value: ['left', 'right'] },
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
        defaultValue: 'right',
      },
      {
        name: 'colon',
        title: {
          label: '显示冒号',
          tip: '配合 label 属性使用，表示是否显示 label 后面的冒号',
        },
        propType: 'bool',
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'extra',
        title: {
          label: '提示信息',
          tip: '额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。',
        },
        setter: 'StringSetter',
      },
      {
        name: 'tooltip',
        title: {
          label: '标签提示信息',
          tip: '标签提示信息，当需要对标签进行解释时，可以使用这个。',
        },
        setter: 'StringSetter',
      },
      /*       {
        name: 'required',
        title: {
          label: '必填标记',
          tip: '必填样式设置。如不设置，则会根据校验规则自动生成',
        },
        propType: 'bool',
        defaultValue: false,
        setter: 'BoolSetter',
        supportVariable: true,
      }, */
      {
        name: 'initialValue',
        title: {
          label: '默认值',
          tip: '设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准',
        },
        propType: 'string',
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'noStyle',
        title: {
          label: '隐藏标签',
          tip: '为 true 时不带样式，作为纯字段控件使用',
        },
        propType: 'bool',
        defaultValue: false,
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        type: 'group',
        title: '布局',
        display: 'accordion',
        items: [
          {
            name: 'labelCol',
            title: '标签栅格布局设置',
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
          {
            name: 'layout',
            title: { label: '表单布局', tip: '表单布局' },
            setter: {
              initialValue: '',
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '默认',
                    value: '',
                  },
                  {
                    title: '水平',
                    value: 'horizontal',
                  },
                  {
                    title: '垂直',
                    value: 'vertical',
                  },
                ],
              },
            },
            propType: { type: 'oneOf', value: ['', 'horizontal', 'vertical'] },
          },
        ],
      },
      {
        name: 'requiredobj',
        title: { label: '必填设置', tip: '必填设置' },
        setter: {
          componentName: 'ObjectSetter',
          type: 'shape',
          props: {
            config: {
              items: [
                {
                  name: 'required',
                  title: '是否必填',
                  propType: 'bool',
                  setter: 'BoolSetter',
                  supportVariable: true,
                  extraProps: {
                    setValue(target: any, value: boolean) {
                      // 同步 必填标记
                      target.parent.parent.setPropValue('required', value);
                    },
                  },
                },
                {
                  name: 'message',
                  title: '错误信息提示',
                  propType: 'string',
                  setter: 'StringSetter',
                  supportVariable: true,
                },
              ],
            },
          },
        },
      },
      {
        name: 'typeobj',
        title: { label: '输入类型设置', tip: '输入类型设置' },
        setter: {
          componentName: 'ObjectSetter',
          type: 'shape',
          props: {
            config: {
              items: [
                {
                  name: 'type',
                  title: '输入类型',
                  setter: {
                    componentName: 'SelectSetter',
                    props: {
                      options: [
                        {
                          title: '字符串',
                          value: 'string',
                        },
                        // {
                        //   title: '纯数字',
                        //   value: 'number',
                        // },
                        {
                          title: '邮箱',
                          value: 'email',
                        },
                        {
                          title: '网址',
                          value: 'url',
                        },
                      ],
                    },
                  },
                },
                { name: 'message', title: '错误信息提示', setter: 'StringSetter' },
              ],
            },
          },
        },
      },
      {
        name: 'lenobj',
        title: { label: '长度校验设置', tip: '长度校验设置' },
        setter: {
          componentName: 'ObjectSetter',
          type: 'shape',
          props: {
            config: {
              items: [
                // { name: 'len', title: '固定长度', propType: 'string' },
                { name: 'max', title: '最大长度', setter: 'StringSetter' },
                { name: 'min', title: '最小长度', setter: 'StringSetter' },
                { name: 'message', title: '错误信息提示', setter: 'StringSetter' },
              ],
            },
          },
        },
      },
      {
        name: 'patternobj',
        title: { label: '正则设置', tip: '正则设置' },
        setter: {
          componentName: 'ObjectSetter',
          type: 'shape',
          props: {
            config: {
              items: [
                { name: 'pattern', title: '正则', setter: 'StringSetter' },
                { name: 'message', title: '错误信息提示', setter: 'StringSetter' },
              ],
            },
          },
        },
      },
      /* {
        name: 'validator',
        title: {
          label: '自定义校验函数',
          tip: '自定义校验，接收 Promise 作为返回值',
        },
        propType: 'func',
      }, */
    ],
    component: {
      isContainer: true,
      nestingRule: { parentWhitelist: ['Form', 'Col'] },
    },
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onClick',
        },
      ],
      loop: false,
    },
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
  category: '数据录入',
  group: '表单',
};

export default {
  ...Meta,
  snippets,
};
