const cubeContainer = document.getElementById('cubeContainer');

let firstCube = null;
let secondCube = null;
let thirdCube = null;
let fourthCube = null;

function addCubes(container, windowWidth, windowHeight) {
    console.log(windowWidth, windowHeight)
    let boxSize = 30;
    for (let x = 0; x < windowWidth; x += boxSize) {
        for (let y = 0; y < windowHeight; y += boxSize) {
            console.log('here');
            const box = document.createElement('div');
            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`;
            box.addEventListener('mouseenter', function() {
                box.style.backgroundColor = checkCubeEnter(this);
            })
            box.addEventListener('mouseleave', function() {
                box.style.backgroundColor = checkCubeExit(this);
            })
            container.appendChild(box);
        }
    }
}
addCubes(cubeContainer, window.innerWidth, window.innerHeight);

//document.addEventListener('mousemove', mouseCoords);

function mouseCoords(event) {
    let x =  event.pageX;
    let y =  event.pageY;
    let cX = event.clientX;
    let cY = event.clientY;

    return [x, y, cX, cY];
}



