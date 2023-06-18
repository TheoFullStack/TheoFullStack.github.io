const input = document.querySelector('.amount');

function updateValue() {
    const value = input.value;
    
    if (value === '') {
      input.placeholder = '0.00';
    } 
  }

  // Getting the Bill amount//

  const billAmt = document.getElementsByClassName("amount")[0]; //works fine//


  // Getting button list and adding class element of "chosen" to each with toggle feature Except for custom Amount//

    const tipButtons =  [...document.querySelectorAll(".jar")];
    const buttonsExceptLast = tipButtons.slice(0, tipButtons.length - 1);

  
    buttonsExceptLast.forEach(button => {
      button.addEventListener('click', () => {
          if(!button.classList.contains('active')){
            buttonsExceptLast.forEach(OtherButton => {
                if(OtherButton !== button){
                  OtherButton.classList.remove('active');
                }
            });
            button.classList.add('active');
          } else{
            button.classList.remove('active');
          }
        });
      });




// restricting bill amount field to numeric value and certain formatting

billAmt.addEventListener('keydown', event => {
  if(event.key === 'Enter'){
    event.preventDefault();
  
  const billVal = parseFloat(billAmt.value.replace(',','.'));
  if(isNaN(billVal)){
    alert('Please enter a valid numeric value for the bill amount!');
  }
    else{
      alert('valid bill amount entered: ' + billVal);
    }
  }
});


// formatting the custom input area - DATA VALIDATION

const customBtn = document.querySelector('.customVal');
customBtn.addEventListener('keydown', event =>{
  if(event.key === 'Enter'){
    event.preventDefault();
    
    const value = parseFloat(customBtn.value);

    if(isNaN(value) || value < 0){
      alert('Please enter a valid numeric value');
    } else{
      const decimalPercentage = value / 100;
      alert('Decimal Percentage Value: ' + decimalPercentage);
    }
  }
});


// Getting the number of people input value

const nOfPeople = document.querySelector('.nofpeople');


    //getting DOM in HTML

const tip = document.querySelector('.tip');
const total = document.querySelector('.total');

const calculator = () => {

  // calculation of the tip amount per person
  let peopleAmount = nOfPeople.value
  let tipPercent = 0;


  // check if one of the buttons were pressed

  buttonsExceptLast. forEach(button => {

    if(button.classList.contains('active')){
      tipPercent = parseFloat(button.value);}
    });

  if(customBtn.value !==''){
    tipPercent = parseFloat(customBtn.value/100);
  }


  //calculate bill per person and tip per person

  if(!isNaN(billAmt.value) && !isNaN(peopleAmount) && peopleAmount > 0){
    var tipPaid = billAmt.value * tipPercent;
    var totalAmt = parseFloat(billAmt.value) + tipPaid;

    const billPerPerson = (totalAmt / peopleAmount);
    var tipPerPerson = (tipPaid / peopleAmount);


    //setting DOM value in HTML

    tip.innerHTML = tipPerPerson.toFixed(2);
    total.innerHTML = billPerPerson.toFixed(2);


  } else {
    tip.innerHTML = '0.00$';
    total.innerHTML = '0.00$';
  }

}


//Adding function to input fields

billAmt.addEventListener('input',calculator);
buttonsExceptLast.forEach(button => button.addEventListener('click',calculator));
customBtn.addEventListener('input',calculator);
nOfPeople.addEventListener('input',calculator);




//Refresh the page with reset button

const resetBtn =  document.querySelector('.reset');

resetBtn.addEventListener('click',() => {
  location.reload();
});



