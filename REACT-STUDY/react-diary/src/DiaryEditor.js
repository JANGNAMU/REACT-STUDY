import { useRef, useState } from "react";
/** 
 * 다이어리 작성을 위한 컴포넌트 
 * @param   onSubmit    작성자, 내용, 행복점수를 입력받아 새로 등록하는 prop
 */
const DiaryEditor = ({onSubmit}) =>{
    /* 다이어리의 내용을 관리하기 위한 state */
    const [diaryState, setDiaryState] = useState({
        author : "",
        content : "",
        happy : 3
    })

    // state 초기화를 위한 함수
    const initState = () => {
        setDiaryState({author:"", content:"", happy:""})
    }

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
            authorInput.current.focus()
            return;
        }
        if(diaryState.content.length < 5){
            contentInput.current.focus()
            return;
        }
        // prop으로 전달 받은 useState 해주는 함수에 state 전달
        onSubmit( diaryState.author, diaryState.content, diaryState.happy )
        initState()
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