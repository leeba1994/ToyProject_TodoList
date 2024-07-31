import React, { useState } from 'react';

function UpdateModal({ updateModal, closeModal }) {
    const [ updateTodo, setUpdateTodo ] = useState({
        content: "",
        registerDate: ""
    })
    return (
             <ReactModal
                style={{
                    content: {
                    boxSizing: 'border-box',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    padding: '20px',
                    width: '300px',
                    height: '300px',
                    backgroundColor: '#fafafa',
                    }
                }}
                isOpen={updateModal}
                onRequestClose={closeModal}
            >
                <div css={css`display: flex; flex-direction: column; justify-content: center; align-items:center; height: 100%;`}>
                    <h2>TO-DO-LIST</h2>
                    <input type="text" name='content' onChange={handleTodolistInputOnChange} value={todolist.content} placeholder='수정 내용 입력'/>
                    <input type="month" name='registerDate' onChange={handleTodolistInputOnChange} value={todolist.registerDate}/>
                    <div>
                        <button onClick={handleUpdateClick}>수정하기</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>        
            </ReactModal>
    );
}

export default UpdateModal;