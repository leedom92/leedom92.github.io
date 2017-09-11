
function popOver(){
    return{
        link: function(scope,el,attr){
            // console.log(scope.$index);
            // console.log(scope);
            // console.log(el);
            if(scope.$last == true){
                console.log('I love Zhi');
                // scope.$eval( attr.repeatFinish )
            }
            $('[data-toggle="popover"]').popover();
        }
    }
}


angular
    .module('jld')
    .directive('popOver',popOver)