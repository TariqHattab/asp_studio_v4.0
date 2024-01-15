/*
Template Name: ASPSTUDIO - Responsive Bootstrap 5 Admin Template
Version: 4.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/asp-studio/
*/

var handleRenderSummernote = function() {
	var totalHeight = ($(window).width() >= 767) ? $(window).height() - $('.summernote').offset().top - 63 : 400;
	$('.summernote').summernote({
		height: totalHeight
	});
};

var handleEmailTagsInput = function() {
	$('#email-to').tagit({
		availableTags: ["admin2@asp-studio.com", "admin3@asp-studio.com", "admin4@asp-studio.com", "admin5@asp-studio.com", "admin6@asp-studio.com", "admin7@asp-studio.com", "admin8@asp-studio.com"]
	});
	$('#email-cc').tagit({
		availableTags: ["admin2@asp-studio.com", "admin3@asp-studio.com", "admin4@asp-studio.com", "admin5@asp-studio.com", "admin6@asp-studio.com", "admin7@asp-studio.com", "admin8@asp-studio.com"]
	});
	$('#email-bcc').tagit({
		availableTags: ["admin2@asp-studio.com", "admin3@asp-studio.com", "admin4@asp-studio.com", "admin5@asp-studio.com", "admin6@asp-studio.com", "admin7@asp-studio.com", "admin8@asp-studio.com"]
	});
};


/* Controller
------------------------------------------------ */
$(document).ready(function() {
	handleRenderSummernote();
	handleEmailTagsInput();
});