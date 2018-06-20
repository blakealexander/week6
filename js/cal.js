//JS file 
(function() {
	console.log("JS file loaded")

    //vars
    var num1 = document.querySelector("#input1");
    var num2 = document.querySelector("#input2");
    var equals = document.querySelector("#trigger");
    var outcome = document.querySelector("#value");
    var selPlus = document.querySelector("#plus");
    var selMinus = document.querySelector("#minus");
    // console.log(num1);
    // console.log(num2);
    // console.log(equals);
    // console.log(outcome);
//    console.log(selPlus);
//    console.log(selMinus);





    //functions
    function addStuff() {
    	// console.log("from addStuff");
    	// console.log(num1.value);
    	// console.log(num2.value);
    	var total = parseInt(num1.value) + parseInt(num2.value);
    	// console.log(total);
    	outcome.innerHTML = total;
    }

     function selCal(evt) {
//         console.log("From selCal");
//           if(selPlus.innerHTML == "+") {
//               console.log("User clicked +");
//          }
//            
//            if(selMinus.innerHTML == "-")
//               console.log("User clicked -");}
                 if(evt.currentTarget.id == "plus"){
                     console.log("add");
                 }else{
                     console.log("sub");
                 }
            
     
          
            }


    //listeners
    equals.addEventListener("click", addStuff, false);
    selPlus.addEventListener("click", selCal, false);
     selMinus.addEventListener("click", selCal, false);


})();