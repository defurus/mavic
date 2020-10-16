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

$('.mobail__btn').on('click',() => {
	$('.mobail__btn').toggleClass('mobail__btn--active')
	$('.menu-container').toggleClass('displayflex')
	$('.number').toggleClass('displayflex')
	$('.menu-item').parent().toggleClass('displayflex')
})

$('.link').on('click',() => {
	$('.menu-container').removeClass('displayflex')
	$('.mobail__btn').removeClass('mobail__btn--active')
	$('.number').removeClass('displayflex')
})


$('#fullpage').fullpage({
	autoScrolling:true,
	scrollHorizontally: true,
	sectionSelector: '.section',
	scrollOverflow: true
});
