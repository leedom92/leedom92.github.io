<?php
/**
 * Created by PhpStorm.
 * User: leedom
 * Date: 2017/1/3
 * Time: 10:43
 */

namespace Api\Controller;


use Think\Controller;

class CommonController extends Controller
{
    public function delete(){
//        if($id = I('post.id')){
//            $user = M('user');
//            try{
//                $user->delete($id);
//                $res = array('stat'=>1,'msg'=>'删除成功！');
//            }catch(\Exception $e){
//                $res = array('stat'=>0,'msg'=>'删除失败！');
//            }
//            $this->ajaxReturn($res,'JSON',JSON_UNESCAPED_UNICODE);
//        }

        if(I('post.id')){
            $user = M('user');
            try{
                $data = $user->where(array('id'=>I('post.id')))->select();

                $user->delete(I('post.id'));

                $resp['stat'] = 1;
                $resp['msg'] = '删除成功！';
                $resp['data'] = $data;
            }catch (\Exception $e){
                $resp['stat'] = 0;
                $resp['msg'] = '删除失败！';
            }
            $this->ajaxReturn($resp);
        }
    }

    public function add(){
        if(IS_POST){
            $post = I('post.');
            $data = $post;
            if($user = M('user')->data($data)->add()){
                $res = array('stat'=>1,'msg'=>'新增成功！','data'=>$data);
            }else{
                $res = array('stat'=>0,'msg'=>'新增失败！');
            }
            $this->ajaxReturn($res,'JSON',JSON_UNESCAPED_UNICODE);
        }
    }
}