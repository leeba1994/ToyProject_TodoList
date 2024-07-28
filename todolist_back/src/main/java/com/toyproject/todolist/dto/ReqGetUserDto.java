package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class ReqGetUserDto {
    private String userName;
    private String userPassword;
}
