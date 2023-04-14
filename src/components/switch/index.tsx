import React, { FC } from 'react';
import { Form, Switch as AntSwitch } from 'antd';

interface SwitchProps {

}

const Switch: FC<SwitchProps> = (props: any) => {
  const { label = '表单项', ...otherProps } = props;
  return (
    <Form.Item label={label} {...otherProps}>
      <AntSwitch />
    </Form.Item>
  );
};

Switch.displayName = 'switch';
export default Switch;
