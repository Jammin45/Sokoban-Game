// level settings
size = 8;
levelon = 0;
document.getElementById('level').textContent = `level: ${levelon+1}`
allboards = [
 [[1,1,1,1,1,1,1,1,0,0],
  [1,3,1,0,0,0,0,1,0,0],
  [1,0,1,0,1,1,0,1,0,0],
  [1,0,1,0,1,1,2,1,0,0],
  [1,0,1,0,1,1,0,1,0,0],
  [1,0,1,0,1,1,4,1,0,0],
  [1,0,0,0,1,1,0,1,0,0],
  [1,1,1,1,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]],

 [[1,1,1,1,1,1,1,1,0,0],
  [1,3,1,0,0,0,1,1,0,0],
  [1,0,1,4,0,0,1,1,0,0],
  [1,0,1,2,4,0,1,1,0,0],
  [1,0,1,0,2,4,1,1,0,0],
  [1,0,1,0,0,2,1,1,0,0],
  [1,0,0,0,0,0,1,1,0,0],
  [1,1,1,1,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]],

 [[1,1,1,1,1,1,1,1,0,0],
  [1,3,1,0,0,0,0,1,0,0],
  [1,0,0,0,0,4,0,1,0,0],
  [1,0,0,2,4,2,0,1,0,0],
  [1,0,0,2,4,2,0,1,0,0],
  [1,0,0,0,0,4,0,1,0,0],
  [1,0,1,0,0,0,0,1,0,0],
  [1,1,1,1,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]],

 [[1,1,1,1,1,1,1,1,0,0],
  [1,1,4,0,1,1,1,1,0,0],
  [1,1,4,0,1,1,1,1,0,0],
  [1,1,2,2,2,0,0,1,0,0],
  [1,1,0,0,0,2,4,1,0,0],
  [1,1,2,0,0,1,1,1,0,0],
  [1,1,4,4,0,0,3,1,0,0],
  [1,1,1,1,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]],

 [[1,1,1,1,1,1,1,1,0,0],
  [1,3,0,1,1,4,0,1,0,0],
  [1,4,4,0,2,0,0,1,0,0],
  [1,1,0,0,0,0,1,1,0,0],
  [1,1,2,0,0,2,1,1,0,0],
  [1,4,2,0,2,0,4,1,0,0],
  [1,0,0,1,1,0,0,1,0,0],
  [1,1,1,1,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]],

 [[1,1,1,1,1,1,1,1,0,0],
  [1,3,0,4,4,2,0,1,0,0],
  [1,1,0,2,2,0,4,1,0,0],
  [1,4,0,0,0,2,4,1,0,0],
  [1,0,2,0,4,2,2,1,0,0],
  [1,0,2,4,0,0,4,1,0,0],
  [1,4,2,0,2,4,0,1,0,0],
  [1,1,1,1,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]],
  
 [[1,1,1,1,1,1,1,0,0,0],
  [1,3,0,1,0,4,1,1,0,0],
  [1,0,0,1,2,0,0,1,0,0],
  [1,0,2,0,0,0,4,1,0,0],
  [1,0,0,0,2,2,0,1,0,0],
  [1,0,1,0,0,0,1,1,0,0],
  [1,4,1,4,1,0,1,0,0,0],
  [1,1,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]]
]
startingboard = allboards[levelon]
facing = 'a'
pushing = false;
mode = true;
// end of level settings

board = startingboard.map(row => row.slice());
fullboard = startingboard.map(row => row.slice());
orginboard = startingboard.map(row => row.slice());
for (i=0;i<size;i++) {
  for (j=0;j<size;j++) {
    fullboard[i][j] = startingboard[i][j] != 2&&startingboard[i][j] != 3 ? startingboard[i][j] : 0;
    orginboard[i][j] = startingboard[i][j] != 3 ? startingboard[i][j] : 0;
  }
}



highlighted = [false,false,false,false,false];





