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
ReactModal.setAppElement("#root");

function Header(props) {
    const [ user, setUser ] = useRecoilState(userAtom)
    
    const [ registerModal, setRegisterModal ] = useState(false); 
    const [ loginModal, setloginModal ] = useState(false);
    const [ writeModal, setWriteModal ] = useState(false); 
    
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