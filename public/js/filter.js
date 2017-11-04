Vue.filter('timeFunc',function(val){
    // return '北京时间 - ' + val;
    formatDate(val)
})

function formatDate(a)   {
    var   year=a.getFullYear();
    var   month=checkTime(a.getMonth()+1);
    var   date=checkTime(a.getDate());
    var   hour=checkTime(a.getHours());
    var   minute=checkTime(a.getMinutes());
    return   year+"-"+month+"-"+date+" "+hour+":"+minute;
}

function checkTime(i){
    if (i<10){
        i="0" + i
    }
    return i
}