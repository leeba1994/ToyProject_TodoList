package com.toyproject.todolist.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Todolist {
    private int todolistId;
    private String content;
    private int userId;
    private String registerDate;
    private int checkedState;
}
