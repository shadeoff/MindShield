var app=new Vue({
    el:"#content-admin-app",
    data(){
        return{
            isMenuVisible: false,//是否展开菜单
            infoIsShow:false,   //头像是否显示

            //对话框标识符
            dialogFormVisible: false,//发布内容弹出框是否显示
            dialogUpdateFormVisible: false,//修改作品弹出框是否显示
            formLabelWidth: '120px',

            addPostForm: {
                aid:'',
                author:'',
                title: '',
                content: '',
                createTime: '',

            },
            updatePostForm:{
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

            post:{
                id:'',
                author:"admin01",
                createTime:"2023年4月26日",
                commentNum:0,
                approve:0,
                title:"救命",
                content:"我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我我被网暴了好难过能不能救救我"
            },
            postList:[

            ],

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
                    _this.userid = resp.data.data.id;
                    var id = resp.data.data.id;

                    console.log("进到这里了，id = "+ id);

                    //展示帖子
                    _this.showMyPosts(id);

                }else{
                    _this.infoIsShow=false;
                }
            })


            console.log("1.先进到showInfo了，_this.userid = "+_this.userid);

        },

        /**
         * 作品上传模块
         */
        // 点击按钮弹出输入内容框
        toggleAddPostForm:function (){
            this.dialogFormVisible = true;

        },

        //点击上传确认按钮
        toggleEnsureAdd:function (addPostForm){
            this.$refs[addPostForm].validate((valid)=>{
                if(valid){
                    this.addPost();
                    this.dialogFormVisible = false;
                }else{
                    this.$message.warning('标题和内容都要认真写哦');

                }
            });

        },
        addPost:function (){
            var _this = this;
            this.addPostForm.aid = this.userid;
            this.addPostForm.author=this.username;
            console.log("this.addPostForm is:");
            console.log(this.addPostForm);
            axios.post("/posts",this.addPostForm).then((res)=>{
                if(res.data.code === 20011 ){
                    this.$message.success("成功提交");
                }else if(res.data.code ===20010){
                    alert("系统繁忙，请稍后再试")
                }else{
                    this.$message.error(res.data.msg);
                }
            }).finally(()=>{
                _this.showMyPosts(_this.userid);
            })
        },

        /**
         * 个人内容板块
         */
        showMyPosts:function (id){
            var _this = this;
            axios.get("/posts/myPosts/"+id).then((res)=>{

                _this.postList = res.data.data;
                // axios.get("/users/"+)
                console.log("进入了showMyPost方法，POSTList为：");
                console.log(_this.postList);

            })
        },


        //点击帖子查看详情
        showPost:function (event, id){
            event.preventDefault(); // 防止链接跳转
            axios.get(`/posts/showPost/${id}`).then(() => {
                // 转发到帖子详细内容页面
                window.location.href = "/post.html?id="+id;
            });
        },

        /* 修改内容 */
        // 点击按钮弹出输入内容框
        toggleUpdatePostForm:function (id){

            // console.log(id);
            var _this = this;
            axios.get("/posts/"+id).then((res)=>{
                if(res.data.code === 20041){ //查询成功
                    //显示弹层，加载数据
                    _this.updatePostForm = res.data.data;
                    this.dialogUpdateFormVisible = true;
                }else{
                    this.$message.error(res.data.msg);
                }

            });
        },

        //点击确认修改
        toggleEnsureUpdate:function (formRef){
            console.log();
            var _this = this;
            this.$refs[formRef].validate((valid)=>{
                if(valid){
                    this.updatePost();
                    this.dialogFormVisible = false
                }else{
                    this.$message.warning('标题和内容都要认真写哦');

                }
            });
        },

        updatePost:function (){
            var _this = this;
            axios.put("/posts",_this.updatePostForm).then((res)=>{
                if(res.data.code === 20031){
                    _this.dialogUpdateFormVisible = false;
                    this.$message.success("成功");
                }else if(res.data.code === 20030){
                    this.$message.error("修改失败");

                }
            }).finally(()=>{
                _this.showMyPosts(_this.userid);
            })
        },


        /*  删除帖子  */
        toggleDelete:function(id){
            this.$confirm('确定要删除吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.deletePost(id);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: ''
                });
            });
        },
        deletePost:function (id){
            var _this = this;
            axios.delete("/posts/"+id).then((res)=>{
                if(res.data.code === 20021){
                    this.$message.warning("删除成功");
                }else if(res.data.code === 20020){
                    this.$message.error("帖子可能不存在了~");
                }
                console.log(res.data);
            }).finally(()=>{
                _this.showMyPosts(_this.userid);
            })
        }


    }
})