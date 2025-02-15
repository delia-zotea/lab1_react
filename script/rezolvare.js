// 1.1 
var numar = 10;        // permite redeclararea și reasignarea
let text = "Salut!";   // reasignarea, dar nu redeclararea
const esteAdevarat = true; // nu permite nici redeclararea, nici reasignarea

// 1.2 f ce returnează tipul de date a var
function getType(variable) {
    return typeof variable;
}
console.log(getType(numar));  
console.log(getType(text));   
console.log(getType(esteAdevarat)); 

// 1.3 Conversie
let stringToNumber = Number("123"); 
let numberToString = String(456);  
console.log(stringToNumber, typeof stringToNumber); 
console.log(numberToString, typeof numberToString); 

// 1.4 
let nume = "Delia";
let varsta = 19;
let mesaj = `Numele meu este ${nume} și am ${varsta} ani.`;
console.log(mesaj);

// 1.5 Schimbarea valorilor folosind o var temporară
let a = 5, b = 10;
let temp = a;
a = b;
b = temp;
console.log(a, b); // 10, 5

// 1.6 f ce verifică dacă o var este null sau undefined
function esteNullSauUndefined(value) {
    return value === null || value === undefined;
}
console.log(esteNullSauUndefined(null)); 
console.log(esteNullSauUndefined(undefined)); 
console.log(esteNullSauUndefined(0)); 

// 1.7 obiect cu modificari dinamice 
let persoana = {
    nume: "Maria",
    varsta: 30,
    esteTalentat: false
};
persoana.oras = "București"; 
delete persoana.esteTalentat; 
console.log(persoana);

// 1.8 Declararea unui array cu elemente de tipuri diferite și afișarea tipurilor
let array = [42, "Hello", true, { key: "value" }, [1, 2, 3]];
array.forEach(element => {
    console.log(`${element} este de tip ${typeof element}`);
});


// 2.1 suma 
function suma(a, b) {
    return a + b;
}
console.log(suma(5, 3)); 

// 2.2 aria dreptunghi 
function ariaDreptunghi(latime, inaltime = 1) {
    return latime * inaltime;
}
console.log(ariaDreptunghi(4, 5)); 
console.log(ariaDreptunghi(4));    

// 2.3 f anonimă 
const patrat = function(x) {
    return x * x;
};
console.log(patrat(6)); 

// 2.4 
function transforma(text) {
    let upperText = text.toUpperCase();
    return upperText.length;
}
console.log(transforma("hello")); 

// 2.5 1 f ce contine 2 f + returnare in obiect
function procesareNumar(numar) {
    function dublu(x) {
        return x * 2;
    }
    function patrat(x) {
        return x * x;
    }
    return {
        dublu: dublu(numar),
        patrat: patrat(numar)
    };
}
console.log(procesareNumar(3)); 

// 2.6 arrow function
const sumaArrow = (a, b) => a + b;
console.log(sumaArrow(5, 3)); 

// 2.7 
function aplicaFunctie(array, functie) {
    return array.map(functie);
}

const numere = [1, 2, 3, 4, 5];
const dublare = x => x * 2;
console.log(aplicaFunctie(numere, dublare)); 

// 3.1 obiect declarat 
let masina = {
    marca: "BMW",
    model: "X5",
    an: 2020
};

// 3.2 
console.log(masina.marca);    
console.log(masina["model"]); 

// 3.3 adaugare proprietate
masina.culoare = "negru";
masina.an = 2022;
console.log(masina);

// 3.4 
delete masina.model;
console.log(masina);

// 3.5 iterare for .. in 
for (let cheie in masina) {
    console.log(`${cheie}: ${masina[cheie]}`);
}

// 3.6 metoda
masina.descriere = function() {
    return `Aceasta este o ${this.marca} din anul ${this.an}, de culoare ${this.culoare}.`;
};
console.log(masina.descriere());

// 3.7 mesaj personalizat
function descrierePersoana(persoana) {
    return `Salut! Mă numesc ${persoana.nume} și am ${persoana.varsta} ani.`;
}
let persoana = { nume: "Delia", varsta: 19 };
console.log(descrierePersoana(persoana));

// 3.8 verificare 
console.log("culoare" in masina); 
console.log("model" in masina);   

