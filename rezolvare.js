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


