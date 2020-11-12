// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love GHIBLI",100,100,color(70,0,20),color(255,255,0));
}

function balloon(t,x,y,color1,color2){//tだけじゃたりない、吹き出しが左上にしかおけなくなるから。xとかyとかをおいて位置移動できるようにする
  let w = textWidth(t);
  let h = textAscent() + textDescent();//英語の上の余白と下の余白
  let p = 2;//余白
  fill(color1);
  triangle(x+w,y+(h/2),x+w-h,y+(h+p),
      x+(w+p)+10,y+(h+p)+(h/2));
  fill(color1);
  rect(x, y, w + p * 4, h + p * 4);
  fill(color2);
  text(t, p+x, h + p+y);
}
