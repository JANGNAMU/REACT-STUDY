import DiaryItem from './DiaryItem'

/** 
 * 작성한 다이어리를 보여주기 위한 리스트 컴포넌트
 */
const DiaryList = ({onRemove, onEdit, diaryList}) => {
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 존재합니다.</h4>
            <div>
                {diaryList.map( diary => (
                    <DiaryItem 
                        key={diary.id} 
                        {...diary}
                        onRemove = {onRemove}
                        onEdit = {onEdit}
                    />
                ))}
            </div>
        </div>
    )
}

DiaryList.defaultProps = {
    diaryList : []
}

export default DiaryList;