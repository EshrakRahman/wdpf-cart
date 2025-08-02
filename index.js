// image changes for all documents size 

let imgTag = document.getElementsByClassName("main-img")[0];

  const cartBtn = document.querySelector('.cartBtn');
  const quantityControls = document.querySelector('.quantity-controls');
  const incrementBtn = document.querySelector('.increment');
  const decrementBtn = document.querySelector('.decrement');
  const countDisplay = document.querySelector('.count');
  
  let count = 1;

  cartBtn.addEventListener('click', () => {
    // Toggle visibility
    cartBtn.classList.add('hidden');
    quantityControls.classList.remove('hidden');
    
    // Change background color
    cartBtn.classList.remove('bg-white');
    cartBtn.classList.add('bg-rose-500');
  });

  incrementBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
  });

  decrementBtn.addEventListener('click', () => {
    if (count > 1) {
      count--;
      countDisplay.textContent = count;
    }
  });
