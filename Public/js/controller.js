/**
 * Created by leedom on 2016/12/31.
 */

function home($scope,toaster,$timeout) {
    $timeout(function(){
        toaster.success({ body:"welcome to leedom's zone.",timeout:3000});
    },1000)

    $scope.userAvatar = '/Public/img/avatar2.jpg';

    $scope.userName = 'leedom';

    $scope.userInfo = "My Chinese name is 蒋利栋. I'm an enthusiastic man who likes sports and literature.";

    $scope.record = [
        {
            "imgUrl":"/Public/img/angular.jpg",
            "name": "AngularJs",
            "content":"AngularJS是为了克服HTML在构建应用上的不足而设计的。"
            
        },
        {
            "imgUrl":"/Public/img/vue.jpg",
            "name": "VueJs",
            "content":"Vue.js是一个构建数据驱动的 web 界面的渐进式框架。"

        },
        {
            "imgUrl":"/Public/img/jquery.jpg",
            "name": "Jquery",
            "content":"jQuery是一个快速、简洁的JavaScript框架，是一个优秀的JavaScript代码库。"

        }
    ]

    // $scope.repeatFinish = function () {
    //     $('[data-toggle="popover"]').popover();
    // }
    
}

function about($scope,$interval,$timeout,toaster){
    $scope.relationship = "leedom loves danmi";

    $scope.reverse = function(){
        $scope.relationship = $scope.relationship.split(' ').reverse().join(' ');
    }

    $scope.uppercase = function(){
        $scope.relationship = $scope.relationship.toUpperCase();
    }

    $scope.options = [
        {
            "id":1,
            "name":"leedom"
        },
        {
            "id":2,
            "name":"bornkiss"
        },
        {
            "id":3,
            "name":"danmi"
        },
    ];
    $scope.data = {
        "selected":2
    }
    $scope.info = 'danmi';
    $scope.nowtime = new Date().toLocaleString();
    $interval(function(){
        $scope.nowtime = new Date().toLocaleString();
    },1000);

    $timeout(function(){
        toaster.success({body:"I love u,danmi",timeout:3000});
    },500);

    $scope.toa = function(){
        toaster.success({body:"あいしてる，danmi。"});
    }

    $scope.toastr = function(){
        toaster.pop({
            type: 'info',
            title: 'danmi',
            body: 'あいしてる',
            timeout: 4000,
            showCloseButton:true,
            // clickHandler: function(){
            //     toaster.warning({title:'Love',body:"あいしてる，danmi。",timeout:1000});
            // },
            onHideCallback: function () {
                toaster.error({title:'done',body:'have a happy life',timeout:4000});
            }
        });
    }

    // toaster.options = {
    //     "closeButton": true,
    //     "debug": false,
    //     "progressBar": true,
    //     "preventDuplicates": false,
    //     "positionClass": "toast-top-right",
    //     "onclick": null,
    //     "showDuration": "400",
    //     "hideDuration": "1000",
    //     "timeOut": "7000",
    //     "extendedTimeOut": "1000",
    //     "showEasing": "swing",
    //     "hideEasing": "linear",
    //     "showMethod": "fadeIn",
    //     "hideMethod": "fadeOut"
    // }

}

function experience($scope,$http,$interval,toaster) {
    $scope.banner = [
        {
            "id":"0",
            "imgUrl":"/Public/img/apple.jpg",
            "alt":"apple",
            "active":true

        },
        {
            "id":"1",
            "imgUrl":"/Public/img/cup.jpg",
            "alt":"cup",
            "active":false

        },
        {
            "id":"2",
            "imgUrl":"/Public/img/note.jpg",
            "alt":"note",
            "active":false
        },
    ]

    $scope.showBody = {show:false}

    $scope.nowtime = new Date().toLocaleString();

    $interval(function () {
        $scope.nowtime = new Date().toLocaleString();
    },1000);

    $scope.toggle = function () {
        $scope.showBody.show = !$scope.showBody.show;
    }

    $scope.delete = function ($event) {
        var e = $($event.target);
        var id = e.closest('tr').attr('uid');
        var data = new Object();
        data['id'] = id;
        swal({
            title:'delete?',
            type: 'warning',
            showCancelButton: true
        },function () {
            $.post('/index.php/Api/Common/delete',data,
                function (resp) {
                    e.closest('tr').remove();
                    if(resp.stat == 1){
                        swal({
                            title: resp.msg,
                            type: 'success',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    }
                }
            )
            // $http({
            //     method: 'POST',
            //     url:'/index.php/Api/Common/delete',
            //     data: {id:id},
            //     // headers: { "Content-Type": "application/x-www-form-urlencoded" },
            // }).then(function (resp) {
            //     e.closest('tr').remove();
            //     if(resp.stat == 1){
            //         swal({
            //             title: resp.msg,
            //             type: 'success',
            //             showConfirmButton: false,
            //             timer: 1000
            //         })
            //     }
            // })
        })
    }

    $scope.add = function ($event) {
        var e = $($event.target);
        $.ajax({
            type: 'POST',
            url: '/index.php/Api/Common/add',
            data: e.closest('form').serialize(),
            success:function (res) {
                swal({
                    title: res.msg,
                    type: 'success',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
    }
}

function entertainment($scope,$http){
    // $http({
    //     method:'GET',
    //     url:'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10'
    // }).then(function(res){
    //     console.log(res);
    // })

    $http.get('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10')
        .then(function(res){
            console.log(res);
            $scope.data = res.data;
            console.log($scope.data);
        })


}

function add($scope) {
    $scope.user = {
        id: 'name',
        name: 'leedom',
        age: '25',
        sex: 'male',
        job: 'engineer'
    }

    $scope.add = function($event){
        var e = $($event.target);
        var form = e.closest('form');
        var data = form.serialize();
        $http({
            method: 'POST',
            url: '/index.php/Api/Common/add',
            data: data
        }).success(function (res) {
            if(res.stat==1){
                swal({
                    title: res.msg,
                    type: 'success',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
        // $.post('/index.php/Api/Common/add',data,
        //     function (res) {
        //         if(res.stat==1){
        //             swal({
        //                 title: 'success',
        //                 type: 'success',
        //                 showConfirmButton: false,
        //                 timer: 1000
        //             });
        //         }
        //     }
        // )
    }
}

function edit($scope) {
    $scope.user = {
        id: 'name',
        name: 'leedom',
        age: '25',
        sex: 'male',
        job: 'engineer'
    }
}

angular
    .module('jld')
    .controller('home',home)
    .controller('about',about)
    .controller('experience',experience)
    .controller('entertainment',entertainment)
    .controller('add',add)
    .controller('edit',edit)