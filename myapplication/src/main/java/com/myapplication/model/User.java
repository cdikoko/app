package com.myapplication.model;

import com.sun.deploy.security.ValidationState;
import lombok.*;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import java.util.Set;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String username, password, email;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Account account;


}
