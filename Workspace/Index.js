const day = document.querySelectorAll("input")[0]
const month = document.querySelectorAll("input")[1]
const year = document.querySelectorAll("input")[2];
const button = document.querySelector('button');

button.addEventListener('click',checker);

function checker(){
    if( day.value === '' || day.value.length > 2 || day.value > 31){
        day.style.borderColor = 'red';
        alert("You must enter a value in day section, if you entered the value might be incorrect!");
    } else if( month.value === '' || month.value.length > 2 || month.value > 12){
        month.style.borderColor = 'red';
        alert("You must enter a value in month section, if you entered the value might be incorrect!");
    } else if(year.value === '' || year.value.length !== 4 || year.value < 1900 || year.value > 2023){
        year.style.borderColor = 'red';
        alert("You must enter a value in year section, if you entered the value might be incorrect!");
    } else{
        day.style.borderColor = 'black';
        year.style.borderColor = 'black';
        year.style.borderColor = 'black';
        calculator();
    }
}

const calcArea = document.getElementsByClassName('calcArea')[0];
const spanDay = document.querySelectorAll('span')[2];
const spanMonth = document.querySelectorAll('span')[1];
const spanYear = document.querySelectorAll('span')[0];

function calculator(){
    let currentD = new Date();
    let yearDiff = currentD.getFullYear() - year.value;
    let monthDiff = currentD.getMonth() + 1 - month.value;
    let dayDiff = currentD.getDate() - day.value;

    if (dayDiff < 0) {
        monthDiff--; // Subtract one month
        var daysInPrevMonth = new Date(currentD.getFullYear(), currentD.getMonth(), 0).getDate();
        dayDiff += daysInPrevMonth; // Add the number of days in the previous month
      }
      if (monthDiff < 0) {
        yearDiff--; // Subtract one year
        monthDiff += 12; // Add 12 months
      }
    
      spanDay.innerHTML = dayDiff;
      spanYear.innerHTML = yearDiff;
      spanMonth.innerHTML = monthDiff;
      calcArea.style.visibility = 'visible';
}

