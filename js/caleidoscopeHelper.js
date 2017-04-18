
var caleidoscopeHelper = new function(){
    this.getSmallestScreenSize = function(){
        return (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
    }

    this.resizeCaleidoscope = function(canvasElemId, caleidoscope) {
        let canvas = document.getElementById(canvasElemId);
        caleidoscope.onresize(canvas.offsetWidth, canvas.offsetHeight);	   
    }
}