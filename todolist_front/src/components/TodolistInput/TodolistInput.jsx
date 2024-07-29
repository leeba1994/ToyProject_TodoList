import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TodolistInput({ todolists, setTodolists }) {
    const [ registerDate, setRegisterDate ] = useState({
        registerDate: ""
    });

    useEffect(() => {
        const GetTodolistsFilter = () => {
            const todolistsFilter = todolists.filter(todo => registerDate.registerDate === todo.registerDate);
            setTodolists(todolistsFilter);
        }
        GetTodolistsFilter();
    }, [registerDate])


    const handleInputOnChange = (e) => {
        setRegisterDate(registerDate => {
            return {
                ...registerDate,
                [e.target.name]: e.target.value
            }
        })
    }

    

    return (
        <>
            <div css={s.layout}>
                <div>
                    <input type="month" name='registerDate' css={s.dateinput} onChange={handleInputOnChange} value={registerDate.registerDate}/>
                </div>
                
            
            </div>
        </>
    );
}

export default TodolistInput;