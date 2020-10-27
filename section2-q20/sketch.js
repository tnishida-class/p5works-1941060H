// チェッカー
function setup() {
  createCanvas(200, 200);
  background(128);
  let width= 200;
  let x=width/8;
  //  rect(i*x,j*x,x,x);
  //  noStroke();
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      if(i%2==0){
        if(j%2==0){
          noStroke();
          rect(i*x,j*x,x,x);
        }
      }
      else if (i%2==1) {
        if(j%2==1){
          noStroke();
          rect(i*x,j*x,x,x);
        }

      }
    }
  }
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      if(i%2==0){
        if(j==1){
          fill(255,0,0,);
          ellipse((x*i)+(x/2),(x*j)+(x/2),x)
        }
        else if (j==5||j==7) {
          fill(0,0,0,);
          ellipse((x*i)+(x/2),(x*j)+(x/2),x)
        }
        }
        else if (i%2==1) {
          if(j==0||j==2){
            fill(255,0,0,);
            ellipse((x*i)+(x/2),(x*j)+(x/2),x)
          }
          else if (j==6) {
            fill(0,0,0,);
            ellipse((x*i)+(x/2),(x*j)+(x/2),x)
          }
          }
          }

        }

    //  if(x%2==0&&y==0){
      //  stroke(0,0,255)
      //}
      //else{
        //stroke(255,0,0)
      //}

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    
}
