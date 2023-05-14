"use strict";
/*const a: string = "Hello";
const n: number = 0;
const b: boolean = true;
const d: null = null; // Une valeur null
const arr: string[] = ["mehdi", "souhail", "brahim"];
const arr2: any[] = ["mehdi", "souhail", 3];

const users: { username: string; lastname: string; age?: number } = {
  username: "",
  lastname: "",
  age: 0 // Age est optionelle
};

const compteur = document.querySelector("#compteur") as HTMLButtonElement;
const compteur1 = <HTMLButtonElement>document.querySelector("#compteur");

const users2: { [key: string]: string } = {
  username: "",
  lastname: "",
  country: "",
  city: "",
  address: ""
};

const date: Date = new Date();

const cb: Function = (e: MouseEvent): void => {};
const cb2: (e: MouseEvent) => void = (e: MouseEvent): void => {};

function printId(id: number | string): void {
  console.log(id.toString());
}*/
const compteur = document.querySelector("#compteur");
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener("click", increment);
//https://www.youtube.com/watch?v=wxZ9mv5kbgo&list=PLjwdMgw5TTLX1tQ1qDNHTsy_lrkCt4VW3&index=4
