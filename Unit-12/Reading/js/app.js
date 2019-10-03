var count=0;

$(document).ready(function(){
var $block = $("#block");
	$block.toggleClass('show');
	var tmparr = [];
	for(ii=0;ii<softTh.length;ii++){
		tmparr.push(softTh[ii].toLowerCase());
	}
	softTh = tmparr;

	var tmparr = [];
	for(ii=0;ii<hardTh.length;ii++){
		tmparr.push(hardTh[ii].toLowerCase());
	}
	hardTh = tmparr;
	
	var tmparr = [];
	for(ii=0;ii<tTh.length;ii++){
		tmparr.push(tTh[ii].toLowerCase());
	}
	tTh = tmparr;

	var tmparr = [];
	for(ii=0;ii<dTh.length;ii++){
		tmparr.push(dTh[ii].toLowerCase());
	}
	dTh = tmparr;
	
	// initialize sentence
	
	var qStr = '';
	for(var i=0; i<dataCollection.length;i++){
		var j = i+1;
		qStr+='<li class="ques-li soft">'+dataCollection[i]+'</li>';
	}
	$('#ques-info').html(qStr);
	/////

	 $( ".draggable" ).draggable({ helper: "clone", opacity: 0.8, cursor: "crosshair", scope: "drop",revert: "invalid" }); 

	 $("#softDrop").droppable({ 
		 accept: ".draggable", 
		 scope: "drop",
		 drop: function(event, ui) {
			 
			 var dropped = ui.draggable;
			 var word = $(dropped).html();

			 if(inArray(word.toLowerCase(),softTh)){		 
				 var clone = $(dropped).clone();
				 clone.removeClass('draggable').addClass('dropWord');
				 clone.appendTo($(this));

				 $(dropped).removeClass('draggable ui-draggable').addClass('bold');

				 //chkEnd();
				 play('well-done.mp3');
				 count++;
				 enableReset()
			 }else{
				play('try-again.mp3');
			 }

		 }

	});

	$("#hardDrop").droppable({ 
		 accept: ".draggable", 
		 scope: "drop",
		 drop: function(event, ui) {
			 
			 var dropped = ui.draggable;
			 var word = $(dropped).html();

			 if(inArray(word.toLowerCase(),hardTh)){		 
				 var clone = $(dropped).clone();
				 clone.removeClass('draggable').addClass('dropWord');
				 clone.appendTo($(this));

				 $(dropped).removeClass('draggable ui-draggable').addClass('bold');

				 //chkEnd();
				 play('well-done.mp3');
				 count++;
				 enableReset()
			 }else{
				play('try-again.mp3');
			 }
		 }

	});
	
	$("#tDrop").droppable({ 
		 accept: ".draggable", 
		 scope: "drop",
		 drop: function(event, ui) {
			 
			 var dropped = ui.draggable;
			 var word = $(dropped).html();

			 if(inArray(word.toLowerCase(),tTh)){		 
				 var clone = $(dropped).clone();
				 clone.removeClass('draggable').addClass('dropWord');
				 clone.appendTo($(this));

				 $(dropped).removeClass('draggable ui-draggable').addClass('bold');

				 //chkEnd();
				 play('well-done.mp3');
				 count++;
				 enableReset()
			 }else{
				play('try-again.mp3');
			 }

		 }

	});

	$("#dDrop").droppable({ 
		 accept: ".draggable", 
		 scope: "drop",
		 drop: function(event, ui) {
			 
			 var dropped = ui.draggable;
			 var word = $(dropped).html();

			 if(inArray(word.toLowerCase(),dTh)){		 
				 var clone = $(dropped).clone();
				 clone.removeClass('draggable').addClass('dropWord');
				 clone.appendTo($(this));

				 $(dropped).removeClass('draggable ui-draggable').addClass('bold');

				 //chkEnd();
				 play('well-done.mp3');
				 count++;
				 enableReset()
			 }else{
				play('try-again.mp3');
			 }
		 }

	});
	
	
	

	$('.title-h2').html(helpTxt);

	//init();
});


function tab(){
	if(count>=8){
		play('well-done.mp3');
		var $block = $("#block");
		$block.toggleClass('show');
		var $blocks = $("#blocks");
		$blocks.toggleClass('show');
		setInterval(function(){ $('#block').addClass('hidden'); 
		},1000);
		setInterval(function(){ 
		window.location="../index.html";
		},4000);
	}
	else{
		
		play('try-again.mp3');
	}
}

function play(sound){
	var sound1 = new Audio('../audio/'+sound);
	sound1.play();
}

function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

function chkEnd(){
	if($('.draggable').length == 1){
		$('#btnTry').prop('disabled',false);
	}
}

function enableReset(){
	$('#btnTry').prop('disabled',false);
}


/*function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}*/

function init() {
    //document.addEventListener("touchstart", touchHandler, true);
   // document.addEventListener("touchmove", touchHandler, true);
   // document.addEventListener("touchend", touchHandler, true);
   // document.addEventListener("touchcancel", touchHandler, true);
}