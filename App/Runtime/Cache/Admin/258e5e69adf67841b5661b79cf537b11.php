<?php if (!defined('THINK_PATH')) exit();?><div class="mediaBox" ng-controller="entertainment">
    <div class="row rowStyle">
        <div class="col-md-8 col-md-offset-2">
            <div class="media" ng-repeat="x in data">
                <div class="media-left">
                    <a href="#">
                        <img src="{{x.thumbnail_pic_s}}" alt="{{x.title}}" class="media-object">
                    </a>
                </div>
                <div class="media-body">
                    <h4>{{x.author_name}}</h4>
                    <p>{{x.title}}</p>
                </div>
            </div>
        </div>
    </div>
</div>