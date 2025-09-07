// 
let totalMoney = 0;

const priceTotalAmount = (price, plantName) => {

    // 
    const cardContainer = document.getElementById('addTo-card');


    // Create element
    const div = document.createElement('div');
    div.innerHTML = `
        <div>
            <h3 class="text-lg font-bold">${plantName}</h3>
            <h3 class="text-lg font-medium">Price <span class="text-xl font-bold ">৳-${price}</span></h3>
        </div>
        <div>
            <i class="fa-solid fa-xmark text-red-600 text-2xl font-bold"></i>
        </div>
        
    `;

    // add class list
    div.classList.add('flex', 'items-center', 'justify-between', 'bg-[#cff0dc]', 'my-4', 'py-2', 'px-4', 'rounded')

    cardContainer.appendChild(div);

};
