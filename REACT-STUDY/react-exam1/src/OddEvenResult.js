/* 부모로부터 count를 받아 짝수 홀수 여부 출력 */
const oddEvenResult = ({count}) => {
    // console.info('count : ', count)
    return (
        <>
            <h4>{count%2 === 0 ? '짝수' : '홀수'}</h4>
        </>
    );
}

export default oddEvenResult;