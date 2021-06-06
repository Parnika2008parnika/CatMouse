var mouse,mouseCheese,mouseDance,mouseCollide;
var cat,catSit,catWalk,catCollide;
var backgrounds;





function preload() {
    
  mouseCheese = loadImage("images/mouse1.png");

  mouseDance = loadAnimation("images/mouse2.png");

  mouseCollide = loadImage("images/mouse4.png",);


  catSit = loadImage("images/cat1.png");

  catWalk = loadAnimation("images/cat2.png");

  catCollide = loadImage("images/cat4.png");


   backgrounds = loadImage("images/garden.png");

}

function setup(){

    createCanvas(1000,800);

    mouse = createSprite(100,620,20,40);

   mouse.addAnimation("mouse1",mouseCheese);



    mouse.addAnimation("mouse4",mouseCollide);

    mouse.addAnimation("mouse2",mouseDance);

    mouse.scale = 0.1;


    cat = createSprite(580,620,20,20);

    cat.addAnimation("cat1",catSit);



    cat.addAnimation("cat4",catCollide);

    cat.addAnimation("cat2",catWalk);


    cat.scale = 0.16;




}

function draw() {

    background(backgrounds);
 
    if(cat.x - mouse.x < (cat.width - mouse.width)/2+20
      ){

        mouse.changeAnimation("mouse4",mouseCollide);

        cat.velocityX = 0;

       cat.changeAnimation("cat4",catCollide);

    }

    keyPressed();

    drawSprites();

    
}


function keyPressed(){

  if(keyDown("left")) {

    cat.velocityX = -3;

    cat.changeAnimation("cat2,",catWalk);

   mouse.changeAnimation("mouse2,",mouseDance);

    


  }


}
