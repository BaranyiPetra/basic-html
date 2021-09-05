/*
KÁVÉFŐZŐ BEKAPCSOLÁSA 
IF NINCS ELÉG KÁVÉ THEN    
    KÁVÉ HOZZÁADÁSA 
ENDIF 

IF NINCS ELÉG VÍZ THEN
    VÍZ HOZZÁADÁSA 
ENDIF 

WHILE NEM MELEGEDETT FEL
    10 MP VÁRAKOZÁS 
ENDWHILE 

CSÉSZE ODAHELYEZÉSE 
GOMB MEGNYOMÁSA

*/


/* 1. algoritmus - összegzés algoritmusa

összeg=0
Ciklus Amég van még szám ADDIG
        szám = következő elem
        összeg = összeg + szám
CIKLUS VÉGE
*/

let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("sum: ", sum);



/* 2. algoritmus - számlázás algoritmusa

db = 0
CIKLUS AMÉG van még szám, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        db = db + 1
    FELTÉTEL VÉGE
CIKLUS VÉGE

*/

let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Even numbers: ", db);

/* 3. algoritmus - szélsőérték keresés algoritmusa

legnagyobb = első elem
CIKLUS AMÉG van még szám, ADDIG
    szám = következő szám
    HA szám > leegnagyobb, AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
    CIKLUS VÉGE

*/

let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}
console.log("The biggest element: ", biggest)

/* 4. algoritmus - eldöntés algoritmusa

találat = HAMIS
CIKLUS AMÉG van elem ES NEM találat, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        találat = igaz
    FELTÉTEL VÉGE
    CIKLUS VÉGE

    */


    let contains = false;
    for (let i = 0; i < numericArray.length && contains == false; i++) {
        if (numericArray[i] == 5) {
            contains = true;
        }
        
    }
console.log("This array contains 5: ", contains);