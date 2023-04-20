import React, { Children, FC } from 'react';
import { Form } from 'antd';
import cx from 'classnames';

interface FormItemProps {
  layout: string;
  className?: string;
  children?: React.ReactNode;
}

const FormItem: FC<FormItemProps> = (props: any) => {
  const { label = '表单项', layout, className, children, ...otherProps } = props;
  return (
    <Form.Item
      label={label}
      className={cx({
        [className]: !!className,
        'zero-form-vertical': layout === 'vertical',
        'zero-from-horizontal': layout === 'horizontal',
      })}
      {...otherProps}
    >
      {children}
    </Form.Item>
  );
};

FormItem.displayName = 'Form.Item';
export default Form.Item;
