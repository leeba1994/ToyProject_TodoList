package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.tododto.ReqGetTodolistDto;
import com.toyproject.todolist.dto.tododto.ReqRegisterTodoDto;
import com.toyproject.todolist.dto.tododto.ReqUpdateTodoDto;
import com.toyproject.todolist.dto.tododto.RespGetTodoDto;

import java.util.List;

public interface TodoService {
    int registerTodo(ReqRegisterTodoDto reqRegisterTodoDto );
    int updateState(int todoId);
    int updateTodo(ReqUpdateTodoDto reqUpdateTodoDto);
    int deleteTodo(int todoId);
    List<RespGetTodoDto> getlist(ReqGetTodolistDto reqGetTodolistDto);


}
