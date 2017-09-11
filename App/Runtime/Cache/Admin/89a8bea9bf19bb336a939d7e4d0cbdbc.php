<?php if (!defined('THINK_PATH')) exit();?><div class="container">
    <div class="row" style="margin-top: 10px;" ng-controller="add">
        <form class="form-horizontal" name="add" novalidate>
            <div class="form-group">
                <label class="col-sm-2" for="">name</label>
                <div class="col-sm-6">
                    <input type="text" name="name" class="form-control" ng-model="user.name" required>
                </div>
                <div class="col-sm-4">
                    <div style="color: red;" ng-show="add.name.$dirty && add.name.$invalid">
                        <span ng-show="add.name.$error.required">plz tell ur name</span>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2" for="">sex</label>
                <div class="col-sm-6">
                    <input type="text" name="sex" class="form-control" ng-model="user.sex" required>
                </div>
                <div class="col-sm-4">
                    <div style="color: red;" ng-show="add.sex.$dirty && add.sex.$invalid">
                        <span ng-show="add.sex.$error.required">plz tell ur sex</span>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2" for="">age</label>
                <div class="col-sm-6">
                    <input type="text" name="age" class="form-control" ng-model="user.age" required>
                </div>
                <div class="col-sm-4">
                    <div style="color: red;" ng-show="add.age.$dirty && add.age.$invalid">
                        <span ng-show="add.age.$error.required">plz tell ur age</span>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2" for="">job</label>
                <div class="col-sm-6">
                    <input type="text" name="job" class="form-control" ng-model="user.job" required>
                </div>
                <div class="col-sm-4">
                    <div style="color: red;" ng-show="add.job.$dirty && add.job.$invalid">
                        <span ng-show="add.job.$error.required">plz tell ur job</span>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button class="btn btn-default" ng-click="add($event)">sure</button>
                    <!--<button class="btn btn-default" type="submit">sure</button>-->
                </div>
            </div>
        </form>
    </div>
</div>