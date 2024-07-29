package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class ReqUpdateTodolistDto {
    private int todolistId;
    private String content;
    private String registerDate;
}
