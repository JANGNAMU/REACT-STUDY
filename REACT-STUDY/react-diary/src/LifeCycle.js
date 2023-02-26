import { useEffect, useState } from "react";

/* 생명주기를 확인하기 위한 컴포넌트 */
const LifeCycle = () => {
    // 카운트 개념의 state
    const [count, setCount] = useState(0)
    // 입력값 확인을 위한 state
    const [text, setText] = useState("")
    /**
     * useEffect( () => {콜백함수}, [대상] )
     * 생명주기 중 어떠한 시점을 활용하기 위한 리액트 훅
     * 어떠한 대상에 변화가 일어나면 콜백함수를 실행시켜준다
     */
    // mount 확인을 위한 useEffect
    useEffect( () => {
        console.info('Mount!')
    }, [])
    // update 확인을 위한 effect
    useEffect( () => {
        console.info('Update!')
    })
    // 어떠한 대상(state)의 변화를 감지할 때 콜백함수 실행
    useEffect( () => {
        if(count > 5){
            alert(` 현재 카운트 : ${count} \n 카운트가 5를 초과하여 리셋합니다.`)
            setCount(0)
        }
    }, [count])


    return (
        <div style={{padding : 20}}>
            <div>
                {count}
                <button 
                    style={{marginLeft:6}}
                    onClick={() => setCount(count+1)}
                >+</button>
            </div>
            <input 
                value={text} 
                onChange={ e => setText(e.target.value)} 
            />
        </div>
    )
}

export default LifeCycle;