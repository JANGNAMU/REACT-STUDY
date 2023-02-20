import { useRef, useState } from "react";

const DiaryEditor = () =>{
    /* 다이어리의 내용을 관리하기 위한 state */
    const [diaryState, setDiaryState] = useState({
        author : "",
        content : "",
        happy : 1
    })

    /* DOM 요소를 직접 컨트롤하기 위한 ref */
    const authorInput = useRef()
    const contentInput = useRef()

    /* onchange 이벤트를 통해 바뀌는 값을 state에 넣어준다 */
    const handleChangeState = e => {
        setDiaryState({
            ...diaryState,
            [e.target.name] : e.target.value,
        })
    }

    /* submit을 위한 함수 */
    const handleSubmit = e => {
        if(diaryState.author.length < 1){
            // alert('작성자는 1글자 이상 입력해주세요')
            authorInput.current.focus()
            return;
        }
        if(diaryState.content.length < 1){
            // alert('일기 내용은 5글자 이상 입력해주세요')
            contentInput.current.focus()
            return;
        }
        alert('저장되었습니다!')
    }

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input
                    ref={authorInput}
                    name='author'
                    value={diaryState.author} 
                    onChange={handleChangeState}
                    placeholder = {'작성자를 입력해주세요!'}
                />
            </div>
            <div>
                <textarea
                    ref={contentInput}
                    name='content'
                    value={diaryState.content}
                    onChange={handleChangeState}
                    placeholder = {'내용을 입력해주세요!'}
                />
            </div>
            <div>
                <label>오늘의 행복 점수 : </label>
                <select
                    name='happy'
                    value={diaryState.happy}
                    onChange={handleChangeState}
                >
                    <option value={1}>🥲</option>
                    <option value={2}>😐</option>
                    <option value={3}>😌</option>
                    <option value={4}>😊</option>
                    <option value={5}>🥰</option>
                </select>
            </div>
            <div>
                <button
                    onClick={handleSubmit}
                >일기 저장하기</button>
            </div>
        </div>
    )
}

export default DiaryEditor;