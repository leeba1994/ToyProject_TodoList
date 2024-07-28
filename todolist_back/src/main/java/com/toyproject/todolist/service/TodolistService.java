package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqRegisterTodolistDto;
import com.toyproject.todolist.dto.RespGetTodolistsDto;

import java.util.List;

public interface TodolistService {
    int registerTodolist(ReqRegisterTodolistDto reqRegisterTodolistDto);
    List<RespGetTodolistsDto> getTodolistsById(int checkedId);
}
