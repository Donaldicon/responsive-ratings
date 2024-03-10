//calling the ratings star
const stars = document.getElementById('stars');

//calling the local storage saved file for selected rating
var selectedValue = localStorage.getItem('selectedValue');

//assigning the ratings star to the selected rating
stars.innerHTML = selectedValue