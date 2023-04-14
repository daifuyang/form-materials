import React, { FC } from 'react';
import { Col as AntCol } from 'antd';

const Col = (props: any) => {
  const { children, ...otherProps } = props;
  return <AntCol {...otherProps}>{children}</AntCol>;
};

Col.displayName = 'Row';
export default Col;
