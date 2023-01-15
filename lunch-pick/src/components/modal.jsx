import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div className="modal hidden">
                <h3>모달제목</h3>
                <div className='selected-menu'>
                    {/* 메뉴이름 */}
                </div>
                <button type='button' 
                        className='btn-modal'
                        id="btn-select"
                >좋아요</button>
                <button type='button'
                        className='btn-modal'
                        id="btn-re-select"
                >다시 고를래요</button>
            </div>
        );
    }
}

export default Modal;