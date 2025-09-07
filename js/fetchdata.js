// All plant tress data fetch function

const AllPlantTreesDataFetch = () =>{

    const url = 'https://openapi.programming-hero.com/api/plants';
    fetch(url)
    .then(res => res.json())
    .then(data => displayAllTreeInfo(data.plants))
};






// Call the function
AllPlantTreesDataFetch();

