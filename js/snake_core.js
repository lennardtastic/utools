window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
window.addEventListener("keydown", moveSnake, false);

var game_over = false;
var snake = new Array(4);
var snakeLen = 4;
var dir = "right";
var food = "";
var level = new Array();
var total_height = $("#snakeCanvas").height();
var total_width = $("#snakeCanvas").width();
var lvl_width = 0;
var lvl_height = 0;
var speed = 100;
var snakeC = 20;


lvl_height = total_height / snakeC;
lvl_width = total_width  / snakeC;

snakeHeadImage = new Image();
snakeHeadImage.src = "resources/head.png";
snakeBodyImage = new Image();
snakeBodyImage.src = "resources/body.png";
snakeTailImage = new Image();
snakeTailImage.src = "resources/tail.png";


snakeBodyRightImage = new Image();
snakeBodyRightImage.src = "resources/body-r.png";
snakeBodyLeftImage = new Image();
snakeBodyLeftImage.src = "resources/body-l.png";
snakeBodyDownImage = new Image();
snakeBodyDownImage.src = "resources/body-d.png";
snakeBodyUpImage = new Image();
snakeBodyUpImage.src = "resources/body-u.png";

snakeHeadRightImage = new Image();
snakeHeadRightImage.src = "resources/head-r.png";
snakeHeadLeftImage = new Image();
snakeHeadLeftImage.src = "resources/head-l.png";
snakeHeadDownImage = new Image();
snakeHeadDownImage.src = "resources/head-d.png";
snakeHeadUpImage = new Image();
snakeHeadUpImage.src = "resources/head-u.png";

snakeTailRightImage = new Image();
snakeTailRightImage.src = "resources/tail-r.png";
snakeTailLeftImage = new Image();
snakeTailLeftImage.src = "resources/tail-l.png";
snakeTailDownImage = new Image();
snakeTailDownImage.src = "resources/tail-d.png";
snakeTailUpImage = new Image();
snakeTailUpImage.src = "resources/tail-u.png";

//food
foodImage = new Image();
foodImage.src = "resources/food.png";

create_snake();
create_food();

for (i = 0; i < lvl_width; i++) {
    level[i] = new Array(lvl_height);
    for (var ii = 0; ii < lvl_height; ii++) {
        level[i][ii] = -1;
    }
}

window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 10);
        };
})();


var the_date = new Date();
var test1 = the_date.getTime();
var stamp = the_date.getTime() + speed;

function animate() {
    the_date = new Date();
    test1 = the_date.getTime();
    if (stamp <= test1) {
        move_snake();
        the_date = new Date();
        stamp = the_date.getTime() + speed;
    }
    if (game_over === false) {
        // clear
        context.clearRect(0, 0, canvas.width, canvas.height);
        displayText("Score: " + (snakeLen - 4));
        window.usabilla_live("data", {custom: {
          snakestatus: "start"}
        });
        display();
    } else {
        context.fillStyle= "#00b2ff";
        context.fillRect(0,0,total_width,total_height);
        displayGameOver("GameOver!");
        displayGameOver2("Now get back to work!");
        var snakeScore = snakeLen - 4;
        window.usabilla_live("data", {custom: {
          snakestatus: "gameover",
          score: snakeScore}
        });
        //window.usabilla_live('trigger', 'snakegameover');
    }
    //context.drawImage(aniblock, aniblock_x, aniblock_y);

    // request new frame
    requestAnimFrame(function() {
        animate();
    });
}

function displayText(what) {
    context.font = "30px Arial";
    context.fillStyle= "#000000";
    context.fillText(what, 50, 50);
}

function displayGameOver(what) {
    context.font = "30px Arial";
    context.fillStyle= "#FFFFFF";
    context.fillText(what, 170, 200);
}
function displayGameOver2(what) {
    context.font = "30px Arial";
    context.fillStyle= "#FFFFFF";
    context.fillText(what, 100, 300);
}

function checkSnakeCollide() {
    if (snake[0].xx == food.xx && snake[0].yy == food.yy) {
        create_food();
        return true;
    } else {
        //if head moving right
        if (dir == "right") {
            if (snake[0].xx > lvl_width - 1) {
                game_over = true;
            }
        } else if (dir == "left") {
            if (snake[0].xx < 0) {
                game_over = true;
            }
        } else if (dir == "up") {
            if (snake[0].yy <= -1) {
                game_over = true;
            }
        } else if (dir == "down") {
            if (snake[0].yy >= lvl_height) {
                game_over = true;
            }
        }

        for (i = 2; i < snakeLen; i++) {
            if ((snake[0].xx == snake[i].xx) && (snake[0].yy == snake[i].yy)) {
                game_over = true;
                break;
            }
        }

        return false;
    }
}

setTimeout(function() {
    animate();
}, 100);

function moveSnake(e) {
    switch (e.keyCode) {
        case 37:
            if (dir != "right") {
                dir = "left";
            }
            break;
        case 38:
            if (dir != "down") {
                dir = "up";
            }
            break;
        case 39:
            if (dir != "left") {
                dir = "right";
            }
            break;
        case 40:
            if (dir != "up") {
                dir = "down";
            }
            break;
    }
}

function checkAllowMove(x, y) {
    if (x < snakeC) {
        var x_index = 0;
    } else {
        var x_index = Math.round(x / snakeC);
    }

    if (y < snakeC) {
        var y_index = 19;
    } else {
        var y_index = (total_height / snakeC) - Math.round(y / snakeC);
    }

    if (level[x_index][y_index] == -1) {
        return true;
    } else {
        return false;
    }
}

