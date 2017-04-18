

// main object class
function Caleidoscope (canvasId, params) {
	
    this.canvas = document.getElementById(canvasId);	
	if(typeof this.canvas === 'undefined'){
		throw Exception("Canvas element not found");
	}

	// Let's make it available globally
	paper.install(window);	

    let self = this;

    let defaults = {radiusScale: 0.35,
					strokeColor: '#000',
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
		//self.path.position = self.paper.view.center;
	    self.paper.view.setViewSize(width, height);
		self.draw();
	}
}