<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh-cn" ng-app="jld">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LEEDOM'S INTRODUCTION</title>

    <!-- Bootstrap -->
    <link href="/Resource/bootstrap/css/bootstrap.css" rel="stylesheet">

    <!--  plugins_css-->
    <link href="/Resource/css/plugins/sweetalert/sweetalert.css" rel="stylesheet">

    <!-- myCss -->
    <link href="/Public/css/index.css" rel="stylesheet">

    <!-- Angular -->
    <script src="/Resource/angular-1.3.20/angular.js"></script>
    <script src="/Resource/angular-1.3.20/angular-animate.js"></script>
    <script src="/Resource/js/ui-router/angular-ui-router.min.js"></script>
    <!--<script src="/Resource/bootstrap/js/ui-bootstrap-1.1.2.min.js"></script>-->
    <script src="/Resource/js/oclazyload/dist/ocLazyLoad.min.js"></script>

    <!-- myJs -->
    <script src="/Public/js/app.js"></script>
    <script src="/Public/js/controller.js"></script>
    <script src="/Public/js/config.js"></script>
    <script src="/Public/js/directive.js"></script>
    <!--<script src="Resource/js/service.js"></script>-->
    <!--<script src="Resource/js/filter.js"></script>-->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<!--<div class="container page {{pageClass}}">-->

<!--</div>-->
<div class="container-fluid" ui-view>

</div>




<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="/Resource/bootstrap/js/jquery-1.9.1.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="/Resource/bootstrap/js/bootstrap.min.js"></script>
<script src="/Resource/bootstrap/js/ui-bootstrap-1.1.2.min.js"></script>

<!-- plugins_js -->
<script src="/Resource/js/plugins/sweetalert/sweetalert.min.js"></script>

<script>
    $(document).ready(function () {

    });
</script>

</body>
</html>