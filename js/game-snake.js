
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
