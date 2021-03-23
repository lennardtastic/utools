/**
 * Set Event Listeners
 */
document.getElementById('combicode-gen-btn').addEventListener('click', checkInputCombiCode);
document.getElementById('btn-reset').addEventListener('click', resetFieldsCombicode);
document.getElementById('btn-save').addEventListener('click', function () {
	saveGeneratedCode('combicode');
});


/**
 * Generates the combicode based on device and places the combicode in the TextArea
 */
function genCombicode() {
	// Create basic known strings
	var combicodegenStringStart = '<script type="text\/javascript">\/*{literal}<![CDATA[*\/window.lightningjs||function(c){function g(b,d){d&&(d+=(\/\\?\/.test(d)?"&":"?")+"lv=1");c[b]||function(){var i=window,h=document,j=b,g=h.location.protocol,l="load",k=0;(function(){function b(){a.P(l);a.w=1;c[j]("_load")}c[j]=function(){function m(){m.id=e;return c[j].apply(m,arguments)}var b,e=++k;b=this&&this!=i?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);m.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],j=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b&&d.push(b);c&&j.push(c);h&&f.push(h);return m};return m};var a=c[j]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(g=="https:"?g:"http:")+"\/\/"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w&&b();i.addEventListener?i.addEventListener(l,b,!1):i.attachEvent("on"+l,b);var q=function(){function b(){return["<head><\/head><",c,\' onload="var d=\',n,";d.getElementsByTagName(\'head\')[0].",d,"(d.",g,"(\'script\')).",i,"=\'",a.l,"\'\\"><\/",c,">"].join("")}var c="body",e=h[c];if(!e)return setTimeout(q,100);a.P(1);var d="appendChild",g="createElement",i="src",k=h[g]("div"),l=k[d](h[g]("div")),f=h[g]("iframe"),n="document",p;k.style.display="none";e.insertBefore(k,e.firstChild).id=o+"-"+j;f.frameBorder="0";f.id=o+"-frame-"+j;\/MSIE[ ]+6\/.test(navigator.userAgent)&&(f[i]="javascript:false");f.allowTransparency="true";l[d](f);try{f.contentWindow[n].open()}catch(s){a.domain=h.domain,p="javascript:var d="+n+".open();d.domain=\'"+h.domain+"\';",f[i]=p+"void(0);"}try{var r=f.contentWindow[n];r.write(b());r.close()}catch(t) { \n f[i]=p+\'d.write("\'+b().replace(\/"\/g,String.fromCharCode(92)+\'"\')+\'");d.close();\'}a.P(2)};\n a.l&&setTimeout(q,0)})()}();c[b].lv="1";return c[b]}var o="lightningjs",k=window[o]=g(o);k.require=g;k.modules=c}({}); if(!navigator.userAgent.match(\/Android|BlackBerry|BB10|iPhone|iPad|iPod|Opera Mini|IEMobile\/i)) {window.usabilla_live = lightningjs.require("usabilla_live", "\/\/';
	var combicodegenStringDesktopPre = 'w.usabilla.com\/';
	var combicodeDesktopID = '';
	var combicodegenStringDesktopSuf = '.js"); } else {window.usabilla_live = lightningjs.require("usabilla_live", "\/\/';
	var combicodegenStringMobilePre = 'w.usabilla.com\/';
	var combicodeMobileID = '';
	var combicodegenStringMobileSuf = '.js"); }\/*]]>{\/literal}*\/<\/script>\r\n';
	var combicodegenStringComplete = '';
	var combicodeCompanyIndicator = '';
	var combicodeCheckboxSnippet = checkInboxes();
	var combicodeDropdownSnippet = checkCallbackDropdown();

	// Get values from basic fields
	combicodeDesktopID = document.getElementById('desktop-btn-id-input').value;
	combicodeMobileID = document.getElementById('mobile-btn-id-input').value;
	combicodeCompanyIndicator = '<!-- Usabilla Combicode for ' + document.getElementById('company-name-input').value + '-->\r\n<!-- Begin Usabilla for Websites embed code -->\n';

	// Create combigen string
	combicodegenStringComplete = 
	(
		combicodeCompanyIndicator + 
		combicodegenStringStart + 
		combicodegenStringDesktopPre + 
		combicodeDesktopID + 
		combicodegenStringDesktopSuf + 
		combicodegenStringMobilePre + 
		combicodeMobileID + 
		combicodegenStringMobileSuf +
		'<script type="text\/javascript">\r\n'+
		combicodeCheckboxSnippet +
		combicodeDropdownSnippet +
		'\r\n<\/script>'
	);

	// Set the created combicode
	document.getElementById('combi-code-textarea').value = combicodegenStringComplete;
}


