// All plant tress data fetch function

const AllPlantTreesDataFetch = () =>{

    const url = 'https://openapi.programming-hero.com/api/plants';
    // fetch data
    fetch(url)
    .then(res => res.json())
    .then(data => displayAllTreeInfo(data.plants))
};

// All plant tree btn fetch data

const AllPlantButtonFetch = () =>{
    const url = 'https://openapi.programming-hero.com/api/categories';
    // fetch data
    fetch(url)
    .then(res => res.json())
    .then(data => AllCategoryBtnDisplay(data.categories))
}






// Call the function
AllPlantTreesDataFetch();
AllPlantButtonFetch();

