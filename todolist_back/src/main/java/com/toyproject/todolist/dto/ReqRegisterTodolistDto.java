package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class ReqRegisterTodolistDto {
    private String content;
    private String registerDate;
    private int checkedState;
}
