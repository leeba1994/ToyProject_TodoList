import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 10px;
    border: 1px solid #dbdbdb;
    padding: 5px 10px;
    height: 60px;
`;

export const dateinput = css`
    margin: 0px 7px;
    width: 500px;
`;

export const arrow = css`
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover {
        color: #3b3a3aff;
    }
    &:active {
        color: #817f7f;
    }
`;

