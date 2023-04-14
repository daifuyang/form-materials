import React, { FC } from 'react';
import { Row as AntRow } from 'antd';

const Row = (props: any) => {
  const { children, ...otherProps } = props;
  return <AntRow {...otherProps}>{children}</AntRow>;
};

Row.displayName = 'Row';
export default Row;
