function setup() {
  createCanvas(100,100);
  for(let i = 0; i < 10; i++){
  for(let j = 0; j < 10; j++){
    console.log(i, j); // 補足： i,j の変化がわかりやすくなるように入れています
    rect(i * 10, j * 10, 5, 5);
  }
}
}
