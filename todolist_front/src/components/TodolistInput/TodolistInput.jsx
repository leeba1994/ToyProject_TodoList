import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TodolistInput({ todolists, setFilterTodolists }) {
    const [ registerDate, setRegisterDate ] = useState({
        registerDate: ""
    });

    useEffect(() => {
        setFilterTodolists(todolists)
    }, [todolists])

    useEffect(() => {
        const GetTodolistsFilter = () => {
            const todolistsFilter = todolists.filter(todo => registerDate.registerDate === todo.registerDate);
            setFilterTodolists(todolistsFilter);
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