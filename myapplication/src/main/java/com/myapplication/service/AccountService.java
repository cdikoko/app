package com.myapplication.service;

import com.myapplication.model.Account;
import com.myapplication.model.User;
import com.myapplication.repo.AccountRepo;
import com.myapplication.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {

    @Autowired
    AccountRepo repo;

    @Autowired
    UserRepo userRepo;


    public Account saveAccount(Account account){
        return repo.save(account);
    }

    public Account getAccount(Account account){
      return repo.findById(account.getAccountId()).get();
    }

    public List<Account> allAccounts() {
        return repo.findAll();
    }

    public String deleteAccount(Account account){
       repo.delete(account);
       return "Successful deletion.";
    }


}
