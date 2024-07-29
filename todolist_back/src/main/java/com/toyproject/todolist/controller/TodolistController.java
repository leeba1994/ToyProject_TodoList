package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqDeleteTodolistDto;
import com.toyproject.todolist.dto.ReqRegisterTodolistDto;
import com.toyproject.todolist.dto.ReqUpdateTodolistDto;
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

    @PostMapping("/todo")
    public ResponseEntity<?> registerTodolist(@RequestBody ReqRegisterTodolistDto reqRegisterTodolistDto) {
        log.info("{}", reqRegisterTodolistDto);
        return ResponseEntity.ok().body(todolistService.registerTodolist(reqRegisterTodolistDto));
    }

    @GetMapping("/todolist")
    public ResponseEntity<?> getListApi() {
        return ResponseEntity.ok().body(todolistService.getTodolists());
    }

    @PutMapping("/todo/state")
    public ResponseEntity<?> updateCheckedState(@RequestBody ReqUpdateTodolistDto reqUpdateTodolistDto) {
        log.info("{}", reqUpdateTodolistDto);
        return ResponseEntity.ok().body(todolistService.updateTodolistState(reqUpdateTodolistDto));
    }

    @PutMapping("/todo")
    public ResponseEntity<?> updateTodolist(@RequestBody ReqUpdateTodolistDto reqUpdateTodolistDto) {
        log.info("{}", reqUpdateTodolistDto);
        return ResponseEntity.ok().body(todolistService.updateTodolist(reqUpdateTodolistDto));
    }

    @DeleteMapping("/todo/{todolistId}")
    public ResponseEntity<?> deleteTodolist(@PathVariable int todolistId) {
        log.info("{}", todolistId);
        return ResponseEntity.ok().body(todolistService.deleteTodolist(todolistId));
    }

}
