import { useRef, useState } from 'react';
import './App.css'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'

/* 임의의 일기 데이터 */
// const dummyList = [
//   {
//     id : 1,
//     author : '홍길동',
//     content : '일기 내용입니다',
//     happy : 3,
//     createDate : new Date().getTime(),
//   },
//   {
//     id : 2,
//     author : '김철수',
//     content : '일기 내용일걸요?',
//     happy : 5,
//     createDate : new Date().getTime(),
//   },
//   {
//     id : 3,
//     author : '김영희',
//     content : '일기 내용이었습니다',
//     happy : 1,
//     createDate : new Date().getTime(),
//   },
// ]

/**
 * 전반적인 앱
 */
function App() {
  // 하위 컴포넌트에서 주고 받을 수 있는 일기 state
  const [diaries, setDiaries] = useState([])

  // 고유 id를 지정하기 위한 ref
  const diaryId = useRef(0)
  // 일기를 등록하기 위한 함수
  const onSubmit = (author, content, happy) => {
    const submitDate = new Date().getTime()
    const newDiary = {
      author,
      content,
      happy,
      submitDate,
      id : diaryId.current,
    }
    // 등록 완료 후, id 값을 해줄 ref
    diaryId.current += 1
    // prop으로 전달할 useState
    setDiaries([newDiary, ...diaries])
  }
  // 일기를 삭제하기 위한 함수
  const onRemove = (targetId) => {
    /**
     * 1) id를 받아와 diaries 안의 동일한 data를 찾는다
     * 2) 동일한 id를 가진 data를 지우고 나머지 data로 state를 재구성한다
     */
    const resetDiary = diaries.filter(item => item.id !== targetId)
    setDiaries([...resetDiary])
    console.info(`${targetId+1} 번째 일기가 삭제되었습니다`)
  }

  return (
    <div className='App'>
      <DiaryEditor onSubmit={onSubmit} />
      <DiaryList 
        diaryList={diaries} 
        onRemove={onRemove}
      />
    </div>
  );
}

export default App;
