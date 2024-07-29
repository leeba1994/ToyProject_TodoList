import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { css } from '@emotion/react';
import axios from 'axios';
import ReactModal from 'react-modal';
ReactModal.setAppElement("#root");

function Header({ setTodolists }) {
    const [ todolistModal, setTodolistModal ] = useState(false);
    const [ todolistInput, setTodolistInput ] = useState({
        content: "",
        registerDate: "",
        checkedState: 0
    });

    useEffect(() => { 
        requestAllTodolist();
    }, [])

    const handleTodolistClick = () => {
        setTodolistModal(true);
    }

    const closeModal = () => {
        setTodolistModal(false);
    }


    const handleTodolistInputOnChange = (e) => {
        setTodolistInput(todolistInput => {
            return {
                ...todolistInput,
                [e.target.name]: e.target.value
            }
        })
    }

    const requestAllTodolist = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/todolist")
            setTodolists(response.data);
            console.log(response.data)
        } catch(e) {
            console.error(e);
        }
    }

    const handleTodolistSubmitClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/todo", todolistInput);
            console.log(response.data);
        } catch(e) {
            console.error(e);
        }
        setTodolistInput({
            content: "",
            registerDate: "",
            checkedState: 0
        })
        requestAllTodolist();
        closeModal();        
    }

    return (
        <>
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
                isOpen={todolistModal}
                onRequestClose={closeModal}
            >
                <div css={css`display: flex; flex-direction: column; justify-content: center; align-items:center; height: 100%;`}>
                    <h2>TO-DO-LIST</h2>
                    <input type="text" name='content' onChange={handleTodolistInputOnChange} value={todolistInput.content} placeholder='해야 할 일 입력'/>
                    <input type="month" name='registerDate' onChange={handleTodolistInputOnChange} value={todolistInput.registerDate}/>
                    <div>
                        <button onClick={handleTodolistSubmitClick}>작성하기</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>        
            </ReactModal>
            <div css={s.layout}> 
                <h2 css={s.logo}>To Do List</h2>
                <div css={s.nav}>
                    <p css={s.link} onClick={handleTodolistClick}>글쓰기</p>
                </div>
            </div>
        </>
    );
}

export default Header;