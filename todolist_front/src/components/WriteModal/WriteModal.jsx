import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atoms/userAtoms';
import ReactModal from 'react-modal';
import { css } from '@emotion/react';
import { registerTodoApi, todolistApi } from '../../apis/todoApi';
import { todoParamsAtom, todolistAtom } from '../../atoms/todolistAtoms';
/** @jsxImportSource @emotion/react */

function WriteModal({ writeModal, closeModal}) {
    const [ user, setUser ] = useRecoilState(userAtom);
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ todoParams, setTodoParams ] = useRecoilState(todoParamsAtom);
    const nowYearAndMonth = {
        year: new Date().getFullYear(),
        month: new Date().getMonth()
    }

    const [ registerDate, setRegisterDate ] = useState(nowYearAndMonth.year + "-" + (nowYearAndMonth.month - 10 > -1 ? "" : "0") + (nowYearAndMonth.month + 1));
    const [ writeInput, setWriteInput ] = useState({
        content: "",
        registerDate: registerDate,
        state: 0,
        userId: user.userId
    })

    const getTodolist = async () => {
        const response = await todolistApi(todoParams);
        if(response.status === 200) {
            setTodolist(response.data);
        } else {
            setTodolist([]);
        }
    }

    const handleInputOnChange = (e) => {
        setWriteInput(writeInput => {
            return {
                ...writeInput,
                [e.target.name]: e.target.value,
                userId: user.userId
            }
        })
    }

    const handleWriteSubmitClick = async () => {
        const response = await registerTodoApi(writeInput)
        if(response.status === 200) {
            alert("TODO 등록 완료.");
            await getTodolist();
        }else {
            alert("TODO 등록 실패.");
        }
        setWriteInput({
            content: "",
            registerDate: registerDate,
            state: 0,
            userId: user.userId
        })
        closeModal();
        
    }

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
            isOpen={writeModal}
            onRequestClose={closeModal}
            >
            <div css={css`display: flex; flex-direction: column; justify-content: center; align-items:center; height: 100%;`}>
                <h2>TO-DO-LIST</h2>
                <input type="text" name='content' onChange={handleInputOnChange} value={writeInput.content} placeholder='해야 할 일 입력'/>
                <input type="month" name='registerDate' onChange={handleInputOnChange} value={writeInput.registerDate} />
                <div>
                    <button onClick={handleWriteSubmitClick}>WRITE</button>
                    <button onClick={closeModal}>취소</button>
                </div>
            </div>        
        </ReactModal>
    );
}

export default WriteModal;