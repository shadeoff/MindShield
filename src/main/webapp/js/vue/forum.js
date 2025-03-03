
var app=new Vue({
    el:"#forumapp",
    data(){
        return{
            currentUserId:'',
            post:{
                id:'',
                author:"admin01",
                createTime:"2023年4月26日",
                commentNum:0,
                approve:0,
                title:"救命",
                content:"",

            },
            approveBean:{
                pid:'',
                uid:''
            },
            postList:[
        ],


        };
        
    },
    mounted(){
        var _this=this;
        axios.get("users/show-info").then((res)=>{
            if(res.data.data.login === true){
                _this.currentUserId = res.data.data.id;
                this.showAllPosts();
            }else{
                this.showAllPosts();
            }
        })

    },
    methods:{

        /**
         * forum板块
         */
        showAllPosts:function (){
            var _this = this;
          axios.get("/posts").then((res)=>{

              _this.postList = res.data.data;
              //console.log(_this.postList);
            })
        },


        //点击帖子查看详情
        showPost:function (event, authorId){
            event.preventDefault(); // 防止链接跳转
            axios.get(`/posts/showPost/${authorId}`).then(() => {
                // 转发到帖子详细内容页面

                window.location.href = "/post.html?id="+authorId;
            });
        },
        /**
         * 点赞功能
         */



        //点赞
        toggleApprove:function (postId){
            if(this.currentUserId === ''){
                window.location.href="/login.html";
            }else{
                this.checkApprove(postId);
            }
        },

        //检查是否已经点赞
        checkApprove: function (pid){
            var _this=this;
            axios.get(`/approves/${pid}/${_this.currentUserId}`).then((res)=>{
                console.log("checkApprove中 ，res.data = ");
                console.log(res.data);
                //data等于true,说明有数据，就是点赞过了，所以要取消
                if(res.data.code === 20041){
                    _this.cancelApprove(res.data.data.id,pid);
                }else if(res.data.code === 20040){

                    _this.addApprove(pid);
                }

            })
        },
        //增加赞
        addApprove:function (pid){
            var _this = this;
            this.approveBean.pid = pid;
            this.approveBean.uid = this.currentUserId;
            axios.post("/approves",this.approveBean).then(()=>{
                _this.showAllPosts();
            })

        },
        //取消赞
        cancelApprove:function (id,pid){
            var _this = this;
            axios.delete(`/approves/${id}/${pid}`).then((res)=>{
                _this.showAllPosts();
            })
        }
    }
})