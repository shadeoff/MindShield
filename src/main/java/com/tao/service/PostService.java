package com.tao.service;

import com.tao.domain.Post;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface PostService {

    /**
     * 提交发表帖子
     * @param post
     * @return
     */
    public boolean addPost(Post post);

    /**
     * 修改用户信息
     * @param post
     * @return
     */
    public boolean updatePostInfo(Post post);

    /**
     * 点赞数+1
     * @param id
     * @return
     */
    public boolean approvePlus1(Integer id);

    /**
     * 点赞数-1
     * @param id
     * @return
     */
    public boolean approveSub1(Integer id);

    /**
     * 按id删除帖子
     * @param id
     * @return
     */
    public boolean deletePostById(Integer id);


    /**
     * 按id查找帖子
     * @param id
     * @return
     */
    public Post getPostById(Integer id);

    /**
     * 按用户id查找帖子(好几篇)
     * @param aid
     * @return
     */
    public List<Post> getPostByAid(Integer aid);


    /**
     * 查找全部帖子
     * @return
     */
    public List<Post> getAllPost();
}
