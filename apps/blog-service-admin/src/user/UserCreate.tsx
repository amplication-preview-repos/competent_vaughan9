import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <BooleanInput label="isAdmin" source="isAdmin" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="password" source="password" />
      </SimpleForm>
    </Create>
  );
};
