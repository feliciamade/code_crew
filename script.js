// function to display an alert box when called
function displayMessage(){
    alert("Hint : Use getElementById() and .innerHTML");
   }
   // function to display a hint in the element for the green box with the id of myMessage
   function changeText(){
     let text = document.getElementById('myMessage');
     text.innerHTML ="Success"
     text.style.color = "Black"
   }
   
   function changeColor() {
     let div = document.getElementById("changeColor");
     div.style.backgroundColor = "lightblue";
   }
   