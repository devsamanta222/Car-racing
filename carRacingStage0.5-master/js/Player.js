class Player {
  constructor(){
    this.name=null
    this.distance=0
    this.index=null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }


 static getPlayerInfo(){
    database.ref("players").on("value",function(data){
      allPlayerInfo=data.val()
    })

  }

  updatePlayerInfo(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
}
