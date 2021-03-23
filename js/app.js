
/**
 * Set Event Listeners
 */
document.getElementById("combicode-gen-btn").addEventListener("click", checkInputCombiCode);
document.getElementById("btn-reset").addEventListener("click", resetFieldsCombicode);
document.getElementById("btn-save").addEventListener("click", function(){saveGeneratedCode("combicode");});


/**
 * Generates the combicode based on device and places the combicode in the TextArea
 */
function genCombicode() {
  var combicodegenStringStart = "<script type=\"text\/javascript\">\/*{literal}<![CDATA[*\/window.lightningjs||function(c){function g(b,d){d&&(d+=(\/\\?\/.test(d)?\"&\":\"?\")+\"lv=1\");c[b]||function(){var i=window,h=document,j=b,g=h.location.protocol,l=\"load\",k=0;(function(){function b(){a.P(l);a.w=1;c[j](\"_load\")}c[j]=function(){function m(){m.id=e;return c[j].apply(m,arguments)}var b,e=++k;b=this&&this!=i?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);m.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],j=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b&&d.push(b);c&&j.push(c);h&&f.push(h);return m};return m};var a=c[j]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(g==\"https:\"?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w&&b();i.addEventListener?i.addEventListener(l,b,!1):i.attachEvent(\"on\"+l,b);var q=function(){function b(){return[\"<head><\/head><\",c,\' onload=\"var d=\',n,\";d.getElementsByTagName(\'head\')[0].\",d,\"(d.\",g,\"(\'script\')).\",i,\"=\'\",a.l,\"\'\\\"><\/\",c,\">\"].join(\"\")}var c=\"body\",e=h[c];if(!e)return setTimeout(q,100);a.P(1);var d=\"appendChild\",g=\"createElement\",i=\"src\",k=h[g](\"div\"),l=k[d](h[g](\"div\")),f=h[g](\"iframe\"),n=\"document\",p;k.style.display=\"none\";e.insertBefore(k,e.firstChild).id=o+\"-\"+j;f.frameBorder=\"0\";f.id=o+\"-frame-\"+j;\/MSIE[ ]+6\/.test(navigator.userAgent)&&(f[i]=\"javascript:false\");f.allowTransparency=\"true\";l[d](f);try{f.contentWindow[n].open()}catch(s){a.domain=h.domain,p=\"javascript:var d=\"+n+\".open();d.domain=\'\"+h.domain+\"\';\",f[i]=p+\"void(0);\"}try{var r=f.contentWindow[n];r.write(b());r.close()}catch(t) { \n f[i]=p+\'d.write(\"\'+b().replace(\/\"\/g,String.fromCharCode(92)+\'\"\')+\'\");d.close();\'}a.P(2)};\n a.l&&setTimeout(q,0)})()}();c[b].lv=\"1\";return c[b]}var o=\"lightningjs\",k=window[o]=g(o);k.require=g;k.modules=c}({}); if(!navigator.userAgent.match(\/Android|BlackBerry|BB10|iPhone|iPad|iPod|Opera Mini|IEMobile\/i)) {window.usabilla_live = lightningjs.require(\"usabilla_live\", \"\/\/";
  var combicodegenStringDesktopPre = "w.usabilla.com\/";
  var combicodeDesktopID = "";
  var combicodegenStringDesktopSuf = ".js\"); } else {window.usabilla_live = lightningjs.require(\"usabilla_live\", \"\/\/";
  var combicodegenStringMobilePre = "w.usabilla.com\/";
  var combicodeMobileID = "";
  var combicodegenStringMobileSuf = ".js\"); }\/*]]>{\/literal}*\/<\/script>\r\n";
  var combicodegenStringComplete = "";
  var combicodeCompanyIndicator = "";
  combicodeDesktopID = document.getElementById("desktop-btn-id-input").value;
  combicodeMobileID = document.getElementById("mobile-btn-id-input").value;
  combicodeCompanyIndicator = "<!-- Usabilla Combicode for " + document.getElementById("company-name-input").value + "-->\r\n<!-- Begin Usabilla for Websites embed code -->\n";
  combicodegenStringComplete = combicodeCompanyIndicator + combicodegenStringStart + combicodegenStringDesktopPre + combicodeDesktopID + combicodegenStringDesktopSuf + combicodegenStringMobilePre + combicodeMobileID + combicodegenStringMobileSuf;
  document.getElementById("combi-code-textarea").value = combicodegenStringComplete;
}



