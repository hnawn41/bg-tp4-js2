"use strict"; 




function doInsertRowTable(num, nom, prenom, points) {
    // Récupérer l'élément tableau avec un sélecteur CSS : querySelector (énoncé TP slide 14), voir slides 76 à 78 
    const table = document.querySelector("table");

    // Créer un élément tr (ligne de tableau) avec createElement : vu dans le slide 104
    const row = document.createElement("tr");

    // Affecter la valeur "row" à l'attribut class de la ligne avec setAttribute : vu dans le slide 107
    row.setAttribute("class", "row");

    // Créer 5 éléments td (colonnes) avec createElement : vu dans le slide 104
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplir le contenu de chaque colonne avec la propriété innerText : vu dans le slide 91
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // La dernière colonne contient un input de type checkbox : créé avec createElement (slide 104)
    const checkbox = document.createElement("input");
    // Type affecté avec setAttribute (slide 107)
    checkbox.setAttribute("type", "checkbox");
    // Input ajouté dans la colonne avec append (slide 98)
    col5.append(checkbox);

    // Affecter les classes correspondantes à chaque colonne avec setAttribute : vu dans le slide 107
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Ajouter les colonnes à la ligne avec la méthode append() : vu dans le slide 98
    row.append(col1, col2, col3, col4, col5);

    // Ajouter la ligne au tableau avec append() : vu dans le slide 98
    table.append(row);
}