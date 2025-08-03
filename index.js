let cartBtn = document.querySelector(".cart-btn");
const decrBtn = document.querySelector(".decr-btn");
const incrBtn = document.querySelector(".incr-btn");
const quantity = document.querySelector(".quantity");





function hideIconIncrDecr () {
    let hideCartIcon = document.querySelector(".cart-icon");
    let showIconDecr = document.querySelector(".decr-btn");
    let showIconIncr = document.querySelector(".incr-btn");


    cartBtn.classList.remove("bg-white");
    cartBtn.classList.add("bg-rose-500");
    hideCartIcon.classList.add("hidden");
    quantity.classList.add("mx-4")
    // console.log(cartBtn.classList);
    

    console.log(showIconDecr.classList);

    showIconDecr.classList.remove("hidden");
    showIconIncr.classList.remove("hidden");
    console.log(showIconIncr.classList);
    

}


let count = 1;

function cartUpdateDecr() {

  if (count > 1) {
    count--;
    quantity.textContent = count;
  }

  decrBtn.disabled = count === 1;
  if (count === 1) {
    cartUiUpadte();
  }
}

function cartUiUpadte () {
    let showCartIcon = document.querySelector(".cart-icon");
    let hideIconDecr = document.querySelector(".decr-btn");
    let hideIconIncr = document.querySelector(".incr-btn");


    cartBtn.classList.add("bg-white");
    cartBtn.classList.remove("bg-rose-500");
    showCartIcon.classList.remove("hidden");
    quantity.classList.add("mx-4")
    

    hideIconDecr.classList.add("hidden");
    hideIconIncr.classList.add("hidden");
}

function cartUpdateIncr() {

    count++;
    quantity.textContent = count;

    if (count > 1) {
      decrBtn.disabled = false;
    }

}



cartBtn.addEventListener("click", () => {
    // e.stopPropagation();
    hideIconIncrDecr();
    quantity.textContent = count;
    
})

decrBtn.addEventListener("click", () => {
    // e.stopPropagation();
    cartUpdateDecr();

})

incrBtn.addEventListener("click", () => {
    cartUpdateIncr();
})