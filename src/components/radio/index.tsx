import React, { FC } from 'react';
import { Radio as AntRadio } from 'antd';

interface RadioProps {
  __designMode: string;
}

const Radio: FC<RadioProps> = (props: any) => {
  const { __designMode, options = [] } = props;

  if (__designMode === 'design' && options.length === 0) {
    return <div style={{ color: '#999', cursor: 'pointer' }}>[单选框]请在右侧配置中指定可选项</div>;
  }

  return <AntRadio.Group {...props} />;
};

Radio.displayName = 'Radio';
export default Radio;
