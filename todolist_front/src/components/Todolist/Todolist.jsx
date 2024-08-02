import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import { todoIdAtom, todoParamsAtom, todolistAtom } from '../../atoms/todolistAtoms';
import { deleteTodo, todolistApi, updateTodoState } from '../../apis/todoApi';
import UpdateModal from '../UpdateModal/UpdateModal';
import { PiCircle, PiCheckCircleFill } from "react-icons/pi";

function Todolist() {
    const checkBoxRef = useRef();
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ todoId, setTodoId ] = useRecoilState(todoIdAtom);
    const [ todoParams, setTodoParams ] = useRecoilState(todoParamsAtom);
    const [ checkedBox, setCheckedBox ] = useState(0);
    const [ updateModal, setUpdateModal ] = useState(false);

    const openUpdateModal = () => {
        setUpdateModal(true);
    }

    const closeModal = () => {
        setUpdateModal(false);
        setCheckedBox(0);
    }

    const getTodolist = async () => {
        const response = await todolistApi(todoParams);
        if(response.status === 200) {
            setTodolist(response.data);
        } else {
            setTodolist([]);
        }
    }

    const handleClcikOutside = (e) => {
        const currentRef = checkBoxRef.current;
        if(currentRef && !currentRef.contains(e.target)) {
            handleCheckBoxChange(e);
        }
    }

    const handleCheckBoxChange = (e) => {
        if (e.target.checked) 
            {  
                // setChecked(false)
                console.log(e.target.checked)
                console.log(checkedBox)
                setCheckedBox(e.target.value);
                
                }
                else {
                    setCheckedBox(0);
                    // setChecked(true)
            }

        // console.log(e.target.value)
        // console.log(e.target)
        // setCheckedBox(e.target.checked ? e.target.value : 0);
        setTodoId(e.target.checked ? e.target.value : 0);
    }
 
    const handleDeleteClick = async () => {
        if(window.confirm("Delete?")) {
            try {
                const response = await deleteTodo(todoId);
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
            getTodolist();
            alert("Success Delete");
        } 
    }

    const handleChangeStateClick = async () => {
        if(window.confirm("Change State?")) {
            try {
                const response = await updateTodoState(todoId);
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
            getTodolist();
            alert("Success Change State");
        } 
    }

    // useEffect(() => {
    //     document.addEventListener('click', handleClcikOutside)
    //     return () => {
    //         document.removeEventListener('click', handleClcikOutside)
    //     }
    // }, [checkBoxRef.current])

    useEffect(() => {
        setCheckedBox(0);
    }, [todoParams])
    return (
        <>
            <UpdateModal updateModal={updateModal} closeModal={closeModal} />
            <div css={s.container}>
                <div css={s.todoHeader}><h2>To Do</h2></div>    
                {
                    todolist.filter(todo => todo.state === 0).map(todo => 
                        <div css={s.todoBox} key={todo.todoId}>
                            <div css={s.ipBox}>
                            {/* <label className={`${checked ? "checked" : ""} checkboxCard`}>
                                <input type="checkbox" id="checkTest" onChange={(e) => setChecked(e.target.checked)}/>
                                    <label htmlFor="checkTest">a</label>
                            </label> */}

                                <label htmlFor={todo.todoId} >
                                    {
                                        parseInt(checkedBox) === todo.todoId ? <PiCheckCircleFill css={s.checkIcon} /> : <PiCircle css={s.checkIcon}/>
                                    }
                                </label >
                                <input id={todo.todoId} type="checkbox" 
                                // onChange={(e) => setChecked(e.target.checked)}
                                onChange={handleCheckBoxChange}
                                checked={parseInt(checkedBox) === todo.todoId ? true : false} 
                                value={todo.todoId} ref={checkBoxRef}/>
                                <p>{todo.content}</p>
                            </div>
                            {
                                todo.todoId === parseInt(checkedBox) ? 
                                <div css={s.buttonBox}>
                                    <button css={s.button} onClick={openUpdateModal}>Update</button>
                                    <button css={s.button} onClick={handleDeleteClick}>Delete</button>
                                    <button css={s.button} onClick={handleChangeStateClick}>ChangeState</button>
                                </div> : <div></div>
                            }
                        </div>
                    )
                }
            </div>
        </>
       
    );
}

export default Todolist;