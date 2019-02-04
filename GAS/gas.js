var p = 2.19

function evenGasAmount() {
    for (var i = 0; i < 100; i++) {if (Math.floor(i/10)%2 == 0 && 
        Math.floor(i)%2 == 0 &&
        Math.floor(i*10)%2 == 0){
        console.log(i + "-");
        var g  = Math.floor(i/p);
        if (Math.floor(g/10)%2 == 0 &&
        Math.floor(g)%2 == 0 &&
        Math.floor(g*10)%2 == 0 &&
        Math.floor(g*100)%2 == 0 &&
        Math.floor(g*1000)%2 == 0)
            console.log(i + g);}
    }}


evenGasAmount();

 //if ((i/10)%2 == 0 && (i)%2 == 0 && (i*10)%2 == 0 && (i*100)%2 == 0){


 /*x = 0
while x <= 60.00:
    if int(x/10)%2 == 0 and int(x)%2 == 0 and int(x*10)%2 == 0 and int(x*100)%2 == 0 :
        g = round(x / p, 3)
        if int(g/10)%2 == 0 and int(g)%2 == 0 and int(g*10)%2 == 0 and int(g*100)%2 == 0 and int(g*1000)%2 == 0:
            print(round(x,2),"$  " , "=", round(x/p,3),"gallons")
    x = round(x + 0.02,2)*/