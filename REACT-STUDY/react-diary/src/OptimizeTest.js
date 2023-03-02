import React, { useEffect, useState } from "react";

const CounterA = React.memo(({count}) =>{
    useEffect(() => {
        console.info(`CountA Update! : ${count}`)
    })
    return (<h4>{count}</h4>)
})

const CounterB = React.memo(({obj}) =>{
    useEffect(() => {
        console.info(`CountB Update! : ${obj.count}`)
    })
    return (<h4>{obj.count}</h4>)
})

const OptimizeTest = ()=> {
    const [count, setCount] = useState(1)
    const [obj, setObj] = useState({
        count : 1
    })

    return (
        <div style={{padding: 50}}>
            <div>
                <h2>COUNT A : </h2>
                <CounterA count={count}/>
                <button
                    onClick={()=>{setCount(count)}}
                >A Button</button>
            </div>
            <div>
                <h2>COUNT B : </h2>
                <CounterB obj={obj}/>
                <button
                    onClick={()=>{setObj({count : obj.count})}}
                >B Button</button>
            </div>
        </div>
    )
}

export default OptimizeTest;