/*
  Goals:
  1. Real time tic tac toe game by N X N
    1. Build Tic Tac Toe Game Board
*/
(function(root, factory) {
  if(typeof module === "undefined") {
    root.ticTacToe = factory();
  } else {
    module.exports = factory();
  }
}(this, function() {
  function player(name, type) {
    this.name = name;
    this.type = type;
    this.currentTurn = true;
  }
  function board(boardId) {
    this.root = document.getElementById(boardId);
    this.currentTurn = true;
    this.board = {}
  }
  board.prototype.init = function() {
    for(var rid = 0; rid < 3; rid++) {
      var div =  document.createElement('div');
      div.className = "flex";
      var buff = rid * 3;
      for(var id=buff;id<buff+3;id++){
        var button = document.createElement('button');
        var bid = 'BUTTTON_'+ id;
        button.id = bid;
        button.onclick = this.handleButton(this);
        this.board[bid] = {
          disabled: false,
          value: null
        }
        div.append(button);
      }
      this.root.append(div)
    }
  }

  board.prototype.handleButton = function(self) {
    return function(e) {
      var id = e.target.id;
      self.currentTurn = !self.currentTurn;
      self.board[id].disabled = true;
      e.target.disabled = true;
      e.target.innerHTML = self.currentTurn ? 'X' : 'O'
      e.target.className = self.currentTurn ? 'red' : 'green'
    }
  }
  return {
    board: board,
    player: player,
  };
}))