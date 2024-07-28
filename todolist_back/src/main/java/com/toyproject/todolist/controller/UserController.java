package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqGetUserDto;
import com.toyproject.todolist.dto.ReqRegisterUserDto;
import com.toyproject.todolist.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public ResponseEntity<?> registerApi(@RequestBody ReqRegisterUserDto reqRegisterUserDto) {
        log.info("{}", reqRegisterUserDto);
        return ResponseEntity.ok().body(userService.registerUser(reqRegisterUserDto));
    }

    @GetMapping("/login")
    public ResponseEntity<?> loginApi(ReqGetUserDto ReqGetUserDto) {
        log.info("{}", ReqGetUserDto);
        return ResponseEntity.ok().body(userService.loginUser(ReqGetUserDto));
    }



}
