// All plant tress data fetch function

const AllPlantTreesDataFetch = () => {

    const url = 'https://openapi.programming-hero.com/api/plants';
    // fetch data
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllTreeInfo(data.plants))
};


// All plant tree btn fetch data

const AllPlantButtonFetch = () => {
    const url = 'https://openapi.programming-hero.com/api/categories';
    // fetch data
    fetch(url)
        .then(res => res.json())
        .then(data => AllCategoryBtnDisplay(data.categories))
}

// Category plant tress
const categoryPlantDataFetch = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => categoryPlatData(data.plants))
}


// Tree details show data fetch
const singleTreeDataFetch = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => modalOpenUi(data.plants))
}






// Call the function
AllPlantTreesDataFetch();
AllPlantButtonFetch();

