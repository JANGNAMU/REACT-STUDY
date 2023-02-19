/* +/- 에 따라 값 변환을 주는 컴포넌트 */
import { useState } from "react";

const Counter = props => {
    
    console.info(`props : `, props)

    // 값의 상태를 관리할 state
    // [상태값, 상태변환함수]
    const [count, setCount] = useState(0);
    
    // 상태값 증가를 위한 함수
    const onIncrease = () => setCount(count + 1)

    // 상태값 감소를 위한 함수
    const onDecrease = () => setCount(count - 1)

    return (
        <>
            <h4>{count}</h4>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </>
    )
}

export default Counter;