package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqGetUserDto;
import com.toyproject.todolist.dto.ReqRegisterUserDto;
import com.toyproject.todolist.dto.RespGetUserDto;

public interface UserService {
    int registerUser(ReqRegisterUserDto reqRegisterUserDto);
    RespGetUserDto loginUser(ReqGetUserDto ReqGetUserDto);

}
