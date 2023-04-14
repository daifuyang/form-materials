import React, { FC } from 'react';
import { Form, Slider as AntSlider } from 'antd';

interface SliderProps {

}

const Slider: FC<SliderProps> = (props: any) => {
  const { label = '表单项', ...otherProps } = props;
  return (
    <Form.Item label={label} {...otherProps}>
      <AntSlider />
    </Form.Item>
  );
};

Slider.displayName = 'Slider';
export default Slider;
