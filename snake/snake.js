let cells = []
var snakeBody = [162, 163, 164];
var snakeNeck = snakeBody[snakeBody.length - 2];
var snakeTailPosition = snakeBody[0];
var snakeHeadPosition = snakeBody[snakeBody.length - 1];
var ghost = -1;
var score = 0;
var mouseCell = 0;
var timeout = 0;
var mouseCount = -1;

function grid(el) {
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
};

grid(document.body);
console.log(cells);
console.log(snakeBody);
startSnake();
startMouse();
console.log(snakeHeadPosition);

function gameOver() {
    if (mouseCount == 3){
        alert("Missed 3 Mice! Game Over-");
        location.reload();
    }
    if (checkSnake(snakeHeadPosition) == false){
        alert("Dont Eat Yourself! Game Over-");
        location.reload();
    }
};

function checkSnake() {
    let check = true;
    for (var i = 0; i < (snakeBody.length - 1); i++) {
        if (snakeHeadPosition == (snakeBody[i])) {
            console.log(snakeBody[i]);
            console.log(false);
            check = false;
        }
    };
    return check;
}

function displayScore() {
    document.getElementById("score").innerHTML = score + " --- " + mouseCount + "/3";
}

function startMouse() {
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
    displayScore();
    gameOver();
    console.log(mouseCount);
    timeout = window.setTimeout(startMouse, 3300);
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
    gameOver();
    //////////////////////up
    if (e.keyCode == '38' && snakeHeadPosition > 19 && checkSnake(snakeHeadPosition) == true) {
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
    else if (e.keyCode == '40' && snakeHeadPosition < 379 && checkSnake(snakeHeadPosition) == true) {
        checkSnake(snakeHeadPosition);
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
    else if (e.keyCode == '37' && snakeHeadPosition > 0 && checkSnake(snakeHeadPosition) == true) {
        checkSnake(snakeHeadPosition);
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
    else if (e.keyCode == '39' && snakeHeadPosition < 399 && checkSnake(snakeHeadPosition) == true) {
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
}
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



