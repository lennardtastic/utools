/**
 * Set Event Listeners
 */
document.getElementById("btn-escape").addEventListener("click", escapeTextHtml);
document.getElementById("btn-reset").addEventListener("click", resetFields);
document.getElementById("btn-save").addEventListener("click", saveEscapedText);

/**
 * Constant containing the mapping for HTML JS Escaping
 * @type {Object}
 */
const entityMap = {
'&': '&amp;',
'<': '&lt;',
'>': '&gt;',
'"': '&quot;'
};

/**
 * Function for escaping HTML strings
 * @param  {[String]} string [String to be escaped]
 * @return {[String]}        [Escaped String]
 */
function escapeHtml (string) {
return String(string).replace(/[&<>"]/g, function (s) {
  return entityMap[s];
});
}

/**
 * Function for escaping input text for JavaScript usage
 * @return {[type]} [description]
 */
function escapeTextHtml() {
  var textInput = document.getElementById("htmlEscapeInputText").value;
  var textEscaped = escapeHtml(textInput);
  document.getElementById("htmlEscapeOutputText").value = textEscaped;
}

/**
 * Function for resetting the fields
 */
function resetFields() {
  document.getElementById("tool-html-escape-form").reset();
}

/**
 * Function for saving the generated CombiCode as Textfile
 */
function saveEscapedText() {
  var text = $("#htmlEscapeOutputText").val();
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
