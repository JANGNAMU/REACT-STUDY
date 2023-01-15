import React, { Component } from 'react';

class Category extends Component {
    state = { };

    render() {
        return (
            <ul className='category-wrap'>
                <li className="category pick">전체</li>
                <li className="category">밥</li>
                <li className="category">면</li>
                <li className="category">국/찌개</li>
                <li className="category">패스트푸드</li>
                <li className="category">기타</li>
            </ul>
        );
    }
}

export default Category;