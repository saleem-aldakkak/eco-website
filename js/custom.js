/*-----------------------------------------------------------------------------------

    Theme Name: Crizal - Multipurpose Responsive Template + Admin
    Description: Multipurpose Website Template + Admin + RTL
    Author: sd
    Version: 3.1

    /* ----------------------------------

    JS Active Code Index
            
        01. Handle href links on smartphone
        02. Localisation
        
    ---------------------------------- */  

/*------------------------------------
    01. Handle href links on smartphone
--------------------------------------*/
$( "header li" ).click(function() {
            if($(this).has('ul')){
                if($(this).children('ul').height()!=0){
                    
                    window.location.href = $(this).children('a').attr('href');
                }
               
            }
            
});


/*------------------------------------
    02. Localisation
--------------------------------------*/




//Read Query
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let lang = params.lang; // "some_value"

if($.cookie('lang')==undefined){
  lang=$.cookie('lang');
}else{
  $.cookie('lang','en');
}
if(lang!=null){
// Get Languages
fetch("lang/lang.json")
.then(function(response) {
  return response.json();
})
.then(function(result) {
  //Reorder lang buttons
  $('#selected-lang').attr('href','?lang='+lang);
  $('#selected-lang').html('<img class="lang-img" src="'+result[lang]['img']+'"/><span langid="'+result[lang]['langid']+'"></span>');
  $('#hidden-langs').html("");
   for(let i in result){
     if(i!=lang){
       $('#hidden-langs').append('<li><a href="?lang='+i+'"><img class="lang-img" src="'+result[i].img+'"><span langid="'+result[i].langid+'"></span></a></li>');
     }
    
   }
    
});
$.cookie('lang', lang);
}







// Read Language's text from de-en.json
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
            default:
              break;
        }
        
       
    }
});