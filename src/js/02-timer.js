import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const selectors = {
  days:document.querySelector('.data-days'),
  hours:document.querySelector('.data-hours'),
  minutes:document.querySelector('.data-minutes'),
  seconds:document.querySelector('.data-seconds'),
}
const dataPicker = flatpickr('datetime-picker'){
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
}