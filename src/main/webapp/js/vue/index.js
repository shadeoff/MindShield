var app=new Vue({
    el:"#index",
    data:{
        infoIsShow:false,
        username:'',
    },
    mounted(){
    },
    methods:{
        isLoginSuccess:function(){
            this.infoIsShow = !this.infoIsShow;
        },
        //展示个人信息
        showInfo:function (){
            //alert("进入方法");
            var _this=this;
            axios.get("/users/show-info").then((resp)=>{

                if(resp.data.data.login === true){
                    console.log(resp.data);
                    _this.infoIsShow = true;
                    _this.username = resp.data.data.username;
                }else{
                    _this.infoIsShow=false;
                }
            })
        }
    }
})