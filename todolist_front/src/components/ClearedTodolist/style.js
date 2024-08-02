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
    box-sizing: border-box;
    margin-bottom: 10px;
    width: 100%;
    height: 70px;
    color: #7A90E2;
`;

export const todoBox = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding-left: 5px;
    width: 100%;
    height: 100px;
    background-color: #7A90E2;
    border: 2px solid #7A90E2;
    border-radius: 10px;
    overflow : hidden;
    white-space: nowrap; 
    -webkit-line-clamp: 1;
    & input {
        box-sizing: border-box;
        margin: 10px;
        width: 20px;
        height: 20px;
    }
    & p {
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
    }
`;

