import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div className="title">
                <h1>오늘은 뭐 먹지?</h1>
                <h3 className="title-desc">먹고 싶은 종류를 선택해주세요</h3>
            </div>
        );
    }
}

export default Title;