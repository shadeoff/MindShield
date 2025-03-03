var app=new Vue({
    el:"#supportapp",
    data:{
        

        infoIsShow:true,
    },
    methods:{
        isLoginSuccess:function(){
            this.infoIsShow = !this.infoIsShow;
        },
        toggleActive() {
            this.isActive = !this.isActive;
          }
    }
})

var app2=new Vue({
    el:"#readapp",
    data(){
        return{
            titles:["什么是网络暴力","网络暴力手段","防止网络暴力","网络暴力和游戏","如何应对“施暴者”"],
            activeButton:0,
        };
            
        
        
    },
    methods:{

        // toggleActive() {
        //     this.isActive = !this.isActive;
        //   }
    }
})