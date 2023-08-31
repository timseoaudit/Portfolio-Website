// First Project
const p1Pic = document.getElementById('p1pic'); //define the varible to the id of the image
let projectPic1 = document.getElementById('projectpic1'); //define the varible to the id opening tag of the image
let p1Close = document.getElementById('p1close'); //define the varible to the id of the closing tag of the image 

p1Pic.onclick = function() { // define a function that will run when the text is clicked
    projectPic1.style.display = 'block'; // change the display of the image to block
    p1Pic.style.display = 'none'; // change the display of the text to none
    p1Close.style.display = 'block'; // change the display of the closing tag to block
}

p1Close.onclick = function() { // another function that will run when the closing tag is clicked
    projectPic1.style.display = 'none'; // change the display of the image to none
    p1Pic.style.display = 'block'; // change the display of the text to block
    p1Close.style.display = 'none'; // change the display of the closing tag to none
}
// this copied two more times 

// Second Project
const p2Pic = document.getElementById('p2pic'); 
let projectPic2 = document.getElementById('projectpic2');
let p2Close = document.getElementById('p2close');

p2Pic.onclick = function() {
    projectPic2.style.display = 'block';
    p2Pic.style.display = 'none';
    p2Close.style.display = 'block';
}

p2Close.onclick = function() {
    projectPic2.style.display = 'none';
    p2Pic.style.display = 'block';
    p2Close.style.display = 'none';
}

// Third Project
const p3Pic = document.getElementById('p3pic');
let projectPic3 = document.getElementById('projectpic3');
let p3Close = document.getElementById('p3close');

p3Pic.onclick = function() {
    projectPic3.style.display = 'block';
    p3Pic.style.display = 'none';
    p3Close.style.display = 'block';
}

p3Close.onclick = function() {
    projectPic3.style.display = 'none';
    p3Pic.style.display = 'block';
    p3Close.style.display = 'none';
}