// 3.9 obiect in obiect 
let casa = {
    adresa: {
        strada: "Strada Stefan cel Mare",
        oras: "Chisinau"
    }
};
console.log(casa.adresa.oras); 

// 3.10 f ce creează și returnează un obiect
function creeazaStudent(nume, varsta, nota) {
    return { nume, varsta, nota };
}
console.log(creeazaStudent("Delia", 19, 10));

// 3.11 Clonarea obiectului masina cu Object.assign și spread operator (...)
let masinaClona1 = Object.assign({}, masina);
let masinaClona2 = { ...masina }; // superficial
console.log(masinaClona1);
console.log(masinaClona2);

// 3.12 
let calculator = {
    adunare: (a, b) => a + b,
    scadere: (a, b) => a - b,
    inmultire: (a, b) => a * b,
    impartire: (a, b) => (b !== 0 ? a / b : "Eroare: Împărțire la 0")
};
console.log(calculator.adunare(10, 5));   
console.log(calculator.impartire(10, 0)); 

// 3.13 Destructurarea 
let { marca, an } = masina;
console.log(`Marca: ${marca}, An: ${an}`);


// 4.1 
let orase = ["București", "Cluj-Napoca", "Timișoara"];
console.log(orase[0], orase[orase.length - 1]);

// 4.2 
orase.push("Iași");   // adăugare sfârșit
orase.unshift("Brașov"); // adăugare început
orase.pop(); // sterge ultimul 
console.log(orase);

// 4.3 iterare for
let culori = ["roșu", "verde", "albastru"];
for (let i = 0; i < culori.length; i++) {
    console.log(culori[i]);
}

// 4.4 parcurgerea forEach
let animale = ["câine", "pisică", "cal"];
animale.forEach(animal => console.log(`Îmi place un ${animal}.`));

// 4.5 
function filtreazaNumereMari(arr) {
    return arr.filter(num => num > 10);
}
console.log(filtreazaNumereMari([5, 12, 8, 20, 3]));

// 4.6 
let numere1 = [12, 5, 8, 20, 3];
numere1.sort((a, b) => a - b); // ordoneaza ca string
console.log(numere1);

// 4.7 
let patrate = numere1.map(num => num * num);
console.log(patrate);

// 4.8 
let suma = numere1.reduce((acc, num) => acc + num, 0);  // reduce arr la o singura valoare
console.log(suma);

// 4.9 

console.log(numere1.includes(8)); 
console.log(numere1.indexOf(12) !== -1); 
console.log(numere1.indexOf(12)); 


// 4.10 
let cuvinte1 = ["mere", "pere"];
let cuvinte2 = ["banane", "portocale"];
let combinat = cuvinte1.concat(cuvinte2); // un nou array 
console.log(combinat);

let combinatSpread = [...cuvinte1, ...cuvinte2];
console.log(combinatSpread);  // desface elemntele 

// 4.11 
let matrice = [
    [1, 2],
    [3, 4]
];
console.log(matrice[0][1]); 

// 4.12 
function eliminaDuplicate(arr) {
    return [...new Set(arr)]; // set nu permite dupes 
}
console.log(eliminaDuplicate([1, 2, 2, 3, 4, 4, 5]));

// 4.13 
let arr = [10, 20, 30, 40, 50];
let subArray = arr.slice(1, 4); // 
console.log(subArray);

arr.splice(2, 1); // (start, delete, add, add, add...)
console.log(arr);

// 5.1 
let titlu = document.getElementById("titlu");
titlu.innerText = "Textul a fost schimbat!";

// 5.2 
let listaItems = document.querySelectorAll("li");
listaItems.forEach(item => item.style.color = "red");

// 5.3 
let paragraf = document.createElement("p");
paragraf.innerText = "paragraf adăugat dinamic!";
let container = document.getElementById("container");
container.appendChild(paragraf);

// 5.4 
let imagine = document.getElementById("imagine");
imagine.src = "noua_imagine.jpg";

// 5.5 
let box = document.getElementById("box");
box.classList.add("noua-clasa");

// 5.6 
let paragrafDeEliminat = document.querySelector("p");
paragrafDeEliminat.remove();

// 5.7 
let buton = document.getElementById("buton");
buton.addEventListener("click", function() {
    let titluH2 = document.querySelector("h2");
    titluH2.innerText = "Textul s-a schimbat la apăsarea butonului!";
});

