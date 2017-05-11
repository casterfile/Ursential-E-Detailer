var isReferencesShow = false;

var Model = {

	score : 0,
	touch : false,
	tempArr : [],
	summaryBoolean : true,
	prevP : null,
	nextP : null,
	

	addImage : function(path, id, x, y, dur, props) {
		var img = document.createElement('img');
		$(img).hide();
		img.id = id;
		img.src = path;
		setTimeout(function(evt){
			$(img).show();
		}, 100);
		$(img).load(function(evt){
			$(img).css({"left":(x - (this.width / 2)) + "px", "top":(y - (this.height / 2)) + "px"});
			if(dur) {
				Model.addTweenFrom(img, dur, props);
			}
		});
		$("#container").append(img);
	},

	addText : function(txt, id, clss, x, y, dur, props) {
		var p = document.createElement('p');
		$(p).text(txt);
		p.id = id;
		$(p).hide();
		setTimeout(function(){
			$(p).show();
		}, 100);
		$(p).addClass(clss);
		$(p).css({"left":(x - 250) + "px", "top":y + "px"});
		if(dur) {
			Model.addTweenFrom(p, dur, props);
		}
		$("#container").append(p);
	},

	addDiv : function(id, clss, x, y, dur, props) {
		var div = document.createElement('div');
		div.id = id;
		$(div).addClass(clss);
		$(div).hide();
		setTimeout(function(){
			$(div).show();
		}, 100);
		$(div).css({"left":(x - 10) + "px", "top":(y - 10) + "px"});
		if(dur) {
			Model.addTweenFrom(div, dur, props);
		}
		$("#container").append(div);
	},

	addButton : function(id, x, y, w, h) {
		var btn = document.createElement('div');
		btn.id = id;
		$(btn).css({"left":x+"px", "top":y+"px", "width":w+"px", "height":h+"px"});
		$("#container").append(btn);
	},

	addTweenFrom : function(obj, dur, props) {
		TweenMax.from(obj, dur, props);
	},

	addTweenTo: function(obj, dur, props) {
		TweenMax.to(obj, dur, props);
	},

	insertLineTransition : function(path, x, y, w, h, dur, trans){
		var div = document.createElement('div');
		div.style.visibility = "hidden";
		setTimeout(function(){
			div.style.visibility = "visible";
		}, 100);
		div.style.overflow = "hidden";
		div.style.left = x + "px";
		div.style.top = y + "px";
		div.style.width = w + "px";
		div.style.height = h + "px";
		if((dur) && (trans)){
			Model.addTweenFrom(div, dur, trans);
		}
		var img = document.createElement("img");
		img.src = path;
		$(div).append(img);
		$("#container").append(div);
	}

}

function swipePage(prevPage, nextPage){
	Model.prevP = prevPage;
	Model.nextP = nextPage;
}

