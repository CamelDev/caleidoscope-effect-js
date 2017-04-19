
import { caleidoscope } from './caleidoscope';
import { caleidoscopeHelper } from './caleidoscope-helper';

// Global vars
var mainCaleidoscope = null;
var canvasElemId = "main-caleidoscope-canvas";

// Global events handler                       
window.onload = function() {
    mainCaleidoscope = new caleidoscope(canvasElemId,
                                        { radiusScale: 0.35,
                                          strokeColor: '#000'}
    );

    mainCaleidoscope.draw();

    window.onresize = function(){
        let canvas = document.getElementById(canvasElemId);
        mainCaleidoscope.onresize(canvas.offsetWidth, canvas.offsetHeight);	   
    };
}