package com.tao.dao;

import com.tao.domain.User;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.dao.DuplicateKeyException;

import java.util.List;

public interface UserDao {
//    @Insert("insert into tb_user values (null,#{username},#{password},#{email},#{gender},#{description})")
    @Insert("insert into tb_user (username,password,email)values (#{username},#{password},#{email})")
    public void save(User user) throws DuplicateKeyException;

    @Update("update tb_user set username=#{username},password=#{password},email=#{email},gender=#{gender},description=#{description} where id=#{id}")
    public void update(User user);

    @Delete("delete from tb_user where id = #{id}")
    public void delete(Integer id);

    @Select("select * from tb_user where id=#{id}")
    public User getById(Integer id);

    @Select("select * from tb_user where email = #{email}")
    public User getByEmail(String email);

    @Select("select username from tb_user where id=#{id}")
    public String getNameById(Integer id);

    @Select("select username from tb_user")
    public List<String> getAllName();

    @Select("select * from tb_user")
    public List<User> getAll();
}