function resetFieldsCombicode() {
	document.getElementById('combicodeForm').reset();
	$('.form-group').removeClass('has-error'); // Removes the has-error class for a clean reset
}


function checkInputCombiCode() {
	if (generatorType === 'viewport') {
		genCombiViewport();
	}
	if (generatorType === 'device') {
		var snackbarWarningDesktop = {
			content: '<span class="glyphicon glyphicon-exclamation-sign glyph-with-space " aria-hidden="true"><\/span> <b>Oh Snap!<\/b> You did not fill in the Desktop Button ID.', // text of the snackbar
			style: 'snackbar snackbar-warning', // add a custom class to your snackbar
			timeout: 5000, // time in milliseconds after the snackbar autohides, 0 is disabled
			htmlAllowed: true // allows HTML as content value
		};
		var snackbarWarningMobile = {
			content: '<span class="glyphicon glyphicon-exclamation-sign glyph-with-space " aria-hidden="true"><\/span><b>Oh Snap!<\/b> You did not fill in the Mobile Button ID.', // text of the snackbar
			style: 'snackbar snackbar-warning', // add a custom class to your snackbar
			timeout: 5000, // time in milliseconds after the snackbar autohides, 0 is disabled
			htmlAllowed: true // allows HTML as content value
		};
		var snackbarErrorDesktop = {
			content: '<span class="glyphicon glyphicon-remove glyph-with-space " aria-hidden="true"><\/span> <b>Oh Snap!<\/b> You did not fill in a valid Desktop Button ID.', // text of the snackbar
			style: 'snackbar snackbar-error', // add a custom class to your snackbar
			timeout: 5000, // time in milliseconds after the snackbar autohides, 0 is disabled
			htmlAllowed: true // allows HTML as content value
		};
		var snackbarErrorMobile = {
			content: '<span class="glyphicon glyphicon-remove glyph-with-space " aria-hidden="true"><\/span> <b>Oh Snap!<\/b> You did not fill in a valid Mobile Button ID.', // text of the snackbar
			style: 'snackbar snackbar-error', // add a custom class to your snackbar
			timeout: 5000, // time in milliseconds after the snackbar autohides, 0 is disabled
			htmlAllowed: true // allows HTML as content value
		};
		if ($('#form-group-desktop').hasClass('has-error')) {
			$.snackbar(snackbarErrorDesktop);
			$('#desktop-btn-id-input').focus();
			return;
		}
		if ($('#form-group-mobile').hasClass('has-error')) {
			$.snackbar(snackbarErrorMobile);
			$('#mobile-btn-id-input').focus();
			return;
		}
		if (!$('#desktop-btn-id-input').val()) {
			$.snackbar(snackbarWarningDesktop);
			$('#desktop-btn-id-input').focus();
			return;
		}
		if (!$('#mobile-btn-id-input').val()) {
			$.snackbar(snackbarWarningError);
			$('#mobile-btn-id-input').focus();
			return;
		} else {
			genCombicode();
		}
	} else {
		genCombicode();
	}
}

/**
 * Function for checking the checkbox for inclusing additional code to the combicode
 * returns the snippet to be appended
 *
 */
