var app = new Vue({
    el:"#loginApp",
    data() {
        return {
            loginForm: {
                email:'',
                password: '',
            },
            rules: {
                email:[{type: "email",message: "请输入正确的邮箱地址",trigger: ["blur", "change"]}],
            }
        };
    },
    methods: {
        //登录
        login(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var form = this.loginForm;
                    console.log(form);
                    axios.post("/users/login",form).then((res)=>{
                        //console.log(res.data);
                         if(res.data.code === 20051){
                             //console.log(res.data);
                            location.href="index.html";
                        }else{
                            alert(res.data.msg);
                        }

                    });

                } else {
                    alert('您的提交不符合规范！');

                }
            });
        },
    }
})
