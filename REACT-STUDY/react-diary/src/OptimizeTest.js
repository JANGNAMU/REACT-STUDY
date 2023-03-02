import React, { useEffect, useState } from "react";

const CountView = React.memo(({count}) =>{
    useEffect(() => {
        console.info(`Count Update! : ${count}`)
    })
    return (<h4>{count}</h4>)
})

const TextView = React.memo(({text}) => {
    useEffect(() => {
        console.info(`Text Update! : ${text}`)
    })
    return (<div>{text}</div>)
})

const OptimizeTest = ()=> {
    const [count, setCount] = useState(1)
    const [text, setText] = useState('')

    return (
        <div style={{padding: 50}}>
            <div>
                <h2>COUNT : </h2>
                <CountView count={count}/>
                <button
                    onClick={()=>{setCount(count + 1)}}
                > + </button>
            </div>
            <div>
                <h2>TEXT</h2>
                <TextView text={text}/>
                <input
                    value={text}
                    onChange={ e => {setText(e.target.value)}}
                ></input>
            </div>
        </div>
    )
}

export default OptimizeTest;