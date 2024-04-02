const grid = document.querySelector("#grid");
let size = grid.value;

document.querySelector(".grid-size").innerHTML= size + " x " + size;

grid.addEventListener("mousemove",(e) =>{
    let gridSquares = grid.value;
    document.querySelector(".grid-size").innerHTML= gridSquares + " x " + gridSquares;

   

})






    



