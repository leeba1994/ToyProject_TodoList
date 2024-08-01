package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.userdto.ReqLoginUserDto;
import com.toyproject.todolist.dto.userdto.ReqRegisterUserDto;
import com.toyproject.todolist.dto.userdto.RespLoginUserDto;
import com.toyproject.todolist.entity.User;
import com.toyproject.todolist.repository.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public int registerUser(ReqRegisterUserDto reqRegisterUserDto) {
        User user = User.builder()
                .userName(reqRegisterUserDto.getUserName())
                .password(reqRegisterUserDto.getPassword())
                .name(reqRegisterUserDto.getName())
                .email(reqRegisterUserDto.getEmail())
                .build();
        List<User> users = userMapper.getAllUsers();
        for(User user1 : users) {
            if(user.getUserName().equals(user1.getUserName())) {
                return -1;
            }
        }
        return userMapper.save(user);
    }

    @Override
    public RespLoginUserDto loginUser(ReqLoginUserDto reqLoginUserDto) {
        User User = userMapper.findUserByUserNameAndPassword(reqLoginUserDto.toEntity());
        return User.toRespLoginUserDto();
    }
}
