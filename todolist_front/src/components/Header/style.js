import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 10px;
    border: 1px solid #dbdbdb;
    padding: 5px 10px;
    height: 60px;
`;

export const logo = css`
    margin: 0px;
	padding: 5px 10px;
`;

export const nav = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    padding: 5px 10px;
`;

export const link = css`
	margin: 10px;
    font-size: 16px;
    cursor: pointer;
`;

export const modal = css`
    box-sizing: 'border-box';
    transform: 'translate(-50%, -50%)';
    top: '50%';
    left: '50%';
    padding: '20px';
    width: '300px';
    height: '300px';
    background-color: '#fafafa';
`;