package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespGetTodolistsDto {
    private int todolistId;
    private String content;
    private int userId;
    private String registerDate;
    private int checkedState;
}
