package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class ReqRegisterUserDto {
    private int userId;
    private String userName;
    private String userPassword;
    private String name;
    private String userEmail;
}
