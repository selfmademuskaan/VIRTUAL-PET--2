class Food {
    constructor() {
        this.image = loadImage('images/Milk.png')
      this.foodstock=0;
      this.lastfed=0;
    }
    updatefoodstock(foodstock){
        this.foodstock=foodstock;
    }

    display() {
        var x=80,y=50;
        if(this.foodstock!=0){
            for (var i=0;i<=this.foodstock;i++){
                if(i%10===0){
                    x=80;
                    y=y+70;
                }
                image(this.image, x,y,50,70)
                x=x+30;
            }
     }
        
    }

}