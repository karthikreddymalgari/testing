import React from 'react';



const Props = () => {
    const greenColor={
        
            color:"green"
    }
  return <div><Props2 {...greenColor} /></div>;
};

const Props2=(props)=>{

    return <div>
        <h1 style={props}>karthik</h1>
        {console.log(props)}
    </div>;
}
export default Props;
