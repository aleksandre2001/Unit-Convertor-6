/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const containerEl = document.querySelector('.container')
const modeSelector = document.querySelector("#mode-selector")
const inputField = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")


const calculationEl = document.querySelectorAll(".calculation")
const lengthP = document.querySelector("#length-p")
const volumeP = document.querySelector("#volume-p");
const massP = document.getElementById("mass-p")


// Night-Day mode changing
modeSelector.addEventListener("click", function(){
  modeSelector.classList.toggle("active")
  containerEl.classList.toggle("active")
  convertBtn.classList.toggle("active")
  
  // calculationEl.classList.forEach.toggle("active")
  for (let i = 0; i < calculationEl.length; i++) {
    calculationEl[i].classList.toggle("active")
    } 
    
})


convertBtn.addEventListener("click", function(){
  renderCalculation()
  
})

// For working whith Enter key too
inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    convertBtn.click();
  }
});



function renderCalculation(){
  if (inputField.value){
    const baseInput = inputField.value
    let feet = (baseInput * 3.280839895).toFixed(3); 
    let meters = (baseInput / 3.280839895).toFixed(3);

    let gallons = (baseInput * 0.26417205236 ).toFixed(3);
    let liters = (baseInput /0.26417205236 ).toFixed(3);

    let pounds = (baseInput *  2.2046226218 ).toFixed(3);
    let kilos = (baseInput /  2.2046226218 ).toFixed(3);

    lengthP.textContent =  `${baseInput} meters = ${feet} feet | ${baseInput} feet = ${meters} meters`
    volumeP.textContent = `${baseInput} liters = ${gallons} gallons | ${baseInput} gallons = ${liters} liters`
    massP.textContent = `${baseInput} kilos = ${pounds} pounds | ${baseInput} pounds = ${kilos} kilos`
  
  }else{
    
  }
}
