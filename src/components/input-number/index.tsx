import React, { FC } from 'react';
import { InputNumber as AntInputNumber } from 'antd';

interface InputNumberProps {

}

const InputNumber: FC<InputNumberProps> = (props:any) => {
  return <AntInputNumber {...props} />
};

InputNumber.displayName = 'InputNumber';
export default InputNumber;
