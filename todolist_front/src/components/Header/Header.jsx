import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { css } from '@emotion/react';
import axios from 'axios';
import ReactModal from 'react-modal';
ReactModal.setAppElement("#root");

function Header({ checkedId, setCheckedId, setTodolists}) {
    const [ loginUserName, setLoginUserName ] = useState("");
    const [ loginModal, setLoginModal ] = useState(false);
    const [ registerModal, setRegisterModal ] = useState(false);
    const [ todolistModal, setTodolistModal ] = useState(false);
    const [ userInput, setUserInput] = useState({
        userName: "",
        userPassword: "",
        name: "",
        userEmail: ""
    });
    const [ todolistInput, setTodolistInput ] = useState({
        content: "",
        userId: 0,
        registerDate: "",
        checkedState: 0
    });
    const [ userparams, setUserParams ] = useState({
        userName: "",
        userPassword: ""
    })

    useEffect(() => {
        setTodolistInput(todolistInput => {
            return {
                ...todolistInput,
                userId: checkedId
            }
        })
        const requestAllTodolist = async (checkedId) => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/todolists/${checkedId}`)
                setTodolists(response.data);
                console.log(response.data)
            } catch(e) {
                console.error(e);
            }
        }
        requestAllTodolist(checkedId);
    }, [checkedId])

    

    const handleLoginClick = () => {
        setLoginModal(true);
    }

    const handleRegisterClick = () => {
        setRegisterModal(true);
    }

    const handleTodolistClick = () => {
        setTodolistModal(true);
    }

    const closeModal = () => {
        setLoginModal(false);
        setRegisterModal(false);
        setTodolistModal(false);
    }

    const handleRegisterInputOnChange = (e) => {
        setUserInput(userInput => {
            return {
                ...userInput,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleLoginInputOnChange = (e) => {
        setUserParams(userParams => {
            return {
                ...userParams,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleTodolistInputOnChange = (e) => {
        setTodolistInput(todolistInput => {
            return {
                ...todolistInput,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleRegisterSubmitClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/user", userInput);
            console.log(response.data);
            if(response.data > 0) {
                alert("등록 완료")
            } else {
                alert("등록 실패")
            }
        } catch(e) {
            console.error(e);
        }
        setUserInput({
            userName: "",
            userPassword: ""
        })
        closeModal();
    }
    const requestGetUser = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/login", {params: userparams});
            console.log(response.data);
            setCheckedId(response.data.userId);
            setLoginUserName(response.data.userName);
        } catch(e) {
            console.error(e);
        }
        setUserParams({
            userName: "",
            userPassword: ""
        })
        closeModal();
    }


    const handleLoginSubmitClick = async () => {
        await requestGetUser();
    }

    const handleLogoutClick = () => {
        setCheckedId(0);
    }

    const handleTodolistSubmitClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/todolist", todolistInput);
            console.log(response.data);
        } catch(e) {
            console.error(e);
        }
        setTodolistInput({
            content: "",
            userId: checkedId,
            registerDate: "",
            checkedState: 0
        })
        closeModal();        
    }

    return (
        <>
            <ReactModal
                style={{
                    content: {
                    boxSizing: 'border-box',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    padding: '20px',
                    width: '300px',
                    height: '300px',
                    backgroundColor: '#fafafa',
                    }
                }}
                isOpen={loginModal}
                onRequestClose={closeModal}
            >
                <div css={css`display: flex; flex-direction: column; justify-content: center; align-items:center; height: 100%;`}>
                    <h2>LOGIN</h2>
                    <input type="text" name='userName' onChange={handleLoginInputOnChange} value={userparams.userName} placeholder='ID 입력'/>
                    <input type="password" name='userPassword' onChange={handleLoginInputOnChange} value={userparams.userPassword} placeholder='PASSWORD 입력'/>
                    <div>
                        <button onClick={handleLoginSubmitClick}>로그인</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>        
            </ReactModal>
            <ReactModal
                style={{
                    content: {
                    boxSizing: 'border-box',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    padding: '20px',
                    width: '300px',
                    height: '300px',
                    backgroundColor: '#fafafa',
                    }
                }}
                isOpen={registerModal}
                onRequestClose={closeModal}
            >
                <div css={css`display: flex; flex-direction: column; justify-content: center; align-items:center; height: 100%;`}>
                    <h2>REGISTER</h2>
                    <input type="text" name='userName' onChange={handleRegisterInputOnChange} value={userInput.userName} placeholder='ID 입력'/>
                    <input type="password" name='userPassword' onChange={handleRegisterInputOnChange} value={userInput.userPassword} placeholder='PASSWORD 입력' />
                    <input type="text" name='name' onChange={handleRegisterInputOnChange} value={userInput.name} placeholder='이름 입력' />
                    <input type="text" name='userEmail' onChange={handleRegisterInputOnChange} value={userInput.userEmail} placeholder='EMAIL 입력' />
                    <div>
                        <button onClick={handleRegisterSubmitClick}>회원가입</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>        
            </ReactModal>
            <ReactModal
                style={{
                    content: {
                    boxSizing: 'border-box',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    padding: '20px',
                    width: '300px',
                    height: '300px',
                    backgroundColor: '#fafafa',
                    }
                }}
                isOpen={todolistModal}
                onRequestClose={closeModal}
            >
                <div css={css`display: flex; flex-direction: column; justify-content: center; align-items:center; height: 100%;`}>
                    <h2>TO-DO-LIST</h2>
                    <input type="text" name='content' onChange={handleTodolistInputOnChange} value={todolistInput.content} placeholder='해야 할 일 입력'/>
                    <input type="month" name='registerDate' onChange={handleTodolistInputOnChange} value={todolistInput.registerDate}/>
                    <div>
                        <button onClick={handleTodolistSubmitClick}>작성하기</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>        
            </ReactModal>
            <div css={s.layout}> 
                <h2 css={s.logo}>To Do List</h2>
                {
                    checkedId > 0 ? 
                    <div css={s.nav}>
                        <p css={s.link} >{loginUserName}님 환영합니다.</p>
                        <p css={s.link} onClick={handleTodolistClick}>글쓰기</p>
                        <p css={s.link} onClick={handleLogoutClick}>로그아웃</p>
                    </div> : 
                    <div css={s.nav}>
                        <p css={s.link} onClick={handleLoginClick} >로그인</p>
                        <p css={s.link} onClick={handleRegisterClick}>회원가입</p>
                    </div>
                }
            </div>
        </>
    );
}

export default Header;