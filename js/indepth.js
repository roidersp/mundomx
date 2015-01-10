var w=$(window).width();
var h=$(window).height();
var mobile=false;
var w2=((2500-w));
var pointX=0;
 var pointY=0;

var f=(2500-w)/2;


var b=(2500-w);



var device = navigator.userAgent

if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i))
 { 
mobile=true;

}
else
{
	mobile=false;
}

console.log(mobile);

if(mobile){
	
	
	$("#indepth_imag_cont").css({
		"width":"2500px"
	});
	
	
}else{
	if(h>760){
		$(".indepth_cont").css("height",(h-60)+"px");
	}
	$("#indepth_imag_cont").css('background-position',-f+"px 0px");
	$("#indepth_imag_cont").mousemove(function(event){

	n=b*(event.pageX/w);
	$("#indepth_imag_cont").css('background-position',(-n)+"px 0px");

});
}




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



