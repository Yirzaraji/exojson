/* fetch('joueurs.json')
    .then(response => response.json())

.then(data => {

    const card = document.getElementsByClassName('cardTest')
        for(let j = 0; j < card.length; j++){
            console.log(card);

                console.log(data)
                
                card[j].innerHTML = '<img src="' + data[j].urlavatar + '">' + data[j].nom 
                + '<br>' + data[j].pseudo + '<br>' + data[j].xp;
                
            card[j].addEventListener("click", function(){
                
                card[j].classList.add('click');

                let clicked = document.getElementsByClassName('click')
                if(clicked.length >= 2){
                    console.log("coucoui")

                }

            });

            
        }

})

.catch(error => console.error(error)); */




$.ajax({
    method: "GET",
    url: "joueurs.json",
    dataType: "json",

    success: function() {
        console.log("Ajax success");
    },
    error: function() {
        alert("There was an error. Try again please!");
    },
})
//.done est lié a jquery ref la doc
.done(function(data) {
    //console.log(data);
    const card = document.getElementsByClassName('cardTest')
        for(let j = 0; j < card.length; j++){
            console.log(card);

                console.log(data)
                
                card[j].innerHTML = '<img src="' + data[j].urlavatar + '">' + data[j].nom 
                + '<br>' + data[j].pseudo + '<br>' + data[j].xp;
                
            card[j].addEventListener("click", function(){
                
                card[j].classList.add('click');

                let clicked = document.getElementsByClassName('click')
                if(clicked.length >= 2){
                    console.log("coucoui")
                    
                    $.ajax({
                        method: "GET",
                        url: "/",
                        dataType: "html",
                        data:{
                            "test": "resp"
                        },
                        
                        success: function() {
                            console.log("Ajax success");
                        },
                        error: function() {
                            alert("There was an error. Try again please!");
                        },
                    })

                }

            });

            
        }
});