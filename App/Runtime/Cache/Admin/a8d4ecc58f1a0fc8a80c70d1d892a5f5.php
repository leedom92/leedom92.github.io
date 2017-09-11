<?php if (!defined('THINK_PATH')) exit();?><div class="" ng-controller="home">
    <header>
        <div class="contain">
            <div class="avatar">
                <img src="{{userAvatar}}" alt="" class="img-circle">
            </div>
            <div class="desc text-center">
                <h2 class="h-size">{{userName}}</h2>
                <p class="p-size">{{userInfo}}</p>
            </div>
        </div>
    </header>
    <div class="container" style="padding-top: 50px;">
        <div class="row text-center">
            <div class="col-xs-4 img_box" ng-repeat="x in record">
                <img src="{{x.imgUrl}}" class="center-block" alt="">
                <p>{{x.name}}</p>
                <a role="button" tabindex="0" data-toggle="popover" data-placement="top" data-trigger="focus" data-original-title="{{x.name}}" title="{{x.name}}" data-content="{{x.content}}" class="btn btn-default" pop-over>click me</a>
            </div>
        </div>
    </div>
</div>

<toaster-container></toaster-container>