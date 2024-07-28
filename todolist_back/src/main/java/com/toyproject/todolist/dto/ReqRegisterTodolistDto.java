package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class ReqRegisterTodolistDto {
    private String content;
    private int userId;
    private String registerDate;
    private int checkedState;
}
