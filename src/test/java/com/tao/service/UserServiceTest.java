package com.tao.service;

import com.tao.config.SpringConfig;
import com.tao.domain.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Test
    public void testGetById(){
        User user = userService.getUserById(1);
        System.out.println(user);
    }

    @Test
    public void testGetAll(){
        List<User> allUser = userService.getAllUser();
        System.out.println(allUser);
    }

    @Test
    public void testLogin(){

        User user = new User();
        user.setEmail("email");
        user.setPassword("password");

        System.out.println(user);
    }

}
