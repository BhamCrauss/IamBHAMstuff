let cells = []
var snakeBody = [162, 163, 164];
var snakeNeck = snakeBody[snakeBody.length - 2];
var snakeTailPosition = snakeBody[0];
var snakeHeadPosition = snakeBody[snakeBody.length - 1];
var ghost = -1;
var score = 0;
var highScore = 0;
var mouseCell = 0;
var timeout = 0;
var mouseCount = -1;
var check = true;

gameGrid(document.body);

///NEW GAME////////////////////////////////////////////////////
function newGame() {
    for (let i = 0; i < 400; i++) {
        document.getElementById(i).classList.remove('boxOver');
        document.getElementById(i).classList.remove('gameOver');
        document.getElementById(i).classList.remove('mouse');
        document.getElementById(i).classList.remove('box2');
        document.getElementById(i).classList.add("box");
        document.getElementById(i).innerHTML = "";
    }
    snakeBody = [162, 163, 164];
    snakeHeadPosition = snakeBody[snakeBody.length - 1];
    snakeTailPosition = snakeBody[0];
    ghost = -1;
    score = 0;
    mouseCell = 0;
    timeout = 0;
    startSnake();
    mouseCount = -1;
    check = true;
    startMouse();

};

//Start the GAME GRID//////////////////////////////////////////////////
function gameGrid(el) {
    var container = document.createElement("div");
    container.id = "main";
    container.className = "container";
    var boxIdName = -1

    for (i = 0; i < 20; i++) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;


        for (k = 0; k < 20; k++) {
            var box = document.createElement("div");
            box.className = "box";
            box.id = boxIdName;
            boxIdName += 1;
            box.id = boxIdName;
            cells.push(box.id);

            row.appendChild(box);
        };

        container.appendChild(row);
    };

    el.appendChild(container);
    startSnake();
    startMouse();
    console.log(snakeBody);
    console.log(snakeHeadPosition);
};



///GAME OVER//////////////////////////////////////////////////
function gameOverGrid() {
    for (i = 0; i < 400; i++) {
        document.getElementById(i).classList.add("boxOver");
        document.getElementById(105).classList.add("gameOver");
        document.getElementById(105).innerHTML = "Game Over";

    }
};

function gameOver() {
    if (mouseCount == 3) {
        gameOverGrid();
        if (highScore < score) {
            highScore = score;
            displayScore();
        };

    }
    if (checkSnake() == false) {
        gameOverGrid();
        if (highScore < score) {
            highScore = score;
            displayScore();
        };

    }
};

function checkSnake() {
    for (var i = 0; i < (snakeBody.length - 1); i++) {
        if (snakeHeadPosition == (snakeBody[i])) {
            console.log(i);
            console.log(false);
            check = false;
        }
    };
    return check;
}

function displayScore() {
    document.getElementById("score").innerHTML = score + " --- " + mouseCount +
        "/3" + " --- " + highScore;
}

function startMouse() {
    if (mouseCount < 3) {
        displayScore();
        document.getElementById(mouseCell).classList.remove('mouse');
        document.getElementById(mouseCell).innerHTML = "";
        document.getElementById(mouseCell).classList.add("box");
        mouseCell = cells[Math.floor(Math.random() * cells.length)];
        for (i = 0; i < (snakeBody.length); i++) {
            var snk = snakeBody[i];
            if (mouseCell == snk) {
                startMouse();
            }
            else {
                document.getElementById(mouseCell).classList.add("mouse");
                document.getElementById(mouseCell).innerHTML = "<:3";
            }
        }

        window.clearTimeout(timeout);
        mouseCount++;
        gameOver();
        displayScore();
        console.log(mouseCount);
        timeout = window.setTimeout(startMouse, 3300);
    }
}

