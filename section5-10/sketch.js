// 最終課題を制作しよう クック諸島国旗
function setup(){
  createCanvas(500,300)
  const blue=color(0,0,255);
  const red=color(255,0,0);
  const white=color(255);
  noFill();
  background(blue);
  let d = height / 6;

  // fill(blue)
  let size = d * 3;
  // rect(0, 0, size*6/5, size);
  stroke(white);
  strokeWeight(d*2/3);
  crossmark(0,0,size*9/5, size);
  stroke(red);
  strokeWeight(d/3);
  crossmark(0,0,size*9/5, size);

  stroke(white);
  fill(white);
  rect(0,d*8/7,size*9/5,d*4/5);
  rect(size*3/4,0,d*4/5,size);

  stroke(red);
  fill(red);
  rect(0,d*13/9,size*9/5,d*1/5);
  rect(size*6/7,0,d*1/5,size);



  // noStroke();

  for(let i = 0; i < 15; i++){
    fill(white);
    let theta = TWO_PI * i / 15;
    let x = 380 + cos(theta) * 80;
    let y = 150 + sin(theta) * 80;

    star(x,y,0.1);
  }
  noStroke();
  fill(blue);
  rect(size*9/5,0,16,300)
}

function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);
  line(x2, y1, x1, y2);
}

function star(cx, cy, r){
  beginShape();
    for(let i = 0; i < 5; i++){
  const theta = TWO_PI * i * 2 / 5 - HALF_PI;
  const x = cx + cos(theta) * r;
  const y = cy + sin(theta) * r;
  vertex(x, y);  // 次につなぐ点を１つ増やす
}
endShape(CLOSE);
  }


// funtion crossmark(x1, y1, x2, y2){
//   line(x1, y1, x2, y2);
//   line(x2, y1, x1, y2);
// }
