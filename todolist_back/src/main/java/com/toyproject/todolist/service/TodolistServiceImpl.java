package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqDeleteTodolistDto;
import com.toyproject.todolist.dto.ReqRegisterTodolistDto;
import com.toyproject.todolist.dto.ReqUpdateTodolistDto;
import com.toyproject.todolist.dto.RespGetTodolistsDto;
import com.toyproject.todolist.entity.Todolist;
import com.toyproject.todolist.repository.TodolistMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
                .registerDate(reqRegisterTodolistDto.getRegisterDate())
                .checkedState(reqRegisterTodolistDto.getCheckedState())
                .build();
        return todolistMapper.save(todolist);
    }

    @Override
    public int updateTodolistState(ReqUpdateTodolistDto reqUpdateTodolistDto) {
        Todolist todolist = Todolist.builder()
                .todolistId(reqUpdateTodolistDto.getTodolistId())
                .build();
        return todolistMapper.update(todolist);
    }

    @Override
    public int updateTodolist(ReqUpdateTodolistDto reqUpdateTodolistDto) {
        Todolist todolist = Todolist.builder()
                .todolistId(reqUpdateTodolistDto.getTodolistId())
                .content(reqUpdateTodolistDto.getContent())
                .registerDate(reqUpdateTodolistDto.getRegisterDate())
                .build();
        return todolistMapper.updateTodolist(todolist);
    }

    @Override
    public int deleteTodolist(int todolistId) {
        return todolistMapper.deleteTodolist(todolistId);
    }

    @Override
    public List<RespGetTodolistsDto> getTodolists() {
        List<Todolist> todolists = todolistMapper.findTodolists();
        return todolists.stream().map(todo -> RespGetTodolistsDto.builder()
                .todolistId(todo.getTodolistId())
                .content(todo.getContent())
                .registerDate(todo.getRegisterDate())
                .checkedState(todo.getCheckedState())
                .build()
                ).collect(Collectors.toList());
    }
}
