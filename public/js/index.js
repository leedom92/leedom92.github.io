//nav 组件
Vue.component('el-nav', {
    data: function () {
        return {

        }
    },
    methods: {

    },
    template: `<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button id="collapseBtn" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">JLD</a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li><router-link to="/home">home</router-link></li>
                            <li><router-link to="/about">about</router-link></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">more</a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><router-link to="/secret">secret</router-link></li>
                                    <li><router-link to="/experience">experience</router-link></li>
                                    <li class="divider"></li>
                                    <li><router-link to="/entertainment">entertainment</router-link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>`
})

Vue.component('el-header', {
    template: `<header>
                <div class="contain">
                    <div class="avatar">
                        <img :src="avatar" alt="" class="img-circle">
                    </div>
                    <div class="desc text-center">
                        <h2 class="h-size">{{ name }}</h2>
                        <p class="p-size">{{ info }}</p>
                    </div>
                </div>
            </header>`,
    data: function () {
        return {
            avatar: 'public/img/avatar3.jpg',
            name: 'leedom',
            info: "My Chinese name is 蒋利栋. I'm an enthusiastic man who likes sports and literature."
        }
    },
    created: function () {
        this.$message({
            showClose: true,
            message: "welcome to leedom's zone",
            type: 'success'
        })
    }
})

Vue.component('el-info', {
    template: `<div class="container">
    <div class="row text-center">
        <div class="col-xs-4 img_box" v-for="item in getInfo">
            <img :src="item.getImg" class="center-block img-responsive" alt="">
            <p>{{ item.getName }}</p>
            <p>
            <el-popover
                placement="bottom"
                :title="item.getName"
                width="200"
                trigger="click"
                :content="item.content">
                <el-button slot="reference">click</el-button>
            </el-popover>
          </p>
        </div>
    </div>
</div>`,
    data: function () {
        return {
            getInfo: [{
                    popWay: 'popoverAngular',
                    getImg: 'public/img/angular.jpg',
                    getName: 'angularjs',
                    content: "AngularJS是为了克服HTML在构建应用上的不足而设计的。"
                },
                {
                    popWay: 'popoverVue',
                    getImg: 'public/img/vue.jpg',
                    getName: 'vue.js',
                    content: "Vue.js是一个构建数据驱动的 web 界面的渐进式框架。"
                },
                {
                    popWay: 'popoverJquery',
                    getImg: 'public/img/jquery.jpg',
                    getName: 'jquery',
                    content: "jQuery是一个快速、简洁的JavaScript框架，是一个优秀的JavaScript代码库。"
                }
            ]
        }
    },
    methods: {

    },
    created: function () {
        $('[data-toggle="popover"]').popover();
        // document.getElementsByClassName('info-btn').popover();
    }
})

Vue.component('el-time', {
    data: function () {
        return {
            getTime: new Date().toLocaleDateString(),
            nowTime: new Date().toLocaleTimeString(),
        }
    },
    methods: {

    },
    template: `<div class="text-center">
            <h1 style="padding-top:10rem;">
                    {{ getTime }}
            </h1>
            <h2> {{ nowTime | timeFunc }} </h2>
            </div>
            `,
    created: function () {
        var that = this;
        setInterval(function () {
            that.nowTime = new Date().toLocaleTimeString()
        }, 1000);
        that.$message({
            showClose: true,
            message: "show the time",
        });
        // axios.get('http://v.wx91go.com/index.php?g=Api&m=Hotel&a=index').then(res=>{
        //     console.log(res);
        //     this.getImg = info.banner_list;
        // })

        // axios.get('http://v.wx91go.com/index.php?g=Api&m=Hotel&a=index').then(function(res){
        //     console.log(res);
        //     that.getImg = res.data.banner_list;

        // })
    }
})

