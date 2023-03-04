import React, { useEffect, useRef, useState } from "react"

/* 다이어리 리스트 아이템 */
const DiaryItem = ({ 
    onRemove, 
    onEdit, 
    id, 
    author, 
    content, 
    happy, 
    submitDate 
}) =>{

    // 행복점수 정도에 따른 표현
    const happyPoint = ['🥲', '😐', '😌', '😊', '🥰']
    // 삭제하기 기능 정의
    const handleRemove = () => {
        if(window.confirm(`${id+1}번째 일기를 정말 삭제하시겠습니까?`)){
            onRemove(id)
        }
    }
    // 수정중/수정완료 상태를 체크하기 위한 상태값
    const [isEdit, setIsEdit] = useState(false)
    // 수정하기 버튼 클릭 시, 수정 상태 전환해주는 함수
    const toggleIsEdit = () => setIsEdit(!isEdit)
    // 수정하기 textarea Ref
    const editContentInput = useRef()
    // 수정하기 textarea에 값을 다루기 위한 state
    const [editContent, setEditContent] = useState(content)
    // 수정 취소 시, 실행될 함수 정의
    const handleQuitEdit = () => {
        if (window.confirm(`변경 내용이 저장되지 않을 수 있습니다. 계속하시겠습니까?`)) {
            setIsEdit(false)
            setEditContent(content)
        }
    }
    // 수정 완료 시, prop으로 받아온 수정 함수 적용
    const handleOnEdit = () => {
        if(editContent.length < 5){
            alert('내용은 최소 5글자를 넘어야 합니다')
            editContentInput.current.focus()
            return
        }

        if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
            onEdit(id, editContent)
            setIsEdit(false)
        }
    }


    return (
        <div className="DiaryItem">
            <span>
                작성자 : {author} | 행복점수 : {happyPoint[happy - 1]}
            </span>
            <br />
            <span className="date">
                {new Date(submitDate).toDateString()}
            </span>
            <div className="content">
                {isEdit ?
                    <><textarea
                        ref={editContentInput}
                        value={editContent}
                        onChange={ e => setEditContent(e.target.value)}
                    />
                    </> : 
                    <>{content}</>
                }
            </div>
            {isEdit ? (
                <>
                    <button onClick={handleQuitEdit}>수정 취소</button>
                    <button onClick={handleOnEdit}>수정 완료</button>
                </>
            ) : (
                <>
                    <button onClick={handleRemove}>삭제하기</button>
                    <button onClick={toggleIsEdit}>수정하기</button>
                </>
            )}
        </div>
    )
}

export default React.memo(DiaryItem)