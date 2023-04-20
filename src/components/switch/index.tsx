import React, { FC } from 'react';
import { Form, Switch as AntSwitch } from 'antd';

interface SwitchProps {}

const Switch: FC<SwitchProps> = (props: any) => {
  const {} = props;
  return <AntSwitch />;
};

Switch.displayName = 'switch';
export default Switch;
