package com.tao.controller;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.tao.domain.Post;
import com.tao.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {
    @Autowired
    private PostService postService;

    @PostMapping
    public Result addPost(@RequestBody Post post){
        post.setCreateTime(new Date());
        System.out.println(post.getCreateTime());
        boolean flag = postService.addPost(post);
        return new Result(flag?Code.SAVE_OK:Code.SAVE_ERR,flag);
    }

    @PutMapping
    public Result updatePost(@RequestBody Post post){

        System.out.println(post);
        boolean flag = postService.updatePostInfo(post);
        return new Result(flag?Code.UPDATE_OK:Code.UPDATE_ERR,flag);
    }
    @DeleteMapping("/{id}")
    public Result deletePost(@PathVariable Integer id){
        boolean flag = postService.deletePostById(id);
        return new Result(flag?Code.DELETE_OK:Code.DELETE_ERR,flag);
    }


    @GetMapping("/{id}")
    public Result getPostById(@PathVariable Integer id){
        Post post = postService.getPostById(id);
        Integer code = post != null ? Code.GET_OK :Code.GET_ERR;
        String msg = post != null ? "查询成功" : "数据查询失败";
        System.out.println(post);
        return new Result(code,post,msg);
    }

    @GetMapping("/showPost/{id}")
    public Result showPostById(@PathVariable Integer id, HttpServletRequest request){
        Post post = postService.getPostById(id);
        Integer code = post != null ? Code.GET_OK :Code.GET_ERR;
        String msg = post != null ? "查询成功" : "数据查询失败";
        System.out.println(post);
        return new Result(code,post,msg);
    }

    @GetMapping("/myPosts/{aid}")
    public Result getPostByAid(@PathVariable Integer aid){
        List<Post> postList = postService.getPostByAid(aid);
        Integer code = postList != null ? Code.GET_OK : Code.GET_ERR;
        String msg = postList != null ? "查询成功" : "数据查询失败";
        return new Result(code,postList,msg);
    }

    @GetMapping
    public Result getAllPost(){
        List<Post> postList = postService.getAllPost();
        Integer code = postList != null ? Code.GET_OK : Code.GET_ERR;
        String msg = postList != null ? "查询成功" : "数据查询失败";
        return new Result(code,postList,msg);

    }


}