function genCombiViewport() {
  var combiViewportStringStart= "<script type=\"text\/javascript\">\/*{literal}<![CDATA[*\/window.lightningjs||function(c){function g(b,d){d&&(d+=(\/\\?\/.test(d)?\"&\":\"?\")+\"lv=1\");c[b]||function(){var i=window,h=document,j=b,g=h.location.protocol,l=\"load\",k=0;(function(){function b(){a.P(l);a.w=1;c[j](\"_load\")}c[j]=function(){function m(){m.id=e;return c[j].apply(m,arguments)}var b,e=++k;b=this&&this!=i?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);m.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],j=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b&&d.push(b);c&&j.push(c);h&&f.push(h);return m};return m};var a=c[j]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(g==\"https:\"?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w&&b();i.addEventListener?i.addEventListener(l,b,!1):i.attachEvent(\"on\"+l,b);var q=function(){function b(){return[\"<head><\/head><\",c,\' onload=\"var d=\',n,\";d.getElementsByTagName(\'head\')[0].\",d,\"(d.\",g,\"(\'script\')).\",i,\"=\'\",a.l,\"\'\\\"><\/\",c,\">\"].join(\"\")}var c=\"body\",e=h[c];if(!e)return setTimeout(q,100);a.P(1);var d=\"appendChild\",g=\"createElement\",i=\"src\",k=h[g](\"div\"),l=k[d](h[g](\"div\")),f=h[g](\"iframe\"),n=\"document\",p;k.style.display=\"none\";e.insertBefore(k,e.firstChild).id=o+\"-\"+j;f.frameBorder=\"0\";f.id=o+\"-frame-\"+j;\/MSIE[ ]+6\/.test(navigator.userAgent)&&(f[i]=\"javascript:false\");f.allowTransparency=\"true\";l[d](f);try{f.contentWindow[n].open()}catch(s){a.domain=h.domain,p=\"javascript:var d=\"+n+\".open();d.domain=\'\"+h.domain+\"\';\",f[i]=p+\"void(0);\"}try{var r=f.contentWindow[n];r.write(b());r.close()}catch(t){f[i]=p+\'d.write(\"\'+b().replace(\/\"\/g,String.fromCharCode(92)+\'\"\')+\'\");d.close();\'}a.P(2)};a.l&&setTimeout(q,0)})()}();c[b].lv=\"1\";return c[b]}var o=\"lightningjs\",k=window[o]=g(o);k.require=g;k.modules=c}({});\r\n  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)\r\nvar h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)\r\n";

  var viewportStringFirst = "if (w <";
  var viewportStringSub = ") {window.usabilla_live = lightningjs.require(\"usabilla_live\", \"\/\/w.usabilla.com\/";
  var viewportStringFinal ="else {window.usabilla_live = lightningjs.require(\"usabilla_live\", \"\/\/w.usabilla.com\/";
  var viewportSizeXS = "";
  var viewportSizeS = "";
  var viewportSizeM = "";
  var viewportButtonIdXS = "";
  var viewportButtonIdS = "";
  var viewportButtonIdM = "";
  var viewportButtonIdL = "";
  var viewportSufStringSub = ".js\"); }\r\n";
  var viewportSufStringFinal = ".js\"); }\/*]]>{\/literal}*\/<\/script>";
  var combiViewportStringComplete = "";

  //Get value from input fields.
  viewportButtonIdXS =document.getElementById("viewport-buttonid-xs-input").value;
  viewportButtonIdS = document.getElementById("viewport-buttonid-s-input").value;
  viewportButtonIdM = document.getElementById("viewport-buttonid-m-input").value;
  viewportButtonIdL = document.getElementById("viewport-buttonid-l-input").value;
  viewportSizeXS = document.getElementById("viewport-size-xs-input").value;
  viewportSizeS = document.getElementById("viewport-size-s-input").value;
  viewportSizeM = document.getElementById("viewport-size-m-input").value;
  viewportSizeL = document.getElementById("viewport-size-l-input").value;

  combicodeCompanyIndicator = "<!-- Usabilla Combicode based on ViewportSize for " + document.getElementById("company-name-input").value + "-->\r\n<!-- Begin Usabilla for Websites embed code -->\n";


  combiViewportStringComplete = combicodeCompanyIndicator + combiViewportStringStart + viewportStringFirst + viewportSizeXS + viewportStringSub + viewportButtonIdXS + viewportSufStringSub + viewportStringFirst + viewportSizeS + viewportStringSub + viewportButtonIdS + viewportSufStringSub + viewportStringFirst + viewportSizeM + viewportStringSub + 	viewportButtonIdM + viewportSufStringSub + viewportStringFirst + viewportSizeL + viewportStringSub + viewportButtonIdL + viewportSufStringSub + viewportStringFinal + 	viewportButtonIdM + viewportSufStringFinal;
  document.getElementById("combi-code-textarea").value = combiViewportStringComplete;
}

