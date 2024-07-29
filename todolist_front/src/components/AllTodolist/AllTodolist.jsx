import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AllTodolist({ todolists }) {



    const [ filterTodoList, getFilterTodoList ] = useState([1]);
    
    return (
        <div css={s.container}>
            {
                filterTodoList.map(filterTodo => 
                    <div css={s.listBox}>
                        <div css={s.ipBox}>
                            <input type="checkbox" css={s.checkbox} />
                            <p>할 일</p>
                        </div>
                        <div css={s.buttonBox}>
                            <button css={s.button}>수정</button>
                            <button css={s.button}>삭제</button>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default AllTodolist;