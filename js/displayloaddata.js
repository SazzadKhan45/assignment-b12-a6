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
            <h3 class="text-2xl font-bold">Mango Tree</h3>
            <p class="text-[#1f2937] my-2">A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green</p>
            <div class="flex justify-between items-center">
                <button class="bg-[#dcfce7] px-5 py-1 rounded-full font-medium text-lg">Fruit Tree</button>
                <h4 class="text-xl font-bold">৳<span id="plant-price">500</span></h4>
            </div>
            <button class="bg-[#15803d] text-lg text-white font-medium py-1 rounded-full w-full mt-4 ">Add to Cart</button>
        </div>
    </div>
        `;

        // append div
        plantUiDiv.appendChild(plantCardDiv)
    });

}





// category
// :
// "Fruit Tree"
// description
// :
// "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals."
// id
// :
// 1
// image
// :
// "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg"
// name
// :
// "Mango Tree"
// price
// :
// 500

