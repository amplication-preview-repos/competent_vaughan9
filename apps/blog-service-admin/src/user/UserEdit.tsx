import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <BooleanInput label="isAdmin" source="isAdmin" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="password" source="password" />
      </SimpleForm>
    </Edit>
  );
};
