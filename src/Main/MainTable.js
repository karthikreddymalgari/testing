import React from 'react'
import StructuredTable from './StructuredTable';
// import TableStructure from './Table/TableStructure';
const MainTable = () => {
const data = {
    columns:[
        {label:"Name",uid:"name"},
        {label:"Age",uid:"age"},
        {label:"Country",uid:"country"},
        
    ],
    rows:[
        {name:"Karthik",age:"24",country:"India"},
        {name:"Sai",age:"23",country:"Japan"},
        {name:"Vikas",age:"25",country:"China"},   
    ],
}
  return (
    <div>
        {/* {data.columns.map(item=><TableStructure rows={data.rows} columns={data.columns}/>)} */}
        {/* <TableStructure/> */}
        <StructuredTable/>
    </div>
  )
}

export default MainTable