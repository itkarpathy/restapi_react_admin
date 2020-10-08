import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="applicationId" />
        <TextField source="type" />
        <TextField source="url" />
        <TextField source="time" />
        <EditButton basePath="/content" />
        <DeleteButton basePath="/content" />
      </Datagrid>
    </List>
  );
};

export default PostList;
