

function bmiCalc() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = document.querySelector(".bmi-result");
    let bmi =  (weight) / Math.pow(height/100, 2);
    
    if(bmi < 18.5){
        result.style.color= "yellow";

        result.innerHTML = "You Are UnderWeight " + bmi;
    }
    if(bmi > 18.5 && bmi < 25.0){
        result.style.color= "green";
        result.innerHTML = "You Are Healthy " + bmi;
    }
    if(bmi > 25.0) {
        result.style.color= "red";
        result.innerHTML = "You Are OverWeight " + bmi;
    }


}

  document.querySelector(".resetBtn").addEventListener("click", function() {
     let clear = document.querySelector(".bmi-result");

     clear.innerHTML = ''; 
  })