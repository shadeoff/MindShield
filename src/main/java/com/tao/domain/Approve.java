package com.tao.domain;

public class Approve {
    //点赞id
    Integer id;

    //点赞用户id
    Integer uid;

    //点赞帖子id
    Integer pid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    @Override
    public String toString() {
        return "Approve{" +
                "id=" + id +
                ", uid=" + uid +
                ", pid=" + pid +
                '}';
    }
}
