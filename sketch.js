function fillrect(x,y,w,h,color) {
    let element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.style.width = `${w}px`;
    element.style.height = `${h}px`;
    element.style.boxSizing = 'border-box';
    element.style.backgroundColor = color;
    document.getElementById('canvas').appendChild(element);
}
function emptyrect(x,y,w,h,t,color) {
    fillrect(x,y,w,t,color)
    fillrect(x,y,t,h,color)
    fillrect(x,y+h-t,w,t,color)
    fillrect(x+w-t,y,t,h,color)
}
function addimage(x,y,s,source,darken=false) {
  let element = document.createElement('img');
  element.style.position = 'absolute';
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
  element.style.width = `${s}px`;
  element.style.height = `${s}px`;
  element.id = `${x}px ${y}px ${source}`
  if (source==='images/Player-Right.png') {
    element.style.transform = 'scaleX(-1)'
    element.src = 'images/Player-Left.png'
  } else if (source==='images/Player-Down.png') {
    element.style.transform = 'scaleY(-1)'
    element.src = 'images/Player-Up.png'
  } else if (source==='images/Player-Push-Down.png') {
    element.style.transform = 'scaleY(-1)'
    element.src = 'images/Player-Push-Up.png'
  } else if (source==='images/Player-Push-Right.png') {
    element.style.transform = 'scaleX(-1)'
    element.src = 'images/Player-Push-Left.png'
  } else{
    element.src = source;
  }
  if (darken) {
    element.style.filter = "brightness(50%)"
  }
  document.getElementById('canvas').appendChild(element);
}
function clearscreen(size) {
    document.getElementById('canvas').remove();
    newboard = document.createElement('div');
    newboard.id = 'canvas';
    newboard.class = 'canvas';
    document.getElementById('body').appendChild(newboard);
}