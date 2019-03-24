package com.myapplication.service;

import com.myapplication.model.User;
import com.myapplication.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {


    UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public List<User> getUsers() {
        return userRepo.findAll();
    }

    public Optional<User> findUserById(Long userId) {
        return userRepo.findById(userId);
    }

    public User insertUser(String username) {
        User dBuser = new User();
        dBuser.setUsername(username);
        return userRepo.save(dBuser);
    }

    public User findByUserName(String username) {
        List<User> all = userRepo.findAll();
        return all.stream().filter(user -> user.getUsername().equals(username)).findFirst().get();



    }
}
