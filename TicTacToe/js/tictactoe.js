// this variable keeps track of whose turn it is
let activeplayer = 'X';
// this array stores an array of moves. we use to determine win conditions.
let selectedaSquares = [];

// this function is for placing an x or o in a square

function placeXOrO(squareNumber) {
    // this condition ensures a square hasnt been selected already
    // the .some() method is used to check each element of selectedsqaure array
    // to see if it contains the sqaure number clicked on 
    if(!selectedaSquares.some(element => element.includes(squareNumber))) {
        // this variable retrievse the html element id that was clciked
        let select = document.getElementById(squareNumber);
        if (activeplayer === 'X') {
            select.style.backgroundImage = 'url("images/adida2.png")';
        } else {
            select.style.backgroundImage = 'url("images/nik3.png")';
        }
        //squarenumber and acticeplayer are concatenated together and added to array
        selectedaSquares.push(squareNumber + activeplayer);
        // this calls a function to check for any win conditions.
        checkWinCondition();
        if(activeplayer === 'X') {
            activeplayer = 'O';
        } else {
            activeplayer = 'X';
        }

        audio('media/place.mp3');
        if(activeplayer === 'O') {
            disableClick();
            setTimeout(function () { computerTurn(); }, 1000);
        }
        return true;

    }
    function computerTurn() {
        let success= false;
        let pickASquare;
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}
// this function parses the selectedSquares array to search for win conditions.
// drawwinline function is called to draw line if condition is met. 
function checkWinCondition() {
    if      (arrayincludes('0X', '1X', '2X')) { drawline(50, 100, 558, 100)}
    else if (arrayincludes('3X', '4X', '5X')) { drawline(50, 304, 558, 304)}
    else if (arrayincludes('6X', '7X', '8X')) {drawline(50, 508, 558, 508)}
    else if (arrayincludes('0X', '3X', '6X')) {drawline(100, 50, 100, 558)}
    else if (arrayincludes('1X', '4X', '7X')) {drawline(304, 50, 304, 558)}
    else if (arrayincludes('2X', '5X', '8X')) {drawline(508, 50, 508, 558)}
    else if (arrayincludes('6X', '4X', '2X')) {drawline(100, 508, 510, 90)}
    else if (arrayincludes('0X', '4X', '8X')) {drawline(100, 100, 520, 520)}
    else if (arrayincludes('00', '10', '20')) {drawline(50, 100, 558, 100)}
    else if (arrayincludes('30', '40', '50')) {drawline(50, 304, 558, 304)}
    else if (arrayincludes('60', '70', '80')) {drawline(50, 508, 558, 508)}
    else if (arrayincludes('00', '30', '60')) {drawline(100, 50, 100, 558)}
    else if (arrayincludes('10', '40', '70')) {drawline(304, 50, 304, 558)}
    else if (arrayincludes('20', '50', '80')) {drawline(508, 50, 508, 558)}
    else if (arrayincludes('60', '40', '20')) {drawline(100, 508, 510, 90)}
    else if (arrayincludes('00', '40', '80')) {drawline(100, 100, 520, 520)}
    // this condition checks for true. if none of the above statements register and 9
    // squares are selected the code executes
    else if (selectedaSquares.length >= 9) {
        audio('./media/zap2.mp3');
        //this function sets a .3 second timer before the reset game is called.
        setTimeout(function () { resetGame(); }, 1000);
    }
    // this function checks if an array includes 3 strings. Is is used to check for 
    // each win condition
    function arrayincludes(squareA, squareB, squarec) {
        // these 3 variables will be used to check for 3 in a row
        const a = selectedaSquares.includes(squareA)
        const b = selectedaSquares.includes(squareB)
        const c = selectedaSquares.includes(squarec)

        if (a === true && b === true && c === true) {return true }
    }
}

function disableClick() {
    //this makes our body unclickable 
    body.style.pointerEvents = 'none';
    //this makes our body clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

// this function takes a string parameter of the path you set earlier for 
// placement sound media.place/mp3
function audio(audioURL) {
    let audio = new audio (audioURL);
    //play method plays our audio sound
    audio.play();
}
// this function utilizes html canvas to draw line
function drawWinline(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines')
    // this line gives us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    // this line indicates where the start of a lines x  axis is 
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        // this variable stores temporaray x axis data we update in our animation loop
        x = x1,
        // this variable stores temporary y axis data we update in our animation loop\
        y = y1;


function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //this method clears content from last loop iteration
    c.clearRect(0, 0, 60, 608)
    c.beginPath();
    c.moveTo(x1,y1)
    c.lineTo(x, y)
    c.lineWidth = 10;
    c,strokeStyle = 'rgba(70, 255, 33, .8)';
    c.stroke();
    // this condition checks if we've reached the endpoint
    if (x1 <= x2 && y1 <= y2) {
        if (x < x2) { x += 10; }
        if (y < y2) { y += 10; }
        // this condition cancels our animation loop
        // if we've  rach the end points.
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
    }
    // this condition is similar to the one above.
    // this is necessary for the 6, 4, 2 win condition
    if (x1 <= x2 && y1 >= y2) {
        if (x < x2) { x += 10; }
        if (y > y2) { y -= 10; }
        if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
    }
}

// this function clears our canvas after our win line is drawn.
function clear() {
    const animationLoop = requestAnimationFrame(clear);
    //this line clears our canvas.
    c.clearRect(0, 0, 608, 608);
    // this line stops our animation loops
    cancelAnimationFrame(animationLoop);
}
// this line disallows clicking while the win sound is playing
disableClick();
//this line plays the win sounds.
audio('./media/zap1.mp3');
// this line calls our main animation loop.
animateLineDrawing();
// this line waits 1 second. then clears canvas, resets game, and allows clicking again
setTimeout(function () { clear(); resetGame(); }, 1000);
}
// this function resets the game in the event of a tie or win.
function resetGame() {
    for (let i = 0; i < 9; i++) {
        // this variabel get the html element of i.
        let square = document.getElementById(String(i))
        // this removes our element background image.
        square.style.backgroundImage = ''
    }
    selectedaSquares = [];
}