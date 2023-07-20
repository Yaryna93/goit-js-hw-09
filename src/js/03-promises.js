import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject)=>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{
      if (shouldResolve){
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
}
const form = document.querySelector('form');
const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
const button = document.querySelector('button');

form.addEventListener('submit', formSubmit);
function formSubmit(event){
  event.preventDefault();
  const delay = parseInt(inputDelay.value);
  const step = parseInt(inputStep.value);
  const amount = parseInt(inputAmount.value);

  for(let i=0; i<amount; i++){
    const position = i+1;
    const delay = delay+i*step;

    createPromise(position, delay)
    .then(({position, delay})=>{
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch (({position, delay})=>{
    Notiflix.Notify.failure(
      `❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
    };
  

