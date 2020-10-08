import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";

import "./App.css";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource
        name="content"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      ></Resource>
    </Admin>
  );
}

export default App;
