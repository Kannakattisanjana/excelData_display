import React, { useState } from "react";
import { Input } from "antd";
import axios from "axios";
import { userColumns } from "./colums";
import { useTableSearch } from "./useTableSearch";
import "antd/dist/antd.css";
import Table from "./Table";
import './App.css';

const { Search } = Input;

const fetchUsers = async () => {
  const { data } = await axios.get(
    "http://127.0.0.1:5000/filedata/"
  );
  return { data };
};

export default function App() {
  const [searchVal, setSearchVal] = useState(null);

  //const [currentPage, setCurrentPage] = useState(1);

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers
  });

  return (
    <div class="body">
      <div class = "header">
        <h1>Funds Ratings</h1>
      </div>
      <Search
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search"
        enterButton
        style={{
          position: "relative",
          top: "10",
          align:"center",
          marginTop: "2vh",
          border: "5px solid lightblue"
        }}
      />
          
      <br /> <br />
      <div>
      <Table
        rowKey="name"
        dataSource={filteredData}
        columns={userColumns}
        loading={loading}
        pagination={true}
        style={{
          border: "10px solid gray",
          align:"center",
          position:"relative"
        }}
      />
      </div>
    </div>
  );
}
