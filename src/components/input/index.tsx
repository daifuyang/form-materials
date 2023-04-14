import React, { FC } from 'react';
import { Form, Input as AntInput } from 'antd';

interface InputProps {

}

const Input: FC<InputProps> = (props: any) => {
  const { label = '表单项', ...otherProps } = props;
  return (
    <Form.Item label={label} {...otherProps}>
      <AntInput />
    </Form.Item>
  );
};

Input.displayName = 'Input';
export default Input;
