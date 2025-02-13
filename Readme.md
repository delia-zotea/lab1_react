# Sarcini de recapitulare a fundamentelor Javascript

## 1. Variabile și Tipuri de date
### 1.1 Declarați trei variabile utilizând *var*, *let*, și *const*. Atribuiți-le valori de tip *number*, *string* și *boolean*.
### 1.2 Scrieți o funcție care primește o variabilă ca parametru și returnează tipul său de date utilizând *typeof*.
### 1.3 Convertiți o valoare de tip *string* în *number* și invers. Exemplu: "123" → 123 și 456 → "456".
### 1.4 Declarați două variabile (**nume**, **varsta**) și creați o propoziție utilizând șabloane de string-uri (*template literals* - ``).
### 1.5 Folosiți o variabilă temporară pentru a schimba valorile dintre două variabile.
### 1.6 Scrieți o funcție care verifică dacă o variabilă este de tip *null* sau *undefined*.
### 1.7 Creați un obiect cu mai multe proprietăți (*string*, *number*, *boolean*). Adăugați și eliminați dinamic o proprietate la obiect.
### 1.8 Declarați un array care conține minim 5 valori fiecare un tip de date diferit. Iterați prin array și afișați tipul fiecărui element.
## 2. Funcții
### 2.1 Scrieți o funcție care primește două numere ca parametri și returnează suma lor.
### 2.2 Creați o funcție care calculează aria unui dreptunghi. Dacă înălțimea nu este specificată, să aibă valoarea implicită de **1**.
### 2.3 Declarați o funcție anonimă și asociați-o unei variabile. Funcția să returneze pătratul unui număr.
### 2.4 Scrieți o funcție care primește un string, îl convertește la litere mari și returnează numărul de caractere.
### 2.5 Creați o funcție principală care primește un număr și folosește alte două funcții: una pentru a calcula dublul numărului și alta pentru a calcula pătratul. Returnați rezultatele ambelor într-un obiect.
### 2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.
### 2.7 Scrieți o funcție care aplică o altă funcție asupra fiecărui element al unui array. 
## 3. Obiecte
### 3.1 Declarați un obiect **masina** cu următoarele proprietăți: **marca**, **model**, și **an**. Atribuiți valori pentru fiecare proprietate.
### 3.2 Afișați valoarea proprietăților marca și model utilizând atât notația cu punct, cât și cea cu paranteze pătrate.
### 3.3 Adăugați o proprietate nouă, **culoare**, și actualizați proprietatea an cu o valoare diferită.
### 3.4 Ștergeți proprietatea model din obiect.
### 3.5 Folosiți *for...in* pentru a itera prin toate proprietățile unui obiect și afișați cheile și valorile acestora.
### 3.6 Adăugați o metodă descriere în obiectul **masina** care să returneze un string cu toate informațiile despre mașină.
### 3.7 Scrieți o funcție care primește un obiect **persoana** cu proprietăți **nume** și **varsta** și returnează un mesaj personalizat, în care să se conțină valorile ambelor proprietăți.
### 3.8 Verificați dacă obiectul **masina** conține o proprietate **culoare** utilizând operatorul *in*.
### 3.9 Declarați un obiect **casa** care să conțină un alt obiect **adresa** cu proprietăți precum **strada** și **oras**.
### 3.10 Scrieți o funcție care primește parametri, creează și returnează un obiect **student** cu proprietățile **nume**, **varsta** și **nota**.
### 3.11 Folosiți *Object.assign* și operatorul *spread (...)* pentru a clona obiectul **masina** în alte obiecte.
### 3.12 Creați un obiect **calculator** cu metode pentru **adunare**, **scădere**, **înmulțire** și **împărțire**.
### 3.13 Folosiți destructurarea pentru a extrage câteva proprietăți dintr-un obiect.
## 4. Array-uri
### 4.1 Declarați un array cu trei nume de orașe și afișați primul și ultimul element.
### 4.2 Adăugați un oraș la sfârșitul și începutul array-ului. Ștergeți ultimul oraș.
### 4.3 Folosiți un *for* pentru a itera printr-un array de culori și afișați fiecare element.
### 4.4 Folosiți metoda *forEach* pentru a parcurge un array cu denumiri de animale și afișați fiecare element cu un mesaj personalizat.
### 4.5 Scrieți o funcție care primește un array de numere și returnează doar numerele mai mari de **10**.
### 4.6 Declarați un array de numere și sortați-l în ordine crescătoare.
### 4.7 Scrieți un program care primește un array de numere și returnează un nou array cu pătratele fiecărui număr, utilizând funcția *map*.
### 4.8 Calculați suma elementelor dintr-un array folosind funcția *reduce*.
### 4.9 Verificați dacă un anumit element există într-un array folosind *includes* și *indexOf*.
### 4.10 Combinați două array-uri de cuvinte într-unul singur folosind *concat* sau operatorul *spread (...)*.
### 4.11 Declarați un array bidimensional pentru o matrice **2x2** și accesați elementul de pe **linia 1**, **coloana 2**.
### 4.12 Scrieți o funcție care elimină elementele duplicate dintr-un array.
### 4.13 Folosiți *slice* pentru a crea un sub-array și *splice* pentru a elimina elementul cu indexul **2**.
## 5. Manipulări DOM 
### 5.1 Selectați un element **`<h1>`** dintr-un document HTML folosind *getElementById* și schimbați textul acestuia.
### 5.2 Selectați toate elementele *`<li>`* dintr-un document folosind *querySelectorAll* și schimbați culoarea textului.
### 5.3 Creați un element **`<p>`**, adăugați un text în acesta și introduceți-l la sfârșitul unui element **`<div>`** cu ID-ul **container**.
### 5.4 Selectați o imagine și schimbați valoarea atributului *src*.
### 5.5 Adăugați o clasă nouă unui element cu ID-ul **box**.
### 5.6 Eliminați un element **`<p>`** dintr-un document.
### 5.7 Adăugați un eveniment *click* unui buton, astfel încât să schimbe textul unui **`<h2>`** când este apăsat.
### 5.8 Monitorizați un câmp de text și afișați mai jos conținutul acestuia într-un paragraf în timp real.
### 5.9 Selectați un element **`<ul>`** și afișați textul primului și ultimului copil.
### 5.10 Alternați o clasă **active** pe un element atunci când este apăsat un buton.
### 5.11 Creați dinamic un tabel HTML cu **3 rânduri** și **2 coloane**.
### 5.12 Creați o listă **`<ul>`** și adăugați elemente noi la apăsarea unui buton.
## 7. Programare Asincronă
### 7.1 Scrieți un program care afișează un mesaj în consolă după 3 secunde.
### 7.2 Creați un cronometru care afișează numere de la **1** la **5**, câte unul pe secundă, și apoi se oprește.
### 7.3 Scrieți o funcție **salut** care primește un callback (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.
### 7.4 Creați o funcție care returnează un *Promise* ce se rezolvă după **2** secunde.
### 7.5 Creați o funcție care returnează un *Promise* ce poate fi respinsă sau rezolvată în funcție de valoarea unui parametru.
### 7.6 Scrieți o funcție asincronă care apelează fucția de la punctul **7.4** și afișează rezultatul.
### 7.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț. 
### 7.8 Utilizați fetch pentru a prelua date de la o API publică (de exemplu, **JSONPlaceholder** https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.
### 7.9 Folosiți *Promise.all* și *Promise.allSettled* pentru a aștepta rezolvarea mai multor promisiuni.
## 8. Module ES
### 8.1 În fișierul **mathUtils.js** exportați două funcții simple pentru operații matematice: **adunare** și **scădere**.
### 8.2 În fișierul **main.js** importați funcțiile și folosiți-le pentru a calcula suma și diferența a două numere.
### 8.3 În fișierul **salutari.js** exportați implicit o funcție care afișează un mesaj de salut.
### 8.4 În fișierul **main.js** importați funcția cu un nume ales de utilizator și folosiți-o pentru a saluta un utilizator.
### 8.5 În fișierul  **dateUtilizator.js** exportați mai multe valori.
### 8.6 În fișierul **main.js** importați întregul modul și accesați valorile exportate.