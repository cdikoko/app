package com.myapplication.service;

import com.myapplication.model.Account;
import com.myapplication.model.User;
import com.myapplication.repo.AccountRepo;
import com.myapplication.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    AccountRepo accountRepo;
    UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo, AccountRepo accountRepo) {
        this.userRepo = userRepo;
        this.accountRepo = accountRepo;
    }

    public List<User> getUsers() {
        return userRepo.findAll();
    }

    public Optional<User> findUserById(Long userId) {
        return userRepo.findById(userId);
    }

    public User insertUser(User user) { return userRepo.save(user);}

    public User findByUserName(String username) { return userRepo.findAll().stream().filter(user -> user.getUsername().equals(username)).findFirst().get(); }

    public User createUserAccount(User user) { return userRepo.save(user); }

    public Account findUserAccount(User user){
        return accountRepo.findById(user.getAccount().getAccountId()).get();
    }

    public User editBalance(User req, Long balance, String transaction){
        Optional<User> user = userRepo.findById(req.getUserId());
        if(transaction.equals("withdraw")){
        user.get().getAccount().setBalance(user.get().getAccount().getBalance()-balance);
        }
        if(transaction.equals("deposit")){
            user.get().getAccount().setBalance(user.get().getAccount().getBalance()+balance);
        }
        else
            System.out.println("Are you sure you did everything correctly?");
        return userRepo.save(user.get());
    }

    public List<User> initialize() {
        User clement = new User();
        User danielle = new User();
        User rabia = new User();
        User kuvvat = new User();
        User vepa = new User();


        Account one = new Account();
        Account two = new Account();
        Account three = new Account() ;
        Account four= new Account() ;
        Account five= new Account() ;
        Account six = new Account() ;
        Account seven = new Account();
        Account eight = new Account();
        Account nine = new Account();

        clement.setUsername("clement");
        clement.setAccount(one);
        danielle.setUsername("danielle");
        danielle.setAccount(two);
        rabia.setUsername("rabia");
        kuvvat.setUsername("kuvvat");
        vepa.setUsername("vepa");


        List<User> allUsers = Arrays.asList(clement, danielle, rabia, kuvvat, vepa);
        userRepo.saveAll(allUsers);
       return allUsers;
    }
}
