<?php if (!defined('THINK_PATH')) exit();?><div ng-controller="experience">
    <div id="carousel-example-generic" class="carousel slide banner" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <!--<li data-target="#carousel-example-generic" ng-repeat="x in banner" data-slide-to="{{x.id}}" ng-class="{true:'active',false:''}[x.active]"></li>-->
            <li data-target="#carousel-example-generic" ng-repeat="x in banner" data-slide-to="{{x.id}}" ng-class="{'active':x.active}"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <!--<div class="item" ng-repeat="x in banner" ng-class="{true:'active',false:''}[x.active]">-->
            <div class="item" ng-repeat="x in banner" ng-class="{'active':x.active}">
                <img src="{{x.imgUrl}}" alt="{{x.alt}}">
            </div>
        </div>

        <!-- Controls -->
        <span class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
        </span>
        <span class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
        </span>
    </div>

    <div class="container text-center" style="padding-top: 50px;">

        <div class="row">
            <div class="col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-heading" ng-click="toggle()">
                        <h3 class="panel-title">{{nowtime}}</h3>
                    </div>

                    <div class="panel-body">
                        <p>I love <?php echo ($name); ?>. <?php echo ($name); ?> is a beautiful <?php echo ($sex); ?> who likes <?php echo ($hobby); ?>.</p>
                    </div>



                    <table class="table table-responsive table-hover table-striped table-bordered" ng-show="showBody.show">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>sex</th>
                            <th>job</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php if(is_array($person)): $i = 0; $__LIST__ = array_slice($person,0,null,true);if( count($__LIST__)==0 ) : echo "no data" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;?><tr>
                                <td><?php echo ($v["id"]); ?></td>
                                <td><?php echo ($v["name"]); ?></td>
                                <td><?php echo ($v["age"]); ?></td>
                                <td><?php echo ($v["sex"]); ?></td>
                                <td><?php echo ($v["job"]); ?></td>
                            </tr><?php endforeach; endif; else: echo "no data" ;endif; ?>

                        </tbody>
                    </table>

                    <div class="panel-footer">
                        <p>Right Here Waiting</p>
                    </div>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">user's data</h3>
                    </div>
                    <div class="panel-body">
                        <p>
                        <div class="btn-group">
                            <button class="btn btn-primary btn-sm" ui-sref="jld.add">add</button>
                            <!--<button class="btn btn-default" ui-sref="jld.add_user">adduser</button>-->
                        </div>
                        </p>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>age</th>
                                <th>sex</th>
                                <th>job</th>
                                <th>operate</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php if(is_array($sbi)): $i = 0; $__LIST__ = array_slice($sbi,0,null,true);if( count($__LIST__)==0 ) : echo "no data" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;?><tr uid="<?php echo ($v["id"]); ?>">
                                    <td><?php echo ($v["id"]); ?></td>
                                    <td><?php echo ($v["name"]); ?></td>
                                    <td><?php echo ($v["age"]); ?></td>
                                    <td><?php echo ($v["sex"]); ?></td>
                                    <td><?php echo ($v["job"]); ?></td>
                                    <td>
                                        <div class="btn-group">
                                            <button class="btn btn-default btn-xs" ui-sref="jld.edit">edit</button>
                                            <button class="btn btn-default btn-xs" ng-click="delete($event)">delete</button>
                                        </div>
                                    </td>
                                </tr><?php endforeach; endif; else: echo "no data" ;endif; ?>

                            </tbody>
                        </table>
                    </div>
                    <div class="panel-footer">
                        <p>The Chosen One</p>
                    </div>
                </div>
            </div>
        </div>



        <!--<div class="row">-->
        <!--<div class="col-md-12">-->
        <!--<h1 class="text-center">产品与服务</h1>-->
        <!--</div>-->
        <!--<div class="col-md-12">-->
        <!--<p class="text-center tc-gray">STORE  DISPLAY</p>-->
        <!--</div>-->
        <!--</div>-->

        <!--<div class="row">-->
        <!--<div class="col-md-offset-2 col-sm-offset-2 col-md-4 col-sm-4 box-style">-->
        <!--<div class="media">-->
        <!--<div class="media-left">-->
        <!--<img class="center-block imgStyle" src="Resource/img/wx1.png" alt="">-->
        <!--</div>-->
        <!--<div class="media-body">-->
        <!--<h3 class="media-heading text-center tc-mg">{{store1.title}}</h3>-->
        <!--<p class="tc-lg text-intend">{{store1.cont}}</p>-->
        <!--<p class="text-center"><button class="btn btn-warning">点击进入</button></p>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="col-md-4 col-sm-4 box-style">-->
        <!--<div class="media">-->
        <!--<div class="media-left">-->
        <!--<img class="center-block imgStyle" src="Resource/img/wx2.png" alt="">-->
        <!--</div>-->
        <!--<div class="media-body">-->
        <!--<h3 class="media-heading text-center tc-mg">{{store2.title}}</h3>-->
        <!--<p class="tc-lg text-intend">{{store2.cont}}</p>-->
        <!--<p class="text-center"><button class="btn btn-info">点击进入</button></p>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->

    </div>
</div>