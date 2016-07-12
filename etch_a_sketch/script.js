var box = 0;
var cancel = false;
var num = 16;

$(document).ready(function(){

	grids(num);

	$('.pixel').mouseenter(function(){
		$(this).css("background-color","#E3AE57");
	});

	$('#reset').click(function(){
		newGrid();
		if (cancel === false) {
			$(".pixel").on("mouseenter", function(){
				$(this).css("background-color","#E3AE57");
			});
		};
	});

	$('#opaque').click(function(){
		newGrid();
		if (cancel === false) {
			$('.pixel').on("mouseenter", function(){
				opacity = $(this).css("opacity");
				if (opacity > 0.1) {
					$(this).css("opacity", opacity - 0.4);
				} else {
					$(this).css("opacity", 0);
				};
			});
		};
	});

	$('#clear').click(function(){
		$(".pixel").css("background-color","#DC3D24");
			$(".pixel").css("opacity", 1);
	});

	function grids(n) {
		var size = 960;
		var boxSize = (960 - 2*n)/n;
		var container = $(".container").html("");
		for (var j = 0; j < n; j++) {
			for (var i = 0; i < n; i++) {
				container.append($('<div></div>').addClass('pixel').height(boxSize).width(boxSize));
			};
			container.append($('<div></div>').css("clear","both"));
		};
	};

	function newGrid() {
		var num = prompt("How many squares would you like the new grid? (between 1 and 64)");
		if (num > 0 && num < 65) {
			cancel = false;
			grids(num);
			$(".pixel").css("background-color","#DC3D24");
			$(".pixel").unbind();
		} else if (num === null) {
			console.log("The number has to be between 1-64 silly!")
			cancel = true;
		} else {
			newGrid();
		};
	};
});