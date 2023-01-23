import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  /* 
    state를 사용하는 이유는?
    state 값이 바뀔 때 html도 바로 재렌더링 되어 적용되도록 할 수 있기 때문.
  */

  /* 포스트 제목 */
  const [postLists, setPostLists] = useState( ['용산구 맛집', '삼각지 맛집', '신사동 맛집'] )
  /* 포스트 날짜 */
  const [postDates, setPostDates] = useState(['23.01.19', '23.01.20', '23.01.21'])
  /* 좋아요 */
  const [likes, addLikes] = useState([0, 0, 0]);

  /* 포스트 내용 배열 */
  const [postInfo, setPostInfo] = useState([
    { 
      title : '용산구 당신만 모르는 맛집',
      date : '23.01.19',
      likes : 0
    },
    { 
      title : '삼각지 핫플레이스',
      date : '23.01.19',
      likes : 0
    },
    { 
      title : '영등포 쇼핑하기 좋은 곳',
      date : '23.01.19',
      likes : 0
    },
  ])  

  /* 모달 상태 관리 */
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      {
        [...postInfo].map( (post, idx) => {
          return (
            <div className='list' key={`list${idx}`}>
            <h4
                onClick={ e => {
                  console.info('e : ', e)
                    e.preventDefault();
                    showModal ? setShowModal(false) : setShowModal(true)
                  }  
                }> 
                { post.title }
                <span 
                  className='likes'
                  onClick={ e => {
                    console.info('idx : ', idx, postInfo[idx], setPostInfo)
                    switch(idx){
                      case 0 : 
                        setPostInfo(postInfo[idx].likes = [ postInfo[idx].likes[0] + 1 , postInfo[idx].likes[1], postInfo[idx].likes[2]] )
                        break;
                      case 1 : 
                        setPostInfo(postInfo[idx].likes = [ postInfo[idx].likes[0] , postInfo[idx].likes[1]+ 1, postInfo[idx].likes[2]] )
                        break;
                      case 2 : 
                        setPostInfo(postInfo[idx].likes = [ postInfo[idx].likes[0], postInfo[idx].likes[1], postInfo[idx].likes[2]+ 1] )
                        break;
                    }
                    
                  }}
                > ❤️‍🔥 {post.likes}</span>
              </h4>
              <p>{post.date}</p>
          </div>
          )
        })
      }

      { showModal ? 
        <Modal
          postInfo = {postInfo}
        /> 
        : null  
      }

    </div>
  );
}

/**
 * 모달의 나타내기 위한 선언
 */
const Modal = props => {
  console.info('props : ', props.postInfo[0].title)
  return(
    <div className='modal' id='modal'>
      <h4>{props.postInfo[0].title}</h4>
      <p>{props.postInfo[0].date}</p>
      <p>상세내용</p>
      <button 
        type='button'
        // onClick={ e => { 
        //   props.changePostName(props.postName = ['여자코트추천', '삼각지 맛집', '서초구 맛집']) 
        // }}
      >글수정</button>
    </div>
  )
}

export default App;