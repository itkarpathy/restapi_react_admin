import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

function PostCreate(props) {
  return (
    <Create title="Create a content" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="applicationId" />
        <TextInput multiline source="type" />
        <TextInput multiline source="url" />
        <TextInput multiline source="time" />
        <DateInput label="Published" source="time" />
      </SimpleForm>
    </Create>
  );
}

export default PostCreate;
