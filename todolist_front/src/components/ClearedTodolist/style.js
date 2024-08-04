import { css } from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    border: 2px solid #7A90E2;
    border-radius: 10px;
    padding: 10px;
    width: 50%;
    height: 100%;
    background-color: #fafafa;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const todoHeader = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    height: 70px;
    color: #7A90E2;
    cursor: default;
`;

export const todoBox = css`
    box-sizing: border-box;
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border: 2px solid #7A90E2;
    border-radius: 10px;
    padding-left: 5px;
    width: 100%;
    background-color: #7A90E2;
    word-break: break-all;
    & input {
        display: none;
        box-sizing: border-box;
        margin: 10px;
        width: 20px;
        height: 20px;
    }
    & p {
        max-width: 650px;
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
        cursor: default;
    }
`;

export const checkIcon = css`
    box-sizing: border-box;
    margin: 10px;
    width: 30px;
    height: 30px;
    color: #ffffff;
`;

