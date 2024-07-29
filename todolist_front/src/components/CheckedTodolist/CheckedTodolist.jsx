import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function CheckedTodolist({ todolists }) {
    // const [ changeState, setChangeState ] = useState({
    //     todolistId: "",
    //     checkedState: 1
    // });

    // const handleChangeStateSubmitClick = () => {

    // }

    return (
        <div css={s.container}>
            {

            }

            <div css={s.listBox}>
                <div css={s.ipBox}>
                    <input type="checkbox" css={s.checkbox} />
                    <p>할 일</p>
                </div>
                <div css={s.buttonBox}>
                    <button css={s.button}>수정</button>
                    <button css={s.button}>삭제</button>
                    <button css={s.button}>확인</button>
                </div>
            </div>
        </div>
    );
}

export default CheckedTodolist;