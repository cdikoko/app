package com.myapplication.service;

import com.myapplication.model.User;
import com.myapplication.repo.UserRepo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;

import static org.junit.Assert.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {
    @InjectMocks
    UserService userService;

    @Mock
    UserRepo userRepo;
    @Mock
    User user;

    @Test
    public void methodGetUsers_ReturnsListOfUsers(){

        User user = new User(1L,"User","Is","Test");
        User user1 = new User(2L,"User1","Is","Test");
        User user2 = new User(3L,"User2","Is","Test");

        when(userService.getUsers()).thenReturn(Arrays.asList(user,user1,user2));

        userService.getUsers();

        verify(userRepo).findAll();

        assertEquals(Arrays.asList(user,user1,user2),userService.getUsers());
    }
}