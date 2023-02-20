import './App.css'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'

const dummyList = [
  {
    id : 1,
    author : '홍길동',
    content : '일기 내용입니다',
    happy : 3,
    createDate : new Date().getTime(),
  },
  {
    id : 2,
    author : '김철수',
    content : '일기 내용일걸요?',
    happy : 5,
    createDate : new Date().getTime(),
  },
  {
    id : 3,
    author : '김영희',
    content : '일기 내용이었습니다',
    happy : 1,
    createDate : new Date().getTime(),
  },
]

function App() {
  return (
    <div className='App'>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
