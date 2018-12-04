// Your code goes here

////////////// MOUSEOVER 
const navChange = document.querySelector('.nav');

navChange.addEventListener('mouseover', function(e) {
    e.target.style.color = 'orange';

    setTimeout(function() {
        e.target.style.color = 'black';
      }, 500);
    }, false);





////////////// KEYDOWN


document.addEventListener('keydown', function(e){
    const keyDown = e.key;
    console.log('These are the paragraphs')
    return('keydown e\z\z' + 'key: ' + keyDown );
});





////////////// WHEEL







////////////// DRAG / DROP


document.addEventListener('drag', function( event){
    console.log('Is this thing dragging?')
}, false);






////////////// LOAD 
window.addEventListener('load', function(e){
    console.log('Loading all necessary items')
});





////////////// FOCUS 





////////////// RESIZE







////////////// SCROLL
window.addEventListener('scroll', function(e){

});




////////////// SELECT






////////////// DBLCLICK

const clickButton = document.querySelectorAll('h4');
clickButton.forEach(function(h4){
    h4.addEventListener('dblclick', function(e){
        e.target.style.color = 'orange';
    });
});








