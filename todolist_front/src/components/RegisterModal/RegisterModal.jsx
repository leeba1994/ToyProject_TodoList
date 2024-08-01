/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';
import { duplicateUserName, registerApi } from '../../apis/userApi';
import { css } from "@emotion/react";
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
        if(registerUser.userName === "") {
            alert("ID Data : ");
            return;
        }
        if(registerUser.password === "") {
            alert("Password Data : ");
            return;
        }
        if(registerUser.name === "") {
            alert("Name Data : ");
            return;
        }
        if(registerUser.email === "") {
            alert("Email Data : ");
            return;
        }
        const response = await registerApi(registerUser);
        if(response.status === 200) {
            alert("Register Success");
        }else {
            alert("Register Fail");
        }
        setRegisterUser({
            userName: "",
            password: "",
            name: "",
            email: ""
        }) 
        closeModal();
    }

    const handleDuplicateUserNameOnBlur = async () => {
        const response = await duplicateUserName(registerUser.userName);
        console.log(response.data);
        response.data === 1 ? alert("Usable ID") : alert("Duplicate ID")
        
    }

    return (
        <ReactModal
            style={{
                content: {
                boxSizing: 'border-box',
                transform: 'translate(-50%, -50%)',
                top: '50%',
                left: '50%',
                width: '300px',
                height: '300px',
                backgroundColor: '#fafafa',
                }
            }}
            isOpen={registerModal}
            onRequestClose={closeModal}
        >
            <div css={s.modalBox}>
                <h2>REGISTER</h2>
                <input type="text" name='userName' onBlur={handleDuplicateUserNameOnBlur} onChange={handleInputOnChange} value={registerUser.userName} placeholder='ID :'/>  
                <input type="password" name='password' onChange={handleInputOnChange} value={registerUser.password} placeholder='Password :'/>
                <input type="text" name='name' onChange={handleInputOnChange} value={registerUser.name} placeholder='Name :'/>
                <input type="text" name='email' onChange={handleInputOnChange} value={registerUser.email} placeholder='Email :'/>
                <div css={s.buttonBox}>
                    <button onClick={handleRegisterSubmitClick}>Register</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>        
        </ReactModal>
    );
}

export default RegisterModal;