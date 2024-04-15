var nouveauProduit = document.getElementById('nouveauProduit');
var ajouterProduit = document.getElementById('ajouterProduit');
var produit = document.getElementById('produit');
var prix = document.getElementById('prix');
var quantite = document.getElementById('quantite');
var ajouttrans = document.getElementById('ajouterTransaction');
var total1=0;
var prixx=0;


ajouterProduit.addEventListener('click',()=>{
    var l = document.createElement('option');
    l.textContent = nouveauProduit.value;
    produit.appendChild(l);
})


    ajouttrans.addEventListener('click',()=>{

      let totalPrix = document.getElementById("totalPrix");
      let nombreTransactions = document.getElementById("nombreTransactions");
      let tableauTransactions = document.getElementById("tableauTransactions");
      let total = prix.value * quantite.value;
      let ligne = document.createElement("tr");
      let colonne1 = document.createElement("td");
      colonne1.textContent = produit.value;
      ligne.appendChild(colonne1);
      let colonne2 = document.createElement("td");
      colonne2.textContent = prix.value;
      ligne.appendChild(colonne2);
      let colonne3 = document.createElement("td");
      colonne3.textContent = quantite.value;
      ligne.appendChild(colonne3);
    
     let colonne4 = document.createElement("td");
     colonne4.textContent = total;
     ligne.appendChild(colonne4);   
      tableauTransactions.appendChild(ligne)
    prixx=prixx+(prix.value * quantite.value);
    total1++;
    totalPrix.textContent = `${prixx}`;
    nombreTransactions.textContent =`${total1}`;


})
//    totalPrix.textContent = totalPrix.textContent + tot  nombreTransactions.textContent = parseInt(nombreTransactions.textContent  e.preventDefault();
