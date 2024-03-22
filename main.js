// console tested 
// party planner 

// API LINK
const API_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events';


// empty array to store party data 
let parties = [];

// fetch data from the api 
function fetchParties (){
  fetch(API_URL)
  .then (response => response.json())
  .then (data => {
    parties = data;
    renderParties();
  })
  .catch (error => console.log(`Error fetching parties`, error) )
}

// function to render party data 
function renderParties(){
  const partiesList = document.getElementById('parties-list');
  partiesList.innerHTML= '';

  // go through each party to show up on page 
  parties.forEach(party => {
    const partyElement = document.createElement('div');
    partyElement.textContent = party.name;
    partiesList.appendChild(partyElement);
  });
}
// add 

// delete 

// get func when page loads 
fetchParties();