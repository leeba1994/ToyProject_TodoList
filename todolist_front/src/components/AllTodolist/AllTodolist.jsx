import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import axios from 'axios';
import ReactModal from 'react-modal';
import { css } from '@emotion/react';

function AllTodolist({ setTodolists, filterTodolists }) {
    const [ todolistModal, setTodolistModal ] = useState(false);
    const [ checkedBox, setCheckedBox ] = useState(0);
    const [ todolist, setTodolist ] = useState({
        todolistId: "",
        content: "",
        registerDate: ""
    })

    useEffect(() => {
        setTodolist(todolist => {
            return {
                ...todolist,
                todolistId: checkedBox
            }
        })
    }, [checkedBox])

    const handleTodolistClick = () => {
        setTodolistModal(true);
    }

    const closeModal = () => {
        setTodolistModal(false);
    }

    const handleTodolistInputOnChange = (e) => {
        setTodolist(todolist => {
            return {
                ...todolist,
                [e.target.name]: e.target.value
            }
        })
    }


    const handleCheckBoxChange = (e) => {
        setCheckedBox(e.target.checked ? e.target.value : 0);
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

    const handleChangeStateClick = async () => {
        try {
            const response = await axios.put("http://localhost:8080/api/v1/todo/state", todolist)
            console.log(response.data);
        } catch(e) {
            console.error(e);
        }
        requestAllTodolist();
    }

    const handleUpdateClick = async () => {
        try {
            const response = await axios.put("http://localhost:8080/api/v1/todo", todolist);
            console.log(response.data);
        } catch(e) {
            console.error(e);
        }
        setTodolist({
            todolistid: "",
            content: "",
            registerDate: ""
        })
        requestAllTodolist();
        closeModal();        
    }
 
    const handleDeleteClick = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/todo/${todolist.todolistId}`);
            console.log(response.data);
        } catch(e) {
            console.error(e);
        }
        requestAllTodolist();
        alert("삭제 완료");
    }
    return (
        <div css={s.container}>
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
                    <input type="text" name='content' onChange={handleTodolistInputOnChange} value={todolist.content} placeholder='수정 내용 입력'/>
                    <input type="month" name='registerDate' onChange={handleTodolistInputOnChange} value={todolist.registerDate}/>
                    <div>
                        <button onClick={handleUpdateClick}>수정하기</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>        
            </ReactModal>
            {
                filterTodolists.filter(todo => todo.checkedState === 0).map(todo => 
                    <div css={s.listBox} key={todo.todolistId}>
                        <div css={s.ipBox}>
                            <input type="checkbox" onChange={handleCheckBoxChange} checked={todo.todolistId === parseInt(checkedBox)} css={s.checkbox} value={todo.todolistId} />
                            <p>{todo.content}</p>
                        </div>
                        {
                            todo.todolistId === parseInt(checkedBox) ? 
                            <div css={s.buttonBox}>
                                <button css={s.button} onClick={handleTodolistClick}>수정</button>
                                <button css={s.button} onClick={handleDeleteClick}>삭제</button>
                                <button css={s.button} onClick={handleChangeStateClick}>확인</button>
                            </div> : <div></div>
                        }
                        

                    </div>
                )
            }

        </div>
    );
}

export default AllTodolist;