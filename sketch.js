//Create variables here dog, happyDog, database, foodS, foodStock
var dog, happydog, database, foods, foodstock;
var dogimg1, dogimg2;
var f1;
var feed, addfood;
var feedtime;
var lastfed;
function preload() {
  //load images here
  dogimg1 = loadImage("images/dogImg.png");
  dogimg2 = loadImage("images/dogImg1.png");
}

 function setup() {
  createCanvas(700, 500);
  database = firebase.database();

  dog = createSprite(500, 300, 10, 10)
  dog.addImage(dogimg1);
  dog.scale = 0.2;

  feed= createButton("Feed The Dog")
  feed.position(500,100);
  feed.mousePressed(feedDog);

  addfood= createButton("Add Food")
  addfood.position(650,100);
  addfood.mousePressed(addFoods);

  var foodref =  database.ref('food');
  foodref.on("value", readfood);

  f1 = new Food();
}


function draw() {
  background("orange");
  //fill("black");
  //text("food remaing" + foods, 100, 100);
  
  /**/

  feedtime= database.ref('feedtime');
  feedtime.on("value",function (data){
  lastfed=data.val();
})

fill("black");
text("Last Feed: " + lastfed, 100, 100);
  f1.display();
  drawSprites();

  //add styles here

}

function readfood(data) {
  foods = data.val();
  f1.updatefoodstock(foods);
  console.log(foods);

}

function writefood() {


}
 function feedDog(){
dog.addImage(dogimg2);
database.ref('/').update({
  feedtime:hour()
  
})
   }

   function addFoods(){
   foods++
   database.ref('/').update({
   food:foods
})
   }
