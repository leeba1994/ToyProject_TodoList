import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TodolistInput({ todolists, setTodolists }) {
    

    return (
        <>
            <div css={s.layout}>
                <div>
                    <input type="month" css={s.dateinput}/>
                </div>
                
            
            </div>
        </>
    );
}

export default TodolistInput;