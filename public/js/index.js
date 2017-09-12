//nav 组件
Vue.component('el-nav',{
    template: '<nav class="navbar navbar-default navbar-fixed-top" role="navigation">'+
                '<div class="container">'+
                    '<div class="navbar-header">'+
                        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'+
                            '<span class="sr-only">Toggle navigation</span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                        '</button>'+
                        '<a class="navbar-brand" href="#">JLD</a>'+
                    '</div>'+
                    '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
                        '<ul class="nav navbar-nav">'+
                            '<li><router-link to="/home">home</router-link></li>'+
                            '<li><router-link to="/about">about</router-link></li>'+
                            '<li class="dropdown">'+
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown">More</a>'+
                                '<ul class="dropdown-menu" role="menu">'+
                                    '<li><a href="#">Connection</a></li>'+
                                    '<li><a>Experience</a></li>'+
                                    '<li class="divider"></li>'+
                                    '<li><a>Entertainment</a></li>'+
                                '</ul>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
            '</nav>'
})

Vue.component('el-header',{
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
    data: function(){
        return {
            avatar:'public/img/avatar2.jpg',
            name: 'leedom',
            info: "My Chinese name is 蒋利栋. I'm an enthusiastic man who likes sports and literature."
        }
    }
})

Vue.component('el-info',{
    template: `<div class="container">
    <div class="row text-center">
        <div class="col-xs-4 img_box" v-for="item in getInfo">
            <img :src="item.getImg" class="center-block" alt="">
            <p>{{ item.getName }}</p>
            <a role="button" tabindex="0" data-toggle="popover" data-placement="top" data-trigger="focus" :data-original-title="item.getName" :title="item.getName" :data-content="item.content" class="btn btn-default">click me</a>
        </div>
    </div>
</div>`,
    data: function(){
        return {
            getInfo:[
                {
                    getImg: 'public/img/angular.jpg',
                    getName: 'angularjs',
                    content:"AngularJS是为了克服HTML在构建应用上的不足而设计的。"
                },
                {
                    getImg: 'public/img/vue.jpg',
                    getName: 'vue.js',
                    content:"Vue.js是一个构建数据驱动的 web 界面的渐进式框架。"
                },
                {
                    getImg: 'public/img/jquery.jpg',
                    getName: 'jquery',
                    content:"jQuery是一个快速、简洁的JavaScript框架，是一个优秀的JavaScript代码库。"
                }
            ]
        }
    }
})

Vue.component('sidebar',{
    template: `<div>
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-message"></i>
                        <span slot="title">导航一</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">分组一</span>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航三</span>
                    </el-menu-item>
                 </el-menu>
                </div>`,
    data: function(){
        return {
            isCollapse: true
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
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
     template: `<sidebar></sidebar>` 
    
    }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About }
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
    data:{
        message: 'be the one'
    },
    router
})

