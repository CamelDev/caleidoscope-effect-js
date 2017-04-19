
import { caleidoscope } from './caleidoscope';
import { caleidoscopeHelper } from './caleidoscope-helper';

// testing whether IIFE still required
 {
    let mainCaleidoscope = null;
    const canvasElemId = "main-caleidoscope-canvas";

    // Global events handler                       
    window.onload = function() {

        mainCaleidoscope = new caleidoscope(canvasElemId,
                                            { radiusScale: 0.35,
                                            strokeColor: '#000'}
        );

        mainCaleidoscope.draw();

        window.onresize = function(){
            var canvas = document.getElementById(canvasElemId);
            if(caleidoscopeHelper.isDefined(canvas)) 
            mainCaleidoscope.onresize(canvas.offsetWidth, canvas.offsetHeight);	   
        }

    }
}
