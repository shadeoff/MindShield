var app=new Vue({
    el:"#postapp",
    data(){
        return{
            isCommentFocused:false,
            infoIsShow:true,
            currentUserId:'',
            postId:7,
            post:{

                img:"images/news/news1.jpg",
                author:"admin01",
                createTime:"",
                commentNum:0,
                approve:0,
                title:"救命",
                content:"",
            //是否显示回复
            
            },
            //赞
            approveBean:{
                pid:'',
                uid:''
            },
            comments: [

                {
                  showReplies:false,
                  username:"大卫",
                  time:"2023-4-26 22:25",
                  content: "这是第一条评论",
                  replies: [
                    { 
                        username:"回复者1",
                        time:"2023-4-26 22:25",
                        content: "第二条评论的第一条回复" 
                    },
                    { 
                        username:"回复者2",
                        time:"2023-4-26 22:25",
                        content: "第二条评论的第二条回复" 
                    },
                  ],
                },
                {
                  showReplies:false,
                  username:"珍妮",
                  time:"2023-4-26",
                  content: "这是第二条评论",
                  replies: [
                    { 
                        username:"回复者1",
                        time:"2023-4-26 22:25",
                        content: "第二条评论的第一条回复" 
                    },
                    { 
                        username:"回复者2",
                        time:"2023-4-26 22:25",
                        content: "第二条评论的第二条回复" 
                    },
                  ],
                },
              ],
        };
        
    },
    mounted(){
        //获取url中的id参数
        const urlParams = new URLSearchParams(window.location.search);
        const id = parseInt(urlParams.get('id'));
        this.postId = id;

        var _this=this;
        axios.get("users/show-info").then((res)=>{
            if(res.data.data.login === true){
                _this.currentUserId = res.data.data.id;
                this.showPostDetail();
            }else{
                this.showPostDetail();
            }
        })
    },
    methods:{

        showPostDetail:function (){
            var _this=this;
            axios.get("/posts/"+_this.postId).then((res)=>{
                _this.post = res.data.data;
            })
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
            axios.post("/approves",this.approveBean).then((res)=>{
                _this.showPostDetail();
               // console.log(res);
            })

        },
        //取消赞
        cancelApprove:function (id,pid){
            var _this = this;
            axios.delete(`/approves/${id}/${pid}`).then((res)=>{
                _this.showPostDetail();
                //console.log(res);
            })
        }
    }
})