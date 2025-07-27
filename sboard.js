let pos = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
const computermark = localStorage.getItem("comark");
i = 0;

const initialState = [...pos];

class node {
  constructor(next, prev, score, move) {
    this.next = next || null;
    this.move = move || null;
    this.prev = prev || null;
    this.score = score || 0;
  }
}

class Frontier {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

function (gameState, player, ) {
  if(findTurn() == player) {
    let availablemove = semptCells(gameState);
  }


}

const possibleMoves = (gameState) => {
  const emptCells = [];
  if (gameState.includes(" ")) {
    for (let i = 0; i < gameState.length; i++) {
      if (gameState[i] === " ") {
        emptCells.push(i);
      }
    }
  }
  return emptCells;
};

const findTurn = () => {
  if (i == 0) {
    if (computermark == "X") {
      i += 2;
      return "computer";
    } else {
      i += 1;
      return "human";
    }
  }
  if (i == 1) {
    i += 1;
    return "human";
  }
  if (i == 2) {
    i -= 1;
    return "computer";
  }
};

function check() {
  if (pos[0] == pos[1] && pos[1] == pos[2] && pos[1] == "X") {
    return "X";
  }
  if (pos[3] == pos[4] && pos[4] == pos[5] && pos[3] == "X") {
    return "X";
  }
  if (pos[6] == pos[7] && pos[7] == pos[8] && pos[6] == "X") {
    return "X";
  }
  if (pos[0] == pos[4] && pos[4] == pos[8] && pos[8] == "X") {
    return "X";
  }
  if (pos[6] == pos[4] && pos[4] == pos[2] && pos[2] == "X") {
    return "X";
  }
  if (pos[0] == pos[3] && pos[3] == pos[6] && pos[0] == "X") {
    return "X";
  }
  if (pos[1] == pos[4] && pos[4] == pos[7] && pos[1] == "X") {
    return "X";
  }
  if (pos[2] == pos[5] && pos[5] == pos[8] && pos[2] == "X") {
    return "X";
  } else if (pos[0] == pos[1] && pos[1] == pos[2] && pos[1] == "O") {
    return "O";
  }
  if (pos[3] == pos[4] && pos[4] == pos[5] && pos[3] == "O") {
    return "O";
  }
  if (pos[6] == pos[7] && pos[7] == pos[8] && pos[6] == "O") {
    return "O";
  }
  if (pos[0] == pos[4] && pos[4] == pos[8] && pos[8] == "O") {
    return "O";
  }
  if (pos[6] == pos[4] && pos[4] == pos[2] && pos[2] == "O") {
    return "O";
  }
  if (pos[0] == pos[3] && pos[3] == pos[6] && pos[0] == "O") {
    return "O";
  }
  if (pos[1] == pos[4] && pos[4] == pos[7] && pos[1] == "O") {
    return "O";
  }
  if (pos[2] == pos[5] && pos[5] == pos[8] && pos[2] == "O") {
    return "O";
  } else if (!pos.includes(" ")) {
    return "D";
  }
}
function displayEndPage(r) {
  if (r == "X") {
    document.location = "p1win.html";
  }
  if (r == "O") {
    document.location = "p2win.html";
  }
  if (r == "D") {
    document.location = "draw.html";
  }
}
