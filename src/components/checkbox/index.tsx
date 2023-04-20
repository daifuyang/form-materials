import React, { FC } from 'react';
import { Checkbox as AntCheckbox } from 'antd';

interface CheckboxProps {
  __designMode: string;
}

const Checkbox: FC<CheckboxProps> = (props: any) => {
  const { __designMode, options = [] } = props;

  if (__designMode === 'design' && options.length === 0) {
    return <div style={{ color: '#999', cursor: 'pointer' }}>[多选框]请在右侧配置中指定可选项</div>;
  }

  return <AntCheckbox.Group {...props} />;
};

Checkbox.displayName = 'Checkbox';
export default Checkbox;
