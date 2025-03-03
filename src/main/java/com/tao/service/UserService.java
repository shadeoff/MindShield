package com.tao.service;

import com.tao.domain.User;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 用户业务层
 * 要求：见名知意
 * */
@Transactional
public interface UserService {
    /**
     * 用户注册
     * @param user
     * @return
     */
    public boolean register(User user);

    /**
     * 修改用户信息
     * @param user
     * @return
     */
    public boolean updateUserInfo(User user);

    /**
     * 按id删除用户信息，不常用
     * @param id
     * @return
     */
    public boolean deleteUser(Integer id);

    /**
     * 按id查找用户，待定
     * @param id
     * @return
     */
    public User getUserById(Integer id);

    /**
     * 按email查找用户
     * @param email
     * @return
     */
    public User getUserByEmail(String email);

    /**
     * 通过id获取用户名
     * @param id
     * @return
     */
    public String getNameById(Integer id);

    /**
     * 获取用户名列表
     * @return
     */
    public List<String> getAllName();

    /**
     * 查找全部用户
     * @return
     */
    public List<User> getAllUser();

}
