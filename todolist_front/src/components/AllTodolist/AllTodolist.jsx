import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AllTodolist({ todolists }) {



    const [ filterTodoList, getFilterTodoList ] = useState([]);
    
    return (
        <div css={s.container}>
            {
                todolists.map(todo => 
                    <div css={s.listBox} key={todo}>
                        <div css={s.ipBox}>
                            <input type="checkbox" css={s.checkbox} />
                            <p>{todo.content}</p>
                        </div>
                        <div css={s.buttonBox}>
                            <button css={s.button}>수정</button>
                            <button css={s.button}>삭제</button>
                            <button css={s.button}>확인</button>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default AllTodolist;