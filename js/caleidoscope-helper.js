
export var caleidoscopeHelper = new function(){
    
    this.isDefined = function(ref){
        return typeof ref !== 'undefined';
    }

    this.getSmallestScreenSize = function(){
        return (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
    }
}