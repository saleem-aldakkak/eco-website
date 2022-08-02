/*-----------------------------------------------------------------------------------

    Theme Name: Crizal - Multipurpose Responsive Template + Admin
    Description: Multipurpose Website Template + Admin + RTL
    Author: sd
    Version: 3.1

    /* ----------------------------------

    JS Active Code Index
            
        01. Handle href links on smartphone
        02. Localisation
        03. Maintance
        
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
if(lang==null){
  lang ='en';
}
$( "a" ).each(function( index ) {
  var href = $( this ).attr('href');
  if(!href.includes('lang')){
    $( this ).attr('href',href+'?lang='+lang);
  }
 

  
});

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









// Read Language's text from de-en.json
fetch("lang/de-en.json")
.then(function(response) {
  return response.json();
})
.then(function(result) {
    for (let i in result) {

        switch(lang){
            case "en":
                $('*[langid="'+result[i].ID+'"]').html(result[i].English);
                break;
                case "de":
                    $('*[langid="'+result[i].ID+'"]').html(result[i].German);
                break;
            default:
              break;
        }
        
       
    }
});

/*------------------------------------
    03. Maintance
--------------------------------------*/



// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var query_admin = getUrlVars()["q"];
var currentURL = $(location).attr('href');

if(query_admin==""&&currentURL.includes("index")){
  window.open("/maintenance.html","_self")

}