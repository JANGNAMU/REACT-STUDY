/* 다이어리 리스트의 요소 수만큼 반복하며 그릴 아이템 */
const DiaryItem = ({ id, author, content, happy, createDate }) =>{

    const happyPoint = [
        '🥲', '😐', '😌', '😊', '🥰'
    ]

    return (
        <div className="DiaryItem">
            <span>
                작성자 : {author} | 행복점수 : {happyPoint[happy - 1]}
            </span>
            <br />
            <span className="date">
                {new Date(createDate).toDateString()}
            </span>
            <div className="content">{content}</div>
        </div>
    )
}

export default DiaryItem