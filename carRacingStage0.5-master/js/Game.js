class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }

    car1=createSprite(200,200)
    car2=createSprite(400,200)
    car3=createSprite(600,200)
    car4=createSprite(800,200)
    cars=[car1,car2,car3,car4]
  }

  play(){
    form.hide()
    Player.getPlayerInfo()
    if(allPlayerInfo!==undefined){


      var index=0
      var x=200
      var y
      for(var plr in allPlayerInfo){
       index+=1
        x+=200
        y=displayHeight-allPlayerInfo[plr].distance
        cars [index-1].x=x
        cars [index-1].y=y
        if (index===player.index){
          cars [index-1].shapeColor="blue"
        }
        else{
          cars [index-1].shapeColor="red"
        }
        //ypos+=20
        //text(allPlayerInfo[plr].name+": "+allPlayerInfo[plr].distance,150,ypos)

      }
  }
      if(keyDown(UP_ARROW)){
        player.distance+=30
        player.updatePlayerInfo()
      }
      drawSprites()
}
}