function create_food() {
    var x = 0;
    var y = 0;
    var recreate = false;
    do {
        recreate = false;
        x = Math.floor((Math.random() * (lvl_width - 1)));
        y = Math.floor((Math.random() * (lvl_height - 1)));

        for (i = 0; i < snakeLen; i++) {
            if ((snake[i].xx == x) && (snake[i].yy == y)) {
                recreate = true;
                break;
            }
        }
    } while (recreate === true);
    food = { xx: x, yy: y };
}

function create_snake() {
    //var x =  Math.floor((Math.random() * (lvl_width-1)));
    //var y =  Math.floor((Math.random() * (lvl_height-1)));
    snake[0] = { xx: 4, yy: 1 };
    snake[1] = { xx: 3, yy: 1 };
    snake[2] = { xx: 2, yy: 1 };
    snake[3] = { xx: 1, yy: 1 };
    dir = "right";
}

function move_snake() {
    var temp_x = 0;
    var temp_y = 0;
    var temp_xx = 0;
    var temp_yy = 0;
    var swap = true;

    //move snake forward
    for (var ii = 0; ii < snakeLen; ii++) {
        if (ii === 0) {
            temp_x = snake[ii].xx;
            temp_y = snake[ii].yy;

            //if head moving right
            if (dir == "right") {
                snake[0] = { xx: (snake[0].xx + 1), yy: snake[0].yy };
            } else if (dir == "left") {
                snake[0] = { xx: (snake[0].xx - 1), yy: snake[0].yy };
            } else if (dir == "up") {
                snake[0] = { xx: snake[0].xx, yy: (snake[0].yy - 1) };
            } else if (dir = "down") {
                snake[0] = { xx: snake[0].xx, yy: (snake[0].yy + 1) };
            }

            if (checkSnakeCollide()) {
                snake.push({ xx: snake[(snake.length - 1)].xx, yy: snake[(snake.length - 1)].yy });
                snakeLen++;
                speed = speed -5;
            }
        } else {
            if (swap === true) {
                temp_xx = snake[ii].xx;
                temp_yy = snake[ii].yy;
                snake[ii] = { xx: temp_x, yy: temp_y };

                swap = false;
            } else {
                temp_x = snake[ii].xx;
                temp_y = snake[ii].yy;
                snake[ii] = { xx: temp_xx, yy: temp_yy };
                swap = true;
            }
        }
    }

}

function display() {

    for (var i = 0; i < snakeLen; i++) {
        if (i === 0) {
            switch (dir) {
                case "left":
                    context.drawImage(snakeHeadLeftImage, (snake[i].xx * snakeC), (snake[i].yy * snakeC), snakeC, snakeC);
                    break;
                case "right":
                    context.drawImage(snakeHeadRightImage, (snake[i].xx * snakeC), (snake[i].yy * snakeC), snakeC, snakeC);
                    break;
                case "up":
                    context.drawImage(snakeHeadUpImage, (snake[i].xx * snakeC), (snake[i].yy * snakeC), snakeC, snakeC);
                    break;
                case "down":
                    context.drawImage(snakeHeadDownImage, (snake[i].xx * snakeC), (snake[i].yy * snakeC), snakeC, snakeC);
                    break;
            }
        } else if (i == (snakeLen - 1)) {
            //following left
            if (snake[i].xx > snake[i - 1].xx) {
                context.drawImage(snakeTailLeftImage, (snake[i].xx * snakeC), (snake[i].yy * snakeC), snakeC, snakeC);
            }
            //following right
            else if (snake[i].xx < snake[i - 1].xx) {
                context.drawImage(snakeTailRightImage, (snake[i].xx * snakeC), (snake[i].yy * snakeC), snakeC, snakeC);
            }
            //following up
            else if (snake[i].yy > snake[i - 1].yy) {
                context.drawImage(snakeTailUpImage, (snake[i].xx * snakeC), (snake[i].yy * snakeC), snakeC, snakeC);
            }
            //following down
            else if (snake[i].yy < snake[i - 1].yy) {
                context.drawImage(snakeTailDownImage, (snake[i].xx * snakeC), (snake[i].yy * snakeC), snakeC, snakeC);
            }
        } else {
            //following left
            if (snake[i].xx > snake[i - 1].xx) {
                context.drawImage(snakeBodyLeftImage, (snake[i].xx * snakeC), (snake[i].yy * snakeC), snakeC, snakeC);
            }
            //following right
            else if (snake[i].xx < snake[i - 1].xx) {
                context.drawImage(snakeBodyRightImage, (snake[i].xx * snakeC), (snake[i].yy * snakeC), snakeC, snakeC);
            }
            //following up
            else if (snake[i].yy > snake[i - 1].yy) {
                context.drawImage(snakeBodyUpImage, (snake[i].xx * snakeC), (snake[i].yy * snakeC), snakeC, snakeC);
            }
            //following down
            else if (snake[i].yy < snake[i - 1].yy) {
                context.drawImage(snakeBodyDownImage, (snake[i].xx * snakeC), (snake[i].yy * snakeC), snakeC, snakeC);
            }
        }

    }

    context.drawImage(foodImage, (food.xx * snakeC), (food.yy * snakeC), snakeC, snakeC);

}