function resetFieldsCombicode(){
  document.getElementById("combicodeForm").reset();
  $('.form-group').removeClass('has-error'); // Removes the has-error class for a clean reset
}


function checkInputCombiCode(){
  if (generatorType === "viewport"){
    genCombiViewport();
  }
  if (generatorType === "device") {
    var snackbarWarningDesktop =  {
        content: "<span class=\"glyphicon glyphicon-exclamation-sign glyph-with-space \" aria-hidden=\"true\"><\/span> <b>Oh Snap!<\/b> You did not fill in the Desktop Button ID.", // text of the snackbar
        style: "snackbar snackbar-warning", // add a custom class to your snackbar
        timeout: 5000, // time in milliseconds after the snackbar autohides, 0 is disabled
        htmlAllowed: true // allows HTML as content value
    };
    var snackbarWarningMobile =  {
        content: "<span class=\"glyphicon glyphicon-exclamation-sign glyph-with-space \" aria-hidden=\"true\"><\/span><b>Oh Snap!<\/b> You did not fill in the Mobile Button ID.", // text of the snackbar
        style: "snackbar snackbar-warning", // add a custom class to your snackbar
        timeout: 5000, // time in milliseconds after the snackbar autohides, 0 is disabled
        htmlAllowed: true // allows HTML as content value
    };
    var snackbarErrorDesktop =  {
        content: "<span class=\"glyphicon glyphicon-remove glyph-with-space \" aria-hidden=\"true\"><\/span> <b>Oh Snap!<\/b> You did not fill in a valid Desktop Button ID.", // text of the snackbar
        style: "snackbar snackbar-error", // add a custom class to your snackbar
        timeout: 5000, // time in milliseconds after the snackbar autohides, 0 is disabled
        htmlAllowed: true // allows HTML as content value
    };
    var snackbarErrorMobile =  {
        content: "<span class=\"glyphicon glyphicon-remove glyph-with-space \" aria-hidden=\"true\"><\/span> <b>Oh Snap!<\/b> You did not fill in a valid Mobile Button ID.", // text of the snackbar
        style: "snackbar snackbar-error", // add a custom class to your snackbar
        timeout: 5000, // time in milliseconds after the snackbar autohides, 0 is disabled
        htmlAllowed: true // allows HTML as content value
    };
    if ($( '#form-group-desktop' ).hasClass( 'has-error' )){
      $.snackbar(snackbarErrorDesktop);
      $( "#desktop-btn-id-input" ).focus();
      return;
    }
    if ($( '#form-group-mobile' ).hasClass( 'has-error' )){
      $.snackbar(snackbarErrorMobile);
      $( "#mobile-btn-id-input" ).focus();
      return;
    }
    if (!$('#desktop-btn-id-input').val()){
      $.snackbar(snackbarWarningDesktop);
      $( "#desktop-btn-id-input" ).focus();
        return;
    }
    if (!$('#mobile-btn-id-input').val()){
      $.snackbar(snackbarWarningError);
      $( "#mobile-btn-id-input" ).focus();
      return;
    }
    else {
      genCombicode();
    }
  }
  else {
    genCombicode();
  }
}

/**
 * Function for saving the generated CombiCode as Textfile
 * @param  {[String]} t [defines the the initial name of the file to be saved]
 *
 */
function saveGeneratedCode(t){
  var d = new Date();
  var n = d.toLocaleDateString();
  var c =  document.getElementById("company-name-input").value;
  var text = $("#combi-code-textarea").val();
  var filename = t + "_" + c + "_" + n;
  var blob = new Blob([text], {
      type: "text/plain;charset=utf-8"
  });
  saveAs(blob, filename + ".txt");
}

/**
 * Start uSnake
 */
$("#btn-snake-start").click(function(){
  //Change Custom Var tracking gamestatus and resetting score
  window.usabilla_live("data", {
    custom: {
      snakestatus: "start",
      score: 0
    }
  });
  //Remove LocalStorage for sending new Highscore when done
  localStorage.removeItem("usbl.8de0b19699de.c.161dd7eb6b41");
  $("#snakeScriptDiv").remove();
  window.usabilla_live('virtualPageView');
  var snakeScriptDiv = document.createElement("DIV");
  snakeScriptDiv.id= "snakeScriptDiv";
  document.getElementById("snakeBlock").appendChild(snakeScriptDiv);
  var snakeScriptTag = document.createElement("SCRIPT");
  snakeScriptTag.id = "snakeScriptTag";
  snakeScriptTag.src= "js/snake_core.js";
  document.getElementById("snakeScriptDiv").appendChild(snakeScriptTag);
});