function checkInboxes() {
	var checkboxCustomvar = document.getElementById('checkboxes-customvar').checked;
	var checkboxZbuttonindex = document.getElementById('checkboxes-zbuttonindex').checked;
	var checkboxZinterfaceindex = document.getElementById('checkboxes-zinterfaceindex').checked;
	var checkboxHide = document.getElementById('checkboxes-hide').checked;
	var checkboxShow = document.getElementById('checkboxes-show').checked;
	var checkboxCustomform = document.getElementById('checkboxes-customform').checked;
	
	var returnString = '';

	if(checkboxCustomvar === true){
		var snippetCustomvar = '\/**\r\n * Function for returning an object with all basic custom variables from the browser.\r\n * @return {[object]} [Object that can be used as custom object for Usabilla]\r\n *\/\r\nfunction usblCustomVar(){\r\n\t\/\/ Define output object\r\n\tvar output = {};\r\n\t\/\/ Define and set variables\r\n\tvar referrerU = \'\' + document.referrer;\r\n\tvar useragentU = \'\' + navigator.userAgent;\r\n\tvar platformU = \'\' + navigator.platform;\r\n\tvar browsernameU = \'\' + navigator.appName;\r\n\tvar heightU = \'\' + screen.height;\r\n\tvar widthU = \'\' + screen.width;\r\n\tvar historyU = \'\' + history.length;\r\n\tvar d = new Date();\r\n\tvar localtimeU = \'\' + d.getTimezoneOffset();\r\n\tvar fullUrl = \'\' + window.location.toString();\r\n\tvar searchString = \'\' + window.location.search;\r\n\tvar langU = navigator.language;\r\n  \r\n\tvar searchStringClean = searchString.replace(\'?\', \'\');\r\n\tvar cleanUrl = fullUrl.replace(window.location.search, \'\');\r\n  \r\n\t\/\/ Fill Custom Object with additional params\r\n\toutput.page = cleanUrl;\r\n\toutput.searchquery = searchStringClean;\r\n\toutput.referrer = referrerU;\r\n\toutput.useragent = useragentU;\r\n\toutput.platform = platformU;\r\n\toutput.browser = browsernameU;\r\n\toutput.screenheight = heightU;\r\n\toutput.screenwidth = widthU;\r\n\toutput.pageviewcount = historyU;\r\n\toutput.timeofffsetgmt = localtimeU;\r\n\toutput.browserlang = langU;\r\n\treturn output;\r\n}\r\n  \r\n\/\/ Define Custom Variables\r\nvar usblCustom = usblCustomVar();\r\n  \r\n\/\/Send data to Usabilla\r\nwindow.usabilla_live(\'data\', {\r\n\t\'custom\': usblCustom\r\n});';
		returnString = returnString + snippetCustomvar;
	}
	if(checkboxZbuttonindex === true){
		var snippetZbuttonindex = '\r\nwindow.usabilla_live(\"setButtonZIndex\", \"99999\"';
		returnString = returnString + snippetZbuttonindex;
	}
	if(checkboxZinterfaceindex === true){
		var snippetZinterfaceindex = '\r\nwindow.usabilla_live(\"setInterfaceZIndex\", \"99999\");';
		returnString = returnString + snippetZinterfaceindex;
	}
	if(checkboxHide === true){
		var snippetHide = '\r\nwindow.usabilla_live(\"hide\");';
		returnString = returnString + snippetHide;
	}
	if(checkboxShow === true){
		var snippetShow = '\r\nwindow.usabilla_live(\"show\");';
		returnString = returnString + snippetShow;
	}
	if(checkboxCustomform === true){
		var snippetCustomcheckboxCustomform = '\r\nwindow.usabilla_live(\"setForm\", \"Enter the exact custom form name here\");';
		returnString = returnString + snippetCustomcheckboxCustomform;
	}
	return returnString;
}

