// This is my main JS file for the site.


	
// Header and footer

	$( "#page-header" ).load( "resources/layout-components.html #header" );
	$( "#page-nav" ).load( "resources/layout-components.html #navbar" );
	$( "#page-footer" ).load( "resources/layout-components.html #footer" );



// dynamic content loading

	// Parse the URL parameter
	// this below piece of code was adopted from this awesome tutorial by Jenna Molby: https://jennamolby.com/how-to-display-dynamic-content-on-a-page-using-url-parameters/
	// I've looked this code up and found its cited in multiple places and therefore I don't know the origanal author so I'll cite where I got it.
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
	// parameter variable name
	var dynamicContent = getParameterByName('page');
 
	 $(document).ready(function() {
 
 		
 
		// if the URL parameter is concepts
		if (dynamicContent == 'concepts') {
		// this loads the page content into the "dynamic-content div"
		$( ".dynamic-content" ).load( "pages/concepts.html #content" );
		// page title
		document.title = "Key Concepts" + " | " + document.title;
	
		} 
		
		// Note to self only add new categories in the future with the "else if" statement not just if, or it won't work. (add below this comment).
		
		// if the URL parameter is terms
		else if (dynamicContent == 'terms') {
		// this loads the page content into the "dynamic-content div"
		$( ".dynamic-content" ).load( "pages/terms.html #content" );
		// page title
		document.title = "Terms" + " | " + document.title;
		} 
		
		
		// if the URL parameter is Site info
		else if (dynamicContent == 'siteinfo') {
		// this loads the page content into the "dynamic-content div"
		$( ".dynamic-content" ).load( "pages/site-info.html #content" );
		   // page title
		   document.title = "Site info and sources" + " | " + document.title;
		} 
		
		
		// if the URL parameter is trends
		else if (dynamicContent == 'trends') {
		// this loads the page content into the "dynamic-content div"
		$( ".dynamic-content" ).load( "pages/trends.html #content" );
		   // page title
		   document.title = "Trends" + " | " + document.title;
		} 
		
		
		// default content (Home) for anything not defined.
		else {
			$('#default-content')
			// this loads the page content into the "dynamic-content div"
			$( ".dynamic-content" ).load( "pages/index.html #content" );
			// page title
			document.title = document.title;
		}
		
		
	});




// Hide and show "top of page" button

var btn = $('#pageupbttn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

