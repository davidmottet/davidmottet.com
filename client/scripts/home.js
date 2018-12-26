(function (_w, _d) {
	/* RequestAnimFrame
	   ========================================================================== */
	window.requestAnimFrame = (function(){
			return  window.requestAnimationFrame	|| 
				window.webkitRequestAnimationFrame	|| 
				window.mozRequestAnimationFrame		|| 
				window.oRequestAnimationFrame		|| 
				window.msRequestAnimationFrame		|| 
				function(/* function */ callback, /* DOMElement */ element){
					window.setTimeout(callback, 1000 / 60);
				};
			})();

	/* Geo location
	   ========================================================================== */
	var positionDiv = _d.getElementById('render-position');
	function get_location() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(show_position);
		}
	}
	function show_position(_p) {
		var degN = parseInt(_p.coords.latitude)
		var minN = (_p.coords.latitude - degN)*60
		var secN = (minN - parseInt(minN))*60

		var degW = parseInt(_p.coords.longitude)
		var minW = (_p.coords.latitude - degW)*60
		var secW = (minW - parseInt(minW))*60

		positionDiv.innerHTML = 'N '+degN+'&#176; '+parseInt(minN)+'\' '+secN.toFixed(3)+'"  /  W '+degW+'&#176; '+parseInt(minW)+'\' '+secW.toFixed(3)+'"'; 
	}
	// get_location();

	/* Time
	   ========================================================================== */
	function time_format(d) {
		hours = format_two_digits(d.getHours());
		minutes = format_two_digits(d.getMinutes());
		seconds = format_two_digits(d.getSeconds());
		milliseconds = format_two_digits(d.getMilliseconds());
		return {hours: hours,minutes: minutes,seconds: seconds,milliseconds: milliseconds};
	}

	function format_two_digits(n) {
		return n < 10 ? '0' + n : n;
	}

	/* Canvas
	   ========================================================================== */
	var canvas = _d.getElementById('home-canvas'),
		ctx = canvas.getContext('2d'),
		W = window.innerWidth,
		H = window.innerHeight
		rotate = 0

	function on_resize(_e) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		W = window.innerWidth;
		H = window.innerHeight;
		draw(); }

	window.addEventListener('resize', on_resize);


	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw_circle_seconde(); }

	function draw_circle_seconde() {
		ctx.save();
		ctx.translate(W/2, H/2);
		var size = H/3,
			x = 0,
			y = 0,
			d = new Date(),
			date = time_format(d);
		rotate = (360*date.seconds)/60;

		ctx.rotate(rotate*Math.PI/180);

		if (H > W) { size = W/3 }

		ctx.beginPath();
		ctx.strokeStyle = '#60808b';
		ctx.lineWidth = 3;
		ctx.arc(x, y, size, 0, Math.PI/2);
		ctx.stroke();

		ctx.beginPath();
		ctx.strokeStyle = '#60808b';
		ctx.lineWidth = 1;
		ctx.arc(x, y, size, Math.PI/2, Math.PI);
		ctx.stroke();

		ctx.beginPath();
		ctx.strokeStyle = '#60808b';
		ctx.lineWidth = 3;
		ctx.arc(x, y, size, Math.PI, 1.5*Math.PI);
		ctx.stroke();

		ctx.beginPath();
		ctx.strokeStyle = '#60808b';
		ctx.lineWidth = 1;
		ctx.arc(x, y, size, 1.5*Math.PI, 2*Math.PI);
		ctx.stroke();
		ctx.restore();
	}


	function animate() {
		draw();

		window.requestAnimFrame(animate);
	};

	/* Canvas : init(); */
	on_resize();
	animate();

})(window, document)