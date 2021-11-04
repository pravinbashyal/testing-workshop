import "./App.css";
import React from "react";
import { Form } from "./Form";
import { Table } from "./Table";
import { useApi } from "./useApi";

function App() {
  const { onSubmit, isLoading, data } = useApi();

  return (
    <div className="App">
      <Form onSubmit={onSubmit}></Form>
      <Table data={data} isLoading={isLoading}></Table>
    </div>
  );
}

export default App;
