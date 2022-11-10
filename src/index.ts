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
        let hibaTitle = document.getElementById('hibaTitle') as HTMLElement;
        let hibaYear = document.getElementById('hibaYear') as HTMLElement;
        let hibaPrice = document.getElementById('hibaPrice') as HTMLElement;
        let hibaHeight = document.getElementById('hibaHeight') as HTMLElement;
        let validTitle: boolean = false;
        if(regexnev.test(title)){
                validTitle = true;
                hibaTitle.innerHTML = "";
        } 
        else{
            validTitle = false;
            hibaTitle.style.color = "red";
            hibaTitle.innerHTML = ("A szobor neve ne legyen üres. Csak angol ABC karaktereket, szőköz ill. vessző és kötőjel karaktereket tartalmazhat csak!")
        }

        let validYear: boolean = false;
        if(parseInt(year) <= 2022){
                validYear = true;
                hibaYear.innerHTML = "";
        }else{
            validYear = false;
            hibaYear.style.color = "red";
            hibaYear.innerHTML = "A készítés éve max. az aktuális évszám lehet!"
        }

        let validPrice: boolean = false;
        if(parseInt(price)>= 1){
                validPrice = true;
                hibaPrice.innerHTML = "";
        }else{
            validPrice = false;
            hibaPrice.style.color = "red";
            hibaPrice.innerHTML = "Az érték min. 1 Ft kell, hogy legyen!"
        }

        let validHeight: boolean = false;
        if(parseInt(height) >= 20){
                validHeight = true;
                hibaHeight.innerHTML = "";
        }else{
            validHeight = false;
            hibaHeight.style.color = "red";
            hibaHeight.innerHTML = "A magasság min 20 cm legyen!"
        }

        if(validTitle && validYear && validPrice && validHeight){
        ;
        }


    })
})