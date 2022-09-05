import React,{useState} from 'react';

const DeleteItem = () => {
 const list = [{id:"1",name:"Apple"},{id:"2",name:"Orange"},{id:"3",name:"Banana"},{id:"4",name:"Pineapple"}]
 const [lists,setLists] = useState(list)
 const deleteHandler=(id)=>{return setLists(lists.filter(item=>item.id!==id))}
 const removeHandler=(e)=>{
            setLists(lists.filter(item=>e.target.name!=item.name))
            console.log(e.target.name + " is deleted from the list");

}
  return <div style={{textAlign:"center"}}>
      {
          lists.map(item=>{return <ListItem item={item} key={item.id} delete={deleteHandler} remove={removeHandler}/>})
      }
  </div>;
};

const ListItem = (props)=>{
    const styling={
        backgroundColor:"red",
        width:"30px",
        height:"fit-content",
        cursor:"pointer"
    
    }
    
    return <div style={{display:"flex",justifyContent:"space-evenly",width:"30%",marginTop:"10px"}}>
        <div>{props.item.name}</div>
        <button style={styling} onClick={()=>props.delete(props.item.id)}>X</button><br/><br/>
        <button name={props.item.name} style={{backgroundColor:"black",border:"1px solid grey",color:"white",display:"flex",height:"fit-content",cursor:"pointer"}} onClick={props.remove}>Delete Item</button>
    </div>;
}
export default DeleteItem;
