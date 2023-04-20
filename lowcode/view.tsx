import React, { createElement, useCallback, useContext, useEffect, useState } from 'react';

import hoistNonReactStatic from 'hoist-non-react-statics';

import { Form as AntdForm } from 'antd';

import Form from '../src/components/form';

import Button from '../src/components/button';

const FormContext = React.createContext<any>({});

const FormView = (props: any) => {
  const { _leaf, __designMode } = props;
  const [fields, setFields] = useState({});
  const fieldsObj: any = {};

  const [formRef] = AntdForm.useForm();

  useEffect(() => {
    if (__designMode) {
      _leaf.setPropValue('_fields', fields);
    }
  }, [__designMode, _leaf, fields]);

  const setFormItem = useCallback((componentId: any, item: any) => {
    if (componentId) {
      fieldsObj[componentId] = item;
      setFields({ ...fieldsObj });
    }
  }, []);

  return (
    <FormContext.Provider
      value={{
        setFormItem,
        formRef,
      }}
    >
      <Form form={formRef} {...props}>
        {props.children}
      </Form>
    </FormContext.Provider>
  );
};

const FormItem = (props: any) => {
  const { label, name, componentId } = props;
  const { setFormItem } = useContext(FormContext);

  useEffect(() => {
    if (name && componentId) {
      const _label = label || name;
      setFormItem(componentId, { name, label: _label });
    }
  }, [componentId, label, name, setFormItem]);

  return <AntdForm.Item {...props} />;
};

(FormView as any).Item = FormItem;

const ButtonView = (props: any) => {
  const { formRef } = useContext(FormContext);

  return <Button formRef={formRef} {...props} />;
};

hoistNonReactStatic(FormView, Form);
hoistNonReactStatic(ButtonView, Button);

export { FormView as Form, ButtonView as Button };
