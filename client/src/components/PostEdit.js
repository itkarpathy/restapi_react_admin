import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

function PostCreate(props) {
  return (
    <Edit title="Edit data" {...props}>
      <SimpleForm>
        <TextInput disable source="title" />
        <TextInput multiline source="applicationId" />
        <TextInput multiline source="type" />
        <TextInput multiline source="url" />
        <TextInput multiline source="time" />
        <DateInput label="Published" source="time" />
      </SimpleForm>
    </Edit>
  );
}

export default PostCreate;
