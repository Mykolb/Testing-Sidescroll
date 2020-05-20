/***
 * Updated Margin Tester May 18
 */
var el, readyStyle, rightStyle, leftStyle, isNotNegative,isMarginAuto;
let ary = [];
//iterate through all elements
ary.forEach.call(
    document.querySelectorAll('*'),
    function(el) {

        //get the current style properties of the element
        readyStyle = el.currentStyle || window.getComputedStyle(el);

        //get left & right margin properties as integers
        leftStyle = parseInt(readyStyle.marginLeft, 2);
        rightStyle = parseInt(readyStyle.marginRight, 2);


        //calc if left or right margins are equal or higher than 0
        isNotNegative = (leftStyle >= 0) || (rightStyle >= 0);  

        //see if margin is Nan or set to auto
        isMarginAuto = isNaN(leftStyle) || isNaN(rightStyle);

        
//calcutate if the margin is less than 0 print the class names and right and left margin value.
if(!isNotNegative && !isMarginAuto) {
        console.log( ` <${el.tagName.toLowerCase()} id="${el.id}" class="${el.classList}"> has a margin-right: ${rightStyle}; and margin-left: ${leftStyle};`);
}
else {
    console.log(`No Negative Margins`);
    }
}
);

Nynaeve$37

/***
 * Mykols Print out Scrolly elements function
 *  */  

var docWidth = document.documentElement.offsetWidth;
let arr = [];
//iterate through all elements, console.log the elements where viewable width is greater than
arr.forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    } else {
        console.log('No sidescroll here folks!')
    }
  }
);


