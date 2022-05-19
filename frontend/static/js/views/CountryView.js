import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Country");
    }

    async getHTML() {
        console.log(this.params.id);
        const containerCards = "";
        return  `
            <section class="countries-section">
                    <div class="filter-container">
                        <form id="formSearch">
                            <input type="text" name="searchCountry" id="searchCountry" placeholder="Search for a country..." class="searching-part-inpt">
                        </form>
                        <select class="regionSelect" id="regionSelect">
                            <option value="">Filter by Region</option>
                            <option value="Region: Africa">Africa</option>
                            <option value="Region: Americas">Americas</option>
                            <option value="Region: Asia">Asia</option>
                            <option value="Region: Europe">Europe</option>
                            <option value="Region: Oceania">Oceania</option>
                        </select>
                    </div>
                    <div class="container">
                        ${containerCards.innerHTML}
                    </div>
                </section>
    `
    }
}