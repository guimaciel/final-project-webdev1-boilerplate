
import {getCountries} from './countries.js'

const countries = getCountries();

console.log(window.location.pathname);

if (window.location.pathname === "/") {
    console.log("Main");

}
//console.log(countries);

console.dir(window);

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    console.log(window.location.pathname);
    if (window.location.pathname === "/countries") {
        const formSearch = document.getElementById("formSearch");
        formSearch.addEventListener('submit',function(event) {
            event.preventDefault();
            console.log("submit");
        });

        const searchCountry = document.getElementById("searchCountry");
        searchCountry.addEventListener('keyup',function(event){
            const countryName = document.getElementById("searchCountry").value;
            const divCard = document.getElementById("center");
            for (let i = 0 ; i < divCard.childElementCount ; i++) {
                let nameCountryDiv = divCard.children[i].children[1].children[0].innerText;
               if (nameCountryDiv.toUpperCase().includes(countryName.toUpperCase())) {
                    divCard.children[i].style.display = "block";
                } else {
                    divCard.children[i].style.display = "none";
               }
                
            }
        });

        const regionSelect = document.getElementById("regionSelect");
        regionSelect.addEventListener('change',function(event){
            const countriesRegion = document.getElementById("regionSelect").value;
            console.dir(countriesRegion);
            const divCard = document.getElementById("center");
            for (let i = 0 ; i < divCard.childElementCount ; i++) {
                let nameRegionDiv = divCard.children[i].children[1].children[2].innerText;
                console.dir(nameRegionDiv);
                if (nameRegionDiv == this.value || this.value === "" ) {
                    divCard.children[i].style.display = "block";
                } else {
                    divCard.children[i].style.display = "none";
                }
                
            }
        });


        window.location.pathname};
});