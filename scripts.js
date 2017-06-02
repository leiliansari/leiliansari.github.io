$("document").ready(function(){

//all photos with class "hide", hide
	$(".hidePhoto").hide();

//when click on "headNav", the li that has the drop down menu (Portfolio), drop down the nav menu that was hidden
	$(".headNav").click(dropDown);

	function dropDown(){ 
		$(".headNavHide").slideToggle();
		console.log("something happening!");
		};


//same as above, for footer nav
	$(".footNav").click(dropDownFoot);

	function dropDownFoot(){ 
		$(".hidefoot").slideToggle();
		console.log("something happening!");
		};

//when click button in navbar, navbar goes back to top of page (rather than fixed position)
	$("#navbutton").click(slideUp);

	function slideUp(){
		$("#header").css("position","absolute");
		$("#navbutton").hide();
	};


//on writing page, click on "view articles" to drop down three example articles
	$("#viewArticles").click(showArticles);

	function showArticles(){
		$(".mags").slideToggle(2000);
		$(".main","#header",".footer").css({"backgroundColor":"black","opacity":".8","z-index":"1001"});
		$(".mags").css("background-color","white");
	};


//when scroll down past 200px, shrink the header so it is less obstructive
	window.onscroll = function() {shrinkLogo()};

	function shrinkLogo() {

	    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
	        $("#logo h1").stop().animate({fontSize:"1.5em"});
	        $("#logo h1").css("paddingBottom","10%");
	        $("#header").css("height","auto");
	        $("#logo").stop().animate({height:"3em"});
	        $(".headerNav").stop().animate({height:"auto"});
	        $(".headerNav li").stop().animate({height:"2em"});

			console.log("while loop!");

	    } else if (document.body.scrollTop < 200 || document.documentElement.scrollTop < 200){
	        $("#logo h1").stop().animate({fontSize:"2em"});
	        $("#header").css("height","3em");
	        $("#logo").stop().animate({height:"4em"});
	        $(".headerNav").stop().animate({height:"4em"});

			console.log("scrolling!");
	    };
	};

//when hamburger icon is clicked, show drop down navigation
$(".hamburger").click(dropNav);

	function dropNav(){
		$(".line").slideToggle();
	};


//when window is max 650px, show the hamburger and d
var mq = window.matchMedia( "(min-width: 650px)" );

if (mq.matches){
//window width is at least 650px
	$("#show").show();
	};

});
