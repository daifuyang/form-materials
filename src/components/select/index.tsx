import React, { FC } from 'react';
import { Form, Select as AntSelect } from 'antd';

interface SelectProps {

}

const Select: FC<SelectProps> = (props: any) => {
  const { label = '表单项', ...otherProps } = props;

  const options = [
    {
      value: 'jack',
      label: 'Jack',
    },
    {
      value: 'lucy',
      label: 'Lucy',
    },
    {
      value: 'disabled',
      disabled: true,
      label: 'Disabled',
    },
    {
      value: 'Yiminghe',
      label: 'yiminghe',
    },
  ]

  return (
    <Form.Item label={label} {...otherProps}>
      <AntSelect options={options}/>
    </Form.Item>
  );
};

Select.displayName = 'Select';
export default Select;
