Vue.filter('timeFunc',function(val){
    return '北京时间 - ' + val;
})

Vue.filter('judge',function(val){
    if(val == 'yes'){
        return '是'
    }
    return '否' 
})
