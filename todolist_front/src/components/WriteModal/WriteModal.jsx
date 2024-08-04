import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import ReactModal from 'react-modal';
import { registerTodoApi, todolistApi } from '../../apis/todoApi';
import { todoParamsAtom, todolistAtom } from '../../atoms/todolistAtoms';
/** @jsxImportSource @emotion/react */

function WriteModal({ writeModal, closeModal}) {
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ todoParams, setTodoParams ] = useRecoilState(todoParamsAtom);
    const [ writeInput, setWriteInput ] = useState({
        content: "",
        registerDate: todoParams.registerDateregisterDate,
        state: 0,
        userId: todoParams.userId
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
                userId: todoParams.userId
            }
        })
    }

    const handleWriteSubmitClick = async () => {
        if(writeInput.content === "") {
            alert("내용을 입력하세요.");
            return;
        }
        const response = await registerTodoApi(writeInput)
        if(response.status === 200) {
            alert("TODO 등록 완료.");
            await getTodolist();
        }else {
            alert("TODO 등록 실패.");
        }
        setWriteInput({
            content: "",
            registerDate: todoParams.registerDate,
            state: 0,
            userId: todoParams.userId
        })
        closeModal();
    }

    useEffect(() => {
        setWriteInput({
            content: "",
            registerDate: todoParams.registerDate,
        })
    }, [writeModal])

    return (
        <ReactModal
            style={{
                content: {
                    boxSizing: 'border-box',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    border: '2px solid #7A90E2',
                    borderRadius: '10px',
                    padding: '20px',
                    width: '300px',
                    height: '300px',
                    backgroundColor: '#fafafa',
                }
            }}
            isOpen={writeModal}
            onRequestClose={closeModal}
            >
            <div css={s.modalBox}>
                <h2>TO-DO</h2>
                <input type="month" name='registerDate' onChange={handleInputOnChange} value={writeInput.registerDate} />
                <input type="text" name='content' onChange={handleInputOnChange} value={writeInput.content} placeholder='TO-DO'/>
                <div css={s.buttonBox}>
                    <button onClick={handleWriteSubmitClick}>Write</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>        
        </ReactModal>
    );
}

export default WriteModal;