let friends = ['bonnie', 'clyde', 'chester', 'synthia', 'duece']


//(var i = 0; i < 5; i++)

function singingFriends(ARY) {
   for (var i = 0; i < 5; i++) {
     console.log(ARY[i] + ":");
      for (var x = 4; x > 1; x--) {
         console.log(x + ' lines of code,')
      }
      console.log('1 line of code')
   }
}

//singingFriends(friends);

var array = [];
//console.log(array);

function addToArray() {
   array.push(document.getElementById("text1").value);
   array.push(document.getElementById("text2").value);
   array.push(document.getElementById("text3").value);
   array.push(document.getElementById("text4").value);
   array.push(document.getElementById("text5").value);
   singingFriends(array);
   //console.log(array);
   displayArray(array);
   array = [];
}

function displayArray(ARY) {
      for (var i = 0; i < 5 ; i++) {
         document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "<br>" + ARY[i] +  ":";
         for (var x = 3; x > 1; x--) {
            document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "<br>" + x + ' lines of code.';
         }
         document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "<br>" + "1 line of code."
      }
   }
   /*result.textContent = singingFriends(array);
   document.getElementById('result').style.display = "block";
   document.getElementById('result').innerHTML = array; */
