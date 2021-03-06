/** vars **/
var noJqueryPage = document.getElementById( "accountPageNoJquery" ),
    namecheckPage = document.getElementById( "namecheckPage" ),
    packagesPage = document.getElementById( "packagesPage" ),
    packagePage = document.getElementById( "packagePage" ),
    buyPage = document.getElementById( "buyPage" ),
    orderPage = document.getElementById( "orderPage" ),
    cartPage = document.getElementById( "cartPage" ),
    confirmationPage = document.getElementById( "confirmationPage" ),
    namesearchInput = document.getElementById( "namesearchInput" ),
    orderProgressBar = document.getElementById( "orderProgressBar" ),
    orderProgressBarNumberOne = document.getElementById( "orderProgressBarNumberOne" ),
    orderProgressBarBarOne = document.getElementById( "orderProgressBarBarOne" ),
    orderProgressBarNumberTwo = document.getElementById( "orderProgressBarNumberTwo" ),
    orderProgressBarBarTwo = document.getElementById( "orderProgressBarBarTwo" ),
    orderProgressBarNumberThree = document.getElementById( "orderProgressBarNumberThree" ),
    orderProgressBarBarThree = document.getElementById( "orderProgressBarBarThree" ),
    orderProgressBarNumberFour = document.getElementById( "orderProgressBarNumberFour" ),
    orderProgressBarBarFour = document.getElementById( "orderProgressBarBarFour" ),
    orderProgressBarComplete = document.getElementById( "orderProgressBarComplete" );


/** cookie stuff **/
var nameChecked = false,
    ncCookie = "ef_urchin_latest-name-search";

function getCookie( cname ) {

    var name = cname + "=",
    i=0,
    ca = document.cookie.split(';');

    for(; i<ca.length; i++) {
        var c = ca[i];
        while ( c.charAt( 0 ) === ' ' ) c = c.substring(1);
        if ( c.indexOf( name ) === 0 ) return c.substring( name.length, c.length );
    }
    return "";
}

if ( getCookie( ncCookie ) ) {
    nameChecked = true;
}

/** Namecheck Result - hide name check result H2 for space-saving  **/
var efNameCheckResult_AMBER = document.getElementById( "efNameCheckResult_AMBER" ),
    efNameCheckResult_GREEN = document.getElementById( "efNameCheckResult_GREEN" ),
    efNameCheckResult_RED = document.getElementById( "efNameCheckResult_RED" );

if ( efNameCheckResult_AMBER != null || efNameCheckResult_GREEN != null || efNameCheckResult_RED != null ) {
	document.getElementById( "NameCheckHide" ).style.display = "none";
}


/** jquery stuff **/
if ( window.jQuery ) {
    $( document ).ready( function() {

        // show staff tab if emulating
        if ( packagesPage != null || namecheckPage != null ) {
            if ( document.getElementById( "efEmulationWidget" ) != null ) {
                document.getElementsByClassName( "content__packages-nav-tabs-tab--staff" )[0].classList.add( "js__emulation--active" );
            }
        }

        // remove namesearch box if empty
        if ( namecheckPage != null ) {
            $( "#nameSearchForm" ).addClass( "hide" );
            var path = window.location.href;
            if ( path.indexOf( "?gle=namecheck" ) <= -1 ) {
                $( "#nameSearchResult" ).addClass( "hide" );
                $( "#nameSearchForm" ).removeClass( "hide" );
            }
        }

        // back to top
        $( ".fh5co-arrow" ).click( function(){
            $( "html, body" ).animate({
                scrollTop: 0
            }, 400);
            return false;
        });

        // change namecheck result classes on package (single) page
        if ( packagePage != null ) {
            $( "#efPackageHomeTitle~#efNameCheckResult > div.efNameCheckResult > div.namecheck_box_red" ).removeClass( "col-md-offset-1 col-md-10" ).addClass( "col-lg-12" );
            $( ".efNameCheckResult" ).addClass( "js__namecheck_packagePage" );
        }

        // superfish init
        var mainMenu = function() {
            $( "#fh5co-primary-menu" ).superfish({
                delay: 0,
                animation: {
                    opacity: "show"
                },
                speed: "fast",
                cssArrows: true,
                disableHI: true
            });
        };

        // manually initialise mobile superfish menu
        $( ".js-fh5co-nav-toggle.fh5co-nav-toggle.fh5co-nav-white" ).click( function() {
            document.body.classList.toggle( "fh5co-overflow" );
            document.body.classList.toggle( "fh5co-mobile-menu-visible" );
        });

        // manually initialise mobile superfish menu dropdown
        $( ".fh5co-sub-ddown.sf-with-ul" ).click( function() {
            $( ".fh5co-sub-menu" ).toggleClass( "js__show" );
        });

    });
} else {
    /** non jquery **/

    // superfish init
    var mainMenu = function() {
        document.getElementById( "fh5co-primary-menu" ).superfish({
            delay: 0,
            animation: {
                opacity: "show"
            },
            speed: "fast",
            cssArrows: true,
            disableHI: true
        });
    };

    // manually initialise mobile superfish menu
    var superfishMenu = document.querySelectorAll( "js-fh5co-nav-toggle, fh5co-nav-toggle, fh5co-nav-white" )[0];
    superfishMenu.addEventListener( "click", function() {
        document.body.classList.toggle( "fh5co-overflow" );
        document.body.classList.toggle( "fh5co-mobile-menu-visible" );
    });

    // manually initialise mobile superfish menu dropdown
    var superfishMenuDropdown = document.querySelectorAll( "fh5co-sub-ddown, sf-with-ul" )[0];
    superfishMenuDropdown.addEventListener( "click", function() {
        document.getElementsByClassName( "fh5co-sub-menu" )[0].classList.toggle( "js__show" );
    });
}


