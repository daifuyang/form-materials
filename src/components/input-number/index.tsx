import React, { FC } from 'react';
import { Form, InputNumber as AntInputNumber } from 'antd';

interface InputNumberProps {

}

const InputNumber: FC<InputNumberProps> = (props: any) => {
  const { label = '表单项', ...otherProps } = props;
  return (
    <Form.Item label={label} {...otherProps}>
      <AntInputNumber />
    </Form.Item>
  );
};

InputNumber.displayName = 'InputNumber';
export default InputNumber;
