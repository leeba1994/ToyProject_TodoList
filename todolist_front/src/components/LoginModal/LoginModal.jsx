import { css } from '@emotion/react';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { loginApi } from '../../apis/userApi';
import { useRecoilState } from 'recoil';
import { loginStateAtom, userAtom } from '../../atoms/userAtoms';
/** @jsxImportSource @emotion/react */

function LoginModal({ loginModal, closeModal }) {
    const [ user, setUser ] = useRecoilState(userAtom);
    const [ loginState, setLoginState ] = useRecoilState(loginStateAtom);

    const [ loginUser, setLoginUser ] = useState({
        userName: "",
        password: ""
    });

    const handleInputChange = (e) => {
        setLoginUser(loginUser => {
            return {
                ...loginUser,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleLoginSubmitClick = async () => {
        const response = await loginApi(loginUser);
        if(response.status === 200) {
            setLoginState(true);
        }else {
            setLoginState(false);
        }
        setLoginUser({
            userName: "",
            password: ""
        })
        closeModal();
    }

    return (
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
                <input type="text" name='userName' onChange={handleInputChange} value={loginUser.userName}/>
                <input type="password" name='password' onChange={handleInputChange} value={loginUser.password}/>
                <div>
                    <button onClick={handleLoginSubmitClick}>Login</button>
                    <button onClick={closeModal}>취소</button>
                </div>
            </div>        
        </ReactModal>
    );
}

export default LoginModal;