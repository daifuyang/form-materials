import React, { FC, ReactNode } from 'react';
import { Form as AntForm } from 'antd';
import cx from 'classnames';

interface FormProps {
  __designMode?: string;
  className?: string;
  /**
   * 孩子节点
   */
  children?: ReactNode;
}

const Form: FC<FormProps> = (props: any) => {
  const { _fields, children, className, __designMode, ...otherProps } = props;

  return (
    <AntForm
      className={cx({
        [className]: !!className,
        'zero-form-editor': __designMode === 'design'
      })}
      {...otherProps}
    >
      {children}
    </AntForm>
  );
};

Form.displayName = 'Form';
export default Form;

(Form as any).Item = (props: any) => {
  const { label = '表单项',name,requiredobj, typeobj, patternobj, lenobj, validator, layout, className, children, ...otherProps } = props;
  
  const rules = [];
  if (requiredobj && requiredobj.required) {
    rules.push(requiredobj);
  }
  if (typeobj && typeobj.type) {
    rules.push(typeobj);
  }
  if (patternobj && patternobj.pattern) {
    rules.push(patternobj);
  }
  if (lenobj && (lenobj.max || lenobj.min)) {
    rules.push(lenobj);
  }
  if (validator && typeof validator === 'function') {
    rules.push({
      validator: (_: any, value: any) => validator(value),
    });
  }

  const namePath =
    typeof name === 'string' && name.indexOf('.') > 0 ? name.split('.') : name;

  
  let node = children;
  if (Array.isArray(children) && children.length === 1) {
    // 如果 children.length > 1， 说明 Form.Item 只充当布局的作用
    node = children[0];
  }
  return (
    <AntForm.Item
      label={label}
      className={cx({
        [className]: !!className,
        'zero-form-vertical': layout === 'vertical',
        'zero-from-horizontal': layout === 'horizontal',
      })}
      {...otherProps}
      name={namePath}
      rules={rules}
    >
      {node}
    </AntForm.Item>
  );
};
