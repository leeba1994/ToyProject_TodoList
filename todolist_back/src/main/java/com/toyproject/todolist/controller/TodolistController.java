package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqGetTodolistsFilterDto;
import com.toyproject.todolist.dto.ReqRegisterTodolistDto;
import com.toyproject.todolist.service.TodolistService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class TodolistController {
    @Autowired
    private TodolistService todolistService;

    @PostMapping("/todolist")
    public ResponseEntity<?> registerTodolist(@RequestBody ReqRegisterTodolistDto reqRegisterTodolistDto) {
        log.info("{}", reqRegisterTodolistDto);
        return ResponseEntity.ok().body(todolistService.registerTodolist(reqRegisterTodolistDto));
    }

    @GetMapping("/todolists/{checkedId}")
    public ResponseEntity<?> getListApi(@PathVariable int checkedId) {
        log.info("{}", checkedId);
        return ResponseEntity.ok().body(todolistService.getTodolistsById(checkedId));
    }

    @GetMapping("/todolists/filter")
    public ResponseEntity<?> getFilterListApi(ReqGetTodolistsFilterDto reqGetTodolistsFilterDto) {
        log.info("{}", reqGetTodolistsFilterDto);
        return ResponseEntity.ok().body(null);
    }
}
