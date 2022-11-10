"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let lista = [];
let regexnev = /[aA-zZ]{1,}/;
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('felvetel')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let title = document.getElementById('title').value;
        let year = document.getElementById('year').value;
        let price = document.getElementById('price').value;
        let height = document.getElementById('height').value;
        let validTitle = false;
        if (regexnev.test(title)) {
            validTitle = true;
        }
        let validYear = false;
        if (parseInt(year) <= 2022) {
            validYear = true;
        }
        let validPrice = false;
        if (parseInt(price) >= 1) {
            validPrice = true;
        }
        let validHeight = false;
        if (parseInt(height) >= 20) {
            validHeight = true;
        }
    });
});
