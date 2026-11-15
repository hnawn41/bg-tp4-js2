"use strict"; 

let lignes = 0;


const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Appel de init() (énoncé TP slide 22) 
init();

// init parcourt le tableau persons et appelle doInsert pour chaque objet 
function init() { 
    for (const person of persons) { // Boucle for...of : vu dans le slide 44
        doInsert(person.nom, person.prenom, person.points); // Accès aux propriétés d'un objet : slide 39 
    }
}

// doInsert appelle doInsertRowTable avec le numéro de ligne
function doInsert(nom, prenom, points) { 
    lignes++; // Incrémenter lignes de 1 : opérateur ++ vu dans le slide 41
    const num = lignes; // Le numéro de ligne est la valeur du compteur : const, slides 37 et 51
    doInsertRowTable(num, nom, prenom, points); 
}



function doInsertRowTable(num, nom, prenom, points) {
    // Récupérer l'élément tableau avec un sélecteur CSS : querySelector (énoncé TP slide 14), voir slides 76 à 78
    const table = document.querySelector("table");

    
    const row = document.createElement("tr");

    // Affecter la valeur "row" à l'attribut class avec setAttribute : vu dans le slide 107
    row.setAttribute("class", "row");

    // Créer 5 éléments td (colonnes) avec createElement : vu dans le slide 104
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplir le contenu avec innerText : vu dans le slide 91
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Input de type checkbox : createElement (slide 104), setAttribute (slide 107), append (slide 98)
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    // Affecter les classes aux colonnes avec setAttribute : slide 107
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Ajouter les colonnes à la ligne, puis la ligne au tableau, avec append() : slide 98
    row.append(col1, col2, col3, col4, col5);
    table.append(row);
}

// Affiche le contenu du tableau persons dans la console (énoncé TP slide 30)
function consoleTableau() {
    console.log(persons); 
}