<?php if (!defined('THINK_PATH')) exit();?><div class="container">
    <div class="row" style="margin-top: 10px;">
        <form action="/index.php/Admin/Jld/edit1" method="post" class="form-horizontal">
            <input type="hidden" name="id" value="<?php echo ($vo["id"]); ?>">
            <div class="form-group">
                <label class="col-sm-2" for="">name</label>
                <div class="col-sm-6">
                    <input type="text" name="name" value="<?php echo ($vo["name"]); ?>" class="form-control" required>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2" for="">sex</label>
                <div class="col-sm-6">
                    <input type="text" name="sex" value="<?php echo ($vo["sex"]); ?>" class="form-control" required>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2" for="">age</label>
                <div class="col-sm-6">
                    <input type="text" name="age" value="<?php echo ($vo["age"]); ?>" class="form-control" required>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2" for="">job</label>
                <div class="col-sm-6">
                    <input type="text" name="job" value="<?php echo ($vo["job"]); ?>" class="form-control" required>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <!--<button class="btn btn-default" ng-click="add($event)">sure</button>-->
                    <button class="btn btn-default" type="submit">sure</button>
                </div>
            </div>
        </form>
    </div>
</div>