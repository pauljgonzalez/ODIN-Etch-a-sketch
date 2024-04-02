const grid = document.querySelector("#grid");
const classGrid = document.querySelector(".grid-container");
const clearButton = document.querySelector("#clear");

let size = grid.value;
document.querySelector(".grid-size").innerHTML= size + " x " + size;
gridAdd();
function gridClear(){
    let gridSquares = grid.value;
    while (classGrid.firstChild){
        classGrid.removeChild(classGrid.lastChild);
    }

}

function gridAdd(){

    let gridSquares = grid.value;
    let pixels = (600/gridSquares);
    for (let i = 0 ; i < gridSquares*gridSquares ; i++){
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.innerHTML="";
        classGrid.appendChild(gridSquare);
        gridSquare.style.width = pixels +"px";
        gridSquare.style.height = pixels +"px";
    }

}

grid.addEventListener("mousemove",(e) =>{
    let gridSquares = grid.value;  
    gridClear();
    gridAdd()
    document.querySelector(".grid-size").innerHTML= gridSquares + " x " + gridSquares;
})

clearButton.addEventListener("click",(e) =>{
    gridClear();
    gridAdd();
})



