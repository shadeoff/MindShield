package com.tao.service.impl;

import com.tao.Exception.BusinessException;
import com.tao.Exception.SystemException;
import com.tao.controller.Code;
import com.tao.dao.UserDao;
import com.tao.domain.User;
import com.tao.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    public boolean register(User user) {
        try {
            userDao.save(user);
            return true;
        }catch (DuplicateKeyException e){
            throw new BusinessException(Code.BUSINESS_LOGIN_ERR,"该邮箱已被注册");
        }

    }

    public boolean updateUserInfo(User user) {
        userDao.update(user);
        return true;
    }

    public boolean deleteUser(Integer id) {
        userDao.delete(id);
        return true;
    }



    public User getUserById(Integer id) {
        if(id < 0){
            throw new BusinessException(Code.BUSINESS_ERR,"请勿进行非法操作！");
        }

        return userDao.getById(id);
    }

    public User getUserByEmail(String email) {
        return userDao.getByEmail(email);
    }

    public String getNameById(Integer id) {
        return userDao.getNameById(id);
    }

    public List<String> getAllName() {
        return userDao.getAllName();
    }

    public List<User> getAllUser() {
        return userDao.getAll();
    }
}
