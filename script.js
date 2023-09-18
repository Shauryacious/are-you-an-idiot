'use strict'
const container = document.querySelector('.container');
const yes_btn = document.querySelector('.btn1');
const no_btn = document.querySelector('.btn2');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close_modal = document.querySelector('.close-modal');

const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

no_btn.addEventListener('click', () => {
  console.log('hi')
  no_btn.style.position = "absolute";

  const random_left = Math.floor(Math.random() * container.clientWidth);

  const random_top = Math.floor(Math.random() * container.clientHeight);

  if(random_left >= container.clientWidth/2){
    no_btn.style.left = `${random_left - no_btn.clientWidth}px`;
  }

  if(random_top >= container.clientHeight/2){
    no_btn.style.top = `${random_top - no_btn.clientHeight}px`;
  }
});

yes_btn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}); 

close_modal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal();
  }
})