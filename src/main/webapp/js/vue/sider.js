var app = new Vue({
    el:"#siderapp",
    data(){
        return{
            isMenuVisible: false,//是否展开菜单
            dialogFormVisible: false,//弹出框是否显示
            formLabelWidth: '120px',
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
        }
    },
    methods:{
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