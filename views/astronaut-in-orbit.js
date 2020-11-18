let welcomeSection = document.getElementById("welcome-section");
let navlinks = document.querySelectorAll(".nav-link");

function numGenerator (maxNum) {
    let randomNumber = Math.floor(Math.random() * (maxNum + 1));
    return randomNumber;
}

function insertTriangles() {
    let i;

    if (window.innerWidth <= 400) {
        var triangles = 20;
    }
    else if (window.innerWidth <= 768 && window.innerWidth > 400) {
        var triangles = 30;
    }
    else {
        var triangles = 50;
    }
    for (i = 0; i < triangles; i++) {
        welcomeSection.insertAdjacentHTML('beforeend', `<div class="triangle triangle-${i}" style="position: absolute; top: ${numGenerator(90)}%; left: ${numGenerator(90)}%; transform: rotate(${numGenerator(361)}deg)"></div>`);
    }
}

function changeTriangleColor() {
    let i;
    let triangles = document.getElementsByClassName("triangle").length;
    for (i = 0; i < triangles; i++) {
        document.getElementsByClassName("triangle")[i].style.left = `${numGenerator(95)}%`
        document.getElementsByClassName("triangle")[i].style.top = `${numGenerator(95)}%`
    }
}

insertTriangles();
setTimeout(changeTriangleColor, 10);
setInterval(changeTriangleColor, 50000);
