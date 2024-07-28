package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqGetUserDto;
import com.toyproject.todolist.dto.ReqRegisterUserDto;
import com.toyproject.todolist.dto.RespGetUserDto;
import com.toyproject.todolist.entity.User;
import com.toyproject.todolist.repository.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserMapper userMapper;

    @Override
    public int registerUser(ReqRegisterUserDto reqRegisterUserDto) {
        User user = User.builder()
                .userName(reqRegisterUserDto.getUserName())
                .userPassword(reqRegisterUserDto.getUserPassword())
                .name(reqRegisterUserDto.getName())
                .userEmail(reqRegisterUserDto.getUserEmail())
                .build();
        return userMapper.save(user);
    }

    @Override
    public RespGetUserDto loginUser(ReqGetUserDto reqGetUserDto) {
        User user = User.builder()
                .userName(reqGetUserDto.getUserName())
                .userPassword(reqGetUserDto.getUserPassword())
                .build();
        User loginuser = userMapper.getUserByEntity(user);
        return RespGetUserDto.builder().userId(loginuser.getUserId()).userName(loginuser.getUserName()).build();
    }
}
