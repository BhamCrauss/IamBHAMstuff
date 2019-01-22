//click function stuff

let cells = document.querySelectorAll('.cell');

cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});

//varibles etc-----

let CurrentPlayerSymbol = "X";

let counter = 0
var items = []


//cell click functtion and game function and alternating symbol function

function cellClicked(e) {
    if (e.target.textContent == "") {
        e.target.textContent = CurrentPlayerSymbol;
        counter++;
        win();
        draw();
        for (var i = 0; i<9; i++)if(cells[i].textContent == ""){
            items.push(i);
         }
        console.log('counter1=' + counter);
        //console.log(items);
        console.log(random_item(items));
        cells[(random_item(items))].textContent = "O";
        items = []
        counter++;
        win();
        draw();
        console.log('counter2=' + counter);
        if (counter == 9){
            reset();}

        }
    }
    
function random_item(items){
        return items[Math.floor(Math.random()*items.length)];
        }


function draw() {if (counter == 9){
        alert("DRAW!");
        reset();
    }
    }

function win(){
    let cellValue1 = cells[0].textContent;
    let cellValue2 = cells[1].textContent;
    let cellValue3 = cells[2].textContent;
    let cellValue4 = cells[3].textContent;
    let cellValue5 = cells[4].textContent;
    let cellValue6 = cells[5].textContent;
    let cellValue7 = cells[6].textContent;
    let cellValue8 = cells[7].textContent;
    let cellValue9 = cells[8].textContent;

    if (cellValue1 == cellValue2 && cellValue2 == cellValue3 && (cellValue1 == 'X'||cellValue1 == 'O')) {
        alert(cellValue1+" WINS!!!"); 
        reset();}
    if (cellValue4 == cellValue5 && cellValue5 == cellValue6 && (cellValue4 == 'X'||cellValue4 == 'O')) {
        alert(cellValue4+" WINS!!!"); 
        reset();}
    if (cellValue7 == cellValue8 && cellValue8 == cellValue9 && (cellValue7 == 'X'||cellValue7 == 'O')) {
        alert(cellValue7+" WINS!!!"); 
        reset();}
    if (cellValue1 == cellValue4 && cellValue4 == cellValue7 && (cellValue1 == 'X'||cellValue1 == 'O')) {
        alert(cellValue1+" WINS!!!"); 
        reset();}
    if (cellValue2 == cellValue5 && cellValue5 == cellValue8 && (cellValue2 == 'X'||cellValue2 == 'O')) {
        alert(cellValue2+" WINS!!!"); 
        reset();}
    if (cellValue3 == cellValue6 && cellValue6 == cellValue9 && (cellValue3 == 'X'||cellValue3 == 'O')) {
        alert(cellValue3+" WINS!!!"); 
        reset();}
    if (cellValue1 == cellValue5 && cellValue5 == cellValue9 && (cellValue1 == 'X'||cellValue1 == 'O')) {
        alert(cellValue1+" WINS!!!"); 
        reset();}
    if (cellValue3 == cellValue5 && cellValue5 == cellValue7 && (cellValue3 == 'X'||cellValue3 == 'O')) {
        alert(cellValue3+" WINS!!!"); 
        reset();}

}

function reset(){
    for (var i = 0; i<9; i++){
        cells[i].textContent = "";
        counter=0;
    }
}



/////////////////////////// items = random number 0 through 8 ///////////////////////////////////


//for (var i = 0; i<9; i++)if(cells[i].textContent == "")
//items.push(i);

