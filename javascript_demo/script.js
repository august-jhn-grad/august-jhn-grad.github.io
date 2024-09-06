console.log("hi there, the demo has started")

const REASONABLE_COLORS = [
    "red",
    "blue",
    "green",
    "purple",
    "white",
    "grey",
    "orange",
    "yellow"
]

var darkMode = false;

function setDarkMode() 
{

    console.log("setting dark mode") //

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function setLightMode() 
{
    console.log("setting light mode")
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

function toggleDarkMode() 
{
    if (darkMode) { // Dealing with variables and logic would be much harder in pure HTML

        setLightMode() // Functions can be used to split up the code, and make it more readable.
    }
    else
    {
        setDarkMode()
    }

    darkMode = !darkMode; // Variable assignments are very similar to python.
    console.log("darkmode toggled")
}




function viewImage() {
    
    var image_made = document.getElementById("imageInView");
    console.log(image_made);
    if (image_made === null)
    {
        console.log('viewing image');
        var imageToView = document.getElementById("imgInput").files[0];
        var outputSpot = document.querySelector("output");
        let outputStuff = `<div class="image">
            <img src="${URL.createObjectURL(imageToView)}" alt="image" id = "imageInView">
        </div>`;
        outputSpot.innerHTML = outputStuff;
    }
    else
    {
        image_made.remove();
    }
    
}

function changeSquareColor() {
    var square = document.getElementById("changeableSquare");
    var color = document.getElementById("changeSquareColor").elements[0].value;
    if (REASONABLE_COLORS.includes(color)){
        square.style.backgroundColor = color;
    }
    else
    {
        console.log("unreasonable color")
    }
    
}