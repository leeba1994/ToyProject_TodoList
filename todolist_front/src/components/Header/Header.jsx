import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atoms/userAtoms';
import ReactModal from 'react-modal';
import { invalidateSessionApi } from '../../apis/userApi';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import WriteModal from '../WriteModal/WriteModal';
import { searchTodo, todolistApi } from '../../apis/todoApi';
import { todolistAtom, todoParamsAtom } from '../../atoms/todolistAtoms';
ReactModal.setAppElement("#root");

function Header(props) {
    const [ user, setUser ] = useRecoilState(userAtom)
    
    const [ registerModal, setRegisterModal ] = useState(false); 
    const [ loginModal, setloginModal ] = useState(false);
    const [ writeModal, setWriteModal ] = useState(false); 
    const [ searchInput, setSearchInput ] = useState({
        searchText: ""
    });
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ todoParams, setTodoParams ] = useRecoilState(todoParamsAtom);
    const [ params, setParams ] = useRecoilState(todoParamsAtom);

    const getTodolist = async (findTodolist) => {
        const response = await todolistApi(todoParams);
        if(response.status === 200) {
            setTodolist(findTodolist);
        } else {
            setTodolist([]);
        }
    }
    
    const closeModal = () => {
        setRegisterModal(false);
        setloginModal(false);
        setWriteModal(false);
    }

    const openRegisterModal = () => {
        setRegisterModal(true);
    }

    const openLoginModal = () => {
        setloginModal(true);
    }

    const onpenWriteModal = () => {
        setWriteModal(true);
    }

    const handleLogoutClick = async () => {
        try { 
            const response = await invalidateSessionApi();
            console.log(response.data);
            setUser("");
        } catch(e) {
            console.error(e);
        }
    }

    const handleSearchInputChange = (e) => {
        setSearchInput(searchInput => {
            return {
                ...searchInput,
                searchText: e.target.value
            }
        })
    }

    const handleSearchButtonClick = async () => {
        let responseData = null;
        try {
            const response = await searchTodo(searchInput);
            // console.log(response.data);
            responseData = response.data;
        } catch(e) {
            console.error(e);
        }
        const findTodolist = responseData.filter(data => params.registerDate === data.registerDate);
        getTodolist(findTodolist);
        setSearchInput(searchInput => {
            return {
                searchText: ""
            }
        })
    }

    return (
        <>  
            <LoginModal loginModal={loginModal} closeModal={closeModal}/>
            <RegisterModal registerModal={registerModal} closeModal={closeModal}/>
            <WriteModal writeModal={writeModal} closeModal={closeModal}/>
            <div css={s.layout}> 
                <h2 css={s.logo}>To Do List</h2>
                {
                    !!user ? 
                        <div css={s.nav}>
                            <input type="text" onChange={handleSearchInputChange} value={searchInput.searchText} css={s.searchInput} placeholder='검색어 입력'/>
                            <button onClick={handleSearchButtonClick} css={s.searchButton}>검색</button>
                            <p css={s.link}>{user.userName}님 환영합니다.</p>
                            <p css={s.link} onClick={onpenWriteModal}>WRITE</p>
                            <p css={s.link} onClick={handleLogoutClick}>LOGOUT</p>
                        </div> 
                    :
                        <div css={s.nav}>
                            <p css={s.link} onClick={openLoginModal} >LOGIN</p>
                            <p css={s.link} onClick={openRegisterModal}>REGISTER</p>
                        </div>
                }
            </div>
        </>
    );
}

export default Header;