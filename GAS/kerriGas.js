var Final
var GasPrice
var Gallons

function addGasPrice(GasPrice) {
    GasPrice = (document.getElementById("text1").value);
    console.log(GasPrice);
    var i = 0;
    while (i < 50) {
        i = i + .01;
        i = i.toFixed(2);
        i = parseFloat(i);
        var g = i / GasPrice;
        g = g.toFixed(4);
        g = parseFloat(g);

        if (i == .01)
            var wiggle = g;

        if (Math.floor(i / 10) % 2 == 0 && Math.floor(i) % 2 == 0 &&
            Math.floor(i * 10) % 2 == 0 && Math.floor(i * 100) % 2 == 0 &&
            Math.floor(g / 10) % 2 == 0 && Math.floor(g) % 2 == 0 && Math.floor(g * 10) % 2 == 0 &&
            Math.floor(g * 100) % 2 == 0) {
            console.log("Total=" + i + " Gallons=" + g + " with " + wiggle + "Gallons Wiggle Room");
            document.getElementById("result").innerHTML = document.getElementById("result").innerHTML
                + "<br>" + "Total=" + i + " Gallons=" + g + " with " + wiggle + "Gallons Wiggle Room";}

        }

    }

    function DisplayResults(i, g, wiggle) {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML
            + "<br>" + "Total=" + i + " Gallons=" + g + " with " + wiggle + "Gallons Wiggle Room";
    }




//           final = (GasPrice+.009)*Gallons  } function Even() {

// if (Math.floor(i / 10) % 2 == 0 && Math.floor(i) % 2 == 0 &&
// Math.floor(i * 10) % 2 == 0 && Math.floor(i * 100) % 2 == 0)
// console.log(i.toFixed(2));

/*   for (i = 0; i < 100; i++) {            /////////////////////// i =
        if (Math.floor(i / 10) % 2 == 0 && Math.floor(i) % 2 == 0 &&
        Math.floor(i * 10) % 2 == 0 && Math.floor(i * 100) % 2 == 0) {
            console.log(i);
        } */

/*x = 0
while x <= 60.00:
    if int(x/10)%2 == 0 and int(x)%2 == 0 and int(x*10)%2 == 0 and int(x*100)%2 == 0 :
        g = round(x / p, 3)
        if int(g/10)%2 == 0 and int(g)%2 == 0 and int(g*10)%2 == 0 and int(g*100)%2 == 0 and int(g*1000)%2 == 0:
            print(round(x,2),"$  " , "=", round(x/p,3),"gallons")
    x = round(x + 0.02,2)*/
