/**mobile menu */
const menu = document.querySelector('.nav .navigation .list .menu');
const mobile_menu = document.querySelector('.nav .navigation .list ul');
const menu_item = document.querySelectorAll('.nav .navigation .list ul li a');
// When click the menu bar, the menu will open or close, and the bar will change
menu.addEventListener('click', function(){
    menu.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
//When click item in the menu, menu will close, and the bar will change
menu_item.forEach(item=>{
    item.addEventListener('click', function(){
        menu.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
});
/**end mobile menu */

/**scroll to top */
const scrollToTop = document.querySelector('.top-btn');
//when click scrllToTop icon, the window will scrooTo the top
scrollToTop.addEventListener('click', function(){
    window.scrollTo(0,0);
});
// display scroll to top button when scrolling down
window.addEventListener('scroll', display_btn);
function display_btn(){
    scrollToTop.classList.toggle('active', window.scrollY > 200);
}
/**end scroll to top */

/** scroll event */
window.addEventListener('scroll',reveal);
// Items will be displayed when scrolling down the window
function reveal(){
    var reveal = document.querySelectorAll('.reveal');
    //Set the trigger height to 90px, get the innerHeight of the windows
    //get the each items top heigt of the window
    // revearpoint = 90
    for (var i = 0; i < reveal.length; i++) {
        var revearPoint = 50;
        var windowHeight = window.innerHeight;
        var revealTop = reveal[i].getBoundingClientRect().top;
        // when the top height of the window small than the window inner height - trigger height
        // reveal the item
        if (revealTop < windowHeight - revearPoint) {
            reveal[i].classList.add('active');
        }
    }
}
/**end scroll event */

/**references */
const referencesOpen = document.querySelector('#open-references');
const references = document.querySelector('.references');
const referencesClose = document.querySelector('#close-references');
// when click reference button, pop up the references
referencesOpen.addEventListener('click', function(){
    references.classList.add('active');
});
// close references
referencesClose.addEventListener('click', function(){
    references.classList.remove('active');
});
/**end referneces detail */

/**Read more */
const readMore = document.querySelector('.read-more');
const text = document.querySelector('.info');
//when click read more button, show more text, and change the text of the button
readMore.addEventListener('click', function(){
    text.classList.toggle('active');
    if(readMore.innerText == 'Read More') {
        readMore.innerText = 'Read Less';
    } else {
        readMore.innerText = 'Read More';
    }
});
/**end read more */

/**Booking detail */
const bookNow1 = document.querySelector('#book-now1');
const bookNow2 = document.querySelector('#book-now2');
const book = document.querySelector('.book');
const bookClose = document.querySelector('#close-i');
//click book now button will pop up booking detail window
bookNow1.addEventListener('click', function(){
    book.classList.add('active');
});
bookNow2.addEventListener('click', function(){
    book.classList.add('active');
});
// close booking detail window
bookClose.addEventListener('click', function(){
    book.classList.remove('active');
});
/**end booking detail */