/** redirects **/
// TODO: Change these to either .htaccess redirects or something with IIS
//       as redirects to YP test site don't seem to work.
var currentUrl = window.location.href;
if ( currentUrl == "http://www.companymanager.co.uk/" ) {
    window.location = "http://www.companymanager.co.uk/packages/";
    console.log('redirecting');
}
if ( currentUrl == "http://www.companymanager.co.uk/categories/" ) {
    window.location = "http://www.companymanager.co.uk/sorry/";
    console.log('redirecting');
}
if ( currentUrl == "http://www.companymanager.co.uk/contact-request-form/" ) {
    window.location = "http://www.companymanager.co.uk/sorry/";
    console.log('redirecting');
}
if ( currentUrl == "http://www.companymanager.co.uk/contact-us/" ) {
    window.location = "http://www.companymanager.co.uk/sorry/";
    console.log('redirecting');
}
if ( currentUrl == "http://www.companymanager.co.uk/products/" ) {
    window.location = "http://www.companymanager.co.uk/sorry/";
    console.log('redirecting');
}
if ( currentUrl == "http://www.companymanager.co.uk/ui-demo/" ) {
    window.location = "http://www.companymanager.co.uk/sorry/";
    console.log('redirecting');
}
if ( currentUrl == "http://www.companymanager.co.uk/upgrade/" ) {
    window.location = "http://www.companymanager.co.uk/sorry/";
    console.log('redirecting');
}
if ( currentUrl == "http://www.companymanager.co.uk/terms/" ) {
    window.location = "http://www.companymanager.co.uk/sorry/";
    console.log('redirecting');
}


/** order progress bar **/
if ( confirmationPage != null ) {
    orderProgressBarComplete.classList.add( "js__order-progress-bar-complete--smaller" );
}
if ( orderProgressBar != null && nameChecked != true ) {
    orderProgressBarNumberOne.classList.remove( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarOne.classList.remove( "js__order-progress-bar__bar--complete" );
}
if ( buyPage != null && nameChecked || orderPage != null && nameChecked ) {
    orderProgressBarNumberOne.classList.add( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarOne.classList.add( "js__order-progress-bar__bar--complete" );
    orderProgressBarNumberTwo.classList.add( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarTwo.classList.add( "js__order-progress-bar__bar--complete" );
    orderProgressBarNumberThree.classList.add( "js__order-progress-bar__section-number--current" );
} else if ( buyPage != null && nameChecked != true || orderPage != null && nameChecked != true ) {
    orderProgressBarNumberOne.classList.remove( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarOne.classList.remove( "js__order-progress-bar__bar--complete" );
    orderProgressBarNumberTwo.classList.add( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarTwo.classList.add( "js__order-progress-bar__bar--complete" );
    orderProgressBarNumberThree.classList.add( "js__order-progress-bar__section-number--current" );
}
if ( cartPage != null ) {
    orderProgressBarNumberOne.classList.add( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarOne.classList.add( "js__order-progress-bar__bar--complete" );
    orderProgressBarNumberTwo.classList.add( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarTwo.classList.add( "js__order-progress-bar__bar--complete" );
    orderProgressBarNumberThree.classList.add( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarThree.classList.add( "js__order-progress-bar__bar--complete" );
    orderProgressBarNumberFour.classList.add( "js__order-progress-bar__section-number--current" );
}
if ( confirmationPage != null ) {
    orderProgressBarNumberOne.classList.add( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarOne.classList.add( "js__order-progress-bar__bar--complete" );
    orderProgressBarNumberTwo.classList.add( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarTwo.classList.add( "js__order-progress-bar__bar--complete" );
    orderProgressBarNumberThree.classList.add( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarThree.classList.add( "js__order-progress-bar__bar--complete" );
    orderProgressBarNumberFour.classList.add( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarFour.classList.add( "js__order-progress-bar__bar--complete" );
    orderProgressBarComplete.classList.add( "js__order-progress-bar__section-number--complete" );
}

if ( orderPage != null ) {
    changeOfficerText();
    $( document ).ajaxComplete( function() {
        if ( nameChecked == true ) {
            orderProgressBarNumberOne.classList.add( "js__order-progress-bar__section-number--complete" );
            orderProgressBarBarOne.classList.add( "js__order-progress-bar__bar--complete" );
        }
    });

    function changeOfficerText() {
        // change officer text
        if ( window.location.href.indexOf( "step=appointments" ) > -1 ) {
            document.getElementsByClassName( "ef-add-officer-wrapper" )[0].children[0].innerHTML = "Add a Person";
            document.getElementsByClassName( "ef-add-officer-wrapper" )[0].children[1].innerHTML = "Click on the buttons below to add a person to your company.";
        }
    }
}

/** order process **/
if ( orderPage != null ) {
    // extend width of NC bar on first page of order process
    var ncWrapper = document.getElementsByClassName( "ef-namecheck-wrapper" )[0];
    if ( ncWrapper != undefined ) {
        ncWrapper = ncWrapper.children[0];
        ncWrapper.classList.add( "w-col-10" );
    }
}
