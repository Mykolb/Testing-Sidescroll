/******************************************
 * 
 * GLOBAL VARIABLE SCOPE
 *******************************************/

var docWidth = document.documentElement.offsetWidth;
var el, readyStyle, positionAbsolute, positionFixed, positionSticky,rightStyle, leftStyle, isNotNegative,isMarginAuto;
let ary = [];


 /*********************************************
  * 
  * FUNCIONS TO CHECK ELEMENTS
 *******************************************/

 //OVERSEIZED ELEMENT CHECKER
 function overSizedEl(el) {
    if (el.offsetWidth > docWidth) {
        console.log(el);
      } else {
          console.log('No sidescroll here folks!')
      }
 }


//NEGATIVE MARGIN CHECKER
function negMargins(el){
            //get the current style properties of the element
            readyStyle = el.currentStyle || window.getComputedStyle(el);

            //get left & right margin properties as integers
            leftStyle = parseInt(readyStyle.marginLeft, 0);
            rightStyle = parseInt(readyStyle.marginRight, 0);
    
    
            //calc if left or right margins are equal or higher than 0
            isNotNegative = (leftStyle >= 0) || (rightStyle >= 0);  
    
            //see if margin is Nan or set to auto
            isMarginAuto = isNaN(leftStyle) || isNaN(rightStyle);
    
            
    //calcutate if the margin is less than 0 print the class names and right and left margin value.
    if((!isNotNegative && !isMarginAuto) || (leftStyle < 0) || (rightStyle < 0)) {
            console.log( ` <${el.tagName.toLowerCase()} id="${el.id}" class="${el.classList}"> has a margin-right: ${rightStyle}; and margin-left: ${leftStyle};`);
    }
    else {
        console.log(`No Negative Margins`);
        }
    }

//POSITION CHECKER
function absolutePos(el) {
    //get the current style properties of the element
    readyStyle = el.currentStyle || window.getComputedStyle(el);
    positionAbsolute = readyStyle.position === 'absolute';
    if(positionAbsolute) { 
        console.log( ` 
      <${el.tagName.toLowerCase()} id="${el.id}" class="${el.classList}">`);
    } else {
        console.log(`No absolutely positioned elements`);
    }
}
function fixedPos(el) {
    //get the current style properties of the element
    readyStyle = el.currentStyle || window.getComputedStyle(el);
    positionFixed = readyStyle.position === 'fixed';
    if(positionFixed) { 
        console.log( ` 
        <${el.tagName.toLowerCase()} id="${el.id}" class="${el.classList}">`);
    } else {
        console.log(`No fixed positioned elements`);
    }
}
function stickyPos(el) {
    //get the current style properties of the element
    readyStyle = el.currentStyle || window.getComputedStyle(el);
    positionSticky = readyStyle.position === 'sticky';
    if(positionSticky) { 
        console.log( ` 
        <${el.tagName.toLowerCase()} id="${el.id}" class="${el.classList}">`);
    } else {
        console.log(`No sticky positioned elements`);
    }
}

/******************************************
* 
* Controller
********************************************/


/***/

/**
 * PRINT OVERSIZED ELEMENTS
 */
  console.log( ` 

  ELEMENTS LARGER THAN DOCUMENTS: 
  
  `);
  ary.forEach.call(
      document.querySelectorAll('*'),
      function(el) {
//function for oversized elements
overSizedEl(el);
}
);

/**
 * PRINT NEGATIVE MARGINS
 */
console.log( ` 

ELEMENTS WITH NEGATIVE MARGINS: 

`);
ary.forEach.call(
    document.querySelectorAll('*'),
    function(el) {
//function for negative margins
negMargins(el);
}
);


/**
 * PRINT ABSOLUTE POSITION ELEMENTS

console.log( ` 

ELEMENTS ABSOLUTELY POSITIONED: 

`);
ary.forEach.call(
    document.querySelectorAll('*'),
    function(el) {
//absolute position function
absolutePos(el);
}
);
 */
/**
 * PRINT FIXED POSITION ELEMENTS
 * */
  console.log( ` 
 
 
ELEMENTS WITH FIXED POSITION:

`);
ary.forEach.call(
    document.querySelectorAll('*'),
    function(el) {
//fixed position function
fixedPos(el);
}
);
 



 /**
 * PRINT STICKY POSITION ELEMENTS
 */
/**
 * console.log( ` 
 * 
ELEMENTS WITH STICKY POSITION:
`);
ary.forEach.call(
    document.querySelectorAll('*'),
    function(el) {
//sticky position functions
stickyPos(el);
}
);
 */