var View = {

	page1 : function() {
		Controller.removePage();
		Model.addImage("images/Scene1/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		//Controller.homapage();
		swipePage(null, View.page2);
	},

	page2 : function() {
		Controller.removePage();
		Model.addImage("images/Scene2/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene2/world.png", "", 290, 210, .5, {delay:1, alpha:0, x:-200, ease:Power2.easeIn});
		Model.addImage("images/Scene2/phil.png", "", 430, 265, .5, {delay:1.5, alpha:0, ease:Power2.easeIn, repeat:-1});
		Model.addImage("images/Scene2/human.png", "", 740, 210, .5, {delay:1, alpha:0, x:200, ease:Power2.easeIn});
		Model.addImage("images/Scene2/humanTime.png", "", 740, 210, .5, {delay:2, alpha:0, ease:Power2.easeIn, repeat:-1});
		Model.addImage("images/Scene2/women.png", "", 582, 130, .5, {delay:2, alpha:0, ease:Power2.easeIn, repeat:-1});
		Model.addImage("images/Scene2/longterm.png", "", 510, 380, .5, {delay:1.5, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene2/blockageOfCommonLogo.png", "", 200, 460, 1, {delay:1.5, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene2/blockageOfCommonText.png", "", 370, 460, .5, {delay:1.5,y:-50, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene2/cancerLogo.png", "", 520, 460, 1, {delay:1.5, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene2/cancerText.png", "", 610, 460, .5, {delay:1.5,y:-50, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene2/pancreatitisLogo.png", "", 740, 460, 1, {delay:1.5, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene2/pancreatitisText.png", "", 820, 460, .5, {delay:1.5,y:-50, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene2/money.png", "", 510, 600, .5, {delay:2, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/home.png", "homepage", 930, 650, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/reference.png", "referencepage", 880, 650, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Controller.homapage();
		swipePage(View.page1, View.page3);
	},

	page3 : function() {
		Controller.removePage();
		Model.addImage("images/Scene3/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene3/humanTroble.png", "", 250, 320, .5, {delay:1.5, alpha:0,scaleX:1.2, scaleY:1.2, ease:Power2.easeIn, repeat:-1});
		Model.addImage("images/Scene3/human.png", "", 250, 320, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene3/bodyTroble.png", "", 500, 330, .5, {delay:2.5, alpha:0,scaleX:1.2, scaleY:1.2, ease:Power2.easeIn, repeat:-1});
		Model.addImage("images/Scene3/body.png", "", 500, 330, .5, {delay:2, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene3/time.png", "", 780, 320, .5, {delay:3, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene3/timeTroble.png", "", 790, 280, .5, {delay:3, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene3/timeTroble.png", "", 790, 280, 3, {delay:3.5, alpha:0,rotation:-120, ease:Power2.easeIn});
		Model.addImage("images/Scene3/diagnos.png", "", 512, 600, .5, {delay:3, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene3/diagnosTroble.png", "", 512, 600, .5,  {delay:4.5, alpha:0,scaleX:1.1, scaleY:1.1, ease:Power2.easeIn, repeat:-1});
		Model.addImage("images/Global/home.png", "homepage", 930, 684, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/reference.png", "referencepage", 880, 684, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Controller.homapage();
		swipePage(View.page2, View.page4);
	},

	page4 : function() {
		Controller.removePage();
		Model.addImage("images/Scene4/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene4/body.png", "", 250, 390, .5, {delay:1.5, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene4/bodyTroble.png", "", 250, 390, .5, {delay:2, alpha:0, ease:Power2.easeIn, repeat:-1});
		Model.addImage("images/Scene4/knife.png", "", 700, 390, .5, {delay:2.5, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene4/knifeTroble.png", "", 700+200, 390, 1, {delay:3, alpha:0, x:-200, ease:Power2.easeIn});
		Model.addImage("images/Global/home.png", "homepage", 930, 650, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/reference.png", "referencepage", 880, 650, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Controller.homapage();
		swipePage(View.page3, View.page5);
	},

	page5 : function() {
		Controller.removePage();
		Model.addImage("images/Scene5/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene5/from the maker.png", "", 210, 60, .5, {delay:1, alpha:0, y:-10, ease:Power2.easeIn});
		Model.addImage("images/Scene5/ursetial 250mg.png", "", 290, 610, .5, {delay:1, alpha:0, x:-100, ease:Power2.easeIn});
		Model.addImage("images/Scene5/productLogo.png", "", 290, 500, .5, {delay:1, alpha:0, x:100, ease:Power2.easeIn});
		Model.addImage("images/Scene5/productItem.png", "", 290, 300, .5, {delay:1, alpha:0, x:100, ease:Power2.easeIn});
		Model.addImage("images/Scene5/productText.png", "", 800, 614, .5, {delay:1, alpha:0, x:-100, ease:Power2.easeIn});
		Model.addImage("images/Global/home.png", "homepage", 930, 684, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/reference.png", "referencepage", 880, 684, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Controller.homapage();
		swipePage(View.page4, null);
	},

	page6 : function() {
		Controller.removePage();
		Model.addImage("images/Scene6/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene6/image.png", "", 512, 434, .5, {delay:1, alpha:0, y: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene6/arrow1down.png", "AnimationDown", 512, 434, .5, {delay:1, autoAlpha:0,display:"none", y: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene6/imageCircle1.png", "NextPage", 440, 358, .5, {delay:1, alpha:0, y: -100, ease:Power2.easeIn});
		Model.addImage("images/Global/home.png", "homepage", 930, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/reference.png", "referencepage", 880, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Controller.homapage();
		Controller.page6Handler();
		swipePage(null, null);
	},

	page7 : function() {
		Controller.removePage();
		Model.addImage("images/Scene7/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene7/image.png", "", 512, 434, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene7/imageText4.png", "", 512, 434, .5, {delay:1.5, alpha:0, x: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene7/imageText3.png", "", 512, 434, .5, {delay:2, alpha:0, x: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene7/imageText2.png", "", 512, 434, .5, {delay:2.5, alpha:0, x: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene7/imageText1.png", "", 512, 434, .5, {delay:3, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/home.png", "homepage", 930, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/reference.png", "referencepage", 880, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Controller.homapage();
		swipePage(View.page6, View.page8);
	},

	page8 : function() {
		Controller.removePage();
		Model.addImage("images/Scene8/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene8/image.png", "", 512, 434, .5, {delay:1, alpha:0, y: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene8/arrow1down.png", "", 512, 434, .5, {delay:1, alpha:0, y: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene8/arrow2down.png", "AnimationDown", 522, 434, .5, {delay:1, autoAlpha:0,display:"none", ease:Power2.easeIn});
		Model.addImage("images/Scene8/imageCircle1.png", "NextPage", 610, 360, .5, {delay:1, alpha:0, y: -100, ease:Power2.easeIn});
		Model.addImage("images/Global/home.png", "homepage", 930, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/reference.png", "referencepage", 880, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Controller.homapage();
		Controller.page8Handler();
		swipePage(View.page7, null);
	},

	page9 : function() {
		Controller.removePage();
		Model.addImage("images/Scene9/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene9/image.png", "", 512, 434, .5, {delay:1, alpha:0, x: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene9/imageText1.png", "", 512, 434, .5, {delay:1.5, alpha:0, x: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene9/imageText2.png", "", 512, 434, .5, {delay:2, alpha:0, x: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene9/imageText3.png", "", 512, 434, .5, {delay:2.5, alpha:0, x: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene9/imageText4.png", "", 512, 434, .5, {delay:3, alpha:0, x: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene9/imageText5.png", "", 512, 434, .5, {delay:3.5, alpha:0, x: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene9/imageText6.png", "", 512, 434, .5, {delay:4, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/home.png", "homepage", 930, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/reference.png", "referencepage", 880, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Controller.homapage();
		swipePage(View.page8, View.page10);
	},

	page10 : function() {
		Controller.removePage();
		Model.addImage("images/Scene10/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene10/image.png", "", 512, 434, .5, {delay:1, alpha:0, y: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene10/arrow1down.png", "", 512, 434, .5, {delay:1, alpha:0, y: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene10/arrow2down.png", "", 522, 434, .5, {delay:1, alpha:0, y: -100, ease:Power2.easeIn});
		Model.addImage("images/Scene10/arrow3down.png", "AnimationDown", 522, 534, .5, {delay:1, autoAlpha:0,display:"none", ease:Power2.easeIn});//, autoAlpha:0,display:"none"
		Model.addImage("images/Scene10/imageCircle1.png", "NextPage", 524, 510, .5, {delay:1, alpha:0, y: -100, ease:Power2.easeIn});
		Model.addImage("images/Global/home.png", "homepage", 930, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/reference.png", "referencepage", 880, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Controller.homapage();
		Controller.page10Handler();
		swipePage(View.page9, null);
	},

	page11 : function() {
		Controller.removePage();
		Model.addImage("images/Scene11/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.insertLineTransition("images/Scene11/imageData6 copy.png", 260, 250, 486, 272, 3.5, {delay:1, width:0, ease:Power2.easeIn});
		Model.addImage("images/Scene11/afterweek.png", "", 790, 380, 1, {delay:4, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene11/referencesShow.png", "referencesShow", -327, 713, .5, {delay:0, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/home.png", "homepage", 930, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/reference.png", "referencepage", 880, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Controller.homapage();
		Controller.page11Handler();
		swipePage(View.page10, View.page13);
	},

	// page12 : function() {
	// 	Controller.removePage();
	// 	Model.addImage("images/Scene12/bg.png", "NextTemp", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
	// 	Model.addImage("images/Global/home.png", "homepage", 910, 680, .5, {delay:1, alpha:0, ease:Power2.easeIn});
	// 	Controller.homapage();
	// 	swipePage(View.page11, View.page13);
	// },

	page13 : function() {
		Controller.removePage();
		Model.addImage("images/Scene13/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene13/bg2.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene13/image4.png", "", 512, 384, .5, {delay:5, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene13/image3.png", "", 512, 384, .5, {delay:4, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene13/image2.png", "", 512, 384, .5, {delay:3, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene13/image1.png", "", 512, 384, .5, {delay:2, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/home.png", "homepage", 930, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Global/reference.png", "referencepage", 880, 687, .5, {delay:1, alpha:0, ease:Power2.easeIn});
		Controller.homapage();
		swipePage(View.page11, null);
	}

}

var Controller = {

	initialize : function() {
		document.addEventListener('touchmove', function(e){ e.preventDefault(); });
		var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
		if (isiPad) {
			Model.touch = true;
		}
		View.page1();
		Controller.gestureHandler()
	},

	removePage : function() {
		while(parent.document.getElementById("container").childNodes.length > 0) {
			parent.document.getElementById("container").removeChild(parent.document.getElementById("container").childNodes[0]);
		}
	},

	homapage : function() {
		if(Model.touch) {
			$("#homepage").bind("touchend", function(evt){
				View.page1();
			});
			$("#referencepage").bind("touchend", function(evt){
				View.page6();
			});
		}else{
			$("#homepage").bind("mouseup", function(evt){
				View.page1();
			});
			$("#referencepage").bind("mouseup", function(evt){
				View.page6();
			});
		}
	},

	page6Handler : function() {
		if(Model.touch) {
				$("#NextPage").bind("touchend", function(evt){
					Model.addTweenTo("#AnimationDown",.5,{top:"300px",alpha:1,autoAlpha:1, display:"block",  repeatDelay:0.5, ease:Linear.easeNone});
					setTimeout(function(){
						View.page7();
					}, 2000);
				});
			}else{
				$("#NextPage").bind("mouseup", function(evt){
					Model.addTweenTo("#AnimationDown",.5,{top:"300px",alpha:1,autoAlpha:1, display:"block", repeatDelay:0.5, ease:Linear.easeNone});
					setTimeout(function(){
						View.page7();
					}, 2000);
			});
		}
	},

	page8Handler : function() {
		if(Model.touch) {
				$("#NextPage").bind("touchend", function(evt){
					Model.addTweenTo("#AnimationDown",.5,{top:"300px",alpha:1,autoAlpha:1, display:"block",  repeatDelay:0.5, ease:Linear.easeNone});
					setTimeout(function(){
						View.page9();
					}, 2000);
				});
			}else{
				$("#NextPage").bind("mouseup", function(evt){
					Model.addTweenTo("#AnimationDown",.5,{top:"300px",alpha:1,autoAlpha:1, display:"block", repeatDelay:0.5, ease:Linear.easeNone});
					setTimeout(function(){
						View.page9();
					}, 2000);
			});
		}
	},

	page10Handler : function() {
		if(Model.touch) {
				$("#NextPage").bind("touchend", function(evt){
					Model.addTweenTo("#AnimationDown",.5,{top:"150px",alpha:1,autoAlpha:1, display:"block",  repeatDelay:0.5, ease:Linear.easeNone});
					setTimeout(function(){
						View.page11();
					}, 2000);
				});
			}else{
				$("#NextPage").bind("mouseup", function(evt){
					Model.addTweenTo("#AnimationDown",.5,{top:"150px",alpha:1,autoAlpha:1, display:"block", repeatDelay:0.5, ease:Linear.easeNone});
					setTimeout(function(){
						View.page11();
					}, 2000);
			});
		}
	},

	//if(Model.nextP && (typeof Model.nextP == "function")){
	page11Handler : function() {
		isReferencesShow = false;
		if(Model.touch) {
				$("#referencesShow").bind("touchend", function(evt){
					Model.addTweenTo("#referencesShow",1,{left:"0px", repeatDelay:0.5, ease:Linear.easeNone});
					console.log("Nice two "+ isReferencesShow);
				});
			}else{
				$("#referencesShow").bind("mouseup", function(evt){
					Model.addTweenTo("#referencesShow",1,{left:"0px", repeatDelay:0.5, ease:Linear.easeNone});
					console.log("Nice two "+ isReferencesShow);
			});
		}
		// if(isReferencesShow)
		// {
			

			
		// }
		// else
		// {
		// 	isReferencesShow = true;
		// 	if(Model.touch) {
		// 			$("#referencesShow").bind("touchend", function(evt){
		// 				Model.addTweenTo("#referencesShow",1,{left:"0px", repeatDelay:0.5, ease:Linear.easeNone});
		// 				console.log("Nice one");
		// 			});
		// 		}else{
		// 			$("#referencesShow").bind("mouseup", function(evt){
		// 				Model.addTweenTo("#referencesShow",1,{left:"0px", repeatDelay:0.5, ease:Linear.easeNone});
		// 				console.log("Nice one");
		// 		});
		// 	}
		// }
	},

	page11Handler2 : function() {
		// if(Model.isReferencesShow == true)
		// {
		// 	Model.isReferencesShow = false;
		// 	if(Model.touch) {
		// 			$("#referencesShow").bind("touchend", function(evt){
		// 				Model.addTweenTo("#referencesShow",1,{left:"-727px", repeatDelay:0.5, ease:Linear.easeNone});
		// 				console.log("Nice two");
		// 			});
		// 		}else{
		// 			$("#referencesShow").bind("mouseup", function(evt){
		// 				Model.addTweenTo("#referencesShow",1,{left:"-727px", repeatDelay:0.5, ease:Linear.easeNone});
		// 				console.log("Nice two");
		// 		});
		// 	}
		// }
	},

	


	lastPageHandler : function() {
		var eventStr = "mouseup";
		if(Model.touch) {
			eventStr = "touchend";
		}
		$("#gsk_btn").bind(eventStr, function(){
			View.page5();
			document.getElementById("click").play();
		});
		$("#syn_btn1").bind(eventStr, function(){
			View.page6();
			document.getElementById("click").play();
		});
		$("#syn_btn2").bind(eventStr, function(){
			View.page7();
			document.getElementById("click").play();
		});
		$("#syn_btn3").bind(eventStr, function(){
			View.page1();
			document.getElementById("click").play();
		});
	},
	gestureHandler : function() {
		$(function() {      
	      $("#container").swipe( {
	        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
	          if(direction == "left") {
	          	if(Model.nextP && (typeof Model.nextP == "function")){
					Model.nextP();
				}
	          }else if(direction == "right"  && Model.prevP != null) {
	          	if(Model.prevP && (typeof Model.prevP == "function")){
					Model.prevP(); 
				}
	          }
	        },
	        threshold:0,
	        fingers:'all'
	      });
	    });
	}

}






