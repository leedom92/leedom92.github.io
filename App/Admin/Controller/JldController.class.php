<?php
namespace Admin\Controller;
use Think\Controller;
class JldController extends Controller {
    public function home(){

        $this->display();
    }

    public function experience(){
        $name = 'Danmi';
//        $this->name1 = $name;
        $date=date('Y-m-d');
        $now=time();
        $person=array(
            1=>array('id'=>'1','name'=>'leedom','age'=>'25','sex'=>'male','job'=>'engineer'),
            2=>array('id'=>'2','name'=>'danmi','age'=>'25','sex'=>'female','job'=>'nurse'),
            3=>array('id'=>'3','name'=>'siyuan','age'=>'1','sex'=>'male','job'=>'student'),
        );
        $user=M('user');
        $sbi=$user->select();
        $this->assign('name',$name)
            ->assign('age','25')
            ->assign('sex','female')
            ->assign('time',$date)
            ->assign('now',$now)
            ->assign('hobby','thrillers')
            ->assign('person',$person)
            ->assign('sbi',$sbi);

        $this->display();

//        dump($sbi);
    }

    public function about(){
        $this->display();

    }

    public function entertainment(){
        $this->display();

    }

    public function add(){
        $this->display();

    }

    public function edit($id = 39){
        $user=M('user');
        $this->assign('vo',$user->find($id));
        $this->display();
    }

    public function add1(){
        $user = M('user');
        if($user->create()){
            $data = $user->add();
            if($data){
                $this->success('success','/index.php/admin#/jld/experience');
            }else{
                $this->error('error');
            }
        }else{
            $this->error($user->getError());
        }
    }

    public function edit1(){
        $user = M('user');
        if($user->create()){
            $data = $user->save();
            if($data){
                $this->success('success','/index.php/admin#/jld/experience');
            }else{
                $this->error('error');
            }
        }else{
            $this->error($user->getError());
        }
    }

    public function dataAdd(){
        $user = M('user');
        $data = array(
            0=>array(
                'id'=>'5',
                'name'=>'やど',
                'sex'=>'male',
                'age'=>'500',
                'job'=>'kami'
            ),
            1=>array(
                'id'=>'6',
                'name'=>'haha',
                'sex'=>'female',
                'age'=>'34',
                'job'=>'kami'
            ),
            2=>array(
                'id'=>'7',
                'name'=>'xixi',
                'sex'=>'female',
                'age'=>'34',
                'job'=>'kami'
            ),
        );
        $user->addAll($data);
//        echo M('user')->addAll($data).'</br>';
        echo M('user')->getLastsql();
    }

    public function read(){
//        $id = 1;
        $user = M('user');
//        $data = $user->find($id);
        $data = $user->select();
        if($data){
            $this->assign('data',$data);
        }else{
            $this->error('wrong');
        }
        $this->display();
    }

}