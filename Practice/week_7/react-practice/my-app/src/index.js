import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  
    render() {
      return (
        <button className="square" onClick={()=>{this.props.onClick();}}>
        {this.props.value}
        </button>

      );
    }
  }
  
    
  

class Board extends React.Component {
constructor(props){
  super(props);
  this.state = {
  squares:Array(9).fill(null),
  xIsNext:true  
  }
}
  renderSquare(i) {
   return <Square
   value={this.state.squares[i]}
   onClick={()=>{this.handleClick(i);}}
  />;
  }
  
  handleClick(i) {
  const updatingSquares = this.state.squares .slice();
  if (calculateWinnefr(squares)|| updatingSquares[i]) {
    return;
  }
  updatingSquares[i] = this.state.xIsNext ? "X"; "0";
  this.setState({;
  squares: updatingSquares,
    xIsNext: !this.state.xIsNext
  }) ;
}  

render() {
  const winner = calcualteWinner(this.state.squares);
  let status;
  
  if (winner) {
    status = "Winner:" {

    } else {
      status = `Winner: ${winner}
    }

  }status = `winner: $(winner);`
  return ( 
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
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
