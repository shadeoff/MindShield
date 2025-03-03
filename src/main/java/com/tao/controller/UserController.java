package com.tao.controller;


import com.tao.Exception.BusinessException;
import com.tao.domain.LoginInfo;
import com.tao.domain.User;
import com.tao.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.awt.print.Book;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    public Result register(@RequestBody User user) {
//        try {
//            System.out.println(user);
//            boolean flag = userService.register(user);
//            return new Result(flag?Code.SAVE_OK:Code.SAVE_ERR,flag);
//        }catch (BusinessException e) {
//            System.out.println(e.getMessage());
//            return new Result(Code.SAVE_ERR, false, e.getMessage());
//        }
        System.out.println(user);
        boolean flag = userService.register(user);
        return new Result(flag?Code.SAVE_OK:Code.SAVE_ERR,flag);
    }

    @PutMapping
    public Result updateUserInfo(@RequestBody User user) {
        boolean flag = userService.updateUserInfo(user);
        return new Result(flag?Code.UPDATE_OK:Code.UPDATE_ERR,flag);

    }

    @DeleteMapping("/{id}")
    public Result deleteUser(@PathVariable Integer id) {
        boolean flag = userService.deleteUser(id);
        return new Result(flag?Code.DELETE_OK:Code.DELETE_ERR,flag);
    }

    @GetMapping("/{id}")
    public Result getUserById(@PathVariable Integer id) {

        //int i = 1/0;

        User user = userService.getUserById(id);
        Integer code = user != null ? Code.GET_OK : Code.GET_ERR;
        String msg = user != null ? "查询成功" : "数据查询失败，请重试!";
        return new Result(code,user,msg);

    }

    @PostMapping("/login")
    public Result getLogin(@RequestBody User user, HttpSession httpSession){
        System.out.println("1:user的email为"+user.getEmail());
        User userRes = userService.getUserByEmail(user.getEmail());
        Integer code;
        String msg;

        if(userRes != null){
            LoginInfo info = new LoginInfo(true,userRes.getId(),userRes.getUsername());
            if(user.getPassword().equals(userRes.getPassword())){
                code=Code.COMPARE_OK;
                msg="登录成功";
                httpSession.setAttribute("loginInfo",info);

                return new Result(code,info,msg);
            }else{
                code=Code.COMPARE_ERR;
                msg="密码与用户不匹配";

            }
            //code = user.getPassword() == userRes.getPassword() ? Code.COMPARE_OK : Code.COMPARE_ERR;
            //msg = user.getPassword() == userRes.getPassword() ? "登录成功" : "密码与用户不匹配";

            System.out.println("2:user.getPassword()="+user.getPassword());
            System.out.println("3:userRes.getPassword()"+userRes.getPassword());
        }else{
            code = Code.GET_ERR;
            msg = "用户不存在";
        }
        //httpSession.setAttribute("loginInfo",info);
        return new Result(code,null,msg);
    }

    //登录信息
    @GetMapping("/show-info")
    public Result getLoginInfo(HttpSession httpSession){
        LoginInfo loginInfo = new LoginInfo();
        if( (LoginInfo) httpSession.getAttribute("loginInfo") != null ){
            loginInfo = (LoginInfo) httpSession.getAttribute("loginInfo");
        }
        System.out.println("loginInfo is "+loginInfo);
        return new Result(Code.GET_OK,loginInfo);
    }

    @GetMapping("/logout")
    public Result logout(HttpSession httpSession, HttpServletRequest request){
        //1. 获取Session对象
        HttpSession session = request.getSession();
        System.out.println(session);

        // 销毁
        session.invalidate();
        return new Result(Code.LOGOUT_OK,"退出");
    }

    @GetMapping
    public Result getAllUser() {
        List<User> userList = userService.getAllUser();
        Integer code = userList != null ? Code.GET_OK : Code.GET_ERR;
        String msg = userList != null ? "查询成功" : "数据查询失败，请重试!";
        return new Result(code,userList,msg);
    }

    //

}
