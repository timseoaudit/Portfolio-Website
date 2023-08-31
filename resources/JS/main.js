// First Project
const p1Pic = document.getElementById('p1pic');
let projectPic1 = document.getElementById('projectpic1');
let p1Close = document.getElementById('p1close');

p1Pic.onclick = function() {
    projectPic1.style.display = 'block';
    p1Pic.style.display = 'none';
    p1Close.style.display = 'block';
}

p1Close.onclick = function() {
    projectPic1.style.display = 'none';
    p1Pic.style.display = 'block';
    p1Close.style.display = 'none';
}


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