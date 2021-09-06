var btn = document.getElementById('btn');
btn.onclick = function () {
	var text = document.querySelector('p.intro');
	text.classList.add('yellow');
};

$(function () {
	var imagePos;
	var viewHeit = $(window).height();
	var showHeit = viewHeit - 60;

	$('#learn .section-title').each(function() {
	    var $that = $(this);
	    imagePos = $that.offset().top;

	    $(window).scroll(function() {
			var topOfWindow = $(window).scrollTop();
			var topOfWindowShow = topOfWindow + showHeit;

			if (imagePos < topOfWindowShow) {
		        $that.addClass("flip");
			}
		});
	});
	$('#learn .my-time').each(function() {
	    var $that = $(this);
	    imagePos = $that.offset().top;

	    $(window).scroll(function() {
			var topOfWindow = $(window).scrollTop();
			var topOfWindowShow = topOfWindow + showHeit;

			if (imagePos < topOfWindowShow - 250) {
		        $that.addClass("flipInX");
			}
		});
	});
})