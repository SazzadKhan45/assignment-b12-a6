// 
let total = 0; 

const priceTotalAmount = (price, plantName) => {
  const cardContainer = document.getElementById('addTo-card');

  // Create new cart item element
  const div = document.createElement('div');
  div.innerHTML = `
    <div>
        <h3 class="text-lg font-bold">${plantName}</h3>
        <h3 class="text-lg font-medium">Price <span class="text-xl font-bold ">৳-${price}</span></h3>
    </div>
    <div>
        <i class="fa-solid fa-xmark text-red-600 text-2xl font-bold remove-btn" style="cursor:pointer;"></i>
    </div>
  `;

  // Add styles
  div.classList.add('flex', 'items-center', 'justify-between', 'bg-[#cff0dc]', 'my-4', 'py-2', 'px-4', 'rounded');

  // Append to cart
  cardContainer.appendChild(div);

  // Update total
  total += price;
  updateTotalDisplay();

  // Handle item removal
  div.querySelector('.remove-btn').addEventListener('click', () => {
    div.remove();
    total -= parseInt(price);
    updateTotalDisplay();
  });
};

// Update total display
function updateTotalDisplay() {
  document.getElementById('total-price').innerText = `Total: ৳-${total}`;
};

