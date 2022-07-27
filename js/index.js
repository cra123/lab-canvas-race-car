window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  //creating a new image
  const road = new Image();
  road.src = 'images/road.png';
  const car = new Image();
  car.src = 'images/car.png';


  function startGame() {
  //Draw the road 

  const theCanvas = document.getElementById('canvas');
  const ctx = theCanvas.getContext('2d');

  ctx.drawImage(road, 0, 0, theCanvas.width, theCanvas.height);

  //Draw the car
  ctx.drawImage(car, theCanvas.width/2, 500, 50, 70);

    //Move car left 
    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 37) {
        ctx.clearRect(0, 0, theCanvas.width, theCanvas.height);
        ctx.drawImage(road, 0, 0, theCanvas.width, theCanvas.height);
        ctx.drawImage(car, theCanvas.width/2 - 50, 500, 50, 70);
      }
    }


    //Move car right
    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 39) {
        ctx.clearRect(0, 0, theCanvas.width, theCanvas.height);
        ctx.drawImage(road, 0, 0, theCanvas.width, theCanvas.height);
        ctx.drawImage(car, theCanvas.width/2 + 50, 500, 50, 70);
      }
    }


      
  }     
};
