const colors = 
[
"red",
"blue",
"green",
"purple",
"orange",
"white",
"yellow"
];


function getRandomCoordinates()
{
    let x = Math.random()*70 + 10;
    let y = Math.random()*70 + 10;
    return [x,y]
}

function getRandomColor()
{
    return colors[Math.floor(Math.random()*colors.length)]
}

function mouseClickedSquare()
{
    console.clear()
    squares = document.getElementsByClassName("square");
    
    for (let i = 0; i < squares.length; ++i) {
        let square = squares[i]
        let coords = getRandomCoordinates();
        let x = coords[0]
        let y = coords[1]
        square.style.top = x.toString() + "%";
        console.log(x.toString() + "%");
        square.style.left = y.toString() + "%";
        console.log(y.toString() + "%");
        square.style.background = getRandomColor();
    }
    
    
}

console.log(document.querySelector(".container"))
function init()
{
    container = document.querySelector("div.container");
    container.innerHTML += "\n <div class = 'square' onclick = 'mouseClickedSquare()'></div>";
    for (let i = 0; i < 100; ++i)
    {
        container.innerHTML += "\n <div class = 'square' onclick = 'mouseClickedSquare()'></div>";
    }
}

init()