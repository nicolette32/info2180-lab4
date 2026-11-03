document.addEventListener("DOMContentLoaded", function(){

    const searchButton = document.getElementById("search-btn");

    searchButton.addEventListener("click", function(){
        fetch("superheroes.php")
            .then(function (response){
                if (!response.ok){
                    throw new Error ("Request failed: " + response.status);
                }
                return response.text();
            })
            .then(function (data){
                alert(data);
            })
            .catch(function(error){
                alert("Something went wrong:" + error.message);
            });

    });
});