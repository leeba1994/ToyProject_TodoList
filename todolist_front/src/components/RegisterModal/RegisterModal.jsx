import { css } from '@emotion/react';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { registerApi } from '../../apis/userApi';
/** @jsxImportSource @emotion/react */

function RegisterModal({registerModal, closeModal}) {
    const [ registerUser, setRegisterUser ] = useState({
        userName: "",
        password: "",
        name: "",
        email: ""
    })

    const handleInputOnChange = (e) => {
        setRegisterUser(registerUser => {
            return {
                ...registerUser,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleRegisterSubmitClick = async () => {
        const response = await registerApi(registerUser);
        if(response.status === 200) {
            alert("회원 등록 완료.");
        }else {
            alert("회원 등록 실패.");
        }
        setRegisterUser({
            userName: "",
            password: "",
            name: "",
            email: ""
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
            isOpen={registerModal}
            onRequestClose={closeModal}
        >
            <div css={css`display: flex; flex-direction: column; justify-content: center; align-items:center; height: 100%;`}>
                <h2>REGISTER</h2>
                <input type="text" name='userName' onChange={handleInputOnChange} value={registerUser.userName} placeholder='ID 입력'/>
                <input type="password" name='password' onChange={handleInputOnChange} value={registerUser.password} placeholder='PASSWORD 입력'/>
                <input type="text" name='name' onChange={handleInputOnChange} value={registerUser.name} placeholder='NAME 입력'/>
                <input type="text" name='email' onChange={handleInputOnChange} value={registerUser.email} placeholder='EMAIL 입력'/>
                <div>
                    <button onClick={handleRegisterSubmitClick}>REGISTER</button>
                    <button onClick={closeModal}>취소</button>
                </div>
            </div>        
        </ReactModal>
    );
}

export default RegisterModal;