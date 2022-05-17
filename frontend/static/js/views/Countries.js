import { getCountries } from "../countries.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {
        // return "<h1>Countries</h1>";
        return this.printPage();
    }

    printPage() {
        let html = "<h1>Countries</h1>";
        const countries = getCountries();
        let i = 0;
        for (let country of countries) {
            i++;
            html += "<p>" + country.name.common + "</p>";
            html += "<p>" + country.population + "</p>";
            html += "<p>" + country.region + "</p>";
            html += "<p>" + country.capital + "</p>";
            html += "<img src='" + country.flags.png + "'/></p>";
        }
        return html;
    }
}