function startSnake() {
    document.getElementById("164").classList.add("box2");
    document.getElementById("164").innerHTML = ": ~";
    document.getElementById("163").classList.add("box2");
    document.getElementById("162").classList.add("box2");
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    ////spacebar///////////////////////
    if (e.keyCode == '32') {
        console.log('SPACEBAR');
        newGame();
    }

    //////////////////////up//////////////
    else if (e.keyCode == '38' && checkSnake() == false) {
        gameOver();
    }
    else if (e.keyCode == '38' && snakeHeadPosition > 19 && checkSnake() == true) {
        if (snakeHeadPosition == mouseCell) {
            mouseCount = -1;
            score++;
            startMouse();
            snakeBody.unshift(snakeTailPosition - 20);
            snakeBody.unshift(snakeTailPosition - 40);
            snakeHeadPosition = snakeHeadPosition - 20;
            snakeBody.push(snakeHeadPosition);
            ghost = snakeBody[0];
            snakeBody.shift();
            printSnake();
            console.log(snakeBody);
        }
        else {
            snakeHeadPosition = snakeHeadPosition - 20;
            snakeBody.push(snakeHeadPosition);
            ghost = snakeBody[0];
            snakeBody.shift();
            printSnake();
        }
    }
    //////////////////down
    else if (e.keyCode == '40' && checkSnake() == false) {
        newGame();
    }
    else if (e.keyCode == '40' && snakeHeadPosition < 379 && checkSnake() == true) {
        if (snakeHeadPosition == mouseCell) {
            mouseCount = -1;
            score++;
            startMouse();
            snakeBody.unshift(snakeTailPosition + 20);
            snakeBody.unshift(snakeTailPosition + 40);
            snakeHeadPosition = snakeHeadPosition + 20;
            snakeBody.push(snakeHeadPosition);
            ghost = snakeBody[0];
            snakeBody.shift();
            printSnake();
            console.log(snakeBody);
        }
        else {
            snakeHeadPosition = snakeHeadPosition + 20;
            snakeBody.push(snakeHeadPosition);
            ghost = snakeBody[0];
            snakeBody.shift();
            printSnake();
        }
    }
    //////////////////left
    else if (e.keyCode == '37' && checkSnake() == false) {
        gameOver();
    }
    else if (e.keyCode == '37' && snakeHeadPosition > 0 && checkSnake() == true) {
        if (snakeHeadPosition == mouseCell) {
            mouseCount = -1;
            score++;
            startMouse();
            snakeBody.unshift(snakeTailPosition + 1);
            snakeBody.unshift(snakeTailPosition + 2);
            snakeHeadPosition--;
            snakeBody.push(snakeHeadPosition);
            ghost = snakeBody[0];
            snakeBody.shift();
            printSnake();
            console.log(snakeBody);
        }
        else {
            snakeHeadPosition--;
            snakeBody.push(snakeHeadPosition);
            ghost = snakeBody[0];
            snakeBody.shift();
            printSnake();
        }
    }
    //////////////////right
    else if (e.keyCode == '39' && checkSnake() == false) {
        gameOver();
    }
    else if (e.keyCode == '39' && snakeHeadPosition < 399 && checkSnake() == true) {
        if (snakeHeadPosition == mouseCell) {
            mouseCount = -1;
            score++;
            startMouse();
            snakeBody.unshift(snakeTailPosition - 1);
            snakeBody.unshift(snakeTailPosition - 2);
            snakeHeadPosition++;
            snakeBody.push(snakeHeadPosition);
            ghost = snakeBody[0];
            snakeBody.shift();
            printSnake();
            console.log(snakeBody);
        }
        else {
            snakeHeadPosition++;
            snakeBody.push(snakeHeadPosition);
            ghost = snakeBody[0];
            snakeBody.shift();
            printSnake();

        }
    }
};

function printSnake() {
    document.getElementById(snakeBody[snakeBody.length - 1]).classList.add("box2");
    document.getElementById(snakeBody[snakeBody.length - 1]).innerHTML = ": ~";
    document.getElementById(snakeBody[snakeBody.length - 2]).innerHTML = "";
    document.getElementById(ghost).classList.remove('box2');
    document.getElementById(ghost).classList.add("box");

}

/*
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    var snakeHeadPosition = snakeBody[snakeBody.length -1];
    var snakeTailPosition = snakeBody[0]

    if (e.keyCode == '38') {
        snakeHeadPosition = snakeHeadPosition - 20;
        snakeBody.push(snakeHeadPosition - 20);
        snakeBody.shift();
        console.log(snakeBody);
        document.getElementById(snakeHeadPosition).classList.add("box2");
        document.getElementById(snakeHeadPosition).innerHTML = ": ~";
        document.getElementById(snakeHeadPosition + 20).classList.add("box");
        document.getElementById(snakeHeadPosition + 20).innerHTML = "";
        document.getElementById(snakeTailPosition).classList.remove('box2');
        document.getElementById(snakeTailPosition).classList.add("box");
        console.log("up arrow")
    }
    else if (e.keyCode == '40') {
        console.log("down arrow")
    }
    else if (e.keyCode == '37') {
        console.log("left arrow")
    }
    else if (e.keyCode == '39') {
        snakeHeadPosition++;
        snakeBody.push(snakeHeadPosition);
        snakeBody.shift();
        console.log(snakeBody);
        document.getElementById(snakeHeadPosition).classList.add("box2");
        document.getElementById(snakeHeadPosition).innerHTML = ": ~";
        document.getElementById(snakeHeadPosition - 1).classList.add("box");
        document.getElementById(snakeHeadPosition - 1).innerHTML = "";
        document.getElementById(snakeTailPosition).classList.remove('box2');
        document.getElementById(snakeTailPosition).classList.add("box");

    }

} */



