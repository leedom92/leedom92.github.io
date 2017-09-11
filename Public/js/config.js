/**
 * Created by leedom on 2016/12/31.
 */
function config($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/jld/home');
    $stateProvider
        .state('jld',{
            abstract: true,
            url: '/jld',
            templateUrl: '/Tpl/Admin/Public/content.html'
        })
        .state('jld.home',{
            url: '/home',
            templateUrl: '/index.php/Admin/Jld/home',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            // insertBefore: '#loadBefore',
                            name: 'toaster',
                            files: ['/Resource/js/plugins/toastr/toastr.min.js', '/Resource/css/plugins/toastr/toastr.min.css']
                        },
                        {
                            name: 'angles',
                            files: ['/Resource/js/plugins/chartJs/angles.js', '/Resource/js/plugins/chartJs/Chart.min.js']
                        },
                    ]);
                }
            }
        })
        .state('jld.about',{
            url: '/about',
            templateUrl: '/index.php/Admin/Jld/about',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            // insertBefore: '#loadBefore',
                            name: 'toaster',
                            files: ['/Resource/js/plugins/toastr/toastr.min.js', '/Resource/css/plugins/toastr/toastr.min.css']
                        }
                    ]);
                }
            }
        })
        .state('jld.add',{
            url: '/add',
            templateUrl: '/index.php/Admin/Jld/add'
        })
        .state('jld.add_user',{
            url: '/add_user',
            templateUrl: '/index.php/Admin/Jld/addUser'
        })
        .state('jld.edit',{
            url: '/edit',
            templateUrl: '/index.php/Admin/Jld/edit'
        })
        .state('jld.experience',{
            url: '/experience',
            templateUrl: '/index.php/Admin/Jld/experience',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            // insertBefore: '#loadBefore',
                            name: 'toaster',
                            files: ['/Resource/js/plugins/toastr/toastr.min.js', '/Resource/css/plugins/toastr/toastr.min.css']
                        }
                    ]);
                }
            }
        })
        .state('jld.entertainment',{
            url: '/entertainment',
            templateUrl: '/index.php/Admin/Jld/entertainment'
        })
}

angular
    .module('jld')
    .config(config)