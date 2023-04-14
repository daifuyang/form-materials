import React, { FC } from 'react';
import { Form, Checkbox as AntCheckbox } from 'antd';

interface CheckboxProps {}

const Input: FC<CheckboxProps> = (props: any) => {
  const { label = '表单项', ...otherProps } = props;

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
  ];

  return (
    <Form.Item label={label} {...otherProps}>
      <AntCheckbox.Group options={options} defaultValue={['Apple']} />
    </Form.Item>
  );
};

Input.displayName = 'Input';
export default Input;
