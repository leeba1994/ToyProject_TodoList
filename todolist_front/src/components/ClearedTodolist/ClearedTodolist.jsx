import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import { todolistAtom } from '../../atoms/todolistAtoms';


function ClearedTodolist() {
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);

    return (
        <div css={s.container}>
            <div css={s.todoHeader}><h2>Done</h2></div>   
            {
                todolist.filter(todo => todo.state === 1).map(todo => 
                    <div css={s.todoBox} key={todo.todoId}>
                        <div css={s.ipBox}>
                            <input type="checkbox" checked={true} disabled={true} />     
                            <p>{todo.content}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default ClearedTodolist;