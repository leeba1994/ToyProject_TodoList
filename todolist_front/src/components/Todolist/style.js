import { css } from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    margin-right: 10px;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 50%;
    height: 100%;
    background-color: #fafafa;
    overflow-y: auto;
`;

export const listBox = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 10px;
    border: 1px solid #dbdbdb;
    width: 100%;
    height: 100px;
`;

export const ipBox = css`
    display: flex;

`;

export const checkbox = css`
    box-sizing: border-box;
    margin: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const buttonBox = css`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-left: 88px;
    margin-bottom: 3px;
    width: 130px;

`;

export const button = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    height: 25px;
    background-color: #ffffff;
    cursor: pointer;
    
    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #eeeeee;
    }
`;