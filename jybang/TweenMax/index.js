function test1(){
	TweenLite.to("#myID", 2, {//대상,초,모션
		backgroundColor: "#ff0000",
		width: "50%",
		top: "100px",
		ease: Power2.easeInOut
	});
}

function test2(){
	TweenLite.to("#myID", 2, {
		boxShadow: "0px 0px 20px red",
		color: "#FC0"
	});
}

function test3(){
//		var box = $("#greenBox"),
//		var box = document.getElementById("greenBox"),
	var box = document.querySelector("#greenBox"),
		count = 0,
		tween;

	tween = TweenMax.to(box, 2, {
		left:"700px",
		repeat:10,
		yoyo:true,
		onRepeat:onRepeat,
		repeatDelay:0.1,
		ease: Power2.easeInOut
	});

	function onRepeat() {
		count++;
//			box.html(count);
		box.innerHTML = count;
		TweenLite.set(box, {
			backgroundColor:"hsl(" + Math.random() * 255 + ", 90%, 60%)"
		});
	}
}

//	test1();
//	test2();
test3();