let playercords = [0,0]
const images = {
  1:"images/Wall.png",
  2:"images/Box.png",
  3:"images/Player-Left.png",
  4:"images/Goal.png",
  11:"images/Player-Left.png",
  12:"images/Player-Right.png",
  13:"images/Player-Up.png",
  14:"images/Player-Down.png",
  21:"images/Player-Push-Left.png",
  22:"images/Player-Push-Right.png",
  23:"images/Player-Push-Up.png",
  24:"images/Player-Push-Down.png"
}
const directions = {
  w:[-1,0,13],
  a:[0,-1,11],
  s:[1,0,14],
  d:[0,1,12]
}
const keys = {
  w:true,
  a:true,
  s:true,
  d:true
}
createboard()
function createboard() {
  clearscreen()
  document.getElementById('canvas').style.width = `${50*8}px`
  document.getElementById('canvas').style.height = `${50*8}px`
  for (i=0;i<size;i++) {
    for (j=0;j<size;j++) {
      if (board[j][i]!=0) {
        if (board[j][i] === 3) {
          playercords = [j,i];
          if (pushing) {
            addimage(i*50,j*50,50,images[directions[facing][2]+10])
          } else {
            addimage(i*50,j*50,50,images[directions[facing][2]])
          }
        } else {
          addimage(i*50,j*50,50,images[board[j][i]])
        }
      }
    }
  }
}
document.addEventListener('keydown', function(event) {
  if (mode) {
    if (keys[event.key]) {
      facing = event.key;
      if (board[playercords[0]+directions[event.key][0]][playercords[1]+directions[event.key][1]]!=1&&board[playercords[0]+directions[event.key][0]][playercords[1]+directions[event.key][1]]!=2) {
        // move
        pushing = false;
        board[playercords[0]+directions[event.key][0]][playercords[1]+directions[event.key][1]] = 3;
        board[playercords[0]][playercords[1]] = fullboard[playercords[0]][playercords[1]];
        createboard()
      } else if (board[playercords[0]+directions[event.key][0]][playercords[1]+directions[event.key][1]]===2) {
        // push box
        pushing = true;
        if (board[playercords[0]+(directions[event.key][0]*2)][playercords[1]+(directions[event.key][1]*2)]!=1&&board[playercords[0]+(directions[event.key][0]*2)][playercords[1]+(directions[event.key][1]*2)]!=2) {
          board[playercords[0]+directions[event.key][0]][playercords[1]+directions[event.key][1]] = 3;
          board[playercords[0]][playercords[1]] = fullboard[playercords[0]][playercords[1]];
          board[playercords[0]+(directions[event.key][0]*2)][playercords[1]+(directions[event.key][1]*2)] = 2;
          orginboard[playercords[0]+directions[event.key][0]][playercords[1]+directions[event.key][1]] = 0;
          createboard()
          }
        } else {
          // pushed 
          pushing = true;
        }
      console.log(pushing)
    } else if (event.key==='r') {
      facing = 'a'
      pushing = false;
      document.getElementById('level').textContent = `level: ${levelon+1}`
      board = allboards[levelon].map(row => row.slice());
      fullboard = allboards[levelon].map(row => row.slice());
      orginboard = allboards[levelon].map(row => row.slice());
      for (i=0;i<size;i++) {
        for (j=0;j<size;j++) {
          fullboard[i][j] = allboards[levelon][i][j] != 2&&allboards[levelon][i][j] != 3 ? allboards[levelon][i][j] : 0;
          orginboard[i][j] = allboards[levelon][i][j] != 3 ? allboards[levelon][i][j] : 0;
        }
      }
      playercords = [0,0]
      createboard()
    }
    let boxes = 0;
    for (i=0;i<size;i++) {
      for (j=0;j<size;j++) {
        if (board[j][i]===2) {
          boxes += 1;
          if (fullboard[j][i]===4) {
            addimage(i*50,j*50,50,'images/Box.png',true)
            boxes -= 1;
          }
        }
      }
    }
    if (boxes === 0) {
      setTimeout(() => {
        window.alert('you won')
        // new level ///////////////////////////////////////////////////////////////////
        facing = 'a'
        pushing = false;
        levelon += 1;
        document.getElementById('level').textContent = `level: ${levelon+1}`
        board = allboards[levelon].map(row => row.slice());
        fullboard = allboards[levelon].map(row => row.slice());
        orginboard = allboards[levelon].map(row => row.slice());
        for (i=0;i<size;i++) {
          for (j=0;j<size;j++) {
            fullboard[i][j] = allboards[levelon][i][j] != 2&&allboards[levelon][i][j] != 3 ? allboards[levelon][i][j] : 0;
            orginboard[i][j] = allboards[levelon][i][j] != 3 ? allboards[levelon][i][j] : 0;
          }
        }
        playercords = [0,0]
        createboard()
      }, 20)
    }
  }
})
