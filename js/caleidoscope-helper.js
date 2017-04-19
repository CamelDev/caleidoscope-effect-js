
export var caleidoscopeHelper = new function(){
    this.getSmallestScreenSize = function(){
        return (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
    }
}