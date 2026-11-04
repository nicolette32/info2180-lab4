//Wait until the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function(){

    //grab the elements we need from the page
    const searchButton = document.getElementById("search-btn");
    const searchinput = document.getElementById("search-input");
    const result = document.getElementById("result");

    //run this function every time the search button is clicked

    searchButton.addEventListener("click", function(){
        const query = searchinput.value.trim();

        //send an ajax request to the php file with the search text in the query

        fetch("superheroes.php?query=" + encodeURIComponent(query))
            .then(function (response){
                if (!response.ok){
                    throw new Error ("Request failed: " + response.status);
                }

                //read the response as text
                return response.text();
            })
            .then(function (data){
                result.innerHTML = data;
            })
            .catch(function(error){
                //runs if the request fails
                result.textContent = "Something went wrong:" + error.message;
            });

    });
});