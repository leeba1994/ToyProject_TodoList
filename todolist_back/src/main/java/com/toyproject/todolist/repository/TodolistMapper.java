package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.Todolist;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodolistMapper {
    int save(Todolist todolist);
    List<Todolist> findTodolistById(int checkedId);
}
