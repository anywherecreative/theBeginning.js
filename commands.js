var god = $;
var universe = document;
(function($){

	$.fn.light = function() {
		return $(this).attr('data-tod','day');
	};
	$.fn.dark = function() {
		return $(this).data('data-tod','night');
	};

})(god);

function godSays(words) {
	console.log(words);
}