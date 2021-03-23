/**
 * Show load animation until webpage is fully loaded
 */
$(window).load(function() {
	// Animate loader off screen
	$('.se-pre-con').fadeOut('slow');
});

$( '.navbar-toggle' ).click(function() {
	$('.navbar-responsive-collapse' ).toggleClass( 'in' );
});

$('.checkbox').change(function() {
	if(this.checked) {
	//Do stuff
	}
});


//Create new clipboard object for setting the clipboard value
var clipboard = new Clipboard('#copybutton');

// Initiate the material design options including Ripples and Dropdown
$.material.init();

// Initiate all Tooltips and ensure they are placed in the body to avoid movement
$(function () {
	$('[data-toggle="tooltip"]').tooltip({container: 'body', delay: {show: 150, hide: 0}});
});


// Init any existing .select element and then watch for new .select elements
// added dinamically by some black magic casted by a evil wizard
//$(".select").dropdown({ "autoinit" : ".select" });


$('.btn-copy').tooltip({
	trigger: 'click',
	placement: 'top'
});

/**
 * Function for setting the tooltip
 * @param {[String]} message to be displayed in the tooltip
 */
function setTooltip(message) {
	$('.btn-copy').tooltip('hide')
		.attr('data-original-title', message)
		.tooltip('show');
}

// Automically Hide the tooltop shown when copying the combicode
function hideTooltip() {
	setTimeout(function() {
		$('.btn-copy').tooltip('hide');
	}, 1000);
}

// Show tooltip when textarea is successfuly copied
clipboard.on('success', function(e) {
	setTooltip('Code Copied!');
	hideTooltip();
});
// Hide tooltip when copying textarea fails
clipboard.on('error', function(e) {
	setTooltip('Copying Failed!');
	hideTooltip();
});

/**
 * Usabilla related JavaScript
 * ============================================
 */

//Find a Link and open de Usabilla Feedback form when the user clicks on the link
document.getElementById('menu-item-feedback').addEventListener('click', function(){
	// Define Custom Variables
	var usblCustom = usblCustomVar();
	
	//Send data to Usabilla
	window.usabilla_live('data', {
		'custom': usblCustom
	});
	window.usabilla_live('click');
});

/**
 * Function for returning an object with all basic custom variables from the browser.
 * @return {[object]} [Object that can be used as custom object for Usabilla]
 */
function usblCustomVar(){
	// Define output object
	var output = {};
	// Define and set variables
	var referrerU = '' + document.referrer;
	var useragentU = '' + navigator.userAgent;
	var platformU = '' + navigator.platform;
	var browsernameU = '' + navigator.appName;
	var heightU = '' + screen.height;
	var widthU = '' + screen.width;
	var historyU = '' + history.length;
	var d = new Date();
	var localtimeU = '' + d.getTimezoneOffset();
	var fullUrl = '' + window.location.toString();
	var searchString = '' + window.location.search;
	var langU = navigator.language;
  
	var searchStringClean = searchString.replace('?', '');
	var cleanUrl = fullUrl.replace(window.location.search, '');
  
	// Fill Custom Object with additional params
	output.page = cleanUrl;
	output.searchquery = searchStringClean;
	output.referrer = referrerU;
	output.useragent = useragentU;
	output.platform = platformU;
	output.browser = browsernameU;
	output.screenheight = heightU;
	output.screenwidth = widthU;
	output.pageviewcount = historyU;
	output.timeofffsetgmt = localtimeU;
	output.browserlang = langU;
	return output;
}
  
