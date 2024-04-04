const grid = document.querySelector("#grid");
const classGrid = document.querySelector(".grid-container");
const clearButton = document.querySelector("#clear");
const gridColor = document.querySelector("#colorPicker");
const rainbowBtn = document.querySelector("#rainbow");
const containerOptions = document.querySelector(".container-options");
const containerMain = document.querySelector(".container-main");


let gridChangeColor;

let size = grid.value;
let colorPicker = gridColor.value;

document.querySelector(".grid-size").innerHTML= size + " x " + size;

gridAdd();
colorChange();

function gridClear(){
    
        while (classGrid.firstChild){
        classGrid.removeChild(classGrid.lastChild);
    }
}
function gridAdd(){
    colorPicker = gridColor.value;
    let gridSquares = grid.value;
    let pixels = (600/gridSquares);
    for (let i = 0 ; i < gridSquares*gridSquares ; i++){
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.innerHTML="";
        classGrid.appendChild(gridSquare);
        gridSquare.style.width = pixels +"px";
        gridSquare.style.height = pixels +"px";
        
        document.getElementsByClassName('grid-square')[i].addEventListener("mouseover", function (event) {
            
            event.target.style.backgroundColor = colorPicker;       
    })
    
 }
}
grid.addEventListener("click",(e) =>{
    let gridSquares = grid.value;  
    gridClear();
    gridAdd()
    document.querySelector(".grid-size").innerHTML= gridSquares + " x " + gridSquares;
})

clearButton.addEventListener("click",(e) =>{
    gridClear();
    gridAdd();
    colorChange();
    
})

containerOptions.addEventListener("mouseleave",(e) =>{
      if(rainbowBtn.checked){
        colorPicker = colorRGB();
      }
      else{
        colorPicker = gridColor.value;
      }
      
})

function colorChange(){
    gridChangeColor = document.querySelectorAll(".grid-square");
}

function colorRGB(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    var color = "rgb(" + red + "," + green + "," + blue + ")"; 
    return color;
   
}

containerMain.addEventListener("mousemove",(e)=>{
    if(rainbowBtn.checked){
        colorPicker = colorRGB();
      }
      else{
        colorPicker = gridColor.value;
      }
})
