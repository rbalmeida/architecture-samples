function drawBoxes(){
    var canvas = document.getElementById('maincanvas');
    var ctx = canvas.getContext('2d');
    
    ctx.fillStyle = "rgb(100, 0, 0)";
    ctx.fillRect(400, 100, 200, 100);
    ctx.fillRect(100, 300, 200, 100);
    ctx.fillRect(700, 300, 200, 100);
    
}


function drawGrid(){
    const GRID_SIZE = 1500;
    const LINE_SPACE = 50;
    var i;

    var gridcanvas = document.getElementById('gridcanvas');
    var ctx = gridcanvas.getContext('2d');
    ctx.fillStyle = "rgb(100, 0, 0)"
    
    
    for (i=0; i <= GRID_SIZE / LINE_SPACE; i++){
        // horizontal lines
        ctx.beginPath();
        ctx.moveTo(0, i*LINE_SPACE);
        ctx.lineTo(GRID_SIZE, i*LINE_SPACE);
        ctx.stroke();
        
        // vertical lines
        ctx.beginPath();
        ctx.moveTo(i*LINE_SPACE, 0);
        ctx.lineTo(i*LINE_SPACE, GRID_SIZE);
        ctx.stroke();
    }


}


drawBoxes();
drawGrid();