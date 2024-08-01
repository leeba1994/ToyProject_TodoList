import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    padding: 5px 10px;
    height: 60px;
    input {
        margin: 0px 7px;
        border: 2px solid #7A90E2;
        border-radius: 10px;
        height: 40px;
        width: 600px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        color: #ffffff;
        background-color: #7A90E2;
        outline: none;
    }
`;

export const arrow = css`
    width: 25px;
    height: 25px;
    color: #7A90E2;
    cursor: pointer;
    &:hover {
        color: #3b3a3aff;
    }
    &:active {
        color: #817f7f;
    }
`;

