import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AllTodolist({ todolists }) {
    const [ checkedBox, setCheckedBox ] = useState(0);
    const [ changeState, setChangeState ] = useState({
        todolistId: "",
        checkedState: 1
    });

    const oneChecked = (checkedBox) => {
        const checkboxes =  document.getElementsByName('todoCheck')
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkedBox) {
                checkboxes[i].checked = false
            }
        }   
    }

    const handleCheckBoxChange = (e) => {
        setCheckedBox(e.target.checked ? e.target.value : 0);
        oneChecked(checkedBox);


    }
    return (
        <div css={s.container}>
            {
                todolists.map(todo => 
                    <div css={s.listBox} key={todo.todolistId}> 
                        <div css={s.ipBox}>
                            <input type="checkbox" name='todoCheck' css={s.checkbox} onChange={handleCheckBoxChange} value={todo.todolistId} />
                            <p>{todo.content}</p>
                        </div>
                        {
                            todo.todolistId === parseInt(checkedBox) ?
                            <div css={s.buttonBox}>
                                <button css={s.button}>수정</button>
                                <button css={s.button}>삭제</button>
                            </div> : <div></div>
                        }
                    </div>
                )
            }

        </div>
    );
}

export default AllTodolist;