function checkCallbackDropdown(){
	var eventCallbackDropdownElement = document.getElementById('selectEventCallback');
	var eventCallbackDropdownValue = eventCallbackDropdownElement.options[eventCallbackDropdownElement.selectedIndex].value;
	var returnString = '';

	if (eventCallbackDropdownValue === '0'){
		returnString = '\n';
	}
	if (eventCallbackDropdownValue === 'callbackCookieDependecy'){
		returnString = '\/**\r\n * setEventCallback Function for Usabilla for Websites\r\n *\/\r\nwindow.usabilla_live(\"setEventCallback\", function (category, action, label, value) {\r\n    \r\n    var type = null;\r\n    switch (action) {\r\n    \r\n    \/\/ This event is raised when a user starts the feedback process, this can be by clicking the feedback button or via a Boost campaign.\r\n    case \"Feedback:Open\":\r\n        type = \"feedback\";\r\n        break;\r\n    \r\n    \/\/ This event is raised when a user has successfully completed the feedback process.\r\n    case \"Feedback:Success\":\r\n        type = \"feedback\";\r\n        break;\r\n        \r\n    \/\/ Event of the Campaign form that shows up\r\n    case \"Campaign:Open\":\r\n        type = \"campaign\";\r\n        setCookie( \"campaign_shown\", 1, 10);\r\n        break;\r\n    \r\n    \/\/ This event is raised whenever a user actively closes a campaign by either clicking on the close button or the cancel link.\r\n    case \"Campaign:Close\":\r\n        type = \"campaign\";\r\n        break;\r\n    \r\n    \/\/ This event is raised in addition to the Campaign Success event when a Boost campaign is successful.\r\n    case \"Campaign:Feedback Clicked\":\r\n        type = \"campaign\";\r\n        break;\r\n    \r\n    \/\/ This event is raised whenever a campaign is successful: \r\n    \/\/ - gives feedback while a boost campaign is active\r\n    \/\/ - clicks the recruit button for a recruit campaign\r\n    \/\/ - finishes a slide-out or full survey campaign\r\n    case \"Campaign:Success\":\r\n        type = \"campaign\";\r\n        break;\r\n    \r\n    \/\/ This event is raised whenever a user clicks the submit button for a multi-page campaign (slideout and full survey campaigns).\r\n    case \"Campaign:Page switch\":\r\n        type = \"campaign\";\r\n        break;\r\n    \r\n    }\r\n});\r\n\r\nfunction setCookie(cname, cvalue, exdays) {\r\n    var d = new Date();\r\n    d.setTime(d.getTime() + (exdays*24*60*60*1000));\r\n    var expires = \"expires=\"+ d.toUTCString();\r\n    document.cookie = cname + \"=\" + cvalue + \";\" + expires + \";path=\/\";\r\n}';
	}
	if (eventCallbackDropdownValue === 'callbackGA'){
		returnString = 'window.usabilla_live(\"setEventCallback\", function(category, action, label, value) {\r\n\r\n    var type = null;\r\n    switch (action) {\r\n\r\n        case \"Feedback:Open\":\r\n\r\n            type = \"feedback\";\r\n            ga(\'send\', {\r\n              \'hitType\': \'event\',\r\n              \'eventCategory\': \"Usabilla \" + type,\r\n              \'eventAction\': action,\r\n              \'eventLabel\': \"\",\r\n              \'evenValue\': value\r\n            });\r\n\r\n            break;\r\n\r\n        case \"Feedback:Success\":\r\n\r\n            type = \"feedback\";\r\n            ga(\'send\', {\r\n              \'hitType\': \'event\',\r\n              \'eventCategory\': \"Usabilla \" + type,\r\n              \'eventAction\': action,\r\n              \'eventLabel\': \"\",\r\n              \'evenValue\': value\r\n            });\r\n\r\n            break;\r\n\r\n        case \"Campaign:Open\":\r\n\r\n            type = \"campaign\";\r\n            ga(\'send\', {\r\n              \'hitType\': \'event\',\r\n              \'eventCategory\': \"Usabilla \" + type,\r\n              \'eventAction\': action,\r\n              \'eventLabel\': \"\",\r\n              \'evenValue\': value\r\n            });\r\n\r\n            break;\r\n\r\n        case \"Campaign:Close\":\r\n\r\n            type = \"campaign\";\r\n            ga(\'send\', {\r\n              \'hitType\': \'event\',\r\n              \'eventCategory\': \"Usabilla \" + type,\r\n              \'eventAction\': action,\r\n              \'eventLabel\': \"\",\r\n              \'evenValue\': value\r\n            });\r\n\r\n            break;\r\n\r\n        case \"Campaign:Feedback Clicked\":\r\n\r\n            type = \"campaign\";\r\n            ga(\'send\', {\r\n              \'hitType\': \'event\',\r\n              \'eventCategory\': \"Usabilla \" + type,\r\n              \'eventAction\': action,\r\n              \'eventLabel\': \"\",\r\n              \'evenValue\': value\r\n            });\r\n\r\n            break;\r\n\r\n        case \"Campaign:Success\":\r\n\r\n            type = \"response\";\r\n            ga(\'send\', {\r\n              \'hitType\': \'event\',\r\n              \'eventCategory\': \"Usabilla \" + type,\r\n              \'eventAction\': action,\r\n              \'eventLabel\': \"\",\r\n              \'evenValue\': value\r\n            });\r\n\r\n            break;\r\n\r\n    }\r\n});';
	}
	if (eventCallbackDropdownValue === 'callbackDecibel'){
		returnString = '\r\n\/\/ Send integration data to Decibel Insight\r\n\r\nwindow.usabilla_live(\'setEventCallback\', function(category, action, label, value) {\r\n\r\n    if (typeof decibelInsight !== \'undefined\' && decibelInsight !== null) {\r\n\r\n        if(action === \'Feedback:Open\') {\r\n            decibelInsight(\'sendIntegrationData\', \'Usabilla\', {\r\n                f: \'Open\'\r\n            });\r\n        }\r\n\r\n        if(action === \'Feedback:Success\') {\r\n            decibelInsight(\'sendIntegrationData\', \'Usabilla\', {\r\n                f: \'Success\',\r\n                s: value\r\n            });\r\n        }\r\n\r\n        if(action === \'Campaign:Open\') {\r\n            decibelInsight(\'sendIntegrationData\', \'Usabilla\', {\r\n                c: \'Open\',\r\n                i: label\r\n            });\r\n        }\r\n\r\n        if(action === \'Campaign:Success\') {\r\n            decibelInsight(\'sendIntegrationData\', \'Usabilla\', {\r\n                c: \'Success\',\r\n                i: label\r\n            });\r\n        }\r\n    }\r\n});';
	}
	if (eventCallbackDropdownValue === 'callbackMonetate'){
		returnString = '\r\n\/**The MIT License (MIT)\r\nCopyright (c) 2018 Lennard Schoemaker\r\nPermission is hereby granted, free of charge, to any person obtaining a copy\r\nof this software and associated documentation files (the \"Software\"), to deal\r\nin the Software without restriction, including without limitation the rights\r\nto use, copy, modify, merge, publish, distribute, sublicense, and\/or sell\r\ncopies of the Software, and to permit persons to whom the Software is\r\nfurnished to do so, subject to the following conditions:\r\nThe above copyright notice and this permission notice shall be included in all\r\ncopies or substantial portions of the Software.\r\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\r\nSOFTWARE.\r\n**\/\r\n\r\n\/**\r\n * setEventCallback Function for Usabilla for Websites that integrates with Monetate\r\n * More info can be found on \r\n * https:\/\/support.monetate.com\/hc\/en-us\/articles\/204308729-setCustomVariables-API-\r\n * https:\/\/support.monetate.com\/hc\/en-us\/articles\/217014606-API-Methods-and-Code-Examples\r\n *\/\r\nwindow.usabilla_live(\"setEventCallback\", function (usblcategory, usblaction, usbllabel, usblvalue) {\r\n    \r\n    var type = null;\r\n    switch (usblaction) {\r\n    \r\n    \/\/ This event is raised when a user starts the feedback process, this can be by clicking the feedback button or via a Boost campaign.\r\n    case \"Feedback:Open\":\r\n        type = \"feedback\";\r\n        \/\/ Send data to Monetate\r\n        window.monetateQ = window.monetateQ || [];\r\n        monetateQ.push([\"setCustomVariables\",\r\n            [\r\n                { name: \"usblCategory\", value: \"Feedback\" },\r\n                { name: \"usblAction\", value: \"Feedback:Open\" },\r\n                { name: \"usblActionValue\", value: usblvalue }\r\n            ]\r\n        ]);\r\n        window.monetateQ.push([\r\n            \"trackData\"\r\n        ]);\r\n        break;\r\n    \r\n    \/\/ This event is raised when a user has successfully completed the feedback process.\r\n    case \"Feedback:Success\":\r\n        type = \"feedback\";\r\n        \/\/ Send data to Monetate\r\n        window.monetateQ = window.monetateQ || [];\r\n        monetateQ.push([\"setCustomVariables\",\r\n            [\r\n                { name: \"usblCategory\", value: \"Feedback\" },\r\n                { name: \"usblAction\", value: \"Feedback:Success\" },\r\n                { name: \"usblActionValue\", value: usblvalue }\r\n            ]\r\n        ]);\r\n        window.monetateQ.push([\r\n            \"trackData\"\r\n        ]);\r\n        break;\r\n        \r\n    \/\/ Event of the Campaign form that shows up\r\n    case \"Campaign:Open\":\r\n        type = \"campaign\";\r\n        \/\/ Send data to Monetate\r\n        window.monetateQ = window.monetateQ || [];\r\n        monetateQ.push([\"setCustomVariables\",\r\n            [\r\n                { name: \"usblCategory\", value: \"Campaign\" },\r\n                { name: \"usblAction\", value: \"Campaign:Open\" },\r\n                { name: \"usblActionValue\", value: usblvalue }\r\n            ]\r\n        ]);\r\n        window.monetateQ.push([\r\n            \"trackData\"\r\n        ]);\r\n        break;\r\n    \r\n    \/\/ This event is raised whenever a user actively closes a campaign by either clicking on the close button or the cancel link.\r\n    case \"Campaign:Close\":\r\n        type = \"campaign\";\r\n        \/\/ Send data to Monetate\r\n        window.monetateQ = window.monetateQ || [];\r\n        monetateQ.push([\"setCustomVariables\",\r\n            [\r\n                { name: \"usblCategory\", value: \"Campaign\" },\r\n                { name: \"usblAction\", value: \"Campaign:Close\" },\r\n                { name: \"usblActionValue\", value: usblvalue }\r\n            ]\r\n        ]);\r\n        window.monetateQ.push([\r\n            \"trackData\"\r\n        ]);\r\n        break;\r\n    \r\n    \/\/ This event is raised in addition to the Campaign Success event when a Boost campaign is successful.\r\n    case \"Campaign:Feedback Clicked\":\r\n        type = \"campaign\";\r\n        \/\/ Send data to Monetate\r\n        window.monetateQ = window.monetateQ || [];\r\n        monetateQ.push([\"setCustomVariables\",\r\n            [\r\n                { name: \"usblCategory\", value: \"Campaign\" },\r\n                { name: \"usblAction\", value: \"Campaign:Feedback Clicked\" },\r\n                { name: \"usblActionValue\", value: usblvalue }\r\n            ]\r\n        ]);\r\n        window.monetateQ.push([\r\n            \"trackData\"\r\n        ]);\r\n        break;\r\n    \r\n    \/\/ This event is raised whenever a campaign is successful: \r\n    \/\/ - gives feedback while a boost campaign is active\r\n    \/\/ - clicks the recruit button for a recruit campaign\r\n    \/\/ - finishes a slide-out or full survey campaign\r\n    case \"Campaign:Success\":\r\n        type = \"campaign\";\r\n        \/\/ Send data to Monetate\r\n        window.monetateQ = window.monetateQ || [];\r\n        monetateQ.push([\"setCustomVariables\",\r\n            [\r\n                { name: \"usblCategory\", value: \"Campaign\" },\r\n                { name: \"usblAction\", value: \"Campaign:Success\" },\r\n                { name: \"usblActionValue\", value: usblvalue }\r\n            ]\r\n        ]);\r\n        window.monetateQ.push([\r\n            \"trackData\"\r\n        ]);\r\n        break;\r\n    \r\n    \/\/ This event is raised whenever a user clicks the submit button for a multi-page campaign (slideout and full survey campaigns).\r\n    case \"Campaign:Page switch\":\r\n        type = \"campaign\";\r\n        \/\/ Send data to Monetate\r\n        window.monetateQ = window.monetateQ || [];\r\n        monetateQ.push([\"setCustomVariables\",\r\n            [\r\n                { name: \"usblCategory\", value: \"Campaign\" },\r\n                { name: \"usblAction\", value: \"Campaign:Page Switch\" },\r\n                { name: \"usblActionValue\", value: usblvalue }\r\n            ]\r\n        ]);\r\n        window.monetateQ.push([\r\n            \"trackData\"\r\n        ]);\r\n        break;\r\n    \r\n    }\r\n});';
	}
	if (eventCallbackDropdownValue === 'callbackDoubleHash'){
		returnString = ' window.usabilla_live(\"setEventCallback\", function(category, action, label, value) {\r\n    if(action != \"Feedback:Open\") {\r\n        return;\r\n    }\r\n \r\n    function sendReplacement(vData) { \r\n        console.log(vData);\r\n        var data = JSON.parse(vData);\r\n        data.url = data.url.replace(new RegExp(\"##\"), \"#\");\r\n        console.log(data);\r\n        vData = JSON.stringify(data);\r\n        realSend.apply(this, arguments);\r\n    }\r\n     \r\n    var realSend = XMLHttpRequest.prototype.send;\r\n    ub_window = document.getElementById(\'lightningjs-frame-usabilla_live_feedback\').contentWindow;\r\n    ub_window.XMLHttpRequest.prototype.send = sendReplacement;\r\n    if(window.XDomainRequest) {\r\n        realSend = XDomainRequest.prototype.send;\r\n        ub_window.XDomainRequest.prototype.send = sendReplacement;\r\n    }\r\n});';
	}
	if (eventCallbackDropdownValue === 'callbackEncodeUrl'){
		returnString = 'window.usabilla_live(\"setEventCallback\", function(category, action, label, value) {\r\n\r\n  var type = null;\r\n  var uri = \"\";\r\n  var res = \"\";\r\n  switch (action) {\r\n\r\n  case \"Feedback:Open\":\r\n    uri = window.location.href;\r\n    res = encodeURI(uri);\r\n    history.replaceState(null, null, res);\r\n\r\n    break;\r\n\r\n  case \"Campaign:Open\":\r\n    uri = window.location.href;\r\n    res = encodeURI(uri);\r\n    history.replaceState(null, null, res);\r\n    break;\r\n  }\r\n});';
	}
	if (eventCallbackDropdownValue === 'callbackRemoveParam'){
		returnString = '\/**\r\n * The code below will listen to any events that occur within the Usabilla frame.\r\n * The code will clear the document title and path name to make a clean url.\r\n * Keep in mind that the History Push State is a HTML5 feature\r\n * Please use additional JavaScript libraries to make a fallback for unsupported browsers\r\n *\r\n * https:\/\/github.com\/browserstate\/history.js\r\n * https:\/\/github.com\/devote\/HTML5-History-API\r\n *\r\n *\/\r\n\r\nwindow.usabilla_live(\"setEventCallback\", function(category, action, label, value) {\r\n    var newURL = window.location.protocol + \"\/\/\" + window.location.hostname;\r\n    var type = null;\r\n    switch (action) {\r\n\r\n        case \"Feedback:Open\":\r\n\r\n            type = \"feedback\";\r\n            history.replaceState(null, null, newURL);\r\n\r\n            break;\r\n\r\n        case \"Feedback:Success\":\r\n\r\n            type = \"feedback\";\r\n\r\n            break;\r\n\r\n        case \"Campaign:Open\":\r\n\r\n            type = \"campaign\";\r\n\r\n\r\n            break;\r\n\r\n        case \"Campaign:Close\":\r\n\r\n            type = \"campaign\";\r\n\r\n\r\n            break;\r\n\r\n        case \"Campaign:Feedback Clicked\":\r\n\r\n            type = \"campaign\";\r\n\r\n\r\n            break;\r\n\r\n        case \"Campaign:Success\":\r\n\r\n            type = \"response\";\r\n\r\n\r\n            break;\r\n\r\n    }\r\n});';
	}
	return returnString;
}	

/**
 * Function for saving the generated CombiCode as Textfile
 * @param  {[String]} t [defines the the initial name of the file to be saved]
 *
 */
function saveGeneratedCode(t) {
	var d = new Date();
	var n = d.toLocaleDateString();
	var c = document.getElementById('company-name-input').value;
	var text = $('#combi-code-textarea').val();
	var filename = t + '_' + c + '_' + n;
	var blob = new Blob([text], {
		type: 'text/plain;charset=utf-8'
	});
	saveAs(blob, filename + '.txt');
}