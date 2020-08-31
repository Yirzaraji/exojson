fetch('joueurs.json')
    .then(response => response.json())

.then(data => {
    //console.log(data)
    const jsonResponse2 = document.getElementById('jsonLoader2');
    const test2 = document.getElementById('test2');

    /* jsonResponse2.innerHTML = '<br>' + data.nom + '</br>' + data.pseudo + '<br>' + data.xp;
    test2.innerHTML = '<img src="' + data.urlavatar + '">'; */

    for (let i = 0; i < data.length; i++){

        console.log(data[i])
        console.log(data[i].nom)

        //marche pas correctement
        test2.innerHTML = data[i].nom

        let newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        newDiv.className = "card";
        //console.log(newDiv.id)

        newDiv.innerHTML = data[i].nom + '<br>' + data[i].pseudo + '<br>' + data[i].xp;
        // et lui donne un peu de contenu
        var newContent = document.createTextNode('');
        // ajoute le nœud texte au nouveau div créé
        newDiv.appendChild(newContent);
        
        // ajoute le nouvel élément créé et son contenu dans le DOM
        var currentDiv = document.getElementById('div1');
        document.body.insertBefore(newDiv, currentDiv);
        
    }

})

.catch(error => console.error(error));