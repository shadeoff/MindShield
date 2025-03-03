var app=new Vue({
    el:"#comment-admin-app",
    data(){
        return{
            isMenuVisible: false,//是否展开菜单
            infoIsShow:false,   //头像是否显示
            dialogFormVisible: false,//弹出框是否显示
            formLabelWidth: '120px',
            userForm:{
                id:'',
                username:'',
                email:'',
                password:'',
                gender:'',
                description:'',
            },
            articleForm: {
                aid:'',
                author:'',
                title: '',
                content: '',
                createTime: '',

            },
            articleRules:{
                title:[{required:true,message: "标题不能为空",trigger:'blur'}],
                content:[{required:true,message: "内容不能为空",trigger:'blur'}]
            },

            // userForm:{
            // },
            username:'',
            userid:'9999',

            posts:{
                img:"images/news/news1.jpg",
                username:"admin01",
                date:"2023年4月26日",
                commentNum:0,
                approve:0,
                title:"救命",
                content:"我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我"
            },


        };

    },
    mounted(){
        //this.isLogin();

        this.showInfoDetail();
        console.log("现在的userid为："+this.userid);
    },
    methods:{
        //   展开侧边栏某按钮菜单
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible;
        },


        /**
         * 用户信息管理
         */
        //显示头像和个人信息
        showInfoDetail:function (){
            var _this = this;

            axios.get("/users/show-info").then((resp)=>{
                if(resp.data.data.login === true){
                    console.log(resp.data);
                    _this.infoIsShow = true;
                    _this.username = resp.data.data.username;
                    console.log("进到这里了，_this.userid = "+_this.userid);
                    var id = resp.data.data.id;
                    axios.get("/users/"+id ).then((resp)=>{
                        console.log(resp.data);
                        if(resp.data.code === 20041){
                            _this.userForm = resp.data.data;
                            if (_this.userForm.description === null){
                                _this.userForm.description = "来介绍下自己吧~";
                            }

                            console.log("userForm如下：");
                            console.log(_this.userForm);
                        }else{
                            alert(resp.data.msg);
                        }
                    })
                }else{
                    _this.infoIsShow=false;
                }
            })


            console.log("1.先进到showInfo了，_this.userid = "+_this.userid);

        },

        //点击修改按钮
        toggleUpdate:function (){
            this.$confirm('确认修改?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.handleEdit();
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消修改'
                });
            });
        },

        //修改用户信息
        handleEdit:function (){
            axios.put("/users",this.userForm).then((res)=>{
                if(res.data.code === 20031){
                    this.$message.success("修改成功");
                }else if(res.data.data === 20030){
                    this.$message.error("修改失败");
                }else{
                    this.$message.error(res.data.msg);
                }
            })
        },

        /**
         * 作品上传模块
         */
        // 点击按钮弹出输入内容框
        toggleArticleForm:function (){
            this.dialogFormVisible = true;

        },

        //点击上传确认按钮
        toggleUploadArticle:function (articleForm){
            this.$refs[articleForm].validate((valid)=>{
                if(valid){
                    this.uploadArticle();
                    this.dialogFormVisible = false
                }else{
                    this.$message.warning('标题和内容都要认真写哦');

                }
            });

        },
        uploadArticle:function (){
            this.articleForm.aid = this.userForm.id;
            this.articleForm.author=this.username;

            console.log(this.articleForm);
            axios.post("/posts",this.articleForm).then((res)=>{
                if(res.data.code === 20011 ){
                    this.$message.success("成功提交");
                }else if(res.data.code ===20010){
                    alert("系统繁忙，请稍后再试")
                }else{
                    this.$message.error(res.data.msg);
                }
            })
        },
    }
})