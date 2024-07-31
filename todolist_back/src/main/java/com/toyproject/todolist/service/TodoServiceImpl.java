package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.tododto.ReqGetTodolistDto;
import com.toyproject.todolist.dto.tododto.ReqRegisterTodoDto;
import com.toyproject.todolist.dto.tododto.ReqUpdateTodoDto;
import com.toyproject.todolist.dto.tododto.RespGetTodoDto;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoServiceImpl implements TodoService {
    @Autowired
    private TodoMapper todoMapper;

    @Override
    public int registerTodo(ReqRegisterTodoDto reqRegisterTodoDto) {
        return todoMapper.save(reqRegisterTodoDto.toEntity());
    }

    @Override
    public int updateState(ReqUpdateTodoDto reqUpdateTodoDto) {
        return todoMapper.updateState(reqUpdateTodoDto.toEntityForState());
    }

    @Override
    public int updateTodo(ReqUpdateTodoDto reqUpdateTodoDto) {
        return todoMapper.updateTodo(reqUpdateTodoDto.toEntityForUpdate());
    }

    @Override
    public int deleteTodo(int todoId) {
        return todoMapper.deleteTodo(todoId);
    }

    @Override
    public List<RespGetTodoDto> getlist(ReqGetTodolistDto reqGetTodolistDto) {
        List<Todo> lists = todoMapper.findTodolist(reqGetTodolistDto.toEntity());
        return lists.stream().map(Todo::toRespGetTodoDto).collect(Collectors.toList());
    }
}
