import React, { FC } from 'react';
import { Form, Input as AntInput } from 'antd';

interface TextAreaProps {

}

const TextArea: FC<TextAreaProps> = (props: any) => {
  const { label = '表单项', ...otherProps } = props;
  return (
    <Form.Item label={label} {...otherProps}>
      <AntInput.TextArea />
    </Form.Item>
  );
};

TextArea.displayName = 'TextArea';
export default TextArea;
