const gameBoard = (function () {
  const board = ["","","","","","","","",""];
  const gameBoardContainer = document.getElementById('gameBoardContainer');

  board.forEach((boardItem) => {
    const item = document.createElement('div');
    item.setAttribute('class', 'boardItems');
      gameBoardContainer.appendChild(item);    
  })

  return {}
})();

const player = (playerName, num) => {
  const getName = () => playerName;

  const getMark = () => {
    if (num === 1) {
	    return 'X';
    } else if (num === 2) {
      return 'O';
    }
  };

  const getNum = () => num

  return { playerName, getMark, getName, getNum }
}

const displayController = (function () {
  const items = document.querySelectorAll('.boardItems');
  items.forEach((item) => {
    item.addEventListener('click', function () {        
      })
  })
})();