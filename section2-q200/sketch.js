// チェッカー
function setup() {
  createCanvas(200, 200);
  background(128);

  let width=200;
  let x = width / 8;
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
    //  rect(i*x,j*x,x,x);
     noStroke();
      if(i%2==0&&j%2==1){
          fill(196);
          rect(i*x,j*x,x,x);
          if(j==1){
            fill(255,0,0);
            ellipse((x*i)+(x/2),(x*j)+(x/2),x)
          }
          else if (j==5||j=7) {
            fill(0);
            ellipse((x*i)+(x/2),(x*j)+(x/2),x);
          }
      }
      else if (i%2==1&&j%2==0) {
        fill(196);
        rect(i*x,j*x,x,x);
        if(j==0||j=2){
          fill(255,0,0);
          ellipse((x*i)+(x/2),(x*j)+(x/2),x)
        }
        else if (j==6) {
          fill(0);
          ellipse((x*i)+(x/2),(x*j)+(x/2),x);
        }
      }
      else if (i%2==j%2) {
        fill(255);
        rect(i*x,j*x,x,x);
      }
      //}
      //}

    //  if(x%2==0&&y==0){
      //  stroke(0,0,255)
      //}
      //else{
        //stroke(255,0,0)
      //}

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
