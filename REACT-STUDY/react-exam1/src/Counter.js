/* +/- 에 따라 값 변환을 주는 컴포넌트 */
import { useState } from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({initialValue}) => {
    // 비구조화를 통해 spread 된 친구 중 받아오고 싶은 키값만 입력
    // console.info(`props : `, initialValue)

    // 값의 상태를 관리할 state
    // [상태값, 상태변환함수]
    const [count, setCount] = useState(initialValue);
    
    // 상태값 증가를 위한 함수
    const onIncrease = () => setCount(count + 1)

    // 상태값 감소를 위한 함수
    const onDecrease = () => setCount(count - 1)

    return (
        <>
            <h4>{count}</h4>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count} />
        </>
    )
}

// 자주 사용하는 props 중 누락방지를 위한 초기값 세팅
Counter.defaultProps = {
    initialValue : 0,
}

export default Counter;