Vue.component('el-entertainment', {
    data: function () {
        return {
            entertainMsg: [],
            url: 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=',
            nowCount: 5,
            switchShow: false,
        }
    },
    methods: {
        moreFn: function (itemIndex) {
            var that = this;
            axios.get(this.url + this.nowCount).then(function (res) {
                console.log(res);
                // that.$message({
                //     showClose: true,
                //     message: "show the entertainment",
                //     type: 'success'
                // })
                var info = res.data;
                that.entertainMsg = info;
                that.switchShow = !that.switchShow;
            })

        },
        getMore: function () {
            this.switchShow = !this.switchShow;
            this.nowCount = this.nowCount + 5;
            this.moreFn(this.nowCount);
        },
        init: function () {
            this.moreFn(this.nowCount);
            this.$message({
                showClose: true,
                message: "show the entertainment",
                type: 'success'
            })
        }
    },
    template: `
    <div class="mediaBox">
        <div class="row rowStyle">
            <div class="col-md-8 col-md-offset-2">
                <div class="media" v-for="(item,index) in entertainMsg" :key="index">
                    <div class="media-left">
                        <a href="javascript:;">
                            <img :src="item.thumbnail_pic_s" :alt="item.title" class="media-object">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4>{{item.author_name}}</h4>
                        <p>{{item.title}}</p>
                    </div>
                </div>
            </div>
            <div class="col-xs-12">
                <p class="get-more" v-on:click="getMore()" v-show="switchShow">点击加载更多</p>
                <p class="loading" v-show="!switchShow">加载中...</p>
            </div>
        </div>
    </div>
            `,
    created: function () {
        // var that = this;
        // axios.get(this.url+this.nowCount).then(function(res){
        //     console.log(res);
        //     that.$message({
        //         showClose: true,
        //         message: "show the entertainment",
        //         type: 'success'
        //     })
        //     var info = res.data;
        //     that.entertainMsg = info;
        // })

        this.init();


    }
})

Vue.component('el-experience', {
    data: function () {
        return {
            imgUrl: '',
            question: '',
            answer: '请问问题'
        }
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1 && this.question.indexOf('？') === -1) {
                this.answer = '问题通常都有一个标点符号 :-)'
                return
            }
            this.answer = '思考中...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    console.log(response)
                    // vm.answer = _.capitalize(response.data.answer);
                    vm.answer = response.data.answer;
                    vm.imgUrl = response.data.image;
                })
                .catch(function (error) {
                    vm.answer = '错误! 无法使用该API. ' + error
                })
        }
    },
    watch: {
        question: function (newQuestion) {
            this.answer = '直到停止输入，开始回答问题...'
            this.getAnswer()
        }
    },
    created: function () {
        this.$message({
            showClose: true,
            message: "please ask a question",
            type: 'warning'
        })
    },
    template: `
        <div class="" style="margin-top:10rem;">
            <div class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                <div class="info-box">
                    <h2 class="text-center">输入问题:</h2>
                    <p><input class="form-control" v-model="question"></input></p>
                    <p class="text-center">{{ answer | judge }}</p>
                    <p><img oncontextmenu="return false" class="img-responsive center-block" :src="imgUrl"/></p>
                </div>
            </div>
        </div>
    `
})

Vue.component('el-secret', {
    data: function () {
        return {
            answer: '',
            feedBack: '',
            girlUrl: ''
        }
    },
    methods: function () {

    },
    created: function () {
        this.$message({
            showClose: true,
            message: "please guess",
            type: 'success'
        })
    },
    watch:{
        answer:function(val){
            if(val == 'Siyeliu'){
                this.feedBack = 'yes'
                this.girlUrl = 'public/img/siyeliu.jpg'
            }else if(val == ''){
                this.feedBack = 'please give a name'
                this.girlUrl = ''
            }else{
                this.feedBack = 'no'
                this.girlUrl = ''
            }
        }
    },
    template: `
    <div class="" style="margin-top:10rem;">
        <div class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
            <div class="info-box">
                <h2 class="text-center">my girlfriend's name is:</h2>
                <p><input class="form-control" v-model="answer"></input></p>
                <p class="text-center">{{ feedBack }}</p>
                <p><img class="img-responsive center-block" :src="girlUrl"/></p>
            </div>
        </div>
    </div>
    `
})

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Home = {
    template: `<div>
                    <el-header></el-header>
                    <el-info></el-info>
                </div>`,
}

const About = {
    template: `<div>
                    <el-time></el-time> 
                </div>`

}

const Entertainment = {
    template: `<div>
                    <el-entertainment></el-entertainment>
                </div>`

}

const Experience = {
    template: `<div>
                    <el-experience></el-experience>
                </div>`

}

const Secret = {
    template: `<div>
                    <el-secret></el-secret>
                </div>`

}

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/entertainment',
        component: Entertainment
    },
    {
        path: '/experience',
        component: Experience
    },
    {
        path: '/secret',
        component: Secret
    }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const leedom = new Vue({
    el: '#leedom',
    data: {
        message: 'be the one'
    },
    router
})