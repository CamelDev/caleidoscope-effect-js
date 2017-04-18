
// Global vars
var mainCaleidoscope = null;
var canvasElemId = "main-caleidoscope-canvas";

// Global events handler                       
window.onload = function() {
    mainCaleidoscope = new Caleidoscope(canvasElemId,
                                        { radiusScale: 0.35,
                                          strokeColor: '#000'}
    );

    mainCaleidoscope.draw();

    window.onresize = function(){
        caleidoscopeHelper.resizeCaleidoscope(canvasElemId, mainCaleidoscope)
    };
}