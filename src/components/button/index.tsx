import React, { FC } from 'react';
import { Form, Button as AntButton } from 'antd';
import type { FormInstance } from 'antd/es/form';
import cx from 'classnames';

interface ButtonProps {
  href?: string;
  items?: any;
  formRef?: FormInstance;
  className?: string;
  __designMode?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { formRef, href, __designMode, className, items = [], ...otherProps } = props;
  const innerProps: any = {};
  if (!href?.trim() || __designMode === 'design') {
    // 解决低代码编辑器中按钮设置href属性造成按钮点击重定向问题
    innerProps.href = undefined;
  }

  return (
    <Form.Item
      className={cx({
        [className]: !!className,
      })}
      {...otherProps}
    >
      {items?.map((item: any, i) => {
        const { action, type, children, ...buttonProps } = item;

        let _type = '';
        let _htmlType = '';
        let onClick = null;

        switch (action) {
          case 'submit':
            _type = 'primary';
            _htmlType = 'submit';
            break;
          case 'reset':
            _type = 'default';
            _htmlType = 'button';
            onClick = () => {
              formRef.resetFields();
            };
            break;
          default:
            _type = 'default';
            break;
        }

        if (type) {
          _type = type;
        }

        return (
          <AntButton type={_type} htmlType={_htmlType} onClick={onClick} {...buttonProps}>
            {item.children}
          </AntButton>
        );
      })}
    </Form.Item>
  );
};

Button.displayName = 'Button';
export default Button;
