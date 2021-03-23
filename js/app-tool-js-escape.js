/**
 * Set Event Listeners
 */
document.getElementById("btn-escape").addEventListener("click", escapeTextJavaScript);
document.getElementById("btn-reset").addEventListener("click", resetFields);
document.getElementById("btn-save").addEventListener("click", saveEscapedText);




function escapeJsString(string) {
  return ('' + string).replace(/["'\\\n\r\u2028\u2029]/g, function (character) {
    // Escape all characters not included in SingleStringCharacters and
    // DoubleStringCharacters on
    // http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4
    switch (character) {
      case '"':
      case "'":
      case '\\':
        return '\\' + character
      // Four possible LineTerminator characters need to be escaped:
      case '\n':
        return '\\n'
      case '\r':
        return '\\r'
      case '\u2028':
        return '\\u2028'
      case '\u2029':
        return '\\u2029'
    }
  })
}
/**
 * Function for escaping input text for JavaScript usage
 * @return {[type]} [description]
 */
function escapeTextJavaScript() {
  var textInput = document.getElementById("jsEscapeInputText").value;
  var textEscaped = escapeJsString(textInput);
  document.getElementById("jsEscapeOutputText").value = textEscaped;
}

/**
 * Function for resetting the fields
 */
function resetFields() {
  document.getElementById("tool-js-escape-form").reset();
}

/**
 * Function for saving the generated CombiCode as Textfile
 */
function saveEscapedText() {
  var text = $("#jsEscapeOutputText").val();
  var filename = "EscapedText";
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename + ".txt");
}

//Create new clipboard object for setting the clipboard value
var clipboard = new Clipboard('#btn-copy');

//Tooltips
$('#btn-copy').tooltip({
  trigger: 'click',
  placement: 'top'
});
/**
 * Function for setting the tooltip
 * @param {[String]} message to be displayed in the tooltip
 */
function setTooltip(message) {
  $('#btn-copy').tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}

// Automically Hide the tooltop shown when copying the combicode
function hideTooltip() {
  setTimeout(function() {
    $('#btn-copy').tooltip('hide');
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