// 5.8 
let inputText = document.getElementById("input-text");
let paragrafText = document.getElementById("paragraf-text");

inputText.addEventListener("input", function() {
    paragrafText.innerText = inputText.value;
});

// 5.9 
let lista = document.getElementById("lista-ul");
let primulElement = lista.firstElementChild;
let ultimulElement = lista.lastElementChild;

console.log("Primul element: " + primulElement.innerText);
console.log("Ultimul element: " + ultimulElement.innerText);

// 5.10 
let butonClasa = document.getElementById("buton-clasa");
let element = document.getElementById("box");

butonClasa.addEventListener("click", function() {
    element.classList.toggle("active");
});

// 5.11 3 rand 2 col
let tabel = document.createElement("table");
let tbody = document.createElement("tbody");

for (let i = 0; i < 3; i++) {
    let rand = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
        let celula = document.createElement("td");
        celula.innerText = `Celula ${i + 1}-${j + 1}`;
        rand.appendChild(celula);
    }

    tbody.appendChild(rand);
}

tabel.appendChild(tbody);
document.body.appendChild(tabel);

// 5.12 
let listaUL = document.createElement("ul");
document.body.appendChild(listaUL);

let butonAdaugaElement = document.createElement("button");
butonAdaugaElement.innerText = "Adaugă element în listă";
document.body.appendChild(butonAdaugaElement);

butonAdaugaElement.addEventListener("click", function() {
    let elementNou = document.createElement("li");
    elementNou.innerText = "Element adăugat";
    listaUL.appendChild(elementNou);
});


// 7.1 dupa 3 sec 
setTimeout(() => {
    console.log("heyooo lumeeeeee!");
}, 3000);

// 7.2 un fel de cronometru 
let numar = 1;
let interval = setInterval(() => {
    console.log(numar);
    numar++;
    if (numar > 5) {
        clearInterval(interval);
    }
}, 1000);

// 7.3 
function salut(callback) {
    console.log("Salut!");
    callback();
}

salut(() => {
    console.log("Mesajul de la callback!");
});

// 7.4
function promisiune() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promisiunea s-a rezolvat după 2 secunde!");
        }, 2000);
    });
}

promisiune().then((result) => {
    console.log(result);
});

// 7.5 respins/rezolvat
function promisiuneCondicional(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (val > 10) {
                resolve("Valoare mare!");
            } else {
                reject("Valoare mică!");
            }
        }, 2000);
    });
}

promisiuneCondicional(10)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// 7.6 f asincrona 
/*function promisiune() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promisiunea s-a rezolvat după 2 secunde!");
        }, 2000);
    });
} */ 

async function apelPromisiune() {
    try {
        const result = await promisiune();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

apelPromisiune();

// 7.7 lant
function promisiune1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promisiunea 1 rezolvată!");
        }, 2000); // Întârziere de 2 secunde
    });
}

function promisiune2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promisiunea 2 rezolvată!");
        }, 2000); // Întârziere de 2 secunde
    });
}

function promisiune3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promisiunea 3 rezolvată!");
        }, 2000); // Întârziere de 2 secunde
    });
}

promisiune1()
    .then((result) => {
        console.log(result);
        return promisiune2();
    })
    .then((result) => {
        console.log(result);
        return promisiune3();
    })
    .then((result) => {
        console.log(result);
    });


// 7.8 prelua date de la o API publică 
fetch("https://jsonplaceholder.typicode.com/posts")  // trimite cerere 
    .then((response) => response.json())  // converteste in js 
    .then((data) => console.log(data))  // afisare 
    .catch((error) => console.log("Eroare:", error));  // in caz de error 

// 7.9 
const promisiuni = [
    Promise.resolve("Promisiune 1 rezolvată!"),
    Promise.resolve("Promisiune 2 rezolvată!"),
    Promise.reject("Promisiune 3 respinsă!")
];

// Așteaptă toate promisiunile să fie finalizate
Promise.allSettled(promisiuni)
    .then((results) => console.log("Rezultatele Promise.allSettled:", results));

// Așteaptă toate promisiunile
Promise.all(promisiuni)
    .then((results) => console.log(results))
    .catch((error) => console.log("Eroare în Promise.all:", error));


console.log('test')

console.log('generarea unei liste de cumparaturi')