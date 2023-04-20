import React, { FC } from 'react';
import { Input as AntInput } from 'antd';

interface TextAreaProps {

}

const TextArea: FC<TextAreaProps> = (props:any) => {
  return <AntInput.TextArea {...props} />
};

TextArea.displayName = 'TextArea';
export default TextArea;
