var app = new Vue({
    el:"#registerapp",
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.registerForm.checkPass !== '') {
                    this.$refs.registerForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.registerForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            info:{
              email:'邮箱',
              username:'姓名',
              password:'密码',
            },
            registerForm: {
                email:'',
                username: '',
                pass: '',
                checkPass: '',
            },
            rules: {
                email:[{type: "email",message: "请输入正确的邮箱地址",trigger: ["blur", "change"]}],
                username: [
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                    { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        //注册
        register(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('开始注册！');
                    this.info.email=this.registerForm.email;
                    this.info.username=this.registerForm.username;
                    this.info.password=this.registerForm.pass;
                    var form = this.info;

                    axios.post("/users",form).then((res)=>{
                        console.log(res.data);
                        if(res.data.code === 20011){
                            alert('注册成功！即将跳转到登录页面~');
                            location.href = 'login.html?'+new Date().getMilliseconds();
                        }else{
                            alert(res.data.msg);
                        }

                    });

                } else {
                    alert('error submit!!');

                }
            });
        },
    }
})
