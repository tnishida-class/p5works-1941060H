// 小手調べ
function setup(){
noFill(0);
  for(let i = 1; i < 11; i++){
    // BLANK[1]
    let s=i*10
    ellipse(50,50,s,s);
    if(i<5){
      stroke(0,0,255)
    }
    else{
      stroke(255,0,0)
    }
    //ellipse(50,50,20,20);
    //ellipse(50,50,10,10);
    }
  }
