import React, { FC, Ref, forwardRef } from 'react';
import { Input as AntInput } from 'antd';

interface InputProps {
  layout: string;
  className?: string;
}

const Input: FC<InputProps> = (props: InputProps) => {
  return <AntInput {...props} />;
};

Input.displayName = 'Input';
export default Input;
