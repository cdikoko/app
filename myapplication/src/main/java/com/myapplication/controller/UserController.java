package com.myapplication.controller;

import com.myapplication.model.User;
import com.myapplication.repo.UserRepo;
import com.myapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.net.ssl.HttpsURLConnection;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers(){
        return new ResponseEntity<List<User>>(userService.getUsers(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User user = new User();
        user.setUserId(id);
        return new ResponseEntity<User>(userService.findUserById(user.getUserId()).get(),HttpStatus.OK);
    }

    @GetMapping("/user/username")
    public ResponseEntity<User> getUserByUserName(@RequestBody User user){
        return new ResponseEntity<User>(user,HttpStatus.OK);
    }

    @PostMapping("/user/{username}")
    public ResponseEntity<User> insertUser(@PathVariable String username){
       return new ResponseEntity<User>( userService.insertUser(username), HttpStatus.OK);
    }
}
