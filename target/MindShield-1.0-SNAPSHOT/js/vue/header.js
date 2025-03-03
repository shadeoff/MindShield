var app=new Vue({
    el:"#header",
    data:{
        infoIsShow:false,
        username:'',
    },
    mounted(){
        //alert("已进入了header.js的mounted")
        this.showInfo();
    },
    methods:{
        //展示个人信息
        showInfo:function (){
            //alert("进入showInfo方法");
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
        },
        logout:function (){
            axios.get("/users/logout").then((res)=>{
                console.log(res.data);
            }).finally(()=>{
                window.location.href="index.html";
            })
        }
    }
})