import React from 'react'
import { Base, FormContainer, Group, Input, Label, Submit, Title } from './style/form'

export default function Form({ children, ...restProps }) {
  return (
    <FormContainer {...restProps}>
      {children}
    </FormContainer>
  )
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>
};

Form.Group = function FormGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
};

Form.Label = function FormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>
};

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>
};
