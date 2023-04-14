import snippets from './snippets';

export default {
  snippets,
  componentName: 'Row',
  title: '栅格-行',
  group: '表单',
  category: '布局',
  configure: {
    props: [
      {
        name: 'align',
        title: { label: '垂直对齐方式', tip: '垂直对齐方式' },
        setter: {
          componentName: 'RadioGroupSetter',
          isRequired: true,
          props: {
            options: [
              { title: '上', value: 'top' },
              { title: '中', value: 'middle' },
              { title: '下', value: 'bottom' },
            ],
          },
        },
      },
      {
        name: 'h-gutter',
        title: {
          label: '水平间隔',
          tip: '栅格水平间隔，单位为像素(px)',
        },
        propType: 'number',
        setter: {
          componentName: 'NumberSetter',
          props: {
            min: 0,
          },
        },
        defaultValue: 0,
        extraProps: {
          getValue(target) {
            const { node } = target;
            const gutter = node.getPropValue('gutter');
            if (typeof gutter === 'number') {
              return gutter;
            } else if (Array.isArray(gutter)) {
              return gutter[0];
            }
            return 0;
          },
          setValue(target, value) {
            const { node } = target;
            const gutter = node.getPropValue('gutter');
            if (Array.isArray(gutter)) {
              gutter[0] = value;
              node.setPropValue('gutter', gutter);
            } else {
              node.setPropValue('gutter', [value, 0]);
            }
          },
        },
      },
      {
        name: 'v-gutter',
        title: {
          label: '垂直间隔',
          tip: '栅格垂直间隔，单位为像素(px)',
        },
        propType: 'number',
        setter: {
          componentName: 'NumberSetter',
          props: {
            min: 0,
          },
        },
        defaultValue: 0,
        extraProps: {
          getValue(target) {
            const { node } = target;
            const gutter = node.getPropValue('gutter');
            if (typeof gutter === 'number') {
              return 0;
            } else if (Array.isArray(gutter)) {
              return gutter[1];
            }
            return 0;
          },
          setValue(target, value) {
            const { node } = target;
            const gutter = node.getPropValue('gutter');
            if (Array.isArray(gutter)) {
              gutter[1] = value;
              node.setPropValue('gutter', gutter);
            } else {
              node.setPropValue('gutter', [gutter, value]);
            }
          },
        },
      },
      {
        name: 'justify',
        title: { label: '水平排列方式', tip: '水平排列方式' },
        setter: {
          componentName: 'SelectSetter',
          props: {
            mode: 'single',
            options: [
              { title: 'start', value: 'start' },
              { title: 'center', value: 'center' },
              { title: 'bottom', value: 'bottom' },
              { title: 'space-around', value: 'space-around' },
              { title: 'space-between', value: 'space-between' },
              { title: 'space-evenly', value: 'space-evenly' },
            ],
          },
        },
      },
      {
        name: 'wrap',
        title: { label: '自动换行', tip: '是否自动换行' },
        propType: 'bool',
        setter: 'BoolSetter',
        defaultValue: true,
      },
    ],
    component: {
      isContainer: true,
      nestingRule: { parentWhitelist: ['Form', 'Row'], childWhitelist: ['Col'] },
    },
    supports: { style: true },
  },
};
