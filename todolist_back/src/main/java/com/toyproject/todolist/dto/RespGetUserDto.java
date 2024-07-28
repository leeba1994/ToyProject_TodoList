package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespGetUserDto {
    private int userId;
    private String userName;
}
