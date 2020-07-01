
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