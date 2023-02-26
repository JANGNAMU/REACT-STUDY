/* 다이어리 리스트 아이템 */
const DiaryItem = ({ onRemove, id, author, content, happy, submitDate }) =>{
    // 행복점수 정도에 따른 표현
    const happyPoint = ['🥲', '😐', '😌', '😊', '🥰']

    return (
        <div className="DiaryItem">
            <span>
                작성자 : {author} | 행복점수 : {happyPoint[happy - 1]}
            </span>
            <br />
            <span className="date">
                {new Date(submitDate).toDateString()}
            </span>
            <div className="content">{content}</div>
            <button onClick={ () => {
                if(window.confirm(`${id+1}번째 일기를 정말 삭제하시겠습니까?`)){
                    onRemove(id)
                }
            }}>삭제하기</button>
        </div>
    )
}

export default DiaryItem