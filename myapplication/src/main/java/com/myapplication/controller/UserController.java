package com.myapplication.controller;

import com.myapplication.model.Account;
import com.myapplication.model.User;
import com.myapplication.repo.UserRepo;
import com.myapplication.service.AccountService;
import com.myapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.net.ssl.HttpsURLConnection;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class    UserController {

    private UserService userService;
    private AccountService accountService;



    @Autowired
    public UserController(UserService userService, AccountService accountService) {
        this.accountService = accountService;
        this.userService = userService;
    }

    @GetMapping("/account")
    public ResponseEntity<List<Account>> getAccounts(){
        return new ResponseEntity<List<Account>>(accountService.allAccounts(), HttpStatus.OK);
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

    @GetMapping("/user/{username}")
    public ResponseEntity<User> getUserByUserName(@PathVariable String username){
        return new ResponseEntity<User>(userService.findByUserName(username),HttpStatus.OK);
    }


    @PostMapping("/user/create/{username}")
    public ResponseEntity<User> insertUser(@RequestBody User user){
       return new ResponseEntity<User>( userService.insertUser(user), HttpStatus.OK);
    }

    @PutMapping("user/create/account")
    public ResponseEntity<User> createUserAccount(@RequestBody User user){
        return new ResponseEntity<>(userService.createUserAccount(user),HttpStatus.OK);
    }

    @PutMapping("user/deposit")
    public ResponseEntity<User> depositMoney(@RequestBody User user, @RequestParam ("balance") Long balance){
        return new ResponseEntity<User>(userService.editBalance(user, balance,"deposit"), HttpStatus.OK);
    }

    @PutMapping("user/withdraw")
    public ResponseEntity<User> withdrawMoney(@RequestBody User user, @RequestParam ("balance") Long balance){
        return new ResponseEntity<User>(userService.editBalance(user, balance, "withdraw"), HttpStatus.OK);
    }

    @PostMapping("begin")
    public ResponseEntity<List<User>> initializeAccounts(){
     return new ResponseEntity<>(userService.initialize(), HttpStatus.CREATED);
    }
}
