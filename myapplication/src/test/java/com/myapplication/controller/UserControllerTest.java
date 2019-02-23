package com.myapplication.controller;

import com.myapplication.model.User;
import com.myapplication.repo.UserRepo;
import com.myapplication.service.UserService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import javax.validation.constraints.AssertTrue;

import java.util.Optional;

import static com.sun.javaws.JnlpxArgs.verify;
import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;

@RunWith(MockitoJUnitRunner.class)
public class UserControllerTest {


    @InjectMocks
    UserController userController;

    @Mock
    UserService userService;

    @Mock
    UserRepo userRepo;



    @Test
    public void ShouldCallUserService_getAllUsersMethod(){
        userController.getUsers();

        Mockito.verify(userService).getUsers();
    }

    @Test
    public void ShouldCallUserServiceFindByIdMethod(){
       User user = new User();
       user.setUserId(1L);

       when(userService.findUserById(1L)).thenReturn(Optional.of(user));

       userController.getUserById(user.getUserId());

        Mockito.verify(userService).findUserById(any(Long.class));
    }

}