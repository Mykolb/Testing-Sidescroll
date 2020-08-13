
/***
 * PLACE 'ADS' IN SIDEBAR AND TEST COMSCORE
 */
/**
*insert selectors and positions for sidebar ATF, BTF, and ComScore

Positions: beforebegin, afterbegin, beforeend, afterend
**/
var atf = document.querySelector('/**insert selector**/');
var atfPos = '/**insert position**/';
var btf = document.querySelector('/**insert selector**/');
var btfPos = '/**insert position**/';
var  comscore = document.querySelector('/**insert selector**/');

/**
*
**/
/**
*
**/
var comscorePos = 'beforeend';

var ad = `<div style="background:gray; width:300px; height:300px;"></div>`;
  var comAd = `<div id="footer_branding" style="text-align : center; font-size : 11px; margin-top : 10px;">
    Exclusive Member of Mediavine Home
  </div>`;
/**
*script below will place the html fake ads
**/

atf.insertAdjacentHTML(atfPos, ad);
btf.insertAdjacentHTML(btfPos, ad);
comscore.insertAdjacentHTML(comscorePos, comAd);

/**
*ComScore ONLY
**/

var  comscore = document.querySelector('/**insert selector**/');

/**
*
**/
var comscorePos = 'beforeend';
  var comAd = `<div id="footer_branding" style="text-align : center; font-size : 11px; margin-top : 10px;">
    Exclusive Member of Mediavine Home
  </div>`;
  comscore.insertAdjacentHTML(comscorePos, comAd);

  // in-content
var cs = document.querySelector('insert selector')
var csPos = 'afterend'


var csAd = `<div style="background:gray; width:300px; height:300px;"></div>`;
 
cs.insertAdjacentHTML(csPos, csAd);


// var elements = document.querySelectorAll("a");

// This works!
// - needs to add multiple divs now
var elements = document.querySelectorAll(".single-post .entry-content p");
for (var i= 0; i < elements.length; i++) {
    elements[i].insertAdjacentHTML('beforeend', '<div style="background:gray; width:300px; height:300px; margin: 0 auto"></div>')
}


//recipe 

var ad1 = `<div style="background:gray; width:300px; height:300px; float:right;"></div>`;
var ad2 = `<div style="background:gray; width:300px; height:300px; float:left;"></div>`
var ad3 = `<div style="background:gray; width:300px; height:300px; margin: 0 auto;"></div>`



var desktopOne = document.querySelector('/**insert selector**/');
var desktopOnePos = '/**insert position**/';

var desktopTwo = document.querySelector('/**insert selector**/');
var desktopTwoPos = '/**insert position**/';

var mobileOne = document.querySelector('/**insert selector**/');
var mobileOnePos = '/**insert position**/';

var mobileTwo = document.querySelector('/**insert selector**/');
var mobileTwoPos = '/**insert position**/';

var mobileThree = document.querySelector('/**insert selector**/');
var mobileThreePos = '/**insert position**/';


desktopOne.insertAdjacentHTML(desktopOnePos, ad1);
desktopTwo.insertAdjacentHTML(desktopTwoPos, ad2);
mobileOne.insertAdjacentHTML(mobileOnePos, ad3);
mobileTwo.insertAdjacentHTML(mobileTwo, ad3);
mobileThree.insertAdjacentHTML(mobileThreePos, ad3);




