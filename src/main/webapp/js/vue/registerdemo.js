var app = new Vue({
    el:"#registerapp",
    data:{
        info:{
            username:"",
            password:"",
            email:""
        },

    },
    methods:{

        register:function (){
            var form = this.info;
            console.log(form);
            //alert(this.info.username);
            //alert("1:form.username = "+form.username);
            //发送ajax请求
            axios.post("/users",form).then((res)=>{
                //alert("form.username = "+form.username);
            });
            //alert("2:form.username = "+form.username);
        },
    }
})