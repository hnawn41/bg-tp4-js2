"use strict"; 

let lignes = 0;

// Total des points, initialisé à 0 : let (slide 51), number (slide 37)
let total_points = 0;


const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];


init();


function init() { 
    for (const person of persons) { 
        doInsert(person.nom, person.prenom, person.points); 
    }
}


function doInsert(nom, prenom, points) { 
    total_points += points; 
    lignes++; 
    const num = lignes; 
    doInsertRowTable(num, nom, prenom, points); 
    update_summary(); 
}


function doInsertRowTable(num, nom, prenom, points) {
    
    const table = document.querySelector("table");

    // createElement pour créer la ligne : slide 104
    const row = document.createElement("tr");

    // setAttribute pour affecter la classe : slide 107
    row.setAttribute("class", "row");

    // createElement pour créer les 5 colonnes : slide 104
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // innerText pour remplir le contenu : slide 91
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Checkbox : createElement (slide 104), setAttribute (slide 107), append (slide 98)
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    // setAttribute pour les classes des colonnes : slide 107
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // append pour ajouter les colonnes à la ligne, puis la ligne au tableau : slide 98
    row.append(col1, col2, col3, col4, col5);
    table.append(row);
}

// Met à jour l'espace résumé (énoncé TP slide 42)
function update_summary() {
    // Récupérer l'élément d'id p1 avec getElementById : vu dans les slides 61 à 64
    const element_lignes = document.getElementById("p1");

    // Récupérer l'élément d'id p3 avec getElementById : slides 61 à 64
    const element_points = document.getElementById("p3");

    
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}

// Affiche le contenu du tableau persons dans la console
function consoleTableau() {
    console.log(persons); 
}