var noJqueryPage = document.getElementById( "accountPageNoJquery" ),
    namecheckPage = document.getElementById( "namecheckPage" ),
    packagesPage = document.getElementById( "packagesPage" ),
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

// cookie helper
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


if ( window.jQuery ) {
    $( document ).ready( function() {

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

        $( ".fh5co-arrow" ).click( function(){
            $( "html, body" ).animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });
}

/** order progress bar **/

if ( confirmationPage != null ) {
    orderProgressBarComplete.classList.add( "js__order-progress-bar-complete--smaller" );
}

if ( orderProgressBar != null && nameChecked != true ) {
    orderProgressBarNumberOne.classList.remove( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarOne.classList.remove( "js__order-progress-bar__bar--complete" );
}

if ( namecheckPage != null ) {
    orderProgressBarNumberOne.classList.add( "js__order-progress-bar__section-number--complete" );
    orderProgressBarBarOne.classList.add( "js__order-progress-bar__bar--complete" );
    orderProgressBarNumberTwo.classList.add( "js__order-progress-bar__section-number--current" );
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
    $( document ).ajaxComplete( function() {
        if ( nameChecked == true ) {
            orderProgressBarNumberOne.classList.add( "js__order-progress-bar__section-number--complete" );
            orderProgressBarBarOne.classList.add( "js__order-progress-bar__bar--complete" );
        }
    });
}

// extend width of NC bar on first page of order process
if ( orderPage != null ) {
    var ncWrapper = document.getElementsByClassName( "ef-namecheck-wrapper" )[0];
    if ( ncWrapper != undefined ) {
        ncWrapper = ncWrapper.children[0];
        ncWrapper.classList.add( "w-col-10" );
    }
}
