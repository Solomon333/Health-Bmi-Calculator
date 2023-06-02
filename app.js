

function bmiCalc() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = document.querySelector(".bmi-result");
    let bmi =  Math.round(weight / Math.pow(height/100, 2));
    
    
    if(bmi < 18.5){
        result.style.color= "yellow";

        result.innerHTML = "Your BMI is: " + bmi + " UnderWeight";
    }
    if(bmi > 18.5 && bmi < 25.0){
        result.style.color= "green";
        result.innerHTML = "Your BMI is: " + bmi + " Healthy";
    }
    if(bmi > 25.0) {
        result.style.color= "red";
        result.innerHTML = "Your BMI is: " + bmi +  " OverWeight";
    }


}

  document.querySelector(".reset-btn").addEventListener("click", function() {
     document.querySelector(".bmi-result").innerHTML = '';
      document.getElementById("weight").value = '';
     document.getElementById("height").value = '';
  })

//  
