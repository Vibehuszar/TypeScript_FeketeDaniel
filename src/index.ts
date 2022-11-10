import { Artwork } from "./Artwork";
import { Statue } from "./Statue";


let lista: Artwork[] = [];
let regexnev: RegExp = /[aA-zZ]{1,}/;

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('felvetel')?.addEventListener('click', ()=>{
        let title = (document.getElementById('title') as HTMLInputElement).value;
        let year = (document.getElementById('year') as HTMLInputElement).value;
        let price = (document.getElementById('price') as HTMLInputElement).value;
        let height = (document.getElementById('height') as HTMLInputElement).value;
        
        let validTitle: boolean = false;
        if(regexnev.test(title)){
                validTitle = true;
        } 

        let validYear: boolean = false;
        if(parseInt(year) <= 2022){
                validYear = true;
        } 

        let validPrice: boolean = false;
        if(parseInt(price)>= 1){
                validPrice = true;
        } 

        let validHeight: boolean = false;
        if(parseInt(height) >= 20){
                validHeight = true;
        } 


    })
})