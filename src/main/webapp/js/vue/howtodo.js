var app=new Vue({
    el:"#howtodoapp",
    data(){
        return{
            videoList:[{
                bvid:"BV1wx4y1F73v",
                img:"images/video-cover/01.jpg",
                title:"【罗翔】面对网络暴力，法律真的无能为力吗？",
                description:"尊重他人就是尊重自己，尊重自己也要尊重他人。"
            },
                {
                    bvid:"BV1AE41187hj",
                    img:"images/video-cover/02.jpg",
                    title:"泰国的一个走心广告，我们与恶的距离",
                    description:"恶的是他们，你并没有错！键盘侠们能不能活的善良一点？"
                },
                {
                    bvid:"BV1Bd4y1D77u",
                    img:"images/video-cover/03.jpg",
                    title:"究竟网络暴力带来了什么？",
                    description:"笑笑吧，你的坚强是最大的胜利"
                },
                {
                    bvid:"BV1Ks4y1U7AR",
                    img:"images/video-cover/04.jpg",
                    title:"那个被骂上热搜的高三女生，得到大家的道歉了吗？",
                    description:"你的一句话可能伤害别人很长时间【黄一刀有毒】"
                },
                {
                    bvid:"BV1Px411o7Pk",
                    img:"images/video-cover/05.jpg",
                    title:"【网络暴力】以喷之名",
                    description:"网络暴力看似离我们很远，其实很近...鬼畜之下有温情"
                },
                {
                    bvid:"BV1Q4411V71M",
                    img:"images/video-cover/06.jpg",
                    title:"2019届华南农业大学动画毕业设计《正义使者》",
                    description:"故事梗概：在一片灰色地带，游走着一群正义使者，他们看什么是什么，站在道德的制高点，伸张着属于他们的正义。"
                },
                {
                    bvid:"BV1rk4y1R7id",
                    img:"images/video-cover/07.jpg",
                    title:"【罗翔】聊聊网络喷子与键盘侠",
                    description:"“一个知识越贫乏的人，越是拥有一种莫名奇怪的勇气和自豪感，因为知识越贫乏，你所相信的东西就越绝对，你根本没有听过与此相对立的观点” "
                },
                {
                    bvid:"BV1854y1g7Jv",
                    img:"images/video-cover/08.jpg",
                    title:"网暴是看不见的刀，他们不是自杀，是“他杀”！",
                    description:"这些年，多条生命逝去，从最近的粉发女孩到半个月前的管管，再到刘学州，到罗小猫猫子，谁来对这些年轻的生命负责？！网络暴力是作为一种暴行，杀伤力强，频繁攻击……语言会变成凶器，一刀一刀刺入人心，夺走生命！我们想说：网络不是法外之地，请带上你的同理心，再来网络世界发言！"
                },
                {
                    bvid:"BV1QY411b7Kf",
                    img:"images/video-cover/09.jpg",
                    title:"？",
                    description:"不是搞怪，放空，不要钻牛角尖"
                },



            ],

            titles:["看看这些up是怎么做的","来场对话吧","来场心灵spa",""],
            activeButton:0,
            infoIsShow:true,
            videoUrl:"",
            bvid:'BV1QY411b7Kf',
        };
        //player.bilibili.com/player.html?aid=992258563&bvid=BV1wx4y1F73v&cid=1018976545&page=1"
    },
    mounted(){
        //alert(this.bvid);
        this.updateVideoUrl();
    },
    methods:{
        //更新视频url
        updateVideoUrl() {
            this.videoUrl = `//player.bilibili.com/player.html?bvid=${this.bvid}&page=1`;
        },
        // 视频播放
        playVideo:function(bvid){

            this.bvid = bvid;
            //alert(this.bvid);
            this.updateVideoUrl();
        },

    },
    updated() {
        // 视频源更改时，更新 iframe 的 src 属性
        const iframe = this.$el.querySelector('iframe');
        if (iframe) {
            iframe.src = this.videoUrl;
        }
    }
})