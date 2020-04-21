import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      }
    }

    render() {
      return (
        <button 
          className="square" 
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }
  
class Board extends React.Component {    
    renderSquare(i) {
      return (
        <Square 
          value={this.props.squares[i]} 
          onClick={() => this.props.onClick(i)}
        />
      );
    }

    render() {
        const row = 3;
        const col = 3;
        const rowSquares = [];
        let number = 0;
        
        for (let i = 0; i < row; i++) {
          const rowContent = [];
          for (let j = 0; j < col; j++) {
            rowContent.push(this.renderSquare(number));
            number++;
          }
          rowSquares.push(
            <div className="board-row">
              {rowContent}
            </div>
          );
        }

        return (
          <div>
            {rowSquares}
          </div>
        );
    }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      turn: true,
      stepNumber: 0,
      location: {
        x: null,
        y: null
      },
      currentIndex: null
    };  
  }

  calculateWinner(squares) {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }
  
  handelClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    const x = i % 3 + 1;
    const y = Math.floor(i/3) + 1; 
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.turn ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      turn: !this.state.turn,
      location: {
        x: x,
        y: y
      },
      order: false
    });
  }

  jumpTo(move) {
    this.setState({
      stepNumber: move,
      turn: (move % 2) === 0,
      currentIndex: move
    })
  }

  handleOrder() {
    const order = this.state.order;
    this.setState({
      order: !order
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key = {move}
            className = {this.state.currentIndex === move ? 'active' : ''}
        >
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    if (this.state.order) {
      moves.reverse();
    }
    
    let status;
    let location;
    if (winner) {
      status = 'Winner: ' + winner;
      location = '';
    } else {
      status = 'Next player: ' + (this.state.turn ? 'X' : 'O');
      location = `Location: (x: ${this.state.location.x}, y: ${this.state.location.y})`;
    }
 
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handelClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{location}</div>
          <ol>{moves}</ol>
          <button 
            onClick={() => this.handleOrder()}
          > Order </button>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
