package com.tao.service;

import com.tao.domain.Comment;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface CommentService {
    /**
     * 添加评论
     * @param comment
     * @return
     */
    public boolean addComment(Comment comment);

    /**
     * 删除评论
     * @param id
     * @return
     */
    public boolean deleteComment(Integer id);

    /**
     * 通过comment中的id更新comment
     * @param comment
     * @return
     */
    public boolean updateComment(Comment comment);

    /**
     * 通过帖子id（pid）获取其全部评论
     * @param pid
     * @return
     */
    public List<Comment> getCommentsByPid(Integer pid);
}
