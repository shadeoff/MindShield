

var app=new Vue({
    el:"#aboutapp",
    data(){
        return{
            titles:["什么是网络暴力","网络暴力手段","如何预防网络暴力","网络暴力和游戏","如何面对“施暴者”"],
            imagesUrl:["images/banner/about1.png",
                "images/banner/about2.png",
                "images/banner/about3.png",
                "images/banner/about4.png",
                "images/banner/about5.png"],
            activeButton:0,
            bannerAreaStyle:''
        };
    },
    watch: {
        activeButton(newValue, oldValue) {
            this.bannerAreaStyle = `background-image:url(${this.imagesUrl[newValue]})`;

        }
    },
    created() {
        this.bannerAreaStyle = `background-image:url(${this.imagesUrl[this.activeButton]})`;
    },
    methods:{
    }
})