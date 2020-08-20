var acarArray = document.getElementsByClassName('questions-item');
var arrowArray = document.getElementsByClassName('question-arrow');

	for(var i=0;i<acarArray.length;i++){
	acarArray[i].onclick = function () {
		for(i=0;i<acarArray.length;i++) {
			acarArray[i].classList.remove('acar-active');
		}
		for(i=0;i<arrowArray.length;i++) {
			arrowArray[i].classList.remove('arrow-active');
		}
		this.classList.add('acar-active');
		$(this).find('.question-arrow').toggleClass('arrow-active');
	}
}

var imgArray = ["img/main-menu.png","img/menu.png"],
 	 img = document.getElementById('mobail-btn');
 	 	var i = 0;
 	 	img.src = imgArray[0];
 	 	img.addEventListener('click', function() {
			$(".menu").toggleClass("display-block")
			$(".number").toggleClass("display-block")
			$(".main-content_position").toggleClass("minus-index")
			$(".scroll-box").toggleClass("minus-index")
 	 		i++;
 	 		if( i == imgArray.length) {
 	 			i = 0;
 	 		}
 	 		img.src = imgArray[i];
})
