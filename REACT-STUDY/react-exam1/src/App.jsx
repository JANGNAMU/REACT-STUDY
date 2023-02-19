import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  // {} 안에는 숫자, 문자의 형태만 출력된다.
  const test = '이게 되네!?'

  const number = 3

  // 인라인 커스텀 스타일 객체
  const myStyle = {
    bgBlack : {
      backgroundColor : '#000'
    },
    txtWhite : {
      color : '#fff'
    },
    txtGreen : {
      color : 'green'
    }
  }

  return (
    <div style={myStyle.bgBlack}>
      <MyHeader />
      <h2 style={myStyle.txtWhite}>React Start! {test}</h2>
      <b style={myStyle.txtGreen}>
        {/* 조건식 결과에 따른 랜더링 가능 */}
        {number} 👉 {number % 2 === 0 ? '짝수' : '홀수'} 입니다.
      </b>
      <MyFooter/>
    </div>
  );
}

// module.exports = {}
// 밖에서 app.jsx의 경로를 통해 import 할 경우 함수명 기입
export default App;
