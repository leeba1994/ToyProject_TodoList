import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import { todoParamsAtom, todolistAtom } from '../../atoms/todolistAtoms';
import { userAtom } from '../../atoms/userAtoms';
import { todolistApi } from '../../apis/todoApi';

function SelectDate() {
    const [ user, setUser ] = useRecoilState(userAtom);
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ params, setParams ] = useRecoilState(todoParamsAtom);

    const getTodolist = async () => {
        const response = await todolistApi(params);
        if(response.status === 200) {
            setTodolist(response.data);
        } else {
            setTodolist([]);
        }
    }
    const handleInputOnChange = (e) => {
        setParams(params => {
            return {
                ...params,
                [e.target.name]: e.target.value,
                userId: user.userId
            }
        })
        getTodolist();
    }
    return (
        <>
            <div css={s.layout}>
                <div>
                    <input type="month" name='registerDate' onChange={handleInputOnChange} css={s.dateinput} value={params.registerDate} />
                </div>
            </div>
        </>
    );
}

export default SelectDate;