fetch('joueurs.json')
    .then(response => response.json())

.then(data => {
    console.log(data)
    const jsonResponse2 = document.getElementById('jsonLoader2');
    const test2 = document.getElementById('test2');

    jsonResponse2.innerHTML = '<br>' + data.nom + '</br>' + data.pseudo + '<br>' + data.xp;
    test2.innerHTML = '<img src="' + data.urlavatar + '">';
})

.catch(error => console.error(error));