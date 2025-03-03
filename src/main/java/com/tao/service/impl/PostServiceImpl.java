package com.tao.service.impl;

import com.tao.dao.PostDao;
import com.tao.domain.Post;
import com.tao.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {
    @Autowired
    private PostDao postDao;

    public boolean addPost(Post post) {
        postDao.save(post);
        return true;
    }

    public boolean updatePostInfo(Post post) {
        postDao.update(post);
        return true;
    }

    public boolean approvePlus1(Integer id) {
        postDao.approvePlus1(id);
        return true;
    }

    public boolean approveSub1(Integer id) {
        postDao.approveSub1(id);
        return true;
    }

    public boolean deletePostById(Integer id) {
        postDao.deleteById(id);
        return true;
    }

    public Post getPostById(Integer id) {

        return postDao.getById(id);
    }

    public List<Post> getPostByAid(Integer aid) {

        return postDao.getByAid(aid);
    }

    public List<Post> getAllPost() {
        return postDao.getAll();
    }
}
