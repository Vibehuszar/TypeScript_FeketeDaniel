"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let lista = [];
let regexnev = /^[aA-zZ]{1,}$/;
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('felvetel')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let title = document.getElementById('title');
        let year = document.getElementById('year');
        let price = document.getElementById('price');
        let height = document.getElementById('height');
        let hibaTitle = document.getElementById('hibaTitle');
        let hibaYear = document.getElementById('hibaYear');
        let hibaPrice = document.getElementById('hibaPrice');
        let hibaHeight = document.getElementById('hibaHeight');
        let validTitle = false;
        if (regexnev.test(title.value)) {
            validTitle = true;
            hibaTitle.innerHTML = "";
        }
        else {
            validTitle = false;
            hibaTitle.style.color = "red";
            hibaTitle.innerHTML = ("A szobor neve ne legyen üres. Csak angol ABC karaktereket, szőköz ill. vessző és kötőjel karaktereket tartalmazhat csak!");
        }
        let validYear = false;
        if (parseInt(year.value) <= 2022) {
            validYear = true;
            hibaYear.innerHTML = "";
        }
        else {
            validYear = false;
            hibaYear.style.color = "red";
            hibaYear.innerHTML = "A készítés éve max. az aktuális évszám lehet!";
        }
        let validPrice = false;
        if (parseInt(price.value) >= 1) {
            validPrice = true;
            hibaPrice.innerHTML = "";
        }
        else {
            validPrice = false;
            hibaPrice.style.color = "red";
            hibaPrice.innerHTML = "Az érték min. 1 Ft kell, hogy legyen!";
        }
        let validHeight = false;
        if (parseInt(height.value) >= 20) {
            validHeight = true;
            hibaHeight.innerHTML = "";
        }
        else {
            validHeight = false;
            hibaHeight.style.color = "red";
            hibaHeight.innerHTML = "A magasság min 20 cm legyen!";
        }
        if (validTitle && validYear && validPrice && validHeight) {
            lista.push(new Statue_1.Statue(title.value, parseInt(year.value), parseInt(price.value), parseInt(height.value)));
            title.value = "";
            year.value = "";
            price.value = "";
            height.value = "";
            let lbl = document.getElementById('sum');
            let counter = lista.length;
            let sum = 0;
            for (let l of lista) {
                sum += l.price;
            }
            lbl.innerHTML = "Művek darabszáma: " + counter + "db , Összesített ár: " + sum + "Ft";
        }
    });
});
