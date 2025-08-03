const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach((cartBtn) => {
  let count = 0;

  const quantity = cartBtn.querySelector(".quantity");
  const incrBtn = cartBtn.querySelector(".incr-btn");
  const decrBtn = cartBtn.querySelector(".decr-btn");
  const cartIcon = cartBtn.querySelector(".cart-icon");

  // Handle Cart Click - First time
  cartBtn.addEventListener("click", () => {
    if (count === 0) {
      count = 1;
      quantity.textContent = count;
      cartBtn.classList.remove("bg-white");
      cartBtn.classList.add("bg-rose-500");
      cartIcon.classList.add("hidden");
      quantity.classList.add("mx-4");
      decrBtn.classList.remove("hidden");
      incrBtn.classList.remove("hidden");
    }
  });

  // Handle Increment
  incrBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    count++;
    quantity.textContent = count;
    decrBtn.disabled = false;
  });

  // Handle Decrement
  decrBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (count > 1) {
      count--;
      quantity.textContent = count;
    } else {
      count = 0;
      quantity.textContent = "Add to cart";
      cartBtn.classList.remove("bg-rose-500");
      cartBtn.classList.add("bg-white");
      cartIcon.classList.remove("hidden");
      quantity.classList.remove("mx-4");
      decrBtn.classList.add("hidden");
      incrBtn.classList.add("hidden");
    }

    decrBtn.disabled = count <= 1;
  });
});
