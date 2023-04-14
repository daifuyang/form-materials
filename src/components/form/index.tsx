import React, { FC, ReactNode } from 'react';
import { Form as AntForm } from 'antd';

interface FormProps {
  /**
   * 孩子节点
   */
  children?: ReactNode;
}

const Form:FC<FormProps> = (props: any) => {
  const { children, ...otherProps } = props;
  return <AntForm {...otherProps}>{children}</AntForm>;
};

Form.displayName = 'Form';
export default Form;
