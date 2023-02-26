import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'
// import LifeCycle from './LifeCycle';
// import LifeCycle2 from './LifeCycle2';

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
  // api 통신을 통한 데이터 받아오기
  const getDummy = async() => {
    const res = 
      await fetch('https://jsonplaceholder.typicode.com/comments')
      .then( res => res.json())
    
    const initData = () => res.slice(0, 20).map( init => {
        return ({
          author : init.email,
          content : init.body,
          happy : Math.floor(Math.random() * 5)+1,
          submitDate : new Date().getTime(),
          id : diaryId.current++
        })
      }
    )

    setDiaries(initData)
  }
  // App이 마운트 되는 경우, fetch 요청
  useEffect( () => {
    getDummy();
  }, [])

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

  // 일기를 수정하기 위한 함수
  const onEdit = (targetId, editContent) => {
    /**
     * 왜 DiaryItem에 정의하지 않고 여기에 선언하는 지?
     * react의 특성 : 
     * 데이터는 부모 -> 자식으로
     * 이벤트는 자식 -> 부모로 이동하기 때문에
     * 데이터를 가지고 내려갈 수 있도록 부모에 선언
     */
    setDiaries( 
      diaries.map( diary => 
        diary.id === targetId ? 
          {...diary, content: editContent} : diary
      )
    )
  }
  /**
   * 일기의 행복 점수를 분석하는 함수
   * 기존에 선언했던 함수에 useMemo를 사용하게 되면,
   * not a fuction 에러가 발생하게 된다.
   * 왜냐하면 useMemo는 기존함수가 리턴 한 값을 받아
   * 리턴하기 때문에 함수명()이 아닌 함수명 으로만 사용해야하며
   * 두번째 인자로 선언한 값이 변경되지 않는 이상 항상 값을 기억하고 있다.
   */
  const getDiariesAnalysis = useMemo(() => {
      console.info(`[일기 행복점수 분석을 시작합니다]`)

      const happyCount = diaries.filter( diary => diary.happy >= 3).length
      const unHappyCount = diaries.length - happyCount
      const happyRatio = Number.parseInt((happyCount / diaries.length) * 100)
      
      return {happyCount, unHappyCount, happyRatio}
    }, [diaries.length])

  const {happyCount, unHappyCount, happyRatio} = getDiariesAnalysis

  return (
    <div className='App'>
      {/* <LifeCycle />
      <LifeCycle2 /> */}
      <DiaryEditor onSubmit={onSubmit} />
      <div>
        <h5>전체 일기 수 : {diaries.length} 개</h5>
        <h5>행복했던 일기 수 : {happyCount} 개</h5>
        <h5>서운했던 일기 수 : {unHappyCount} 개</h5>
        <h5>행복한 일기의 비율 : {happyRatio}%</h5>
      </div>
      <DiaryList 
        diaryList={diaries} 
        onRemove={onRemove}
        onEdit={onEdit}
      />
    </div>
  );
}

export default App;
