package com.tao.domain;

public class LoginInfo {
    //用户id
    private Integer id;

    //用户昵称
    private String username;

    //标识是否成功登录
    private boolean login = false;

    public LoginInfo(boolean login, Integer id, String username) {
        this.id = id;
        this.username = username;
        this.login = login;
    }

    public LoginInfo() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean isLogin() {
        return login;
    }

    public void setLogin(boolean login) {
        this.login = login;
    }

    @Override
    public String toString() {
        return "LoginInfo{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", login=" + login +
                '}';
    }
}
