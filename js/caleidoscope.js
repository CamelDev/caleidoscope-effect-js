
import {paper} from 'paper';
import { caleidoscopeHelper } from './caleidoscope-helper';

// main object class
export const caleidoscope = function(canvasId, params) {
	
    this.canvas = document.getElementById(canvasId);	
	if( !caleidoscopeHelper.isDefined(this.canvas) ){
		throw "Canvas element not found";
	}

	// Let's make it available globally
	paper.install(window);	

    let self = this;

    let defaults = {radiusScale: 0.35,
					strokeColor: '#aa0000',
				}
    this.paper = paper;
	this.params = Object.assign(defaults, params);						

	// init
    paper.setup(this.canvas);

	this.draw = function(){
		this.path = new Path.Circle({
			center: view.center,
			radius: this.params.radiusScale* caleidoscopeHelper.getSmallestScreenSize(),
			strokeColor: this.params.strokeColor
		});

		self.paper.view.draw();
	}
   
    this.onresize = function(width, height){
		self.paper.project.clear();
		self.path.position = self.paper.view.center;
	    self.paper.view.setViewSize(width, height);
		self.draw();
	}
}
