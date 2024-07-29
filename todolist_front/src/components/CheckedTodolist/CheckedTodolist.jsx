import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function CheckedTodolist({ filterTodolists }) {
    const [ checkedBox, setCheckedBox ] = useState(0);

    const handleCheckBoxChange = (e) => {
        setCheckedBox(e.target.checked ? e.target.value : 0);
    }

    return (
        <div css={s.container}>
            {
                filterTodolists.filter(todo => todo.checkedState === 1).map(todo => 
                    <div css={s.listBox} key={todo.todolistId}>
                        <div css={s.ipBox}>
                            <p>{todo.content}</p>
                        </div>  
                    </div>
                )
            }

        </div>
    );
}

export default CheckedTodolist;