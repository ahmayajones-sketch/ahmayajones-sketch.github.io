$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400,325,100,10,"blue");
    createPlatform(200,570,50,10,"dark pink");
    createPlatform(400,600,80,10,"green");
    createPlatform(600,530,80,10,"blue");
    createPlatform(1000,250,90,10,"blue");
    createPlatform(800,610,90,10,"blue");
    createPlatform(150,630,50,10,"blue");
    createPlatform(900,500,90,10,"blue");
    createPlatform(1100,400,60,10,"blue");
    createPlatform(1300,300,70,10,"blue");
  




    // TODO 3 - Create Collectables
createCollectable("kennedi",200,500, 0.5, 0.7);
createCollectable("diamond", 1000,200, 0.5,0.7); 
createCollectable("max", 1300,200, 0.5, 0.7);
createCollectable("steve", 600, 410, 0.5, 0.7);
createCollectable("grace", 400, 510, 0.5, 0.7);
createCollectable("kennedi", 400, 210, 0.5, 0.7);



    
    // TODO 4 - Create Cannons

createCannon("top", 200,520);
createCannon("right",400,600);
createCannon("top",600,500);
createCannon("bottom", 900,400)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
