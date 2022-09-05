import React, { useState,useMemo } from 'react'

const Memo = () => {

    const [a,setA] = useState(0)
    const [b,setB] = useState(0)
    const sum = useMemo(()=>{return Sum(a,b)},[a,b])
    return (
        <div>
            <input type="number" value={a} onChange={(e)=>setA(e.target.value)}/>
            <input type="number" value={b} onChange={(e)=>setB(e.target.value)}/>
            <h1>{sum}</h1>
        </div>
    )
}

function Sum(a,b) {
    for(var i=0; i<100000000000000; i++){}
    return parseInt(a) + parseInt(b);
}

export default Memo
