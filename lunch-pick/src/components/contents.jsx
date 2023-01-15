import React, { Component } from 'react';

import Roulette from './roulette'; // 룰렛
import Modal from './modal'; // 모달

class Contents extends Component {
    state = { };

    render() {
        return (
            <>
                <Roulette />
                <Modal />
                <button type='button' className='btn-roulette' data-action='start'>점심 고르기</button>
            </>
        );
    }
}

export default Contents;