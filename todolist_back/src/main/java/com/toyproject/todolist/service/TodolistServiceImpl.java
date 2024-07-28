package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqRegisterTodolistDto;
import com.toyproject.todolist.dto.RespGetTodolistsDto;
import com.toyproject.todolist.entity.Todolist;
import com.toyproject.todolist.repository.TodolistMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodolistServiceImpl implements TodolistService{
    @Autowired
    private TodolistMapper todolistMapper;

    @Override
    public int registerTodolist(ReqRegisterTodolistDto reqRegisterTodolistDto) {
        Todolist todolist = Todolist.builder()
                .content(reqRegisterTodolistDto.getContent())
                .userId(reqRegisterTodolistDto.getUserId())
                .registerDate(reqRegisterTodolistDto.getRegisterDate())
                .checkedState(reqRegisterTodolistDto.getCheckedState())
                .build();
        return todolistMapper.save(todolist);
    }

    @Override
    public List<RespGetTodolistsDto> getTodolistsById(int checkedId) {
        List<Todolist> todolists = todolistMapper.findTodolistById(checkedId);
        return todolists.stream().map(todo -> RespGetTodolistsDto.builder()
                .todolistId(todo.getTodolistId())
                .content(todo.getContent())
                .userId(todo.getUserId())
                .registerDate(todo.getRegisterDate())
                .checkedState(todo.getCheckedState())
                .build()
                ).collect(Collectors.toList());
    }
}
