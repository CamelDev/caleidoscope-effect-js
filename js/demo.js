
// externals
import { caleidoscope } from './caleidoscope';
import { caleidoscopeHelper } from './caleidoscope-helper';

// styles
import '../css/styles.css';

// testing whether IIFE still required
 {
    let mainCaleidoscope = null;
    const canvasElemId = "main-caleidoscope-canvas";

    // global events handler                       
    window.onload = function() {

        mainCaleidoscope = new caleidoscope(canvasElemId,
                                            { radiusScale: 0.35,
                                            strokeColor: '#a0b'}
        );

        mainCaleidoscope.draw();

        window.onresize = function(){
            var canvas = document.getElementById(canvasElemId);
            if(caleidoscopeHelper.isDefined(canvas)) 
            mainCaleidoscope.onresize(canvas.offsetWidth, canvas.offsetHeight);	   
        }

    }
}
