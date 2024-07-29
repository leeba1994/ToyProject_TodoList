package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqDeleteTodolistDto;
import com.toyproject.todolist.dto.ReqRegisterTodolistDto;
import com.toyproject.todolist.dto.ReqUpdateTodolistDto;
import com.toyproject.todolist.dto.RespGetTodolistsDto;

import java.util.List;

public interface TodolistService {
    int registerTodolist(ReqRegisterTodolistDto reqRegisterTodolistDto);
    int updateTodolistState(ReqUpdateTodolistDto reqUpdateTodolistDto);
    int updateTodolist(ReqUpdateTodolistDto reqUpdateTodolistDto);
    int deleteTodolist(int todolistId);
    List<RespGetTodolistsDto> getTodolists();


}
