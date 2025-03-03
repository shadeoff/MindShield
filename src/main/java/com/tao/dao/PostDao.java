package com.tao.dao;

import com.tao.domain.Post;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface PostDao {
    @Insert("insert into tb_post (aid,author,title,content,approve,comment_num,create_time) values (#{aid},#{author},#{title},#{content},#{approve},#{commentNum},#{createTime})")
    public void saveIdeal(Post post);

    @Insert("insert into tb_post (aid,author,title,content,create_time) values (#{aid},#{author},#{title},#{content},#{createTime})")
    public void save(Post post);

    @Update("update tb_post set aid=#{aid},author=#{author},title=#{title},content=#{content},approve=#{approve},comment_num=#{commentNum},create_time=#{createTime} where id=#{id}")
    public void update(Post post);

    @Update("update tb_post set approve = approve+1 where id = #{id}")
    public void approvePlus1(Integer id);

    @Update("update tb_post set approve = approve-1 where id = #{id}")
    public void approveSub1(Integer id);

    @Delete("delete from tb_post where id = #{id}")
    public void deleteById(Integer id);

    @Select("select * from tb_post where id=#{id}")
    public Post getById(Integer id);

    @Select("select * from tb_post where aid=#{aid}")
    public List<Post> getByAid(Integer aid);

    @Select("select * from tb_post")
    public List<Post> getAll();

}
