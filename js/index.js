// Your code goes here
// Your code goes here

//change background color on hover item
const link = document.querySelectorAll('.nav-link');

link.forEach( element => {

    //1 Event Listner
    element.addEventListener('mouseover', event => {

        event.target.style.backgroundColor = 'lightgray';
    });

    //2 Event Listner
    element.addEventListener('mouseout', event => {

        event.target.style.backgroundColor = '';
    });
});


//change background color
const destination = document.querySelector('.destination');

    destination.addEventListener('click', event => {

        destination.style.color = 'blue';
        
    });

    

//Add bounce Animation to Signup Buttons
const sign_up_btn = document.querySelectorAll('.btn');

sign_up_btn.forEach( element => {
    
    //3 Event Listner
    element.addEventListener('click', event => {

        event.target.classList.add('animated', 'bounce'); 

        //Stop Propagation
        event.stopPropagation();
        
    });

});



//Add flip Animation to Bus Image on Scroll
const bus_img = document.querySelector('.intro img');

//4 Event Listner
document.addEventListener('scroll', event => {
    
    bus_img.classList.add('animated', 'flip');

});



//Add animation to Logo Heading
const logo_heading = document.querySelector('.logo-heading');

//5 Event Listener
window.addEventListener('load', event => {

    logo_heading.classList.add('animated', 'heartBeat');
});



//Add SpinOut on Unload
const body = document.querySelector('body');

//6 Event Listener
window.addEventListener('beforeunload', event =>
{
    body.classList.add('animated', 'rotateOut');
})



//Add Alert if img being dragged
const img = document.querySelectorAll('img');

img.forEach( element => {

//7 Event Listener
    element.addEventListener('dragstart', event => {

        alert("Where'You Taking This?");

    });
});



//Add highlighting feature on Select
const selection_p = document.querySelectorAll('p');
let words = '';

selection_p.forEach( element => {

//8 Event Listener    
    element.addEventListener('dblclick', event => {

        body.classList.toggle('animated');
        body.classList.toggle('heartBeat');
    });

//9 Event Listener    
    element.addEventListener('copy', event => {

        const selection = document.getSelection();

        alert("You've Copied: "+selection);
    });

});


//10 Event Listener
window.addEventListener('resize', event => {

    body.classList.toggle('animated');
    body.classList.toggle('zoomIn');
});



//prevent default
const first_link = document.querySelector('a');

first_link.addEventListener('click', event => {

    event.preventDefault();
});






