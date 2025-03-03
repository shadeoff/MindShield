package com.tao.dao;

import com.tao.domain.Approve;
import com.tao.domain.Comment;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface CommentDao {

    @Insert("insert into tb_comment (uid,pid,content,create_time) values (#{uid},#{pid},#{content},#{createTime}})")
    public void save(Comment comment);

    @Delete("delete from tb_comment where id = #{id}")
    public void deleteById(Integer id);

    @Update("update tb_comment set content = #{content} where id=#{id};")
    public void update(Comment comment);

    @Select("select count(*) from tb_comment where pid = #{pid}")
    public Integer getCountByPid(Integer pid);

    @Select("select * from tb_comment where pid = #{pid}")
    public List<Comment> getCommentsByPid(Integer pid);

    @Select("select * from tb_comment where pid=#{arg0} and uid=#{arg1}")
    public Comment getCommentByPidAndUid(Integer pid, Integer uid);

    @Select("select * from tb_comment")
    public List<Comment> getAll();
}

