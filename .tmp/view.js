

export { default } from '/Users/return/workspace/lowcode/workspace/materials/form-materials/src/index.tsx';

import * as componentInstances from '/Users/return/workspace/lowcode/workspace/materials/form-materials/src/index.tsx';

import '/Users/return/workspace/lowcode/workspace/materials/form-materials/src/index.scss'

export * from '/Users/return/workspace/lowcode/workspace/materials/form-materials/src/index.tsx';

const coveredComponents = {};

const library = 'FormMaterials';
const execCompile = !!false;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}