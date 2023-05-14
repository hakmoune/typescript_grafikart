"use strict";
const user = { firstname: "Mahdi", lastname: "Hakmoune" };
const compteur = document.querySelector("#compteur");
//Generics Types
//Au lieu de creer une fonction ou param avec le type any, on utilise le Generics Type
function identity(arg) {
    return arg;
}
const aa = identity(3);
const aaa = identity(3);
const aaaa = identity("3");
//Si on utilise ce syntaxe alors on va s'assurer qu'il vas pa eter null est pas besoin de faire la verification "?"
//C'est comme on dit que compteur existe a 100%
//Pour la partique, c'est de bonne pratique
//const compteur = document.querySelector("#compteur")!;
//const compteur = document.querySelector("#compteur") as HTMLButtonElement;
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
    //Span peut etre de type: HTMLSpanElement | Null | Undifined
    //Avec la condition if on s'assure que le type va etre : HTMLSpanElement
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener("click", increment);
/*function printId2(id: number | string) {
  if (typeof id === "number") {
    console.log((id * 2).toString());
  } else {
    console.log(id.toUpperCase());
  }
}

function exemple(a: string | boolean, b: string | number | boolean) {
  if (a === b) {
  }
}
function exemple2(a: string | Date) {
  if (a instanceof Date) {
  }
}
function exemple3(a: string | string[]) {
  if (Array.isArray(a)) {
    return a[0];
  }
  return a;
}

function exemple4(a: MouseEvent | HTMLInputElement) {
  if ("value" in a) {
    //Traitement, ici il va conaitre que a est de type HTMLInputElement
  }
}

const a: string = "Hello";
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
// https://www.youtube.com/watch?v=dB_LbNMgVAA&list=PLjwdMgw5TTLX1tQ1qDNHTsy_lrkCt4VW3&index=5
