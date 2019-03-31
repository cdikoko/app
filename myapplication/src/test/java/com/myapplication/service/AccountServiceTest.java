package com.myapplication.service;

import com.myapplication.model.Account;
import com.myapplication.model.User;
import com.myapplication.repo.AccountRepo;
import com.myapplication.repo.UserRepo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import javax.swing.text.html.Option;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class AccountServiceTest {

    @InjectMocks
    AccountService service;

    @Mock
    UserRepo repo;

    @Mock
    AccountRepo a;

    @Test
    public void getAllAccountsReturnsAllAccount(){
        Account bal = new Account();
        bal.setAccountId(1L);
        bal.setBalance(1000L);
        List<User> all = Arrays.asList(new User(1L, "admin","email","password", new Account(1L, 1000)));

        when(a.findAll()).thenReturn(Arrays.asList(bal));
        assertEquals(Optional.of(1000L).get(), service.allAccounts());
    }

    @Test
    public void deleteAccountReturnsSuccessUponDeletion(){
        Account account = new Account(1L, 1000L);
        Account account2 = new Account(2L, 2000L);
        Account account3 = new Account(3L, 3000L);

        List<Account> expected = Arrays.asList(account, account2, account3);

        when(a.findAll()).thenReturn(expected);

        service.deleteAccount(account);

        assertEquals("Successful deletion.",service.deleteAccount(account));
    }

    @Test
    public void getAccountReturnsAccount(){
        Account account = new Account(1L, 1000L);
        Account account2 = new Account(2L, 2000L);
        Account account3 = new Account(3L, 3000L);

        List<Account> expected = Arrays.asList(account, account2, account3);

        when(a.findAll()).thenReturn(expected);

        Account result = service.getAccount(account);

        assertEquals(account, result);


    }
}