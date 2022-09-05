import React from "react";

const StructuredTable = (props) => {
  return (
      <div>
        {props.rows.map(item=>
            <table>
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.country}</td>
            </tr>
          </table>
            )} 
    </div>
  );
};

export default StructuredTable;
