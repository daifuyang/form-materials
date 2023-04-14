import React, { FC } from 'react';
import { Form, Radio as AntRadio } from 'antd';

interface RadioProps {}

const Radio: FC<RadioProps> = (props: any) => {
  const { label = '表单项', ...otherProps } = props;

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
  ];

  return (
    <Form.Item label={label} {...otherProps}>
      <AntRadio.Group options={options} defaultValue={['Apple']} />
    </Form.Item>
  );
};

Radio.displayName = 'Input';
export default Radio;
