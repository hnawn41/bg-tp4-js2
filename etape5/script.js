"use strict"; 

let lignes = 0;

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

   
    const row = document.createElement("tr");

    
    row.setAttribute("class", "row");

    
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

   
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

   
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    // setAttribute pour les classes : slide 107
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // append pour construire la ligne puis l'ajouter au tableau : slide 98
    row.append(col1, col2, col3, col4, col5);
    table.append(row);
}

function update_summary() {
    
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");


    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}

// doNewData lit le formulaire, insère la ligne et le nouvel objet dans persons, puis vide les champs (énoncé TP slides 50 et 53)
function doNewData() { 
    
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // Lire la valeur saisie 
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    // parseInt convertit le texte en entier
    const points = parseInt(elt_points.value);

    
    // Number.isNaN indique si le nombre est vide 
    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        // Méthode alert de window : vue dans le slide 116 (BOM)
        window.alert("Formulaire incomplet !");
    } else {
        // Insérer la ligne dans le tableau avec les nouvelles données 
        doInsert(nom, prenom, points);

        // Insérer aussi les données dans le tableau persons avec push (slide 38) 
        persons.push({ nom: nom, prenom: prenom, points: points });

        // Vider les champs en modifiant leur attribut value : slide 93
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

function consoleTableau() {
    console.log(persons); 
}