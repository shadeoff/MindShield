package com.tao.service.impl;

import com.tao.dao.CommentDao;
import com.tao.domain.Comment;
import com.tao.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentDao commentDao;

    public boolean addComment(Comment comment) {
        commentDao.save(comment);
        return true;
    }

    public boolean deleteComment(Integer id) {
        commentDao.deleteById(id);
        return true;
    }

    public boolean updateComment(Comment comment) {
        commentDao.update(comment);
        return true;
    }

    public List<Comment> getCommentsByPid(Integer pid) {
        return commentDao.getCommentsByPid(pid);
    }
}
