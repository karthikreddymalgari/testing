import React, { useEffect, useState } from "react";
import axios from "axios";

const MusicApi = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const apiCall = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input type="text" value={search} onChange={changeHandler} />
      </div>
      <div style={{ textAlign: "center" }}>
        {data.length > 1 ? (
          data.filter(values=>values.title.includes(search)).map((item) => <li>{item.title}</li>)
        ) : (
          <h1>No Data</h1>
        )}
      </div>
    </>
  );
};

export default MusicApi;
