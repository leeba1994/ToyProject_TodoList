import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import { todoIdAtom, todolistAtom } from '../../atoms/todolistAtoms';
import { deleteTodo } from '../../apis/todoApi';

function Todolist() {
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ todoId, setTodoId ] = useRecoilState(todoIdAtom);
    const [ checkedBox, setCheckedBox ] = useState(0);
    const [ updateModal, setUpdateModal ] = useState(false);

    const openUpdateModal = () => {
        setUpdateModal(true);
    }

    const closeModal = () => {
        setUpdateModal(false);
    }

    const handleCheckBoxChange = (e) => {
        setCheckedBox(e.target.checked ? e.target.value : 0);
    }
 
    const handleDeleteClick = async () => {
        try {
            const response = await deleteTodo(todoId);
            console.log(response.data);
        } catch(e) {
            console.error(e);
        }
        alert("삭제 완료");
    }

    return (
        <div css={s.container}>
            {
                todolist.filter(todo => todo.state === 0).map(todo => 
                    <div css={s.listBox} key={todo.todoId}>
                        <div css={s.ipBox}>
                            <input type="checkbox" onChange={handleCheckBoxChange} checked={todo.todoId === parseInt(checkedBox)} css={s.checkbox} value={todo.todoId} />
                            <p>{todo.content}</p>
                        </div>
                        {
                            todo.todoId === parseInt(checkedBox) ? 
                            <div css={s.buttonBox}>
                                <button css={s.button} >수정</button>
                                <button css={s.button} onClick={handleDeleteClick}>삭제</button>
                                <button css={s.button} >확인</button>
                            </div> : <div></div>
                        }
                        

                    </div>
                )
            }
        </div>
    );
}

export default Todolist;