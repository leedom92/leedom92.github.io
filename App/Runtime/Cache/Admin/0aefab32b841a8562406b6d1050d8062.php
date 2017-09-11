<?php if (!defined('THINK_PATH')) exit();?><div class="text-center" ng-controller="about">
    <p>{{nowtime}}</p>
    <!--<p><?php echo (date('Y-m-d H:i:s',$now)); ?></p>-->
    <h1>I love <?php echo ($name); ?></h1>
    <h2><?php echo ($name); ?> is a <?php echo ($age); ?>-years-old <?php echo ($sex); ?> who likes <?php echo ($hobby); ?>.</h2>
    <div>
        <table class="table table-hover table-striped table-bordered">
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
    </div>

    <div style="padding: 10px;">
        <table class="table table-hover table-striped table-bordered">
            <tr>
                <div class="btn-group">
                    <button class="btn btn-default" ui-sref="sbi.add">add</button>
                    <button class="btn btn-default" ui-sref="sbi.add_user">adduser</button>
                </div>
            </tr>
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
                                <button class="btn btn-default" ui-sref="sbi.edit">edit</button>
                                <button class="btn btn-default" ng-click="delete($event)">delete</button>
                            </div>
                        </td>
                    </tr><?php endforeach; endif; else: echo "no data" ;endif; ?>

            </tbody>
        </table>
    </div>

</div>