var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";
var searchBar= document.getElementById("inputbar");
var searchSuggestions=document.getElementById("search-suggestions");

searchBar.addEventListener("input" , function(){
    //get user data
    var query = searchBar.value.trim();
    // get user typed data in query in the api call
    fetchSuggestions(query);
    // api call
    // append all the search sugestions to div tag in ui

})

function fetchSuggestions(query){
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        showSuggestions(data)
        //console.log(data);
    })
    .catch(function(err){
        console.log("error is: "+err);
    })

}

function showSuggestions(data){
    var values = data.results;
    if(data.count==0)searchSuggestions.innerHTML="<div>Not found</div>";
    else {
        var htmlString="";
        for(var i=0;i<values.length ;i++)
            htmlString += "<div><span class='suggestion-item'>" + values[i].text + "</span></div>";
        searchSuggestions.innerHTML=htmlString;
    }
}
