package com.myapplication;

import com.myapplication.model.User;
import com.myapplication.repo.UserRepo;
import com.myapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MyapplicationApplication {


    public static void main(String[] args) {

        ConfigurableApplicationContext run = SpringApplication.run(MyapplicationApplication.class, args);


        
    }


    

}

