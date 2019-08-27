// Rover Object Goes Here
// ======================
let rovers = [];

let grid = [
  ['x','x','x','x','x','x','x','x','x','x'],
  ['x','x','x','x','x','x','x','x','x','x'],
  ['x','x','x','x','x','x','x','x','x','x'],
  ['x','x','x','x','x','x','x','x','x','x'],
  ['x','x','x','x','x','x','x','x','x','x'],
  ['x','x','x','x','x','x','x','x','x','x'],
  ['x','x','x','x','x','x','x','x','x','x'],
  ['x','x','x','x','x','x','x','x','x','x'],
  ['x','x','x','x','x','x','x','x','x','x'],
  ['x','x','x','x','x','x','x','x','x','x'],
];

let round = 0;
let listCommandActivate = false;
// ======================
function turnLeft(rovers){
  console.log("turnLeft was called!");
  switch (rovers[round].direction) {
    case "N":
      rovers[round].direction = "W"
      roundRover();
      break;      
    case "W":
      rovers[round].direction = "S"
      roundRover();
      break;
    case "S":
      rovers[round].direction = "E"
      roundRover();
      break;
    case "E":
      rovers[round].direction = "N"
      roundRover();
      break;
  }
}

function turnRight(rovers){
  console.log("turnRight was called!");
  switch (rovers[round].direction) {
    case "N":
      rovers[round].direction = "E"
      roundRover();
      break;
    case "E":
      rovers[round].direction = "S"
      roundRover();
      break;
    case "S":
      rovers[round].direction = "W"
      roundRover();
      break;
    case "W":
      rovers[round].direction = "N"
      roundRover();
      break;
  } 
}

function moveForward(rovers){
  console.log("moveForward was called");
  rovers[round].travelLog = `(${rovers[round].x},${rovers[round].y})`;
  
  if (rovers[round].direction === "N") {
    if (rovers[round].y === 0) {
      console.log ("Impossible movement, rover out of boundaries!");
    } else if (grid[rovers[round].y - 1][rovers[round].x] === "o" || grid[rovers[round].y - 1][rovers[round].x] === "r") {
        console.log (`Impossible movement, there is a obstacle/rover on (${rovers[round].x},${rovers[round].y - 1})`);
    } else {grid[rovers[round].y][rovers[round].x] = "x";
           grid[rovers[round].y - 1][rovers[round].x] = "r";
           rovers[round].y -= 1;
           roundRover();}
    
  } else if (rovers[round].direction === "E") {
      if (rovers[round].x === 9) {
        console.log ("Impossible movement, rover out of boundaries!");
    } else if (grid[rovers[round].y][rovers[round].x + 1] === "o" || grid[rovers[round].y][rovers[round].x + 1] === "r") {
        console.log (`Impossible movement, there is a obstacle/rover on (${rovers[round].x + 1},${rovers[round].y})`);
    } else {grid[rovers[round].y][rovers[round].x] = "x";
           grid[rovers[round].y][rovers[round].x + 1] = "r";      
           rovers[round].x += 1;
           roundRover();}
    
  } else if (rovers[round].direction === "S") {
      if (rovers[round].y === 9) {
        console.log ("Impossible movement, rover out of boundaries!")
    } else if (grid[rovers[round].y + 1][rovers[round].x] === "o" || grid[rovers[round].y + 1][rovers[round].x] === "r") {
        console.log (`Impossible movement, there is a obstacle/rover on (${rovers[round].x}, ${rovers[round].y + 1})`);
    } else grid[rovers[round].y][rovers[round].x] = "x";
           grid[rovers[round].y + 1][rovers[round].x] = "r";      
           rovers[round].y +=1;
           roundRover();
        
  } else if (rovers[round].direction === "W") {
    if (rovers[round].x === 0) {
      console.log ("Impossible movement, rover out of boundaries!")
    } else if (grid[rovers[round].y][rovers[round].x - 1] === "o" || grid[rovers[round].y][rovers[round].x - 1] === "r") {
        console.log (`Impossible movement, there is a obstacle/rover on (${rovers[round].x - 1}, ${rovers[round].y})`);
    } else grid[rovers[round].y][rovers[round].x] = "x";
           grid[rovers[round].y][rovers[round].x - 1] = "r";      
           rovers[round].x -=1;
           roundRover();
  }
}

