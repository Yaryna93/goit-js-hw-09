import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const selectors = {
  button:document.querySelector('.data-start'),
  days:document.querySelector('.data-days'),
  hours:document.querySelector('.data-hours'),
  minutes:document.querySelector('.data-minutes'),
  seconds:document.querySelector('.data-seconds'),
}

const label = document.querySelectorAll('.timer .label');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if(selectedDate <= newDate()){
      window.alert("Please choose a date in the future");
      button.disabled = true;
    } else {
      button.addEventListener('click', onButtonClick);
      button.disable = false;

  }
},
};

const dateFlatpickr = flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// 
// 
// const {days, hours, minutes, seconds};
//   selectors.days.textContent = addLeadingZero(days);
//   selectors.hours.textContent = addLeadingZero(hours);
//   selectors.minutes.textContent = addLeadingZero(minutes);
//   selectors.seconds.textContent = addLeadingZero(seconds);

//   


// function addLeadingZero(value){
//   return value.toString().padStart(2, '0');
// };

function onButtonClick(){
const timer = setInterval(()=> {
const currentDate = new Date();
const selectedDate = datetimePicker.selectedDates[0];
const difference = selectedDate.getTime() - currentDate;

if (difference <= 0){
      clearInterval(timer);
   
  return;
    } else {
      if (difference => 0){
        const { days, hours, minutes, seconds }  = convertMs(difference);
          selectors.days.textContent = addLeadingZero(days);
          selectors.hours.textContent = addLeadingZero(hours);
          selectors.minutes.textContent = addLeadingZero(minutes);
          selectors.seconds.textContent = addLeadingZero(seconds);
  
      }
    }
}, 1000);
};

function addLeadingZero(value){
    return value.toString().padStart(2, '0');
  };
