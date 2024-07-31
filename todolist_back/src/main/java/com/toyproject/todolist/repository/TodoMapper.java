package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.Todo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodoMapper {
    int save(Todo todo);
    int updateState(Todo todo);
    int updateTodo(Todo todo);
    int deleteTodo(int todoId);
    List<Todo> findTodolist(Todo todo);
}
