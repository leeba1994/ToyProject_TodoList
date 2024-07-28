package com.toyproject.todolist.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class User {
    private int userId;
    private String userName;
    private String userPassword;
    private String name;
    private String userEmail;
}
