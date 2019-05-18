var width = 150,
    height = window.innerHeight,
    ratio = devicePixelRatio

var x = width /2,
    y = height /2,
    r = 60,
    step =0,
    vy = r*0.015,
    count = 1



var sprites = new Image()
sprites.onload = animate
sprites.src = "/blog/images/canvasKuru.png"

var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d")

canvas.width = width*ratio
canvas.height = height*ratio
canvas.style.width = width+"px"
context.imageSmoothingEnabled = false
context.fillStyle="rgba(255,255,255,0.4)"

function animate(){
  draw()
  update()
  requestAnimationFrame(animate)
}

function draw(){
  context.fillRect(0,0,width,height)
  drawShell(x, y, r, Math.floor(step))
}

function drawShell(x,y,r,step){
  var s = r/15
  context.drawImage(sprites,64*step,64*count,64,64,
                    x-32*s,y-64*s,64*s,64*s)
}

function update(){
  y+= vy
  if(y>height || y<195){
    vy = -vy
    if(y>height){count=0}
    if(y<195){count=1}
  }
  step+=0.1
  if(step >= 9){
    step-=9
  }
}