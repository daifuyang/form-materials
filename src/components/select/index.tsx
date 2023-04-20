import React, { FC } from 'react';
import { Select as AntSelect } from 'antd';

interface SelectProps {
  __designMode: string;
}

const Select: FC<SelectProps> = (props: any) => {
  const { __designMode, options = [] } = props;
  if (__designMode === 'design' && options.length === 0) {
    return <div style={{ color: '#999', cursor: 'pointer' }}>[下拉框]请在右侧配置中指定可选项</div>;
  }
  return <AntSelect options={options} />;
};

Select.displayName = 'Select';
export default Select;
