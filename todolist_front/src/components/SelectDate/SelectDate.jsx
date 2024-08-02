/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import { todoParamsAtom, todolistAtom } from '../../atoms/todolistAtoms';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { userAtom } from '../../atoms/userAtoms';
import { todolistApi } from '../../apis/todoApi';
import { useRef } from "react";

function SelectDate() {
    const [ user, setUser ] = useRecoilState(userAtom);
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ params, setParams ] = useRecoilState(todoParamsAtom);
    const dateRef = useRef();


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

    const handleaddArrowOnClick = () => {
        
        // const registerDate = nowYearAndMonth.year + "-" + (nowYearAndMonth.month >= 10 ? nowYearAndMonth.month : "0" + nowYearAndMonth.month);

        setParams( params => {
            const date = new Date(params.registerDate);
            date.setMonth(date.getMonth() + 1);
            const newdate = date.getFullYear() + "-" + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1));
            // console.log(newDate)
            return {
                ...params,
                registerDate: newdate
            }
        })
    }

    const handleArrowOnClick = () => {
        
        // const registerDate = nowYearAndMonth.year + "-" + (nowYearAndMonth.month >= 10 ? nowYearAndMonth.month : "0" + nowYearAndMonth.month);

        setParams( params => {
            const date = new Date(params.registerDate);
            date.setMonth(date.getMonth() - 1);
            const newdate = date.getFullYear() + "-" + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1));
            // console.log(newDate)
            return {
                ...params,
                registerDate: newdate
            }
        })
    }

    return (
        <>
            <div css={s.layout}>
                <MdArrowBackIosNew css={s.arrow} onClick={handleArrowOnClick} />
                <div css={s.monthContainer}>
                    <input type="month" id="date" name='registerDate' onChange={handleInputOnChange} value={params.registerDate} ref={dateRef}/>
                </div>
                <MdArrowForwardIos css={s.arrow} onClick={handleaddArrowOnClick} />
            </div>
        </>
    );
}

export default SelectDate;