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
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp); 
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    wallCollision()
    redrawGameItem()
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


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
