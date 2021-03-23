var animalContainer = document.getElementById("animal-info")
var btn = document.getElementById("btn");
var counter = 1 ;

    btn.addEventListener("click", function(){
        var ourRequest = new XMLHttpRequest;    
        ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ counter +'.json');
        ourRequest.onload = function(){
            if(ourRequest.status >=200 && ourRequest.status < 400){
            var ourData = JSON.parse(ourRequest.responseText);
            renderHtml(ourData);
            }else{
                console.log("Connected to the Server. Unknown errer. ");
            }                    
        };

        ourRequest.onerror = function(){
            console.log("Connection error")
        };

        ourRequest.send();
        counter++;

        if(counter > 3){
            btn.classList.add("hide-me");
        };
    });




function renderHtml(data){
    var htmlString = "";

    for(i=0; i< data.length; i++){
        htmlString += "<p>" + data[i].name+ " is a "+ data[i].species + " that like to eat ";
        
        for(j=0; j<data[i].foods.likes.length; j++){
        if(j==0){
            htmlString += data[i].foods.likes[j];
        }else{
            htmlString += " and " +  data[i].foods.likes[j];
        }            
        };

        htmlString += ' and dislikes ' ;
        for(j=0; j<data[i].foods.dislikes.length; j++){
            if(j==0){
                htmlString += data[i].foods.dislikes[j];
            }else{
                htmlString += " and " +  data[i].foods.dislikes[j];
            }            
            };

        htmlString += ' . </p>';
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString)
    
}


