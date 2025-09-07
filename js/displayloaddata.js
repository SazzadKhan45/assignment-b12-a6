// All plat trees show the Ui

const displayAllTreeInfo = (plants) => {
    // get the Ui container 
    const plantUiDiv = document.getElementById('tree-container');

    // get plant info by looping
    plants.forEach(plant => {
        const plantCardDiv = document.createElement('div');
        plantCardDiv.innerHTML = `
            <div class="bg-white p-5 rounded-lg shadow-lg">
        <div>
            <img class="rounded-lg mb-4 h-[220px] w-[100%]" src=${plant.image} alt="plant img">
        </div>
        <div>
            <h3 class="text-2xl font-bold cursor-pointer">${plant.name}</h3>
            <p class="text-[#1f2937] text-justify my-2">${plant.description}</p>
            <div class="flex justify-between items-center">
                <button class="bg-[#dcfce7] px-5 py-1 rounded-full font-medium text-lg">${plant.category}</button>
                <h4 class="text-xl font-bold">৳<span id="plant-price">${plant.price}</span></h4>
            </div>
            <button class="bg-[#15803d] text-lg text-white font-medium py-1 rounded-full w-full mt-4 cursor-pointer">Add to Cart</button>
        </div>
    </div>
        `;

        // append div
        plantUiDiv.appendChild(plantCardDiv)
    });

};

// Category button display show Ui function

const AllCategoryBtnDisplay = (categories) => {
    console.log(categories);

    // Get the container where buttons should go
    const categoryContainer = document.getElementById('category-button');

    // Loop through categories and create buttons
    categories.forEach(category => {
        const categoryButton = document.createElement('h3');
        categoryButton.classList.add(
            'text-xl',
            'font-bold',
            'py-2',
            'cursor-pointer',
            'w-full',
            'mt-4',
            'px-4'
        );

        // Set text inside button
        categoryButton.innerText = category.category_name;

        // Append to container
        categoryContainer.appendChild(categoryButton);
    });
};




