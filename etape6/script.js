"use strict"; 

let lignes = 0;

let total_points = 0;


const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];


init();

// EXTRA 3 : appuyer sur Entrée dans un champ du formulaire ajoute la personne
// Récupérer tous les champs avec querySelectorAll : slides 76 à 78
const champsFormulaire = document.querySelectorAll(".form_field");
for (const champ of champsFormulaire) {
    // addEventListener avec l'événement keydown et une fonction fléchée : slides 139 et 46
    champ.addEventListener("keydown", e => {
        // e.key donne la touche enfoncée (slide 139)
        if (e.key === "Enter") { 
            doNewData(); 
        }
    });
}

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


    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    
    row.append(col1, col2, col3, col4, col5);
    table.append(row);
}

function update_summary() {
    
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");

    
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;

    // EXTRA 1 : afficher la moyenne des points dans l'élément p2 du résumé
    const element_moyenne = document.getElementById("p2"); // getElementById : slides 61 à 64
    if (lignes === 0) { 
        element_moyenne.innerText = ""; 
    } else {
        
        element_moyenne.innerText = "Moyenne = " + (total_points / lignes).toFixed(1);
    }
}

function doNewData() { 
    // getElementById pour récupérer les champs : slides 61 à 64
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

  
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    
    const points = parseInt(elt_points.value);

    
    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        window.alert("Formulaire incomplet !"); // alert de window : slide 116 (BOM)
    } else {
        doInsert(nom, prenom, points); 
        persons.push({ nom: nom, prenom: prenom, points: points });

        // Vider les champs avec l'attribut value : slide 93
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

function consoleTableau() {
    console.log(persons); 
}

// deleteRow supprime les lignes sélectionnées (énoncé TP slide 61)
function deleteRow() { 
    // Étape 1 : vérifier si le tableau est vide 
    if (lignes === 0) {
        window.alert("Le tableau est vide !"); 
        return; // return pour sortir de la fonction : slide 45
    }

    // Étape 2 : récupérer le tableau (querySelector, énoncé TP slide 61) et les checkbox cochées
    const table = document.querySelector("table");
    
    const checkedBoxes = table.querySelectorAll(".col_chkbox input:checked");

    // Étape 3 : vérifier si aucune checkbox n'est cochée , .length de la collection : slide 44
    if (checkedBoxes.length === 0) {
        window.alert("Sélectionnez au moins une ligne !"); // alert : slide 116
        return; 
    }

    // Étape 4 : demander une confirmation , confirm est une méthode de window comme alert (slides 112 à 116)
    if (!window.confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")) { 
        return; 
    }

    // Étape 5 : récupérer toutes les lignes du tableau avec querySelectorAll : slides 76 à 78
    const rows = table.querySelectorAll("tr");

    // Position de la personne courante dans le tableau persons : let (slide 51), number (slide 37)
    let index = 0;

    // Étape 6 : parcourir les lignes avec for...of : slide 44
    for (const row of rows) {
        
        const checkbox = row.querySelector(".col_chkbox input");

        // La ligne d'entête n'a pas de checkbox : on passe à la ligne suivante avec continue (slide 44)
        if (checkbox === null) {
            continue;
        }

        // Si la checkbox est cochée : attribut checked, accès direct à un attribut (slide 93)
        if (checkbox.checked) {
            // Récupérer les points dans la 4e cellule 
            const points = parseInt(row.cells[3].innerText);

            total_points -= points; // Soustraire de total_points : opérateur combiné -= vu dans le slide 41
            lignes--; // Décrémenter lignes : opérateur -- vu dans le slide 41
            row.remove(); // Supprimer la ligne du DOM avec remove() : vu dans le slide 100
            persons.splice(index, 1); // Supprimer la même entrée dans persons : méthode de tableau comme push
        } else {
            index++; 
        }
    }

    // Étape 7 : message de succès (alert, slide 116) puis mise à jour du résumé
    window.alert("Suppression réussie !");
    update_summary(); 
}

// EXTRA 2 : cocher toutes les lignes, ou tout décocher si elles sont déjà toutes cochées
function toggleSelectAll() { 
    const checkboxes = document.querySelectorAll(".col_chkbox input");

    let tousCoches = true;
    for (const c of checkboxes) { 
        if (!c.checked) { 
            tousCoches = false;
        }
    }

    // Inverser l'état de toutes les checkbox : affectation de l'attribut checked 
    for (const c of checkboxes) {
        c.checked = !tousCoches;
    }
}