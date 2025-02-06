/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 37,
    RIGHT:39,
    UP: 38,
    DOWN: 40,
  }

  var WASD = {
    W: 87,
    A:65,
    S: 83,
    D: 68,
  }
  
  // Game Item Objects
  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
  }
  var walker2 = {
    positionX: 390,
    positionY: 390,
    speedX: 0,
    speedY: 0,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  var interval2 = setInterval(newFrame2, FRAMES_PER_SECOND_INTERVAL);
  $(document).on('keydown', handleKeyDown2);   
  $(document).on('keyup', handleKeyUp2);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    /*getDistance()*/
    repositionGameItem()
    wallCollision()
    redrawGameItem()
  }

  function newFrame2() {
    repositionGameItem2()
    wallCollision2()
    redrawGameItem2()
  }


  
  /* 
  Called in response to events.
  */
 /* Walker  1 */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT){
      walker.speedX = -5
      console.log("Left Arrow Key Pressed")
    }
    else if (event.which === KEY.RIGHT){
      walker.speedX = 5
      console.log("Right Arrow Key Pressed")
    }
    else if (event.which === KEY.UP){
      walker.speedY = -5
      console.log("Up Arrow Key Pressed")
    }
    else if (event.which === KEY.DOWN){
      walker.speedY = 5
      console.log("Down Arrow Key Pressed")
    }
    
  }

  function handleKeyUp(event){
    if (event.which === KEY.LEFT){
      walker.speedX = 0
      console.log("Left Arrow Key Released")
    }
    else if (event.which === KEY.RIGHT){
      walker.speedX = 0
      console.log("Right Arrow Key Released")
    }
    else if (event.which === KEY.UP){
      walker.speedY = 0
      console.log("Up Arrow Key Released")
    }
    else if (event.which === KEY.DOWN){
      walker.speedY = 0
      console.log("Down Arrow Key Released")
    }
  }

  /* Walker 2 */
  function handleKeyDown2(event) {
    if (event.which === WASD.A){
      walker2.speedX = -5
      console.log("A Key Pressed")
    }
    else if (event.which === WASD.D){
      walker2.speedX = 5
      console.log("D Key Pressed")
    }
    else if (event.which === WASD.W){
      walker2.speedY = -5
      console.log("W Key Pressed")
    }
    else if (event.which === WASD.S){
      walker2.speedY = 5
      console.log("S Key Pressed")
    }
    
  }

  function handleKeyUp2(event){
    if (event.which === WASD.A){
      walker2.speedX = 0
      console.log("A Key Released")
    }
    else if (event.which === WASD.D){
      walker2.speedX = 0
      console.log("D Key Released")
    }
    else if (event.which === WASD.W){
      walker2.speedY = 0
      console.log("W Key Released")
    }
    else if (event.which === WASD.S){
      walker2.speedY = 0
      console.log("S Key Released")
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* Walker 1*/
  function repositionGameItem(){
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;
  }

  function redrawGameItem(){
    $("#walker").css("top", walker.positionY);
    $("#walker").css("left", walker.positionX);
  }
  
  function wallCollision(){
    if(walker.positionX < 0){
      walker.speedX = walker.positionX = 0
    }
    if(walker.positionY < 0){
      walker.speedY = walker.positionY = 0
    }
    if(walker.positionX > 390){
      walker.speedX = walker.positionX = 390
    }
    if(walker.positionY > 390){
      walker.speedY = walker.positionY = 390
    }
  }

  /*function getDistance(x1, y1, x2, y2){
   let walker.positionX = x2 - x1;
   let walker.positionY = y2 - y1;

   return Math.sqrt(Math.pow(walker.positionX, 2) + Math.pow(walker.positionY, 2))
  }

  /* Walker 2 */
  function repositionGameItem2(){
    walker2.positionX += walker2.speedX;
    walker2.positionY += walker2.speedY;
  }

  function redrawGameItem2(){
    $("#walker2").css("top", walker2.positionY);
    $("#walker2").css("left", walker2.positionX);
  }
  
  function wallCollision2(){
    if(walker2.positionX < 0){
      walker2.speedX = walker2.positionX = 0
    }
    if(walker2.positionY < 0){
      walker2.speedY = walker2.positionY = 0
    }
    if(walker2.positionX > 390){
      walker2.speedX = walker2.positionX = 390
    }
    if(walker2.positionY > 390){
      walker2.speedY = walker2.positionY = 390
    }
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);
    clearInterval(interval2);

    // turn off event handlers
    $(document).off();
  }
  
}
