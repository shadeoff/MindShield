package com.tao.domain;

import java.util.Date;

public class Comment {
    //评论id
    private Integer id;

    //点赞用户id
    private Integer uid;

    //帖子id
    private Integer pid;

    //评论时间
    private Date createTime;

    //评论内容
    private String content;

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

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", uid=" + uid +
                ", pid=" + pid +
                ", createTime=" + createTime +
                ", content='" + content + '\'' +
                '}';
    }
}
