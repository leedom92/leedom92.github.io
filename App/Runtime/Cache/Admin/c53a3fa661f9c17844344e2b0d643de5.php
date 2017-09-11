<?php if (!defined('THINK_PATH')) exit();?><toaster-container></toaster-container>
<div ng-controller="about">
    <h1 class="text-center">I love U,{{info}}!</h1>
    <p class="text-center">{{nowtime}}</p>
    <p class="text-center"><button class="btn btn-default" ng-click="toa()"><click></click>111</button></p>
    <p class="text-center"><button class="btn btn-info" ng-click="toastr()">click me!</button></p>
    <p class="text-center">
        <select name="" id="" class="form-control" ng-model="data.selected">
            <option value="{{item.id}}" ng-repeat="item in options" ng-selected="item.id == data.selected">{{item.name}}</option>
        </select>
    </p>
    <p><input type="text" ng-model="relationship" class="form-control"></p>
    <h3 class="text-center">{{relationship}}</h3>
    <p class="text-center">
        <button class="btn btn-primary" ng-click="reverse()">reverse</button>
        <button class="btn btn-default" ng-click="uppercase()">uppercase</button>
    </p>
</div>