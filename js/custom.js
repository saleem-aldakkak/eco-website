


$("#en-btn").click(function(event) {
    event.preventDefault();
    
  });

  $("#de-btn").click(function(event) {
    event.preventDefault();
    
   
  });
//Select Language de,en
var lang = "en"

// Read Languages from de-en.json
fetch("lang/de-en.json")
.then(function(response) {
  return response.json();
})
.then(function(result) {
    for (let i in result) {

        switch(lang){
            case "en":
                $('*[langid="'+result[i].ID+'"]').text(result[i].English);
                break;
                case "de":
                    $('*[langid="'+result[i].ID+'"]').text(result[i].German);
                    break;
        }
        
       
    }
});