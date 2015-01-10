var w=$(window).width();
var h=$(window).height();

var w2=((2500-w));
var pointX=0;
 var pointY=0;

var f=(2500-w)/2;
$("#indepth_imag_cont").css('background-position',-f+"px 0px");

var b=(2500-w);




$("#indepth_imag_cont").mousemove(function(event){

	n=b*(event.pageX/w);
	$("#indepth_imag_cont").css('background-position',(-n)+"px 0px");

});


$(window).on("resize", function(){
	 w=$(window).width();
 h=$(window).height();

 w2=((2500-w));
 pointX=0;
  pointY=0;

 f=(2500-w)/2;
$("#indepth_imag_cont").css('background-position',-f+"px 0px");
 b=(2500-w);
});

