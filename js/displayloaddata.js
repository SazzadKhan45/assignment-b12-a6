// All plat trees show the Ui

const displayAllTreeInfo = (plants) => {

    // Show spinner before loading (optional)
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'block';

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
            <h3 id="name-${plant.id}" onclick="singleTreeDataFetch(${plant.id})" class="text-2xl font-bold cursor-pointer">${plant.name}</h3>
            <p  class="text-[#1f2937] text-justify my-2">${plant.description}</p>
            <div class="flex justify-between items-center">
                <button class="bg-[#dcfce7] px-5 py-1 rounded-full font-medium text-lg">${plant.category}</button>
                <h4 class="text-xl font-bold">৳<span id="plant-price">${plant.price}</span></h4>
            </div>
            <button onclick="priceTotalAmount(${plant.price}, '${plant.name}')" class="bg-[#15803d] text-lg text-white font-medium py-1 rounded-full w-full mt-4 cursor-pointer">Add to Cart</button>
        </div>
    </div>
        `;

        // append div
        plantUiDiv.appendChild(plantCardDiv)

    });

     spinner.style.display = 'none';
};

// Category button display show Ui function

const AllCategoryBtnDisplay = (categories) => {

    const categoryContainer = document.getElementById('category-button');
    categoryContainer.innerHTML = ""; // clear old buttons

    // 🔹 Default "All Trees" button
    const allTreesButton = document.createElement('button');
    allTreesButton.classList.add(
        'py-2', 'text-xl', 'font-medium', 'rounded-lg', 'px-4', 'cursor-pointer', 'get-category-btn', 'active-btn', 'w-full', 'text-left');

    allTreesButton.innerText = "All Trees";
    allTreesButton.id = "all-trees";

    allTreesButton.addEventListener("click", () => {
        document.querySelectorAll(".get-category-btn").forEach(btn => {
            btn.classList.remove("active-btn");
        });
        allTreesButton.classList.add("active-btn");
        AllPlantTreesDataFetch();
    });

    categoryContainer.appendChild(allTreesButton);

    //  Dynamic category buttons
    categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.classList.add(
            'text-lg', 'font-medium', 'py-2', 'cursor-pointer', 'w-full', 'mt-4', 'px-4', 'hover:bg-[#cff0dc]', 'rounded-lg', 'text-left', 'get-category-btn');

        categoryButton.id = `${category.id}`;
        categoryButton.innerText = category.category_name;

        categoryButton.addEventListener("click", () => {
            // remove active from all
            document.querySelectorAll(".get-category-btn").forEach(btn => {
                btn.classList.remove("active-btn");
            });

            // add active to clicked button
            categoryButton.classList.add("active-btn");

            categoryPlantDataFetch(categoryButton.id);
        });

        categoryContainer.appendChild(categoryButton);
    });
    
};


// Category plat data display

const categoryPlatData = (categoryTress) => {

    // Show spinner before loading (optional)
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'block';

    const plantUiDiv = document.getElementById('tree-container');
    plantUiDiv.innerHTML = "";

    // 
    categoryTress.forEach(plant => {
        const plantCardDiv = document.createElement('div');
        plantCardDiv.innerHTML = `
            <div class="bg-white p-5 rounded-lg shadow-lg">
        <div>
            <img class="rounded-lg mb-4 h-[220px] w-[100%]" src=${plant.image} alt="plant img">
        </div>
        <div>
            <h3 onclick="singleTreeDataFetch(${plant.id})" class="text-2xl font-bold cursor-pointer">${plant.name}</h3>
            <p class="text-[#1f2937] text-justify my-2">${plant.description}</p>
            <div class="flex justify-between items-center">
                <button class="bg-[#dcfce7] px-5 py-1 rounded-full font-medium text-lg">${plant.category}</button>
                <h4 class="text-xl font-bold">৳<span id="plant-price">${plant.price}</span></h4>
            </div>
            <button onclick="priceTotalAmount(${plant.price}, '${plant.name}')" class="bg-[#15803d] text-lg text-white font-medium py-1 rounded-full w-full mt-4 cursor-pointer">Add to Cart</button>
        </div>
    </div>
        `;

        // append div
        plantUiDiv.appendChild(plantCardDiv)
    });

    spinner.style.display = 'none';
};

// Show Modal data in a function
const modalOpenUi = (plantInfo) => {
    // .........
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = "";

    //modal info
    const modalDiv = document.createElement('div');

    modalDiv.innerHTML = `
        <img class="h-[300px] w-full rounded-lg" src=${plantInfo.image} alt="plant-info">
        <div class="my-4">
            <h3 class="text-lg font-bold">${plantInfo.name}</h3>                
            <p class="text-[#1f2937] text-justify py-2 ">${plantInfo.description}</p>                
            <h2 class="text-lg font-bold">Price ৳-${plantInfo.price}</h2>                
            <button class="bg-[#dcfce7] px-6 py-2 rounded-full my-2">${plantInfo.category}</button>                
        </div>
    `;
    // append info of a modal
    modalContainer.append(modalDiv)
    // 
    document.getElementById('plant_modal').showModal();
}




