import { css } from "@emotion/react";

export const modalBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    height: 100%;
    h2 {
        font-weight: bold;
        color: #7A90E2;
        cursor: default;
    }
    & input[type="text"] {
        margin-bottom: 3px;
        border: 2px solid #7A90E2;
        border-radius: 5px;
        width: 170px;
        text-align: center;
        overflow: hidden;
        outline: none;
        color: #7A90E2;
        cursor: pointer;
        ::placeholder {
            font-weight: bold;
            color: #7A90E2;
        }
    }
    & input[type="month"]{
        position: relative;
        margin-bottom: 3px;
        border: 2px solid #7A90E2;
        border-radius: 5px;
        width: 170px;
        text-align: center;
        overflow: hidden;
        outline: none;
        text-align: center;
        font-weight: bold;
        color: #ffffff;
        background-color: #7A90E2;
    }
    & input[type="month"]::-webkit-calendar-picker-indicator{
        box-sizing: border-box;
        position: absolute;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    width: 100%;
    button {
        margin-bottom: 3px;
        border: 2px solid #7A90E2;
        border-radius: 5px;
        width: auto;
        color: #ffffff;
        font-weight: bold;
        background-color: #7A90E2;
        outline: none;
        cursor: pointer;
    }
`;
