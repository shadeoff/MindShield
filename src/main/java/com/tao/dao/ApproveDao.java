package com.tao.dao;

import com.tao.domain.Approve;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ApproveDao {

    @Insert("insert into tb_approve (uid,pid) values (#{uid},#{pid})")
    public void save(Approve approve);


    @Delete("delete from tb_approve where id = #{id}")
    public void deleteById(Integer id);


    @Select("select count(*) from tb_approve")
    public Integer getCount();

    @Select("select count(*) from tb_approve where pid = #{pid}")
    public Integer getCountByPid(Integer pid);

    @Select("select * from tb_approve where pid=#{arg0} and uid=#{arg1}")
    public Approve getApproveByPidAndUid(Integer pid,Integer uid);

    @Select("select * from tb_approve")
    public List<Approve> getAll();
}
