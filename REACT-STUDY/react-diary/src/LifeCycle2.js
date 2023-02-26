import React, { useEffect, useState } from "react";

const UnMountTest = () => {
    useEffect( () => {
        // when we mount
        console.info('test Mount!')

        return () => {
            console.info('test Unmount!')
        }
    }, [])
    return <div>Unmount Test Component</div>
}

/* 생명주기를 확인하기 위한 컴포넌트 */
const LifeCycle2 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible)

    return (
        <div style={{padding : 20}}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnMountTest/>}
        </div>
    )
}

export default LifeCycle2;