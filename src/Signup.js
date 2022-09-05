import { useState } from "react";
import Card2 from "./Card2";

export default function Signup() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [index, setIndex] = useState("");
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (edit) {
      const newList = data.map((i) => {
        if(i.id === index){
            return {...i,name}
        }
    }
      );
      console.log(newList)
      setData([newList]);
      setEdit(false);
    }
    else{
    const newData = { id:new Date().getTime().toString(),name: name, age: age };
    setData([ ...data,newData]);
    // setName("");
    }
  };

  const UpdateHandled = (id,p) => {
    setName(data[p].name);
    setAge(data[p].age);
    setIndex(id);
    setEdit(true);
    // setData([...data,{id:id}])
  };

  return (
    <>
      <div
        className="App"
        style={{
          border: "1px solid",
          width: "180px",
          backgroundColor: "aqua",
          padding: "5px",
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={submitHandler}>ADD</button>
      </div>
      {data &&
        data.map((item,a) => {
          return (
            <div>
              <Card2 Name={item.name} />
              <button onClick={()=>UpdateHandled(item.id,a)}>UPDATE</button>
            </div>
          );
        })}
    </>
  );
}
