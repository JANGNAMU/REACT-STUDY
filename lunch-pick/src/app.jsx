import React, { Component } from 'react';
import './app.css';
import Title from './components/title';       // 타이틀
import Category from './components/category'; // 카테고리
import Contents from './components/contents'; // 룰렛 / 버튼 / 모달


class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Title />
        <Category />
        <Contents />
      </>
    )
  }
}

export default App;