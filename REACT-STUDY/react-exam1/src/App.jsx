import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';

function App() {
  /*
  // {} 안에는 숫자, 문자의 형태만 출력된다.
  const test = '이게 되네!?'
  const number = 3

  // 인라인 커스텀 스타일 객체
  const myStyle = {
    bgBlack : { backgroundColor : '#000' },
    txtWhite : { color : '#fff' },
    txtGreen : { color : 'green' }
  } 
  */
  const counterProps = {
    initialValue : 5,
    a : 1,
    b : 2,
    c : 3
  }

  return (
    <div>
      <MyHeader />
      <Counter {...counterProps} />
    </div>
  );
}

// module.exports = {}
// 밖에서 app.jsx의 경로를 통해 import 할 경우 함수명 기입
export default App;
