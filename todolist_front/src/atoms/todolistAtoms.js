import { atom } from "recoil";

export const todolistAtom = atom({
    key: "todolist",
    default: []
})

export const todoIdAtom = atom({
    key: "todoId",
    default: 0
})

const nowYearAndMonth = {
    year: new Date().getFullYear(),
    month: new Date().getMonth()
}

const registerDate = nowYearAndMonth.year + "-" + (nowYearAndMonth.month - 10 > -1 ? "" : "0") + nowYearAndMonth.month;

export const todoParamsAtom = atom({
    key: "todoParams",
    default: {
        userId: 0,
        registerDate: registerDate
    }
})