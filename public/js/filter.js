Vue.filter('timeFunc',function(val){
    return formatDate(val);
})

 function formatDate(now)   {
    var   year=now.getFullYear();
    var   month=checkTime(now.getMonth()+1);
    var   date=checkTime(now.getDate());
    var   hour=checkTime(now.getHours());
    var   minute=checkTime(now.getMinutes());
    return   year+"-"+month+"-"+date+" "+hour+":"+minute;
}

function checkTime(i){
    if (i<10){
        i="0" + i
    }
    return i
}