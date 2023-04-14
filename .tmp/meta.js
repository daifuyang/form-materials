import CheckboxMeta from '/Users/return/workspace/lowcode/workspace/materials/form-materials/lowcode/checkbox/meta'
import FormMeta from '/Users/return/workspace/lowcode/workspace/materials/form-materials/lowcode/form/meta'
import GridcolMeta from '/Users/return/workspace/lowcode/workspace/materials/form-materials/lowcode/grid.col/meta'
import GridrowMeta from '/Users/return/workspace/lowcode/workspace/materials/form-materials/lowcode/grid.row/meta'
import InputNumberMeta from '/Users/return/workspace/lowcode/workspace/materials/form-materials/lowcode/input-number/meta'
import InputMeta from '/Users/return/workspace/lowcode/workspace/materials/form-materials/lowcode/input/meta'
import RadioMeta from '/Users/return/workspace/lowcode/workspace/materials/form-materials/lowcode/radio/meta'
import SelectMeta from '/Users/return/workspace/lowcode/workspace/materials/form-materials/lowcode/select/meta'
import SliderMeta from '/Users/return/workspace/lowcode/workspace/materials/form-materials/lowcode/slider/meta'
import SwitchMeta from '/Users/return/workspace/lowcode/workspace/materials/form-materials/lowcode/switch/meta'
import TextareaMeta from '/Users/return/workspace/lowcode/workspace/materials/form-materials/lowcode/textarea/meta'

const componentCategorySort = {};
["基础元素","布局容器类","表格类","表单详情类","帮助类","对话框类","业务类","通用","引导","信息输入","信息展示","信息反馈"]
  .reverse()
  .forEach((item, index) => {
    componentCategorySort[item] = ++index;
  });

function generateComponentList(components) {
  const componentList = [
    {
      title: '常用',
      icon: '',
      children: [],
    },
    {
      title: '容器',
      icon: '',
      children: [],
    },
    {
      title: '导航',
      icon: '',
      children: [],
    },
    {
      title: '内容',
      icon: '',
      children: [],
    },
    {
      title: 'Feedback 反馈',
      icon: '',
      children: [],
    },
  ];

  const groupMap = {
    原子组件: true,
  };
  const compGroup = {};

  components.forEach((comp) => {
    const category = comp.category || '其他';
    if (comp.group && !compGroup[comp.componentName]) {
      compGroup[comp.componentName] = comp.group;
    }
    if (comp.group && !groupMap[comp.group]) {
      groupMap[comp.group] = true;
    }
    let target = componentList.find((item) => item.title === category);
    if (!target) {
      target = {
        title: category,
        icon: '',
        children: [],
      };

      componentList.push(target);
    }

    if (comp.snippets && comp.snippets.length) {
      target.children.push({
        componentName: comp.componentName,
        title: comp.title || comp.componentName,
        sort: {
          category: target.title,
          group: compGroup[comp.componentName] || '原子组件',
          priority: componentCategorySort[target.title] || 0,
        },
        icon: '',
        package: comp.npm.pkg,
        snippets: comp.snippets || [],
      });
    }
  });
  return componentList;
}

function fillRealVersion(meta, packageName = 'form-materials', version = '0.1.0', basicLibraryVersion={"@alifd/next":"1.25.23","@alifd/meet":"2.6.3","antd":"4.17.3"}) {
  if (!meta || !version) {
    return meta;
  }
  const { npm } = meta;
  if (!npm) {
    return meta;
  }
  if (typeof basicLibraryVersion === 'object' && basicLibraryVersion[npm.package]) {
    meta.npm = {
      ...npm,
      version: basicLibraryVersion[npm.package]
    };
  } else if (npm.package === packageName) {
    meta.npm = {
      ...npm,
      version
    };
  }
  return meta;
}

const componentMetas = [CheckboxMeta,FormMeta,GridcolMeta,GridrowMeta,InputNumberMeta,InputMeta,RadioMeta,SelectMeta,SliderMeta,SwitchMeta,TextareaMeta];
const components = [];
const npmInfo = {"package":"form-materials","version":"0.1.0"};
componentMetas.forEach(meta => {
  if (Array.isArray(meta)) {
    components.push(
      ...meta.map((item) => {
        if (!item.npm) {
          const { componentName } = item;
          const names = componentName.split('.');
          const [exportName, subName] = names;
          item.npm = {
            exportName: exportName,
            main: '',
            destructuring: true,
            subName: names.length > 1 ? componentName.slice(componentName.indexOf('.') + 1) : subName,
          };
        }
        item.npm = { ...npmInfo, ...(item.npm || {}) };
        return fillRealVersion(item);
      }),
    );
  } else if (meta.components) {
    components.push(
      ...meta.components.map((item) => {
        if (!item.npm) {
          const { componentName } = item;
          const names = componentName.split('.');
          const [exportName, subName] = names;
          item.npm = {
            exportName: exportName,
            main: '',
            destructuring: true,
            subName: names.length > 1 ? componentName.slice(componentName.indexOf('.') + 1) : subName,
          };
        }
        item.npm = { ...npmInfo, ...(item.npm || {}) };
        return fillRealVersion(item);
      }),
    );
  } else {
    if (!meta.npm) {
      const { componentName } = meta;
      const names = componentName.split('.');
      const [exportName, subName] = names;
      meta.npm = {
        exportName: exportName,
        main: '',
        destructuring: true,
        subName: names.length > 1 ? componentName.slice(componentName.indexOf('.') + 1) : subName,
      };
    }
    meta.npm = { ...npmInfo, ...(meta.npm || {}) };
    components.push(fillRealVersion(meta));
  }
});

const componentList = generateComponentList(components);

export { components, componentList };

const execCompile = !!false;

if (!execCompile) {
  window.FormMaterialsMeta = { components, componentList };
}