function moveBackward(rovers){
  console.log("moveBackward was called");
  rovers[round].travelLog = `(${rovers[round].x},${rovers[round].y})`;
  
  if (rovers[round].direction === "N") {
    if (rovers[round].y === 9) {
      console.log ("Impossible movement, rover out of boundaries!");
    } else if (grid[rovers[round].y + 1][rovers[round].x] === "o" || grid[rovers[round].y + 1][rovers[round].x] === "r") {
        console.log (`Impossible movement, there is a obstacle/rover on (${rovers[round].x}, ${rovers[round].y + 1})`);
    } else grid[rovers[round].y][rovers[round].x] = "x";
           grid[rovers[round].y + 1][rovers[round].x] = "r";      
           rovers[round].y += 1;
           roundRover();
    
  } else if (rovers[round].direction === "E") {
      if (rovers[round].x === 0) {
        console.log ("Impossible movement, rover out of boundaries!");
    } else if (grid[rovers[round].y][rovers[round].x - 1] === "o" || grid[rovers[round].y][rovers[round].x - 1] === "r") {
        console.log (`Impossible movement, there is a obstacle/rover on (${rovers[round].x - 1}, ${rovers[round].y})`);
    } else grid[rovers[round].y][rovers[round].x] = "x";
           grid[rovers[round].y][rovers[round].x - 1] = "r";      
           rovers[round].x -=1;
           roundRover();
    
  } else if (rovers[round].direction === "S") {
      if (rovers[round].y === 0) {
        console.log ("Impossible movement, rover out of boundaries!");
    } else if (grid[rovers[round].y - 1][rovers[round].x] === "o" || grid[rovers[round].y - 1][rovers[round].x] === "r") {
        console.log (`Impossible movement, there is a obstacle/rover on (${rovers[round].x}, ${rovers[round].y - 1})`);
    } else grid[rovers[round].y][rovers[round].x] = "x";
           grid[rovers[round].y - 1][rovers[round].x] = "r";      
           rovers[round].y -=1;
           roundRover();
    
  } else if (rovers[round].direction === "W") {
    if (rovers[round].x === 9) {
      console.log ("Impossible movement, rover out of boundaries!");
    } else if (grid[rovers[round].y][rovers[round].x + 1] === "o" || grid[rovers[round].y][rovers[round].x + 1] === "r") {
        console.log (`Impossible movement, there is a obstacle/rover on (${rovers[round].x + 1}, ${rovers[round].y})`);
    } else grid[rovers[round].y][rovers[round].x] = "x";
           grid[rovers[round].y][rovers[round].x + 1] = "r";      
           rovers[round].x +=1;
           roundRover();
  }
}

function listCommands(commands){
  console.log("listCommands was called");
  listCommandActivate = true;
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] !== "r" && commands[i] !== "l" && commands[i] !== "f" && commands[i] !== "b") {
      console.log (`${commands[i]} is not a valid command! Put another command`);
      break;
    } else if (commands[i] === "r") {
      turnRight(rovers);
    } else if (commands[i] === "l") {
      turnLeft(rovers);
    } else if (commands[i] === "f") {
      moveForward(rovers);
    } else if (commands[i] === "b") {
      moveBackward(rovers);
    } 
  }
  console.log(`Places that the rover has traveled: ${rovers[round].travelLog}`);
  listCommandActivate = false;
  roundRover();
  console.log(`The next round is the rover ${rovers[round].rovername}`);
}

// Function to create x obstacles in random places

function createObstacle(x) {
  for (let i = 0; i < x; i++) {
    let xCoor = Math.floor(Math.random() * 10);
    let yCoor = Math.floor(Math.random() * 10);
    if (grid[xCoor][yCoor] !== "o" || grid[xCoor][yCoor] !== "r") {
      grid[xCoor][yCoor] = "o";
    } else i -= 1;
  }
  console.table (grid);
}

//Funcion to create a rover
//ps: If a rover is on the coordinate (0,0), it will not create

function createRover(name) {
  let rover = {
    rovername: name,
    direction: "N",
    x: 0,
    y: 0,
    travelLog: "",
  }
  if (grid[rover.x][rover.y] !== "r") {
    rovers.push(rover);
    grid[rover.x][rover.y] = "r";
    console.log(`The next round is the rover ${rovers[round].rovername}`);
  } else console.log("Rover already exists on this place, impossible to create");
}

//Function to change the moving rounds of differents Rovers
//ps: created variable listCommandActivate for work on the listCommand function

function roundRover() {
  
  if (!listCommandActivate) { 
    round +=1;
    if(round > rovers.length -1) {
      round = 0;
    }
  }
}